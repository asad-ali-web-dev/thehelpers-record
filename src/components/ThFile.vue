<template>
  <div class="uploader">
    <filepond ref="pond"
      :allowMultiple="multiple"
      :allowRevert="true"
      :allowReorder="multiple && uploadedImages.length > 1"
      :files="uploadedImages"
      :server="{ load, process, remove }"
      @processfile="fileUploaded"
      @removefile="fileReverted"
      @reorderfiles="reorderFiles" />
  </div>
</template>

<script>
  import vueFilePond from 'vue-filepond';
  import 'filepond/dist/filepond.min.css';
  import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
  import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
  import { uploadImage, removeImage } from '../utils/image_uploader.js'
  const Filepond = vueFilePond(FilePondPluginImagePreview);
  export default {
    model: {
      prop: 'modelValue',
      event: 'change'
    },
    props: {
      modelValue: {
        value: [String, Array]
      },
      multiple: {
        default: false,
        type: Boolean
      }
    },
    components: {
      Filepond
    },
    computed: {
      uploadedImages () {
        if (!this.modelValue) { return [] }
        if (typeof this.modelValue == 'string') {
          return [{
            source: this.modelValue,
            options: { type: 'local' }
          }]
        }
        return this.modelValue.map((image) => {
          return {
            source: image,
            options: { type: 'local' }
          }
        })
      }
    },
    methods: {
      load (url, load, error, progress, abort, headers)  {
        fetch(url)
          .then(res => {
            res.blob().then(load)
          })
      },
      process (fieldName, file, metadata, load, error, progress, abort) {
        uploadImage(file)
          .then(url => {
            load(url)
          })
      },
      remove (url, load, error) {
        removeImage(url)
          .then(() => {
            load();
          })
          .catch((error) => {
            console.lor(error)
            load()
          })
      },
      fileUploaded () {
        this.emitChangedEvent()
      },
      fileReverted () {
        this.emitChangedEvent()
      },
      reorderFiles () {
        this.emitChangedEvent()
      },
      emitChangedEvent (files) {
        let processingFiles = this.$refs.pond.getFiles(),
            isFilesUploaded = processingFiles.every((file) => file.status === 5 || file.status === 2);
        if (isFilesUploaded) {
          if (this.multiple == true && processingFiles.length >= 1) {
            this.$emit('change', processingFiles.map((file) => file.serverId))
          } else if (processingFiles.length == 1) {
            this.$emit('change', processingFiles[0].serverId)
          } else {
            this.$emit('change', null)
          }
        }
      }
    }
  };
</script>