<template>
  <div class="bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-400">Todo lo que necesitas</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">¿No sabes como hacer una aplicación? No hay problema.</p>
        <p class="mt-6 text-lg leading-8 text-gray-300">En Biznaps nos encargamos de todo. Desde el diseño, hasta el despligue y publicación de tu aplicación.</p>
      </div>
    </div>
    <div class="relative overflow-hidden pt-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="App screenshot" class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10" width="2432" height="1442" />
        <div class="relative" aria-hidden="true">
          <div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
        </div>
      </div>
    </div>
    <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
      <dl class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        <div v-for="feature in features" :key="feature.name" class="relative pl-9">
          <dt class="inline font-semibold text-white">
            <component :is="feature.icon" class="absolute top-1 left-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
            {{ feature.name }}
          </dt>
          {{ ' ' }}
          <dd class="inline">{{ feature.description }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { CircleStackIcon, UserCircleIcon, DevicePhoneMobileIcon, WrenchScrewdriverIcon, UserGroupIcon, ChatBubbleBottomCenterIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Desarrolladores',
    description:
      'Contamos con desarrolladores profesionales con muchos años de experiencia y con títulos de prestigiosas universidades de Chile.',
    icon: UserGroupIcon,
  },
  {
    name: 'Diseñadores',
    description:
      'Nuestro equipo de diseño está conformado por profesionales con experiencia en el desarrollo de productos digitales y que harán ver tu proyecto como nunca antes lo habías imaginado.',
    icon: UserCircleIcon,
  },
  {
    name: 'Bases de datos y APIs',
    description:
      'Nuestro equipo de desarrollo cuenta con experiencia en el desarrollo de bases de datos y APIs con los mejores estándares de seguridad.',
    icon: CircleStackIcon,
  },
  {
    name: 'Aplicaciones web y móviles',
    description:
      'Libera todo el potencial de tu empresa con aplicaciones que te permitan interactuar con tus clientes de una manera más eficiente.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Mantenimiento y soporte',
    description:
      'Nuestro equipo se encargará de darte soporte y mantenimiento para ayudarte a mantener tu aplicación siempre en funcionamiento.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Asesoría y consultoría',
    description:
      'Te asesoramos en el desarrollo de tu proyecto, desde la idea hasta la implementación.',
    icon: ChatBubbleBottomCenterIcon,
  },
]
</script>