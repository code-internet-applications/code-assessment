class CollapsibleFooter extends Collapsible {
  constructor() {
    super();
    if (!this.options.breakpoint) {
      this.options.breakpoint = parseInt(768);
    }
    this.windowWidth = window.innerWidth;
    this.displayDetails();
    this.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggle();
    });
  }

  construct() {
    super.construct();

    window.addEventListener('resize', () => {
      if (this.windowWidth == window.innerWidth) {
        return
      }
      this.windowWidth = window.innerWidth;
      this.displayDetails();
    });
  }
  toggle() {
    this.classList.toggle("footer-open");
    this.querySelector(".level-2").classList.toggle("footer-open");
    this.querySelector("svg").classList.toggle("footer-open");
  }
  open(group) {
    console.log("open");
    if (window.innerWidth < this.options.breakpoint) {
      super.open(group);
    }
  }

  close(group) {
    console.log("close");
    if (window.innerWidth < this.options.breakpoint) {
      super.close(group);
    }
  }

  displayDetails() {
    if (window.innerWidth >= this.options.breakpoint) {
      this.openAll();
    } else {
      this.closeAll();
    }
  }

}

if (!customElements.get('collapsible-footer')) {
  customElements.define('collapsible-footer', CollapsibleFooter);
}
