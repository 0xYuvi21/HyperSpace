(function() {
  const isDark = localStorage.getItem('hs_dark_mode') === 'true';
  if (isDark) {
    document.documentElement.classList.add('dark-mode');
  }

  // Update tick mark on load after DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    updateDarkModeTick(isDark);
  });
})();

function updateDarkModeTick(isDark) {
  // Find the dark mode dropdown item by its text content or icon
  const pdItems = document.querySelectorAll('.pd-item');
  let darkModeItem = null;
  pdItems.forEach(item => {
    if (item.textContent.includes('Dark Mode')) {
      darkModeItem = item;
    }
  });

  if (darkModeItem) {
    let tick = darkModeItem.querySelector('.dm-tick');
    if (isDark) {
      if (!tick) {
        // Add green tick SVG
        darkModeItem.insertAdjacentHTML('beforeend', '<svg class="dm-tick" style="margin-left:auto;color:var(--green);" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>');
      }
    } else {
      if (tick) {
        tick.remove();
      }
    }
  }
}

window.toggleDarkMode = function(e) {
  if (e) e.stopPropagation();
  const isDark = document.documentElement.classList.contains('dark-mode');
  if (isDark) {
    document.documentElement.classList.remove('dark-mode');
    localStorage.setItem('hs_dark_mode', 'false');
    updateDarkModeTick(false);
  } else {
    document.documentElement.classList.add('dark-mode');
    localStorage.setItem('hs_dark_mode', 'true');
    updateDarkModeTick(true);
  }
};
