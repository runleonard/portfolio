# Portfolio-Website: David Runge
### B.Sc. Grüne Stadtplanung (HSWT Freising) // Bewerbung Praxissemester

Minimalistische, moderne One-Page-Portfolio-Website für die Bewerbung um ein Praxissemester in einem Landschaftsarchitektur-Studio in München (z.B. Studio Vulkan).

---

## 👤 Persönliche Daten & Profil im Überblick

* **Name**: David Runge
* **Studiengang**: Bachelor of Science – Grüne Stadtplanung (5. Semester)
* **Hochschule**: HSWT – Hochschule Weihenstephan-Triesdorf (Freising)
* **Geburtsdatum**: 25.04.2006, Freising
* **Wohnort**: Hallertauer Str. 9, 85368 Moosburg a. d. Isar
* **Telefon**: 0176 44432400
* **Hochschul-E-Mail**: `david.runge@student.hswt.de`
* **Private E-Mail**: `runleonard@gmail.com`
* **Kernkompetenzen**: CAD (Vectorworks), konzeptionelles Entwerfen, Freiraumentwicklung, Adobe Creative Suite (Photoshop, InDesign)

---

## 📁 Ordnerstruktur

```text
landscape-architecture-portfolio/
│
├── index.html                   # Hauptseite mit David Runges Profil, Projekten & Kontakt
│
├── css/
│   └── style.css                # Minimalistisches architektonisches Stylesheet (Grid, Typo, Farben)
│
├── js/
│   └── main.js                  # Interaktiver Modal-Viewer, Escape-Logik & Navigation
│
├── assets/
│   ├── images/                  # Plandarstellungen, Schnitte, Vektorgrafiken
│   │   ├── hero-contour.svg     # Subtile topographische Höhenlinien im Hero
│   │   ├── project-01.svg       # Semester 4: Stadtraum & Quartiersentwicklung
│   │   ├── project-02.svg       # Semester 3: Grüner Korridor & Stadtvernetzung
│   │   ├── project-03.svg       # Semester 2: Grünraumkorridor Isartal (Freiraumstudie)
│   │   └── project-04.svg       # Semester 1: Gestaltungslehre & Reliefstudie
│   │
│   └── pdf/                     # Hier Ihre Projekt-PDFs ablegen
│       ├── README.txt           # Formatempfehlungen für Web-PDFs
│       └── sample-project.pdf   # Beispiel-Dossier (sofort klickbar)
│
└── README.md                    # Diese Dokumentation
```

---

## 🚀 Schnellanleitung: Eigene PDF-Pläne & Bilder einbinden

### 1. Website lokal öffnen
Doppelklick auf `index.html` öffnet das Portfolio direkt in jedem Webbrowser.

### 2. Eigene Projekt-PDFs einfügen
1. Speichern Sie Ihre PDF-Pläne im Ordner `assets/pdf/`, z.B.:
   - `assets/pdf/lebenslauf-david-runge.pdf`
   - `assets/pdf/projekt-01-quartier.pdf`
   - `assets/pdf/projekt-02-bahnareal.pdf`
   - `assets/pdf/projekt-03-isarraum.pdf`
2. Öffnen Sie `index.html` und ersetzen Sie bei den Buttons `assets/pdf/sample-project.pdf` durch Ihren tatsächlichen PDF-Dateinamen.
3. In `js/main.js` können Sie im `projectsData`-Objekt ebenfalls den Pfad `pdfUrl` für das jeweilige Projekt anpassen.

### 3. Eigene Renderings oder Pläne aus Vectorworks einfügen
Exportieren Sie Pläne aus Vectorworks oder Photoshop als JPG oder PNG (z.B. 1920×1200 px) und legen Sie sie in `assets/images/` ab:
- Ersetzen Sie in `index.html` einfach `src="assets/images/project-01.svg"` durch `src="assets/images/mein-plan-01.jpg"`.
- In `js/main.js` passen Sie `imageSrc` an.
