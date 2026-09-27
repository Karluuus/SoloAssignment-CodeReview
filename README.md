# QuickNotes

Eine einfache Notiz-App mit Live-Filter, Tags und LocalStorage-Persistenz, umgesetzt mit Vue 3 und TypeScript.

## 1. Setup-Anleitung
Um das Projekt lokal auszuführen:
1. Abhängigkeiten installieren:
   
   npm install

2. Server starten:

   npm run dev

## Begründung der Struktur

Die Logik zum Filtern, Hinzufügen und Speichern im LocalStorage liegt in den Composables (useNotes, useLocalStorage) und nicht in den UI-Komponenten. Dadurch wird die Geschäftslogik strikt von der optischen Darstellung getrennt. Mit diesem Ansatz bleiben die Komponenten übersichtlich, leicht austauschbar und die Logik ist unabhängig von der Benutzeroberfläche wiederverwendbar und testbar.

## Reflexionsfragen

Frage 1: Warum darf NoteCard die Notiz Prop nicht selbst verändern, und wie löst ihr das stattdessen?

Antwort:
In Vue gilt das Prinzip des Ein-Weg-Datenflusses (One-Way Data Flow): Daten fließen über Props von oben (Eltern) nach unten (Kinder). Würde ein Kind seine Props eigenmächtig manipulieren, wird der Datenfluss intransparent und es entstehen schwer nachvollziehbare Seiteneffekte.
Stattdessen meldet NoteCard den Löschwunsch per Event (emit('delete', note.id)) nach oben an App.vue. Die Elternkomponente beauftragt dann das Composable useNotes, die entsprechende Notiz zentral aus der Liste zu entfernen.


Frage 2: Was passiert, wenn zwei Komponenten dasselbe useNotes() aufrufen teilen sie sich die Notizen oder nicht? Begründet kurz.

Antwort:
Nein, sie teilen sich die Notizen im Speicher zur Laufzeit nicht. Jeder Aufruf der Funktion useNotes() erzeugt intern über useLocalStorage() eine eigene, neue ref()-Instanz. Beide Komponenten greifen zwar auf denselben Schlüssel im localStorage zu, haben im JavaScript-Speicher aber getrennte Reaktivitäten.

Frage 3: Wozu dient das Note-Interface, wenn der Code auch ohne liefe?

Antwort:
Das Interface dient als verbindlicher Datenvertrag zur Entwicklungszeit. Es definiert exakt, welche Felder eine Notiz haben muss (id, title, content, tags) und welche Datentypen diese besitzen. Dadurch hilft der TypeScript-Compiler, Tippfehler (wie z. B. note.tag statt note.tags) sofort zu bemerken, und jeder Entwickler weiß beim Weiterreichen der Daten zwischen den Komponenten genau, welche Struktur erwartet wird.