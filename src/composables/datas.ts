import {ref} from "vue";

export const useDatas = () => {
  const datas = ref<{
    cards: Array<Card>;
  }>();
}
