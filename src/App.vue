<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="container mx-auto flex items-center mb-10 py-2">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="70" height="70" />
    <nav class="flex ml-auto divide-x">
      <RouterLink to="/" class="py-4 px-6 transition-colors hover:bg-white/10">Accueil</RouterLink>
      <RouterLink to="/add" class="py-4 px-6 transition-colors hover:bg-white/10">Ajouter une carte</RouterLink>
    </nav>
  </header>

  <main class="container mx-auto">
    <RouterView />
  </main>
</template>

<style lang="postcss">
h1 {
  @apply text-2xl mb-6;
}
</style>
