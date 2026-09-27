<script setup lang="ts">
import type { Note } from '../types/note.ts'
import BaseCard from './BaseCard.vue'

defineProps<{
  note: Note
}>()

const emit = defineEmits<{
  (e: 'delete', id: number): void
}>()
</script>

<template>
  <BaseCard>
    <!-- Benannter Header-Slot -->
    <template #header>
      <div class="note-header">
        <h3 class="note-title">{{ note.title }}</h3>
        <button type="button" class="btn-delete" @click="emit('delete', note.id)" aria-label="Notiz löschen">
          X
        </button>
      </div>
    </template>

    <!-- Default-Slot für Inhalt & Tags -->
    <p class="note-text">{{ note.content }}</p>

    <div v-if="note.tags && note.tags.length > 0" class="tag-container">
      <span v-for="tag in note.tags" :key="tag" class="tag-badge">
        #{{ tag }}
      </span>
    </div>
  </BaseCard>
</template>

<style scoped>
.note-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.note-title {
  margin: 0;
  font-size: 1.15rem;
  color: #1e293b;
}

.btn-delete {
  background: none;
  border: none;
  color: #ef4444;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
}

.btn-delete:hover {
  background-color: #fee2e2;
}

.note-text {
  margin: 0;
  color: #475569;
  white-space: pre-wrap;
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.25rem;
}

.tag-badge {
  background-color: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
}
</style>