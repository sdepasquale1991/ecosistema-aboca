// 1. Gestione delle schede (Tabs) nella sezione L'Impegno

function openTab(evt, tabId) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => {
    content.classList.remove('active');
  });

  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active');
  });

  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}


// 2. Mostra/Nascondi i numeri extra su mobile nella sezione I Dati

function toggleExtraKpis() {
  const extraCards = document.querySelectorAll('.kpi-extra');
  const button = document.getElementById('btnKpi');
  let areHidden = false;

  extraCards.forEach(card => {
    if (card.style.display === 'none' || card.style.display === '') {
      card.style.display = 'flex';
      areHidden = false;
    } else {
      card.style.display = 'none';
      areHidden = true;
    }
  });

  if (areHidden) {
    button.textContent = 'Mostra tutti i numeri (+)';
  } else {
    button.textContent = 'Mostra meno numeri (-)';
  }
}


// 3. Azione al clic sul pulsante Scarica la Relazione 2025
function downloadReport() {
  window.open('relazione-impatto-aboca-2025.pdf', '_blank'); // Inserisci qui il nome esatto del tuo file PDF
}


// 4 & 5. Back to Top button + Sticky Header on scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  const backToTopBtn = document.getElementById('backToTop');

  // Aggiunge lo sfondo scuro al menu dopo 50px di scroll
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // Mostra il tasto "Torna su" dopo 300px di scroll
  if (backToTopBtn) {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
