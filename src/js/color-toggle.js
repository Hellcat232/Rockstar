import { refs } from './refs';

export function colorSchemeChange(e) {
  e.preventDefault();
  localStorage.removeItem('colorScheme');
  refs.root.classList.toggle('dark');
  if (refs.root.classList.contains('dark')) {
    localStorage.setItem('colorScheme', 'dark');
  } else {
    localStorage.setItem('colorScheme', 'light');
  }
}

export function choosenColorScheme() {
  localStorage.getItem('colorScheme');
  if (localStorage.getItem('colorScheme') == 'dark') {
    refs.root.classList.add('dark');
    refs.headerToggle.checked = true;
  } else {
    refs.root.classList.remove('dark');
    refs.headerToggle.checked = false;
  }
}

refs.headerToggle.addEventListener('change', colorSchemeChange);
choosenColorScheme();
