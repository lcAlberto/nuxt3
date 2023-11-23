<template>
  <div class="">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
                v-model="username"
                type="email"
                placeholder="email"
                required
                class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
                v-model="password"
                type="password"
                placeholder="password"
                class="input input-bordered"
                required
            />
            <label class="label">
              <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <a
              class="link link-hover text-sm mt-3"
              @click="$emit('toRegister')"
          >Ainda não tem cadastro? Registre-se</a>
          <div class="form-control mt-3">
            <button
                type="button"
                class="btn btn-primary"
                @click="sendLogin"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import ApiService from "../../api-config/ApiService";
const router = useRouter()

const username = ref('');
  const password = ref('');

  const isValid = computed(() => {
    return username.value && password.value;
  });

const sendLogin = async () => {
  try {
    const api = new ApiService()

    const data = await api.request(
        'login',
        'POST',
        {
          email: username.value,
          password: password.value
        }).then((response) => {
      console.log(response);
      router.push('/home')
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

</script>


<style scoped>

</style>