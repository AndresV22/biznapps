<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-600">Empieza más rápido</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Todo lo que necesitas para empezar un nuevo emprendimiento</p>
        <p class="mt-6 text-lg leading-8 text-gray-600">Bizter te proporciona múltiples herramientas y recursos para iniciar tu negocio sin problemas. ¡Ya no tendrás que buscar información en internet por tu cuenta!</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div v-for="feature in features" :key="feature.name" class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
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
import { UserIcon, BookOpenIcon, BriefcaseIcon, WrenchScrewdriverIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Recursos',
    description:
      '¿No sabes como iniciar tu empresa? En nuestra sección de recursos encontrarás todo lo necesario para informarte.',
    icon: BookOpenIcon,
  },
  {
    name: 'Herramientas',
    description:
      'Te proporcionamos un asistente con inteligencia artificial que te permitirá resolver todas tus dudas. También contamos con herramientas para gestionar tus clientes y presupuestos.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Mentorías',
    description:
      '¿Te gustaría aprender de algún emprendedor exitoso? Con las mentorías de Bizter podrás generar redes de contacto y aprender como nunca antes.',
    icon: UserIcon,
  },
  {
    name: 'Ofertas de empleo',
    description:
      'Si necesitas empleados, Bizter te permite publicar ofertas de empleo sumamente atractivas para empezar tu emprendimiento lo antes posible.',
    icon: BriefcaseIcon,
  },
]
</script>