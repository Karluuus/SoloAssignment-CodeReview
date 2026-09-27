<!-- BaseCard.vue -->
<template>
  <div class="card">
    <!-- Benannter Slot: wird nur gerendert, wenn Inhalt dafür da ist -->
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    <!-- Default-Slot: Hier landet alles, was nicht explizit benannt ist -->
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.card-header {
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 0.5rem;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>