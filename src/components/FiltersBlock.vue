<template>
  <div aria-describedby="filters-title" class="bg-white rounded mb-6 text-neutral-900 py-2 px-4">
    <h2 id="filters-title" class="text-xl">Filtrer les cartes</h2>
    <label>
      Afficher uniquement les légendaires
      <input type="checkbox"
             :value="isLegendary"
             @change="(event) => $emit('update:isLegendary', event.target?.checked ?? false)"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isLegendary: boolean;
}>();

defineEmits<{
  'update:isLegendary': [isLegendary: boolean];
}>()
</script>