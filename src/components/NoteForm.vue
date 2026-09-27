<script setup>
import { ref } from 'vue'

const emit = defineEmits(['create'])

const title = ref('')
const content = ref('')
const tagInput = ref('')

const handleSubmit = () => {
  if (!title.value.trim() || !content.value.trim()) return

  const tags = tagInput.value
    .split(',')
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0)

  emit('create', {
    title: title.value,
    content: content.value,
    tags
  })

  // Formular zurücksetzen
  title.value = ''
  content.value = ''
  tagInput.value = ''
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="note-form">
    <input v-model="title" type="text" placeholder="Titel" required class="form-input" />
    <textarea v-model="content" placeholder="Notizinhalt ..." rows="3" required class="form-input"></textarea>
    <input v-model="tagInput" type="text" placeholder="Tags (kommagetrennt, z. B. fh, vue, prüfung)"
      class="form-input" />
    <button type="submit" class="btn-submit">Notiz hinzufügen</button>
  </form>
</template>

<style scoped>
.note-form {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.form-input {
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  padding: 0.6rem 0.8rem;
  font-size: 0.95rem;
  font-family: inherit;
}

.form-input:focus {
  outline: none;
  border-color: #3b82f6;
}

.btn-submit {
  align-self: flex-start;
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-size: 0.95rem;
  cursor: pointer;
  font-weight: 500;
}

.btn-submit:hover {
  background-color: #1d4ed8;
}
</style>