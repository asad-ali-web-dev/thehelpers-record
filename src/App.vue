<script setup>
import ThFileVue from "./components/ThFile.vue";
</script>

<template>
  <div class="container-fluid mx-auto mt-5 d-flex flex-column gap-4">

    <div class="mx-auto th-logo">
      <img class="img-fluid" src="./assets/Website-logo.png" alt="">
    </div>
    
    <h1 class="text-center mt-5 display-6">Data Entry for Recipient</h1>
    
    <div class="mx-auto">

      <form class="mx-auto d-flex flex-column gap-3 th-form-size">

        <div class="form-floating mb-2 mx-auto w-100">
          <input type="text" class="form-control" id="recipient-name" placeholder="Recipient Name">
          <label for="recipient-name">Recipient Name</label>
        </div>

        <div class="form-floating mb-2 mx-auto w-100">
          <input type="tel" class="form-control" id="recipient-contact" placeholder="Recipient Contact">
          <label for="recipient-contact">Recipient Contact</label>
        </div>

        <div class="w-100" style="cursor: pointer;">
          <th-file-vue></th-file-vue>
        </div>

        <div class="buttons">

          <button class="blob-btn">
            SUBMIT
            
            <span class="blob-btn__inner">
              <span class="blob-btn__blobs">
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
              </span>
            </span>

          </button>
          
          <br />

          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo">
                </feColorMatrix>
                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
              </filter>
            </defs>
          </svg>

        </div>

      </form>
    
    </div>
  
  </div>
</template>

<style>

.th-form-size {
  width: 35rem;
}

.th-logo {
  width: 20rem;
}

@media screen and (max-width: 640px) {
  .th-logo {
    width: 10rem;
  }
  .th-form-size {
    width: 100%;
  }
}

.buttons {
  margin-top: 50px;
  text-align: center;
  border-radius: 30px;
}

.blob-btn {
  z-index: 1;
  position: relative;
  padding: 20px 60px;
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  color: #000;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  outline: none;
  border: none;
  transition: color 0.5s;
  cursor: pointer;
  border-radius: 30px;
}
.blob-btn:before {
  content: "";
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #fa0;
  border-radius: 30px;
}
.blob-btn:after {
  content: "";
  z-index: -2;
  position: absolute;
  left: 3px;
  top: 3px;
  width: 100%;
  height: 100%;
  transition: all 0.3s 0.2s;
  border-radius: 30px;
}
.blob-btn:hover {
  color: #FFFFFF;
  border-radius: 30px;
}
.blob-btn:hover:after {
  transition: all 0.3s;
  left: 0;
  top: 0;
  border-radius: 30px;
}
.blob-btn__inner {
  z-index: -1;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background: #ffffff;
}
.blob-btn__blobs {
  position: relative;
  display: block;
  height: 100%;
  filter: url("#goo");
}
.blob-btn__blob {
  position: absolute;
  top: 2px;
  width: 25%;
  height: 100%;
  background: #fa0;
  border-radius: 100%;
  transform: translate3d(0, 150%, 0) scale(1.7);
  transition: transform 0.45s;
}
@supports (filter: url("#goo")) {
  .blob-btn__blob {
    transform: translate3d(0, 150%, 0) scale(1.4);
  }
}
.blob-btn__blob:nth-child(1) {
  left: 0%;
  transition-delay: 0s;
}
.blob-btn__blob:nth-child(2) {
  left: 30%;
  transition-delay: 0.08s;
}
.blob-btn__blob:nth-child(3) {
  left: 60%;
  transition-delay: 0.16s;
}
.blob-btn__blob:nth-child(4) {
  left: 90%;
  transition-delay: 0.24s;
}
.blob-btn:hover .blob-btn__blob {
  transform: translateZ(0) scale(1.7);
}
@supports (filter: url("#goo")) {
  .blob-btn:hover .blob-btn__blob {
    transform: translateZ(0) scale(1.4);
  }
} 
</style>