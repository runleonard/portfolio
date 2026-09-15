/**
 * DAVID RUNGE // PORTFOLIO JAVASCRIPT
 * Student im B.Sc. Grüne Stadtplanung (HSWT Freising)
 * Chronologische Semester-Projekte (Semester 1 bis 4)
 * Inklusive Lightbox-Zoom & Modal-Galerie
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. PROJEKTDATEN FÜR MODAL-VIEWER & DETAILANSICHT
     Chronologische Abfolge: Semester 1 bis 4
     ========================================================================== */
  const projectsData = {
    'projekt-01': {
      semester: '01 // SEMESTER 1',
      title: 'Orientierendes Projekt',
      location: 'HSWT Freising // WS 2024/25 (Projektgruppe 9.1)',
      typology: 'Orientierendes Entwurfsprojekt',
      summary: 'Das Orientierende Projekt vermittelte einen Einblick in die Aufgabenfelder der Landschafts- und Freiraumplanung, Stadtplanung und des Landschaftsbaus. Die gezeigten Arbeiten dokumentieren die beiden Teilaufgaben Stadtplanung und Freiraumplanung. Das Wohnheim-Konzept „Beehive“ entstand als unsere eigene Entwurfsidee zur Aufgabenstellung.',
      gallery: [
        {
          label: 'Wohnheim Beehive',
          src: 'assets/images/orientierendes-projekt-lageplan.png',
          caption: 'Wohnheim „Beehive“ (Teilaufgaben Stadt- & Freiraumplanung): Eigene Entwurfsidee mit Innenhof-Lageplan, Freiraumzonen, Wege- und Baumanalysen, Handperspektive und Modellbau.'
        },
        {
          label: 'Gezeichneter Lageplan',
          src: 'assets/images/semester-01-lageplan-gezeichnet.png',
          caption: 'Handgezeichneter Lageplan (Teilaufgabe Freiraumplanung): Kolorierte Entwurfszeichnung des Wohnheimumfelds mit Raumgeometrie und Gehölzstruktur.'
        }
      ],
      specs: [
        { label: 'Studiengang', value: 'B.Sc. Grüne Stadtplanung (HSWT)' },
        { label: 'Semester', value: '1. Semester // Orientierendes Projekt' },
        { label: 'Bewertung', value: 'Note 2,3 (Gruppe)' },
        { label: 'Projektgruppe', value: 'Projektgruppe 9.1' },
        { label: 'Gezeigte Teile', value: 'Stadtplanung & Freiraumplanung' },
        { label: 'Konzept', value: 'Wohnheim „Beehive“ (eigene Entwurfsidee)' },
        { label: 'Methoden', value: 'Analyseskizzen, Lageplan, Physischer Modellbau' }
      ],
      pdfUrl: 'assets/pdf/Orientierendes-Projekt-Dossier.pdf',
      pdfFileSize: 'STUDIENARBEIT [PDF 37 MB]'
    },
    'projekt-02': {
      semester: '02 // SEMESTER 2',
      title: 'Objekt und Quartier',
      location: 'Region Freising // SoSe 2025 (Modul PuE 1)',
      typology: 'Studienarbeit Stadtplanung & Freiraum',
      summary: 'Im Modul Planen und Entwerfen 1 (PuE 1) ging es um den Entwurf eines Quartiers und dessen Freiräume. Unser Konzept „Wabenwerk“ setzt auf eine hexagonale Gebäudestruktur mit gemeinschaftlichen Freiräumen, Wegenetzen und Retentionsflächen. Ergänzt wird der Entwurf durch die CAD-Ausarbeitung eines Gemeinschaftsgartens in Vectorworks sowie physische Arbeitsmodelle.',
      gallery: [
        {
          label: 'Layout Blatt 1',
          src: 'assets/images/semester-02-layout-p1.png',
          caption: 'Layout Plan Blatt 1: Schwarzplan, Lageplan sowie Piktogramme zu Gehölzen, Wegeführung und Grünflächen.'
        },
        {
          label: 'Layout Blatt 2',
          src: 'assets/images/semester-02-layout-p2.png',
          caption: 'Layout Plan Blatt 2: Grundrisse, Isometrie / Explosionsdarstellung des Baukörpers und Schnittansicht.'
        },
        {
          label: 'CAD-Garten',
          src: 'assets/images/semester-02-cad-gemeinschaftsgarten-p1.png',
          caption: 'CAD-Studienarbeit (Vectorworks): Ausführungs-Lageplan des im Projektentwurf integrierten Gemeinschaftsgartens mit Pflanzkonzept, Beetstrukturen und Wegebelägen.'
        },
        {
          label: 'Vorentwurf Skizze',
          src: 'assets/images/semester-02-entwurf-1.png',
          caption: 'Erste Entwürfe: Vorentwurfszeichnung und frühe städtebauliche Variantenuntersuchung im Projektgebiet.'
        },
        {
          label: 'Masterplan Entwurf',
          src: 'assets/images/projekt-02-entwurf.png',
          caption: 'Erste Entwürfe / Kolorierter Masterplan & Freiraumentwurf: Einbindung der Pavilloncluster in Wasserretentionsbecken und Wegenetz.'
        },
        {
          label: 'Modell 1',
          src: 'assets/images/semester-02-modell-01.jpg',
          caption: 'Physisches Arbeitsmodell Wabenwerk (IMG_4607): Nahaufnahme der hexagonalen Baukörperstruktur und der Höhenstaffelung.'
        },
        {
          label: 'Modell 2',
          src: 'assets/images/semester-02-modell-02.jpg',
          caption: 'Physisches Arbeitsmodell Wabenwerk (IMG_4628): Gesamtansicht des Quartiersmodells mit Freiraumzonen und Wegeführung.'
        },
        {
          label: 'Modell 3',
          src: 'assets/images/semester-02-modell-03.jpg',
          caption: 'Physisches Arbeitsmodell Wabenwerk (IMG_4638): Schrägperspektive der Baukörpercluster und des Gemeinschaftshofs.'
        }
      ],
      specs: [
        { label: 'Studiengang', value: 'B.Sc. Grüne Stadtplanung (HSWT)' },
        { label: 'Semester', value: '2. Semester // Modul PuE 1' },
        { label: 'Bewertung', value: 'Note 2,0 (Gruppe)' },
        { label: 'Projektname', value: 'Wabenwerk – Gemeinsam leben, nachhaltig wohnen' },
        { label: 'Autoren', value: 'Möritz, Rentz, Runge, Neudecker' },
        { label: 'Software & CAD', value: 'Vectorworks (2D/3D), Plangrafik' }
      ],
      pdfUrl: 'assets/pdf/Semester-02-LAYOUT-PLAENE.pdf',
      pdfFileSize: 'LAYOUT-PLAN [PDF 2.5 MB]'
    },
    'projekt-sag1': {
      semester: 'MODUL SAG 1 // 2. SEMESTER',
      title: 'Städtebau, Architektur & Gebäudelehre 1',
      location: 'HSWT Freising // SoSe 2025 (Modul SAG 1)',
      typology: 'Gebäudelehre, Axonometrie & Entwurfslehre',
      summary: 'Begleitende Entwurfs- und Konstruktionsarbeiten im Modul SAG 1: Analytische Axonometrie und normgerechte Vermaßung eines architektonischen Baukörpers (Schnitt, Grundriss, Höhenkoten) sowie die freie Entwurfsaufgabe „Traumwohnung David Runge“ mit Zonierung von Wohn-, Arbeits- und Freibereichen.',
      gallery: [
        {
          label: 'Axonometrie',
          src: 'assets/images/sag1-axometrie-p1.png',
          caption: 'SAG 1 Axonometrie: Räumliche Dreitafelprojektion und dreidimensionale Schrägbilddarstellung des Baukörpers.'
        },
        {
          label: 'Vermaßung & Schnitt',
          src: 'assets/images/sag1-axometrie-p2.png',
          caption: 'SAG 1 Vermaßung: Vollständige Bemaßung, Grundrisse, Schnittführungen und Maßketten.'
        },
        {
          label: 'Traumwohnung',
          src: 'assets/images/sag1-traumwohnung-p1.png',
          caption: 'Entwurf SAG 1 „Traumwohnung David Runge“: Raumstruktur, Belichtungsachsen, detaillierter Möblierungsplan und großzügiger Freisitz.'
        }
      ],
      specs: [
        { label: 'Studiengang', value: 'B.Sc. Grüne Stadtplanung (HSWT)' },
        { label: 'Semester', value: '2. Semester // Modul SAG 1' },
        { label: 'Aufgaben', value: 'Axonometrie & Vermaßung + Traumwohnung' },
        { label: 'Umfang', value: '3 Planseiten (vollständig erfasst)' },
        { label: 'Technik', value: 'CAD-Konstruktion & Entwurfszeichnung' }
      ],
      pdfUrl: 'assets/pdf/SAG1-Axonometrie-und-Vermassung.pdf',
      pdfFileSize: 'AXONOMETRIE [PDF]'
    },
    'projekt-03': {
      semester: '03 // SEMESTER 3',
      title: 'Wohnen und Arbeiten im Linzer Kreativquartier',
      location: 'Projektgebiet Linz Kaplanhof // WS 2025/26 (Modul PuE 2)',
      typology: 'Städtebauliche Rahmenplanung & Stadtentwicklung',
      summary: 'Im Modul Planen und Entwerfen 2 (PuE 2) stand die städtebauliche Entwicklung eines gemischten Kreativquartiers im Linzer Kaplanhofviertel im Mittelpunkt. Unser Entwurf „VABANC“ transformiert das Gewerbe- und Industriegebiet in ein lebendiges Quartier mit neuen Freiräumen, Wegeverbindungen und flexiblen Nutzungen.',
      gallery: [
        {
          label: 'Plakat Masterplan',
          src: 'assets/images/semester-03-plakat-p1.png',
          caption: 'Wettbewerbs- und Präsentationsplakat Gruppe 5 VABANC Seite 1: Lageplan, Schwarz-/Grünplan und Leitbild-Diagramme.'
        },
        {
          label: 'Plakat Freiraum',
          src: 'assets/images/semester-03-plakat-p2.png',
          caption: 'Wettbewerbs- und Präsentationsplakat Gruppe 5 VABANC Seite 2: Städtebauliche Dichte, Freiraumtypologien, Schnitte und Strukturmodell.'
        },
        {
          label: 'Ideenplan',
          src: 'assets/images/projekt-03-linz.png',
          caption: 'Beispiel-Entwurf / Ideenplan: Baukörperanordnung, Grünachsen und Gebietsabgrenzung im Kaplanhofviertel.'
        }
      ],
      specs: [
        { label: 'Studiengang', value: 'B.Sc. Grüne Stadtplanung (HSWT)' },
        { label: 'Semester', value: '3. Semester // Modul PuE 2' },
        { label: 'Bewertung', value: 'Note 2,7 (Gruppe)' },
        { label: 'Team', value: 'Projektgruppe 5 (VABANC)' },
        { label: 'Projektgebiet', value: 'Linz (Österreich) // Kaplanhofviertel' },
        { label: 'Themen', value: 'Kreativquartier, Mobilität, Freiraumvernetzung' }
      ],
      pdfUrl: 'assets/pdf/Semester-03-Plakat-VABANC.pdf',
      pdfFileSize: 'PLAKAT VABANC [PDF 25 MB]'
    },
    'projekt-sag2': {
      semester: 'MODUL SAG 2 // 3. SEMESTER',
      title: 'Städtebau, Architektur & Gebäudelehre 2',
      location: 'HSWT Freising // WS 2025/26 (Modul SAG 2)',
      typology: 'Architektonische Hand- & Konstruktionszeichnungen',
      summary: 'Entwurfs- und Zeichenarbeiten aus dem Modul SAG 2 (Städtebau, Architektur und Gebäudelehre 2). Die Scan-Serie dokumentiert die zeichnerische Auseinandersetzung mit Baukörperproportionen, Schnittgeometrien, Grundrisszonierungen und räumlichen Freiraumbezügen über alle Maßstabsebenen hinweg, ergänzt durch die Volumenexperimente.',
      gallery: [
        {
          label: 'Scan 1: Entwurf',
          src: 'assets/images/sag2-scan-p1.png',
          caption: 'SAG 2 Scan Blatt 1: Städtebauliche Verortung, Baukörperfiguration und freiräumliche Vernetzung.'
        },
        {
          label: 'Scan 2: Grundriss',
          src: 'assets/images/sag2-scan-p2.png',
          caption: 'SAG 2 Scan Blatt 2: Grundrissorganisation, Erschließungsachsen und Raumhierarchien.'
        },
        {
          label: 'Scan 3: Schnitte',
          src: 'assets/images/sag2-scan-p3.png',
          caption: 'SAG 2 Scan Blatt 3: Gebäudehöhenschnitte, Geländeanschluss und räumliche Proportionen.'
        },
        {
          label: 'Scan 4: Details',
          src: 'assets/images/sag2-scan-p4.png',
          caption: 'SAG 2 Scan Blatt 4: Isometrische Analyse, Baukörperfügung und konstruktive Details.'
        },
        {
          label: 'Scan 5: Raum',
          src: 'assets/images/sag2-scan-p5.png',
          caption: 'SAG 2 Scan Blatt 5: Plastische Durcharbeitung, Fassadenabwicklung und Raumwirkung.'
        },
        {
          label: 'Volumenexperimente',
          src: 'assets/images/sag2-volumenexperimente.png',
          caption: 'Volumenexperimente: Eine Übung aus dem Modul zur Untersuchung räumlicher Baukörper und Proportionen.'
        }
      ],
      specs: [
        { label: 'Studiengang', value: 'B.Sc. Grüne Stadtplanung (HSWT)' },
        { label: 'Semester', value: '3. Semester // Modul SAG 2' },
        { label: 'Darstellung', value: 'Konstruktionszeichnung, Schnitt & Axonometrie' },
        { label: 'Technik', value: 'Handzeichnung, Bleistift & Tusche' }
      ],
      pdfUrl: 'assets/pdf/SAG2-Scans-David-Runge.pdf',
      pdfFileSize: 'SAG 2 SCANS [PDF 3.6 MB]'
    },
    'projekt-04': {
      semester: '04 // SEMESTER 4',
      title: 'Klimakulturstadt Bad Wimpfen',
      location: 'Bad Wimpfen // SoSe 2026 (Modul PuE 3)',
      typology: 'Landscape Urbanism & Klimaanpassung',
      summary: 'Im Modul Planen und Entwerfen 3 (PuE 3) ging es um ein städtebauliches und freiräumliches Gesamtkonzept für die historische Kur- und Denkmalstadt Bad Wimpfen. Der Entwurf verbindet Denkmalschutz mit Maßnahmen zur Klimaanpassung – wie Grünringe, Kaltluftschneisen und Retentionsflächen zum Schutz vor Starkregen und Hitze. Dazu kommen drei eigens erstellte Analysekarten.',
      gallery: [
        {
          label: 'Plakat Seite 1',
          src: 'assets/images/semester-04-plakat-p1.png',
          caption: 'Präsentationsplakat „Wimpfen Scapes“ Seite 1: Drivers of Landscape Development, Green Rings & Spatial Concept Map.'
        },
        {
          label: 'Plakat Seite 2',
          src: 'assets/images/semester-04-plakat-p2.png',
          caption: 'Präsentationsplakat „Wimpfen Scapes“ Seite 2: Freiraumachsen, Höhenentwicklung, Klimaresilienz und städtebauliche Profile.'
        },
        {
          label: 'Klimapikto',
          src: 'assets/images/semester-04-klimapikto.png',
          caption: 'Eigene Analysekarte: Bioklimatische Wirkungsräume, Hitzeinseln und Kaltluftbahnen in Bad Wimpfen.'
        },
        {
          label: 'Mobilitätspikto',
          src: 'assets/images/semester-04-mobilitaetspikto.png',
          caption: 'Eigene Analysekarte: Fuß- und Radwegenetze, Barrieren, Topographie und Mobilitätsknotenpunkte.'
        },
        {
          label: 'Potenzialpikto',
          src: 'assets/images/semester-04-potenzialpikto.png',
          caption: 'Eigene Analysekarte: Freiraumpotenziale, historische Hangkanten und Vernetzungsachsen.'
        }
      ],
      specs: [
        { label: 'Studiengang', value: 'B.Sc. Grüne Stadtplanung (HSWT)' },
        { label: 'Semester', value: '4. Semester // Modul PuE 3' },
        { label: 'Bewertung', value: 'Note 2,7 (Gruppe)' },
        { label: 'Projektname', value: 'Wimpfen Scapes – Klimakulturstadt' },
        { label: 'Methode', value: 'Landscape Urbanism & Klimaanpassung' },
        { label: 'Bestandteile', value: 'Präsentationsplakat (2 Seiten) & 3 Analysekarten' }
      ],
      pdfUrl: 'assets/pdf/Semester-04-Bad-Wimpfen.pdf',
      pdfFileSize: 'PLAKAT BAD WIMPFEN [PDF 21 MB]'
    },
    'projekt-kuenstlerisch': {
      semester: 'KÜNSTLERISCHE ARBEITEN // STUDIUM',
      title: 'Künstlerische Arbeiten & Gestaltung',
      location: 'HSWT Freising // 1., 2. & 4. Semester',
      typology: 'Plastische Formstudien & Freies Zeichnen',
      summary: 'Künstlerische Arbeiten aus den Modulen Grundlagen der Gestaltung (1. & 2. Semester) und Künstlerische Strategien (4. Semester) an der HSWT Freising.',
      gallery: [
        {
          label: 'Bild 1 (Grundlagen der Gestaltung)',
          src: 'assets/images/kreativ/gestaltung-01.jpg',
          caption: ''
        },
        {
          label: 'Bild 2 (Grundlagen der Gestaltung)',
          src: 'assets/images/kreativ/gestaltung-02.jpg',
          caption: ''
        },
        {
          label: 'Bild 3 (Grundlagen der Gestaltung)',
          src: 'assets/images/kreativ/gestaltung-03.jpg',
          caption: ''
        },
        {
          label: 'Bild 4 (Künstlerische Strategien // 4. Sem.)',
          src: 'assets/images/kreativ/kuenstlerische-strategien-01.jpg',
          caption: ''
        }
      ],
      specs: [
        { label: 'Module', value: 'Grundlagen der Gestaltung & Künstlerische Strategien' },
        { label: 'Hochschule', value: 'HSWT Freising' },
        { label: 'Semester', value: '1., 2. & 4. Semester' },
        { label: 'Disziplinen', value: 'Plastische Raumstudien & Freihandzeichnung' }
      ],
      pdfUrl: null
    },
    'projekt-realschule': {
      semester: 'KREATIVE ARBEITEN // REALSCHULE',
      title: 'Kreative Arbeiten',
      location: 'Kastulus Realschule Moosburg',
      typology: 'Freies Zeichnen & Gestalten',
      summary: 'Ausgewählte kreative und bildnerische Arbeiten aus der Realschulzeit an der Kastulus Realschule Moosburg.',
      gallery: [
        {
          label: 'Bild 1',
          src: 'assets/images/kreativ/realschule-01.jpg',
          caption: ''
        },
        {
          label: 'Bild 2',
          src: 'assets/images/kreativ/realschule-02.jpg',
          caption: ''
        },
        {
          label: 'Bild 3',
          src: 'assets/images/kreativ/realschule-03.jpg',
          caption: ''
        },
        {
          label: 'Bild 4',
          src: 'assets/images/kreativ/realschule-04.jpg',
          caption: ''
        },
        {
          label: 'Bild 5',
          src: 'assets/images/kreativ/realschule-05.jpg',
          caption: ''
        }
      ],
      specs: [
        { label: 'Bereich', value: 'Bildnerisches Gestalten & Zeichnen' },
        { label: 'Schule', value: 'Kastulus Realschule Moosburg' },
        { label: 'Umfang', value: '5 Arbeiten' },
        { label: 'Technik', value: 'Zeichnung, Malerei & Grafik' }
      ],
      pdfUrl: null
    }
  };

  /* ==========================================================================
     2. MODAL CONTROLLER (PROJEKT-DETAIL & GALERIE)
     ========================================================================== */
  const modal = document.getElementById('projectModal');
  const modalBackdrop = modal ? modal.querySelector('.modal-backdrop') : null;
  const modalCloseBtn = modal ? modal.querySelector('.modal-close-btn') : null;
  const modalSemester = document.getElementById('modalSemester');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const modalSummary = document.getElementById('modalSummary');
  const modalSpecs = document.getElementById('modalSpecs');
  const modalPdfBtn = document.getElementById('modalPdfBtn');
  const modalGalleryNav = document.getElementById('modalGalleryNav');
  const modalZoomBtn = document.getElementById('modalZoomBtn');

  let currentProject = null;
  let currentImageSrc = '';

  function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data || !modal) return;
    currentProject = data;

    modalSemester.textContent = data.semester;
    modalTitle.textContent = data.title;
    modalSummary.textContent = data.summary;

    // Galerie-Tabs aufbauen
    if (modalGalleryNav) {
      if (data.gallery && data.gallery.length > 1) {
        modalGalleryNav.style.display = 'flex';
        modalGalleryNav.innerHTML = data.gallery.map((item, idx) => `
          <button type="button" class="modal-tab-btn ${idx === 0 ? 'active' : ''}" data-gallery-idx="${idx}">
            ${item.label}
          </button>
        `).join('');

        // Event-Listener für Tabs
        modalGalleryNav.querySelectorAll('.modal-tab-btn').forEach(tab => {
          tab.addEventListener('click', () => {
            const idx = parseInt(tab.getAttribute('data-gallery-idx'), 10);
            selectGalleryItem(idx);
          });
        });
      } else {
        modalGalleryNav.style.display = 'none';
      }
    }

    // Erstes Galerie-Element auswählen
    selectGalleryItem(0);

    // Spezifikationen rendern
    modalSpecs.innerHTML = data.specs.map(item => `
      <div class="modal-specs-item">
        <span class="spec-k">${item.label}</span>
        <span class="spec-v">${item.value}</span>
      </div>
    `).join('');

    // PDF Download Link (falls vorhanden)
    const modalDownloadBox = modal.querySelector('.modal-download-box');
    if (modalDownloadBox) {
      if (data.pdfUrl) {
        modalDownloadBox.style.display = 'block';
        modalPdfBtn.href = data.pdfUrl;
        modalPdfBtn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          ${data.pdfFileSize} ÖFFNEN / HERUNTERLADEN
        `;
      } else {
        modalDownloadBox.style.display = 'none';
      }
    }

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function selectGalleryItem(idx) {
    if (!currentProject || !currentProject.gallery || !currentProject.gallery[idx]) return;
    const item = currentProject.gallery[idx];
    currentImageSrc = item.src;
    modalImage.src = item.src;
    modalImage.alt = item.label;

    if (item.caption && item.caption.trim() !== '') {
      modalCaption.textContent = item.caption;
      modalCaption.style.display = 'block';
    } else {
      modalCaption.textContent = '';
      modalCaption.style.display = 'none';
    }

    if (modalGalleryNav) {
      modalGalleryNav.querySelectorAll('.modal-tab-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === idx);
      });
    }
  }

  function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Event Listener für Trigger Buttons auf der Seite
  document.querySelectorAll('[data-project-trigger]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = trigger.getAttribute('data-project-trigger');
      openProjectModal(projectId);
    });
  });

  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);

  /* ==========================================================================
     3. LIGHTBOX / ZOOM-VIEWER FÜR GROSSE PLAKATE & PLÄNE
     ========================================================================== */
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxOpenNewTab = document.getElementById('lightboxOpenNewTab');

  function openLightbox(src) {
    if (!lightbox || !lightboxImg || !src) return;
    lightboxImg.src = src;
    if (lightboxOpenNewTab) {
      lightboxOpenNewTab.href = src;
    }
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    if (!modal.classList.contains('is-open')) {
      document.body.style.overflow = '';
    }
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-img-wrap')) {
        closeLightbox();
      }
    });
  }

  // Event Listener für Lightbox Trigger (z. B. Kreative Arbeiten)
  document.querySelectorAll('[data-lightbox-trigger]').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const src = card.getAttribute('data-lightbox-trigger');
      if (src) openLightbox(src);
    });
  });

  // Zoom-Button im Modal
  if (modalZoomBtn) {
    modalZoomBtn.addEventListener('click', () => {
      if (currentImageSrc) {
        openLightbox(currentImageSrc);
      }
    });
  }

  // Klick auf das Bild im Modal öffnet ebenfalls die Lightbox
  if (modalImage) {
    modalImage.style.cursor = 'zoom-in';
    modalImage.addEventListener('click', () => {
      if (currentImageSrc) {
        openLightbox(currentImageSrc);
      }
    });
  }

  // Escape-Taste: Schließt Lightbox oder Modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightbox && lightbox.classList.contains('is-open')) {
        closeLightbox();
      } else if (modal && modal.classList.contains('is-open')) {
        closeProjectModal();
      }
    }
  });

  /* ==========================================================================
     4. STICKY HEADER & ACTIVE NAVIGATION OBSERVER
     ========================================================================== */
  const header = document.querySelector('.site-header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.style.borderBottomColor = 'rgba(18, 20, 19, 0.15)';
    } else {
      header.style.borderBottomColor = 'var(--border-color)';
    }
  }, { passive: true });

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  /* ==========================================================================
     5. MOBILE NAVIGATION TOGGLE
     ========================================================================== */
  const mobileToggle = document.querySelector('.mobile-toggle');
  if (mobileToggle && header) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      header.classList.toggle('is-mobile-open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('is-mobile-open');
      });
    });

    const mobileCta = header.querySelector('.nav-cta-mobile');
    if (mobileCta) {
      mobileCta.addEventListener('click', () => {
        header.classList.remove('is-mobile-open');
      });
    }

    document.addEventListener('click', (e) => {
      if (header.classList.contains('is-mobile-open') && !header.contains(e.target)) {
        header.classList.remove('is-mobile-open');
      }
    });
  }

  /* ==========================================================================
     6. SMOOTH SCROLL BACK-TO-TOP
     ========================================================================== */
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});
