<template>
  <div class="">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Nome</span>
            </label>
            <input
                v-model="name"
                type="text"
                placeholder="Nome completo"
                required
                class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
                v-model="email"
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
          </div>
          <a
              class="link link-hover mt-3"
              @click="$emit('toLogin')"
          >Já tem cadastro? Faça login</a>
          <div class="form-control mt-2">
            <button
                type="button"
                class="btn btn-primary"
                @click="sendLogin"
            >
              Cadastrar
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

const email = ref('');
const name = ref('');
const password = ref('');

const isValid = computed(() => {
  return email.value && name.value && password.value;
});

const sendLogin = async () => {
  try {
    const api = new ApiService()

    const data = await api.request(
        'register',
        'POST',
        {
          name: name.value,
          email: email.value,
          password: password.value
        }).then((response) => {
      console.log(response);
      router.push('/')
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

</script>


<style scoped>

</style>