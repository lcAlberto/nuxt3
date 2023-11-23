<template>
  <NuxtLayout name="auth">
    <div>
      <div
          v-if="mode === 'login'"
          class="collapse p-0">
        <input
            v-model="mode"
            type="radio"
            name="my-accordion-1"
            value="login"
            checked="checked"
            style="width: 0; height: 0"
        />
        <div class="collapse-content">
          <Login
              @toRegister="mode = 'register'"
          />
        </div>
      </div>
      <div class="collapse p-0">
        <input
            v-model="mode"
            type="radio"
            name="my-accordion-1"
            value="register"
            style="width: 0; height: 0"
        />
        <div class="collapse-content p-0">
          <Register @toLogin="mode = 'login'" />
        </div>
      </div>
    </div>
<!--    <router-link to="/auth/login">Login</router-link>-->
<!--    <router-link to="/auth/register">Register</router-link>-->
<!--    <Login/>-->
  </NuxtLayout>
</template>

<script setup lang="ts">
// import Login from "../components/auth/Login.vue";
import Login from "../components/auth/Login.vue";
import Register from "../components/auth/Register.vue";
import {ref} from "vue";

const mode = ref('login')
// export default  {
//   components: { Login, Register },
//   data () {
//     return {
//       mode: 'login'
//     }
//   }
// }
</script>
