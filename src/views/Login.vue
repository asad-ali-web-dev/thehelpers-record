<script setup>
import { db } from '../utils/firebase'
import { ref } from 'vue'
import store from '../store'
import router from '../router'

const user_name = ref("");
const password = ref(null);
const orignal_password = ref(null);
get_password();

function authenticate() {
    var pass = orignal_password.value.toString();
    setTimeout(() => {
        if (pass) {
            if (user_name.value === "admin" && password.value === pass) {
                console.log("logged in");
                user_name.value = "";
                password.value = null;
                setWithExpiry('logged_in', true, 3600000);
                router.push('/');
            } else {
                console.log("cannot login", user_name.value, password.value);
            }
        }
    }, 1000);
}

function setWithExpiry(key, value, ttl) {
	const now = new Date()

	// `item` is an object which contains the original value
	// as well as the time when it's supposed to expire
	const item = {
		value: value,
		expiry: now.getTime() + ttl,
	}
	localStorage.setItem(key, JSON.stringify(item))
}

function get_password() {
    var docRef = db.collection("secret").doc("w5Ca3XqUlmnLfBdtfoVx");
    var key = null;

    docRef.get().then(async (doc) => {
        if (doc.exists) {
            key = await doc.data().key;
            if (key) {
                orignal_password.value = key;
            }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

</script>

<template>
    <div class="container box d-flex flex-column gap-5 mt-5">
        <h1 class="display-3 text-center mt-5">Authentication</h1>
        <div>
            <div class="form-floating mb-3">
                <input v-model="user_name" type="text" class="form-control" id="floatingInput" placeholder="User Name">
                <label for="floatingInput">User Name</label>
            </div>
            <div class="form-floating">
                <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>
        </div>
        <div class="buttons">

          <button @click.prevent="authenticate" class="blob-btn">
            LOGIN
            
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
    </div>
</template>

<style scoped>
.box {
    width: 40rem;
}

@media screen and (max-width: 640px) {
  .box {
      width: 100%;
  }
}
</style>