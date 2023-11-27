<template>
  <h1>
    Liste des cartes
  </h1>
  <FiltersBlock v-model:is-legendary="filters.isLegendary" />

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="card in filtererdCards"
         :key="card.name"
         class="flex flex-col gap-2 bg-white rounded text-neutral-800 p-4"
    >
      <h2 class="text-lg">
        {{ card.name }}
      </h2>
      <p>{{ card.types }}</p>
      <h3 class="font-bold">Coût :</h3>
      <ul>
        <li v-for="(cost, key) in card.cost" :key="key">
          {{ key }} : {{ cost }}
        </li>
      </ul>
      <p>
        {{ card.description }}
      </p>
      <p>
        Attaque : {{ card.attack }} - Défense :  {{ card.defense }}
      </p>
      <div class="mt-auto">
        <CardImage
          v-if="card.image"
          :card-name="card.name"
          :image-src="card.image"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardImage from "@/components/CardImage.vue";
import {useCardsStore} from "@/stores/cards";
import {computed, onBeforeMount, ref} from "vue";
import FiltersBlock from "@/components/FiltersBlock.vue";

const cardsStore = useCardsStore();

const filters = ref({
  isLegendary: false
});

const filtererdCards = computed(() => {
  if (filters.value.isLegendary === false) {
    return cardsStore.cards;
  }

  return cardsStore.cards.filter((card) => card.isLegendary);
})

onBeforeMount(() => {
  if (cardsStore.cards.length === 0) {
    cardsStore.fetchCards();
  }
})
</script>
