<script setup>
import { ref } from 'vue'
import { useNotes } from './composables/useNotes.js'
import SearchBar from './components/SearchBar.vue'
import NoteForm from './components/NoteForm.vue'
import NoteCard from './components/NoteCard.vue'

const searchTerm = ref('')
const { addNote, deleteNote, filteredNotes } = useNotes()

// Gefilterte Notizen abhängig von der Suche
const visibleNotes = filteredNotes(searchTerm)
</script>

<template>
  <main class="app-container">
    <header>
      <br><br>
      <h1>QuickNotes</h1>
      <br><br>
    </header>

    <!-- Suchleiste mit v-model -->
    <SearchBar v-model="searchTerm" />

    <!-- Formular zum Anlegen neuer Notizen -->
    <NoteForm @create="addNote" />

    <!-- Liste der gefilterten Notizen -->
    <div class="notes-list">
      <p v-if="visibleNotes?.length === 0" class="no-notes">
        Keine passenden Notizen vorhanden.
      </p>

      <NoteCard v-for="note in visibleNotes" :key="note.id" :note="note" @delete="deleteNote" />
    </div>
  </main>
</template>

<style>
body {
  margin: 0;
  background-color: #f8fafc;
  color: #1e293b;
  font-family: system-ui, -apple-system, sans-serif;
}

.app-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

h1 {
  margin: 0;
  text-align: center;
  color: #0f172a;
}

.notes-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.no-notes {
  text-align: center;
  color: #94a3b8;
  font-style: italic;
}
</style>