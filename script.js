// Wolves Pack Studios - small site interactions. No framework required.

const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

function updateHeader() {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 8);
}
window.addEventListener('scroll', updateHeader);
updateHeader();

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Convert normal YouTube watch/short URLs into embedded players.
function youtubeId(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtu.be')) return u.pathname.slice(1).split('/')[0];
    if (u.hostname.includes('youtube.com')) {
      if (u.searchParams.get('v')) return u.searchParams.get('v');
      const parts = u.pathname.split('/').filter(Boolean);
      if (parts[0] === 'shorts' || parts[0] === 'embed') return parts[1];
    }
  } catch (_) {}
  return null;
}

document.querySelectorAll('.youtube-frame[data-youtube]').forEach(frame => {
  const id = youtubeId(frame.dataset.youtube);
  if (!id || id === 'YOUR_VIDEO_ID') {
    frame.innerHTML = '<div class="video-embed">PASTE A YOUTUBE URL IN data-youtube</div>';
    return;
  }
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${encodeURIComponent(id)}`;
  iframe.title = 'Wolves Pack Studios video';
  iframe.loading = 'lazy';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowFullscreen = true;
  frame.replaceChildren(iframe);
});
