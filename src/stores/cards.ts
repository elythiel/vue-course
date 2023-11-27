import {ref} from "vue";
import type {Card} from "@/types";
import {defineStore} from "pinia";

type ApiResponse = {
  cards: Card[];
}

export const useCardsStore = defineStore('cards', () => {
  const cards = ref<Card[]>([]);

  function fetchCards() {
    fetch('/datas.json').then((jsonResponse) => {
      return jsonResponse.json();
    }).then((response: ApiResponse) => {
      cards.value = response.cards;
    });
  }

  return {cards, fetchCards};
});
