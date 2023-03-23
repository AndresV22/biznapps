<script setup>
import Newsletter from '@/components/Newsletter.vue'
import Hero from '@/components/Hero.vue'
import Header from '@/components/Header.vue'
import Team from '@/components/Team.vue'
import BizterInfo from '@/components/BizterInfo.vue'
</script>

<template>
  <div class="aboutUs">

    <!-- Header -->
    <section>
      <Header/>
    </section>

    <!-- BizterInfo -->
    <section>
      <BizterInfo/>
    </section>

    <!-- Email -->
    <section>
      <Newsletter/>
    </section>
  </div>
</template>

<style scoped>
</style>
