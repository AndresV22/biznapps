
<template>
  <div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
        <div class="max-w-xl lg:max-w-lg">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">¡Déjanos tu correo y te contactamos!</h2>
          <p class="mt-4 text-lg leading-8 text-gray-300">O bien mandanos un correo a contacto@biznapps.com</p>
          <div class="mt-6 flex max-w-md gap-x-4">
            <form ref="emailForm" @submit.prevent="onSubmit">
              <label for="email-address" class="sr-only">Correo</label>
              <input v-model="form.email" id="email-address" name="email" type="email" autocomplete="email" required="" class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Ingresa tu email" />
              <button type="submit" class="flex-none rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Suscribirme</button>
            </form>
          </div>
        </div>
        <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
          <div class="flex flex-col items-start">
            <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <CalendarDaysIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <dt class="mt-4 font-semibold text-white">Te avisaremos cuando lancemos un nuevo producto</dt>
            <dd class="mt-2 leading-7 text-gray-400">Sé uno de los primeros en probar nuestras aplicaciones.</dd>
          </div>
          <div class="flex flex-col items-start">
            <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <HandRaisedIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <dt class="mt-4 font-semibold text-white">Sin spam</dt>
            <dd class="mt-2 leading-7 text-gray-400">Nos comprometemos a no enviarte spam. Solo te enviaremos lo justo y necesario.</dd>
          </div>
        </dl>
      </div>
    </div>
    <svg class="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6" viewBox="0 0 1155 678" fill="none">
      <path fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
      <defs>
        <linearGradient id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFFFFF" />
          <stop offset="1" stop-color="#FFFFFF" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
import { createEmail } from '@/firebase'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/vue/24/outline'
import { reactive } from 'vue'
import emailjs from 'emailjs-com'

export default {
  name: 'Newsletter',
  components: {
    CalendarDaysIcon,
    HandRaisedIcon
  },
  mounted() {
    emailjs.init('59QH7487ZAcWXO0r5');
    
    // enlaza manualmente la función onSubmit al componente
    this.onSubmit = this.onSubmit.bind(this);
  },
  setup() {
    const form = reactive({
      email: ''
    })

    const onSubmit = async (e) => {
      try {
        await createEmail(form.email)
        try {
          await emailjs.sendForm('service_99f3jwq', 'template_zaigpxb', e.target,
          '59QH7487ZAcWXO0r5')
        } catch (error) {
          console.log({ error })
        }
        form.email = ''
      } catch (error) {
        console.log(error)
      }
    }

    return {
      form,
      onSubmit
    }
  }
}
</script>