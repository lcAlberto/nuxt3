<template>
  <div>
  <div>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <slot />
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  </div>
        <Footer/>
    </div>
</template>
<script setup lang="ts">
import Footer from "../components/layout/Footer.vue";

definePageMeta({
  layout: 'custom'
})
</script>
