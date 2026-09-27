
Unterstützung beim Erstellen und Strukturieren der README-Datei.
Korrektur und Verbesserung von grammatikalischen Fehlern und Rechtschreibfehlern in meinen Texten.
Unterstützung beim CSS Design mithilfe von KI.


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

- Prompt: "Text in der SearchBar ist durch falsche Kontrastfarben kaum lesbar"
  Übernommen: Explizite CSS-Eigenschaften (color und background-color) in SearchBar.vue.
  Geändert/verstanden: Erkannt, dass Standard-Styles von Vite (z. B. Dark-Mode) Formularfelder überschreiben können und man Textfarben explizit definieren sollte.

- Prompt: "Bitte unterstütze mich dabei, die README und das AI-LOG sinnvoll und übersichtlich zu strukturieren und zu formulieren."
  Übernommen: Gliederungsvorschlag für die README und Argumentationsansätze für die Fragen.
  Geändert/verstanden: Die Erklärungen zum Ein-Weg-Datenfluss und den getrennten Reaktivitäts-Instanzen verinnerlicht und in eigene Worte übertragen.