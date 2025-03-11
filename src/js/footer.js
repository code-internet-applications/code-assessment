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

document.addEventListener("DOMContentLoaded",function(){
  document.querySelectorAll(".footer-block--menu__link.level-1").forEach(link => {
    link.addEventListener("click", function(event){
      event.preventDefault();
      let parentLi = link.closest("li.level-1");
      if(parentLi){
        let subMenu = parentLi.querySelector("ul");
        if (subMenu) {
          subMenu.classList.toggle("active");
        }
      }
    })
  })
})