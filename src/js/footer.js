class CollapsibleFooter extends Collapsible {
  constructor() {
    super();
    if (!this.options.breakpoint) {
      this.options.breakpoint = parseInt(768);
    }
    this.windowWidth = window.innerWidth;
    this.displayDetails();
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

  open(group) {
    if (window.innerWidth < this.options.breakpoint) {
      super.open(group);
    }
  }

  close(group) {
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

let visibility1 = false

clickable1 = document.getElementById('accordion-header')
accordion1Content = document.getElementById('accordion-1-content')
accordion1Content.style.display = "none";


clickable1.addEventListener("click", () => {
  visibility1 = !visibility1;
  if (visibility1) {
    accordion1Content.style.display = "block";
  } else {
    accordion1Content.style.display = "none";

  }

});

let visibility2 = false

clickable2 = document.getElementById('accordion-header-2')
accordion2Content = document.getElementById('accordion-2-content')
accordion2Content.style.display = "none";

clickable2.addEventListener("click", () => {
  visibility2 = !visibility2;
  if (visibility2) {
    accordion2Content.style.display = "block";
  } else {
    accordion2Content.style.display = "none";

  }
});


let visibility3 = false

clickable3 = document.getElementById('accordion-header-3')
accordion3Content = document.getElementById('accordion-3-content')
accordion3Content.style.display = "none";

clickable3.addEventListener("click", () => {
  visibility3 = !visibility3;
  if (visibility3) {
    accordion3Content.style.display = "block";
  } else {
    accordion3Content.style.display = "none";

  }
});


let visibility4 = false

clickable4 = document.getElementById('accordion-header-4')
accordion4Content = document.getElementById('accordion-4-content')
accordion4Content.style.display = "none";

clickable4.addEventListener("click", () => {
  visibility4 = !visibility4;
  if (visibility4) {
    accordion4Content.style.display = "block";
  } else {
    accordion4Content.style.display = "none";
  }
});