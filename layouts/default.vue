<template>
    <div>
      <Navbar/>
      <div class="">
        <slot />
      </div>
        <Footer/>
    </div>
</template>
<script lang="ts">
import Navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer.vue";

definePageMeta({
  layout: 'default'
})
</script>