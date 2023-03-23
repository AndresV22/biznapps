<script setup>
import Newsletter from './components/Newsletter.vue'
import Hero from './components/Hero.vue'
import Header from './components/Header.vue'
import Features from './components/Features.vue'
</script>

<template>
  <div id="app">

    <!-- Hero -->
    <section>
      <Hero/>
    </section>

    <!-- Features -->
    <section>
      <Features/>
    </section>

    <!-- Email -->
    <section>
      <Newsletter/>
    </section>
  </div>
</template>

<style scoped>
</style>
