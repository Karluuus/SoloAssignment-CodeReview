# AI-LOG

- Prompt: "Wie setze ich das QuickNotes-Projekt gemäß der geforderten Dateistruktur und dem Gerüst um?"
  Übernommen: Die Grundstruktur für NoteCard, NoteForm und die Einbindung in App.vue.
  Geändert/verstanden: Verstanden, wie BaseCard mit Slots als generische Hülle dient und NoteCard die Slots mit Notiz-Daten befüllt.

- Prompt: "Wie implementiere ich die TODOs in useNotes.js für das Anlegen, Löschen und Filtern?"
  Übernommen: Die Filter-Funktion mit computed() und die ID-Erzeugung mit Date.now().
  Geändert/verstanden: Verstanden, wie computed() reaktiv auf Änderungen des Suchbegriffs und der Notizen reagiert.

- Prompt: "Uncaught TypeError: can't access property length, _ctx.visibleNotes is undefined"
  Übernommen: Das fehlende `return` vor `computed(...)` in `filteredNotes()` ergänzt.
  Geändert/verstanden: Gelernt, dass die Komponente `undefined` erhält, wenn eine Funktion kein Ref/Computed zurückgibt, wodurch der Zugriff im Template fehlschlägt.

- Prompt: "Failed to resolve component und Property was accessed but not defined in App.vue"
  Übernommen: Das `setup`-Attribut in `<script setup>` in App.vue wiederhergestellt.
  Geändert/verstanden: Verstanden, dass in Vue 3 SFCs Variablen und Imports nur bei `<script setup>` automatisch an das Template gebunden werden.

- Prompt: "Kannst du mir beim CSS-Styling für die Notiz-Karten, Tags und das Formular helfen?"
  Übernommen: Design-Vorschläge für ein klares Layout (Karten-Schatten, Flexbox-Ausrichtung und Pillen-Badges für Tags).
  Geändert/verstanden: Verstanden, wie mit scoped CSS die Stile isoliert bleiben und das Design einheitlich aufeinander abgestimmt wird.

- Prompt: "Text in der SearchBar ist durch falsche Kontrastfarben kaum lesbar"
  Übernommen: Explizite CSS-Eigenschaften (color und background-color) in SearchBar.vue.
  Geändert/verstanden: Erkannt, dass Standard-Styles von Vite (z. B. Dark-Mode) Formularfelder überschreiben können und man Textfarben explizit definieren sollte.

- Prompt: "Bitte prüfe meine Entwürfe für die README und das AI-LOG auf Rechtschreibung, Grammatik und verständliche Formulierungen."
  Übernommen: Korrekturen bei Rechtschreibung und Grammatik sowie sprachliche Glättung meiner selbst verfassten Erklärungen.
  Geändert/verstanden: Fehler korrigiert und verstanden, wie die technischen Fachbegriffe (z. B. Ein-Weg-Datenfluss, getrennte Reaktivität) im Text präzise verwendet werden.