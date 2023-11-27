import {ref} from "vue";
import type {Card} from "@/types";

type ApiResponse = {
  cards: Card[];
}

const cards = ref<Card[]>();

export const useDatas = () => {
  if (cards.value === undefined) {
    fetch('/datas.json').then((jsonResponse) => {
      return jsonResponse.json();
    }).then((response: ApiResponse) => {
      cards.value = response.cards;
    });
  }

  return cards;
}
