# ANLEITUNG: PROJEKT-PDFS EINBINDEN
====================================

In diesen Ordner (`assets/pdf/`) können Sie Ihre eigenen Projekt-Präsentationen,
Bewerbungs-Pläne oder Dossiers als PDF ablegen.

EMPFOHLENE DATEINAMEN:
----------------------
- `projekt-01-isarraum.pdf`
- `projekt-02-freimann.pdf`
- `projekt-03-campus-garching.pdf`
- `projekt-04-altmuehltal.pdf`
- `portfolio-gesamt-2026.pdf` (Gesamtportfolio / CV)

IN DER `index.html` DATEI:
--------------------------
Suchen Sie in `index.html` nach dem Kommentar:
`<!-- HIER EIGENES PROJEKT-PDF EINFÜGEN -->`

Dort passen Sie einfach das `href`-Attribut des jeweiligen Buttons an, z.B.:
<a href="assets/pdf/projekt-01-isarraum.pdf" target="_blank" class="btn-pdf">...</a>

TIPP FÜR LANDSCHAFTSARCHITEKTUR-BEWERBUNGEN:
--------------------------------------------
Achten Sie bei Web-PDFs darauf, dass die Dateigröße pro Projekt idealerweise
zwischen 5 und 15 MB liegt (optimiert in Acrobat oder InDesign auf 150 dpi für Bildschirme),
damit die Pläne auch über mobile Verbindungen im Büro schnell laden.
