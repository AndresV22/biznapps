<script setup>
import Newsletter from '@/components/Newsletter.vue'
import SuccessCasesInfo from '@/components/SuccessCasesInfo.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="aboutUs">

    <!-- Header -->
    <section>
      <Header/>
    </section>

    <!-- SuccessCasesInfo -->
    <section>
      <SuccessCasesInfo/>
    </section>

    <!-- Email -->
    <section>
      <Newsletter/>
    </section>

    <!-- Footer -->
    <section>
      <Footer/>
    </section>
  </div>
</template>

<style scoped>
</style>
