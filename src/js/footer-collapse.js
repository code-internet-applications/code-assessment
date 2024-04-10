class FooterCollapse extends HTMLElement {
  constructor() {
    super();
    this.querySelectorAll('.footer-block--menu__link.level-1').forEach(title => {
      title.addEventListener('click', () => {
        const classList = title.parentElement.classList;
        const classArray = Array.from(classList); 
        const forloopIndexClass = classArray.find(className => className.includes('forloop-index'));
        
        // Close all other lists
        this.closeAllLists(forloopIndexClass);
        
        // Then toggle the clicked one
        this.toggle(forloopIndexClass);
      });
    });
  }

  toggle(index) {
    const list = this.querySelector(`.footer-block--menu__list.level-2.${index}`);
    if (list) {
      const display = window.getComputedStyle(list).display;
      list.style.display = display === 'none' ? 'block' : 'none';
    }
  }

  closeAllLists(exceptIndex) {
    // Close all lists except the one that matches the passed index
    this.querySelectorAll('.footer-block--menu__list.level-2').forEach(list => {
      if (!list.classList.contains(exceptIndex)) {
        list.style.display = 'none';
      }
    });
  }
}

if (!customElements.get('footer-collapse')) {
  customElements.define('footer-collapse', FooterCollapse);
}
