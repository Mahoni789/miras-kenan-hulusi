(function () {
  const root = document.documentElement;
  const button = document.getElementById('orig-mode-button');
  if (!button) return;

  const STORAGE_KEY = 'origViewMode';
  let mode = localStorage.getItem(STORAGE_KEY) || 'both';

  function applyMode(m) {
    if (m !== 'both' && m !== 'orig-only') m = 'both';
    root.classList.toggle('view-both', m === 'both');
    root.classList.toggle('view-orig-only', m === 'orig-only');
    button.title = (m === 'both') ? button.dataset.titleHide : button.dataset.titleShow;
    button.setAttribute('aria-pressed', m === 'both' ? 'true' : 'false');
    localStorage.setItem(STORAGE_KEY, m);
    mode = m;
  }

  applyMode(mode);

  button.addEventListener('click', function () {
    applyMode(mode === 'both' ? 'orig-only' : 'both');
  });
})();