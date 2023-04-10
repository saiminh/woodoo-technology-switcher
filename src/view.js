const initTechnologySwitcher = () => {
  const switcher = document.querySelector('.woodoo-tech-switcher');
  let switcherOffset = switcher.offsetTop;
  let switcherWidth = switcher.offsetWidth;

  const navbar = document.querySelector('header.wp-block-template-part');
  
  const placeHolder = document.createElement('div');
  placeHolder.classList.add('woodoo-tech-switcher-placeholder');
  placeHolder.style.height = `${switcher.offsetHeight}px`;
  placeHolder.style.position = 'relative';

  setScrollPosition();
  
  const currentUrl = window.location.href;
  
  switcher.querySelectorAll('.woodoo-tech-switcher-button').forEach((button) => {
    currentUrl.indexOf(button.getAttribute('href')) > -1 ? button.classList.add('active') : null;
    currentUrl.indexOf(button.getAttribute('href')) > -1 ? button.nextElementSibling.classList.add('active') : null;
  })

  window.addEventListener('scroll', () => {
    setScrollPosition();
  })
  window.addEventListener('resize', () => {
    switcherOffset = switcher.offsetTop;
    switcherWidth = switcher.offsetWidth;
    setScrollPosition();
  })

  function setScrollPosition() {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= switcherOffset - navbar.offsetHeight) {
      switcher.classList.add('fixed');
      switcher.parentNode.insertBefore(placeHolder, switcher);
      switcher.style.top = `${navbar.offsetHeight}px`;
      switcher.style.width = `calc(100% - 2 * var(--wp--preset--spacing--outer))`;
    }
    else {
      switcher.classList.remove('fixed');
      switcher.style.width = `100%`;
      placeHolder.remove();
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  initTechnologySwitcher();
})