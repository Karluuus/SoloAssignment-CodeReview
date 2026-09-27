import { computed, unref } from "vue";
import { useLocalStorage } from "./useLocalStorage.js";

export function useNotes() {
  const notes = useLocalStorage("quicknotes", []);

  function addNote(note) {
    const newNote = {
      id: Date.now(),
      title: note.title.trim(),
      content: note.content.trim(),
      tags: Array.isArray(note.tags) ? note.tags : [],
    };
    notes.value.unshift(newNote);
  }

  function deleteNote(id) {
    notes.value = notes.value.filter((note) => note.id !== id);
  }

  function filteredNotes(term) {
    return computed(() => {
      const query = (unref(term) || "").trim().toLowerCase();
      if (!query) {
        return notes.value;
      }

      return notes.value.filter((note) => {
        const matchTitle = note.title?.toLowerCase().includes(query);
        const matchContent = note.content?.toLowerCase().includes(query);
        const matchTag = note.tags?.some((tag) =>
          tag.toLowerCase().includes(query),
        );
        return matchTitle || matchContent || matchTag;
      });
    });
  }

  return { notes, addNote, deleteNote, filteredNotes };
}
