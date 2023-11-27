<template>
  <button
    type="button"
    class="py-1 px-2 rounded bg-sky-900 text-white"
    @click="isOpened = !isOpened"
  >
    Voir la carte
  </button>
  <template v-if="isOpened">
    <Teleport to="body">
      <div
        class="fixed top-0 left-0 h-screen w-screen bg-black/10 flex justify-center items-center"
        aria-live="polite"
      >
        <button
          type="button"
          class="absolute top-4 right-4 bg-stone-300 text-black rounded-full text-3xl h-16 w-16"
          title="Fermer l'aperçu"
          @click="isOpened = false"
        >
          X
        </button>
        <img
          :src="`/images/${imageSrc}`"
          :alt="`Carte : ${cardName}`"
          class="max-h-[75%]"
        />
      </div>
    </Teleport>
  </template>
</template>

<script setup lang="ts">
import {ref} from "vue";

defineProps<{
  cardName: string;
  imageSrc: string|File;
}>();

const isOpened = ref(false);
</script>

<style>

</style>