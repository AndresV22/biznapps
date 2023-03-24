<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conoce a nuestro equipo</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">Profesionales perfectamente capacitados para resolver cualquier problema</p>
      </div>
      <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <li v-for="person in people" :key="person.name">
          <div class="flex items-center gap-x-6">
            <img class="h-16 w-16 rounded-full" :src="person.imageUrl" alt="" />
            <div>
              <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">{{ person.name }}</h3>
              <p class="text-sm font-semibold leading-6 text-green-700">{{ person.role }}</p>
              <a v-if="person.linkedin != ''" v-bind:href="person.linkedin" class="text-sm font-semibold leading-6 text-green-500">Ir a Linkedin</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>

const people = [
  {
    name: 'Andrés Alcaíno Castro',
    role: 'Chief Executive Officer / Co-Fundador / Desarrollador',
    linkedin: 'https://www.linkedin.com/in/andres-alcaino-castro/',
    imageUrl:
      new URL('/src/assets/andres.png', import.meta.url)
  },
  {
    name: 'Carla González Roa',
    role: 'Chief Marketing Officer / Co-Fundadora',
    linkedin: 'https://www.linkedin.com/in/carla-andrea-gonz%C3%A1lez-roa-138b93194/',
    imageUrl:
      new URL('/src/assets/carla.png', import.meta.url)
  },
  {
    name: 'Basil Ossandon Hostens',
    role: 'Chief Technology Officer / Desarrollador',
    linkedin: 'https://www.linkedin.com/in/basil-ossandon-hostens-104213196/',
    imageUrl:
      new URL('/src/assets/basil.png', import.meta.url)
  },
  {
    name: 'Valeria Zúñiga Bragado',
    role: 'Diseñadora UI/UX',
    linkedin: '',
    imageUrl:
      new URL('/src/assets/vale.png', import.meta.url)
  },
  {
    name: 'Juan Martínez Áviles',
    role: 'Chief Product Officer / Desarrollador',
    linkedin: 'https://www.linkedin.com/in/jpm343/',
    imageUrl:
      new URL('/src/assets/juan.png', import.meta.url)
  },
  {
    name: 'Rafael Alcaíno Castro',
    role: 'Diseñador UI/UX',
    linkedin: 'https://www.linkedin.com/in/rafael-alca%C3%ADno-castro-86a794224/',
    imageUrl:
      new URL('/src/assets/rafael.png', import.meta.url)
  },
]
</script>