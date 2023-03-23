<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-green-700">Calidad y profesionalismo</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Desarrollamos tus aplicaciones</p>
        <p class="mt-6 text-lg leading-8 text-gray-600">En Biznapps nos preocupamos por las necesidades de nuestros clientes, desde el diseño, hasta el desarrollo. ¡Nosotros nos encargamos!</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div v-for="feature in features" :key="feature.name" class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-700">
                <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CircleStackIcon, UserCircleIcon, DevicePhoneMobileIcon, WrenchScrewdriverIcon, UserGroupIcon, ChatBubbleBottomCenterIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Desarroladores',
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
      'Nuestro equipo de desarrollo cuenta con experiencia en el desarrollo de bases de datos y APIs con los mayores estándares de seguridad.',
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
      'Contamos con la experiencia necesaria para mantener y soportar tus aplicaciones',
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