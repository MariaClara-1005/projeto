//console.log(document)
const itens = document.querySelectorAll('.item');
itens.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        
        const itemSelecionado = document.querySelector('.selecionado');
        itemSelecionado.classList.remove('selecionado');

        item.classList.add('selecionado');

        const imagemItemGrande = document.querySelector('.item-grande');

        /*const idItem = item.attributes.id.value;
        imagemItemGrande.src = `./src/imagens/${idItem}.jpg`;*/

        const nomeItem = document.getElementById('nome-item');
        nomeItem.innerText = item.getAttribute('data-name');

        const descricaoItem = document.getElementById('descricao-item');
        descricaoItem.innerText = item.getAttribute('data-description')
    })
})
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();