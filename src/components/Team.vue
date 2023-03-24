<template>
  <div class="bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
      <div class="mx-auto max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Conoce a nuestro equipo</h2>
        <p class="mt-4 text-lg leading-8 text-gray-400">Profesionales perfectamente capacitados para resolver cualquier problema.</p>
      </div>
      <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
        <li v-for="person in people" :key="person.name" class="rounded-2xl bg-gray-800 py-10 px-8">
          <img class="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" :src="person.imageUrl" alt="" />
          <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{{ person.name }}</h3>
          <p class="text-sm leading-6 text-gray-400">{{ person.role }}</p>
          <ul role="list" class="mt-6 flex justify-center gap-x-6">
            <li>
              <a v-if="person.linkedin != ''" :href="person.linkedin" class="text-gray-400 hover:text-gray-300">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                </svg>
              </a>
            </li>
          </ul>
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
    role: 'Chief Design Officer / Diseñadora UI/UX',
    linkedin: 'https://www.linkedin.com/in/valeria-zu%C3%B1iga-65040a250/',
    imageUrl:
      new URL('/src/assets/vale.png', import.meta.url)
  },
  {
    name: 'Juan Martínez Avilés',
    role: 'Chief Product Officer / Desarrollador',
    linkedin: 'https://www.linkedin.com/in/jpm343/',
    imageUrl:
      new URL('/src/assets/juan.png', import.meta.url)
  },
  {
    name: 'Rafael Alcaíno Castro',
    role: 'Chief Animation Officer / Diseñador UI/UX',
    linkedin: 'https://www.linkedin.com/in/rafael-alca%C3%ADno-castro-86a794224/',
    imageUrl:
      new URL('/src/assets/rafael.png', import.meta.url)
  },
]
</script>