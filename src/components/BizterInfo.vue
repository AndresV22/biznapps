<template>
  <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <svg class="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
          <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
      </svg>
    </div>
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">
            <p class="text-base font-semibold leading-7 text-green-700">Acelera el inicio de tu emprendimiento</p>
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bizter.io</h1>
            <p class="mt-6 text-xl leading-8 text-gray-700">¿Quieres empezar un nuevo emprendimiento, pero no sabes por donde empezar? ¿No quieres gastar tu tiempo investigando por tu cuenta todos los aspectos legales y todos los conceptos de negocios?</p>
          </div>
        </div>
      </div>
      <div class="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="@/assets/bizterimage.png" alt="" />
      </div>
      <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            <p>En <a href="https://www.bizter.io" class="text-sm font-semibold leading-6 text-green-500">Bizter.io</a> encontrarás toda la información centralizada en un solo lugar. Desde cómo hacer los trámites legales, hasta cómo iniciar un negocio desde cero. Podrás ver videos, blogs y mucho más!</p>
            <ul role="list" class="mt-8 space-y-8 text-gray-600">
              <li class="flex gap-x-3">
                <BookOpenIcon class="mt-1 h-5 w-5 flex-none text-green-700" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-900">Recursos</strong> Infórmate con nuestros recursos disponibles. Videos tutoriales, documentos y blogs. Todo lo necesario para empezar tu negocio de forma rápida y efectiva.</span>
              </li>
              <li class="flex gap-x-3">
                <WrenchScrewdriverIcon class="mt-1 h-5 w-5 flex-none text-green-700" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-900">Herramientas</strong> Podrás gestionar tus clientes, publicar ofertas de empleo y crear presupuestos.</span>
              </li>
              <li class="flex gap-x-3">
                <CommandLineIcon class="mt-1 h-5 w-5 flex-none text-green-700" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-900">Asistente virtual</strong> ¿Aún tienes dudas? Prueba nuestra inteligencia artificial entrenada para responder todas tus dudas de negocios.</span>
              </li>
            </ul>
            <p class="mt-8">Empezar un negocio nunca había sido más sencillo. Ya no tendrás que gastar incontables horas buscando información suelta por la web. Simplemente accede a Bizter.io y encontrarás todo lo que necesitas.</p>
            <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">¿Primer emprendimiento? No hay problema</h2>
            <p class="mt-6">Con una interfaz fácil de usar y un enfoque en la educación empresarial, nuestra aplicación es única en el mercado y está diseñada para satisfacer las necesidades de los nuevos emprendedores.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BookOpenIcon, WrenchScrewdriverIcon, CommandLineIcon } from '@heroicons/vue/20/solid'
</script>