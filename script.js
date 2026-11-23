/* Shared, keyboard-operable mobile navigation. */
(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const primaryNav = document.querySelector('#primary-nav');

  if (!menuToggle || !primaryNav) return;

  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    primaryNav.classList.remove('open');
  };

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    primaryNav.classList.toggle('open', !isExpanded);
  });

  menuToggle.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  primaryNav.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuToggle.focus();
    }
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 761px)').matches) closeMenu();
  });
})();

/* Live GitHub profile card with graceful API/network error handling. */
(() => {
  const status = document.querySelector('#github-status');
  const profileCard = document.querySelector('#github-profile');
  if (!status || !profileCard) return;

  const loadProfile = async () => {
    try {
      const response = await fetch('https://api.github.com/users/YawtDevelopment', {
        headers: { Accept: 'application/vnd.github+json' }
      });

      if (!response.ok) {
        throw new Error(response.status === 404 ? 'GitHub profile not found.' : `GitHub returned an error (${response.status}).`);
      }

      const profile = await response.json();
      if (!profile || !profile.login || !profile.html_url) {
        throw new Error('GitHub returned incomplete profile data.');
      }

      const avatar = document.querySelector('#github-avatar');
      const name = document.querySelector('#github-name');
      avatar.src = profile.avatar_url || '';
      avatar.alt = `${profile.login}'s GitHub avatar`;
      name.textContent = profile.name || profile.login;
      name.href = profile.html_url;
      document.querySelector('#github-bio').textContent = profile.bio || 'Cybersecurity and IT learner sharing projects and progress.';
      document.querySelector('#github-repos').textContent = Number(profile.public_repos) || 0;
      document.querySelector('#github-followers').textContent = Number(profile.followers) || 0;

      profileCard.hidden = false;
      status.hidden = true;
    } catch (error) {
      status.textContent = `Unable to load GitHub profile right now. ${error instanceof Error ? error.message : 'Please try again later.'}`;
    }
  };

  loadProfile();
})();
