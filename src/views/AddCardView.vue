<template>
  <h1>Ajouter une carte</h1>

  <form @submit.prevent="addCardToStore">
    <div class="w-fit grid grid-cols-1 md:grid-cols-2">
      <div class="flex flex-col gap-2 items-start">
        <label for="input-name">
          Nom
        </label>
        <input id="input-name" type="text" v-model="card.name"/>

        <label for="input-description">
          Description
        </label>
        <textarea id="input-description" v-model="card.description"/>

        <label for="input-types">
          Types
        </label>
        <input id="input-types" type="text" v-model="card.types"/>

        <label for="input-attack">
          Attaque
        </label>
        <input id="input-attack" type="number" v-model="card.attack"/>
        <label for="input-defense">
          Attaque
        </label>
        <input id="input-defense" type="number" v-model="card.defense"/>

      </div>
      <div class="flex flex-col gap-2 items-start">

        <fieldset class="border rounded py-2 px-4">
          <legend>Coût</legend>
          <div class="flex flex-col gap-2">
            <label>
              Île :
              <input type="number" @change="(event) => updateCost('blue', event.target?.value ?? 0)"/>
            </label>
            <label>
              Montage :
              <input type="number" @change="(event) => updateCost('red', event.target?.value ?? 0)"/>
            </label>
            <label>
              Marais :
              <input type="number" @change="(event) => updateCost('black', event.target?.value ?? 0)"/>
            </label>
            <label>
              Plaine :
              <input type="number" @change="(event) => updateCost('white', event.target?.value ?? 0)"/>
            </label>
            <label>
              Forêt :
              <input type="number" @change="(event) => updateCost('green', event.target?.value ?? 0)"/>
            </label>
            <label>
              Incolore :
              <input type="number" @change="(event) => updateCost('none', event.target?.value ?? 0)"/>
            </label>
          </div>
        </fieldset>

        <label>
          Est légendaire
          <input type="checkbox" v-model="card.isLegendary"/>
        </label>

        <label for="input-image">
          Image :
        </label>
        <input id="input-image"
               type="file"
               @change="(event) => card.image = event.target?.file ?? null"
               accept="image/*"
        />
      </div>
    </div>

    <button type="submit" class="rounded py-2 px-4 bg-sky-900 text-white mt-6">
      Ajouter ma carte
    </button>
  </form>
</template>

<script setup lang="ts">
import {useCardsStore} from "@/stores/cards";
import {ref} from "vue";
import type {Card, CardColor} from "@/types";

const cardsStore = useCardsStore();

const card = ref<Card>({
  name: '',
  description: '',
  types: '',
  attack: 0,
  defense: 0,
  isLegendary: false,
  image: null,
  cost: {}
});

function updateCost(color: CardColor, nb: number) {
  if (nb === 0) {
    if (card.value.cost[color]) {
      delete card.value.cost[color];
    }
  } else {
    card.value.cost[color] = nb;
  }
}

function addCardToStore() {
  cardsStore.cards.push(card.value);
}
</script>
