const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const themeSwitcher = document.querySelector('#theme-switch-toggle');

themeSwitcher.addEventListener('change', onThemeChange);

function onThemeChange(evt) {
    const checked = evt.currentTarget.checked
    if (checked) {
        checkedThemeSwitcher();
    }

    if (!checked) {
        uncheckedThemeSwitcher()
    }
}

getCurrentTheme()

function getCurrentTheme() {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === Theme.LIGHT) {
        uncheckedThemeSwitcher()
    }

    if (currentTheme === Theme.DARK) {
        checkedThemeSwitcher()
    }
}


function checkedThemeSwitcher() {
      document.body.classList.add(Theme.DARK);
        document.body.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
        themeSwitcher.checked = true
}

function uncheckedThemeSwitcher() {
    
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
    themeSwitcher.checked = false
}