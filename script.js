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

/* Graduation countdown: May 15, 2028 at 9:00 AM in the visitor's local time zone. */
(() => {
  const display = document.querySelector('#countdown-display');
  const completionMessage = document.querySelector('#countdown-complete');
  const daysElement = document.querySelector('#days');
  const hoursElement = document.querySelector('#hours');
  const minutesElement = document.querySelector('#minutes');
  const secondsElement = document.querySelector('#seconds');

  // This script is shared across pages; skip the countdown where its markup is absent.
  if (!display || !completionMessage || !daysElement || !hoursElement || !minutesElement || !secondsElement) return;

  const graduationDate = new Date(2028, 4, 15, 9, 0, 0).getTime();
  let intervalId;

  const updateCountdown = () => {
    const distance = graduationDate - Date.now();

    if (distance <= 0) {
      window.clearInterval(intervalId);
      display.hidden = true;
      completionMessage.hidden = false;
      return;
    }

    daysElement.textContent = Math.floor(distance / 86400000).toString();
    hoursElement.textContent = String(Math.floor((distance % 86400000) / 3600000)).padStart(2, '0');
    minutesElement.textContent = String(Math.floor((distance % 3600000) / 60000)).padStart(2, '0');
    secondsElement.textContent = String(Math.floor((distance % 60000) / 1000)).padStart(2, '0');
  };

  updateCountdown();
  if (graduationDate > Date.now()) {
    intervalId = window.setInterval(updateCountdown, 1000);
  }
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
