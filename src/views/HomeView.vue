<template>
  <h1 class="text-2xl mb-6">
    Liste des cartes
  </h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="card in cards ?? []" :key="card.name" class="flex flex-col gap-2 bg-white rounded text-neutral-800 p-4">
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
        <CardImage :card-name="card.name" :image-src="card.image" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useDatas} from "@/composables/datas";
import CardImage from "@/components/CardImage.vue";

const cards = useDatas();
</script>
