const header = document.querySelector('.header');

if (header) {

  const menuItems = document.querySelectorAll('.menu__item');
  const managementSubMenus = document.querySelectorAll('.expand-menu__sub-menu');
  //const subMenuItems = document.querySelectorAll('.expand-menu__sub-menu > .link');
  const headerMenu = document.querySelector('.header__menu');
  const headerOverlay = document.querySelector('.header__overlay');

  function init() {
    positionMenuItems(menuItems);
    displayExpandMenuItems(menuItems);
    //displayExpandSubMenuItems(subMenuItems);
    handleOverlayClick();
  }

  window.addEventListener('resize', () => {
    positionMenuItems(menuItems);
  });

  init();

  function displayExpandMenuItems(menuItems) {
    menuItems.forEach((menuItem) => {
      menuItem.querySelector('.menu__name').addEventListener('click', (e) => {
        e.preventDefault();
        toogleMenuItem(menuItem);
      });
    });
  }

  /*
   function displayExpandSubMenuItems(submenuItems) {
   console.log(submenuItems);
   submenuItems.forEach((submenuItem) => {
   console.log(submenuItem);
   submenuItem.addEventListener('click', (e) => {
   e.preventDefault();
   toogleSubmenuItem(submenuItem);
   });
   });
   }*/

  if (managementSubMenus) {
    managementSubMenus.forEach((element) => {
      const subMenus = element.querySelectorAll('.link--arrow');
      subMenus.forEach((link) => {
        let name = link.dataset.name;
        let submenus = element.querySelector('.link--arrow[data-name=' + name + ']');

        link.addEventListener('click',
            () => {
              element.querySelector('.link--arrow').classList.remove('active');
              link.classList.remove('active');
              submenus.classList.add('active');
              $('.expand-menu__sub-item').classList.remove('visible');
              $('.expand-menu__sub-item[data-name=' + name + ']').classList.add('visible');
            });
      });
    });
  }

  function handleOverlayClick() {
    headerOverlay.addEventListener('click', () => {
      closeMenu();
    });
  }

  function closeMenu() {
    const currentMenuItem = document.querySelector('.menu__item.active');

    if (currentMenuItem) {
      currentMenuItem.classList.remove('active');
      headerOverlay.classList.remove('active');
    }
  }

  function toogleMenuItem(menuItem) {
    const currentMenuItem = document.querySelector('.menu__item.active');

    if (currentMenuItem === menuItem) {
      menuItem.classList.remove('active');
      headerOverlay.classList.remove('active');
    }
    else if (currentMenuItem) {
      currentMenuItem.classList.remove('active');
      menuItem.classList.add('active');
    }
    else {
      menuItem.classList.add('active');
      headerOverlay.classList.add('active');
    }
  }

  /*
   function toogleSubmenuItem(submenuItem) {
   console.log(submenuItem);
   const currentSubmenuItem = document.querySelector('.menu__item.active');

   if (currentSubmenuItem === submenuItem) {
   submenuItem.classList.remove('visible');
   headerOverlay.classList.remove('visible');
   }
   else if (currentSubmenuItem) {
   currentSubmenuItem.classList.remove('visible');
   submenuItem.classList.add('visible');
   }
   else {
   submenuItem.classList.add('visible');
   headerOverlay.classList.add('visible');
   }
   }*/
  function getElementLeftPosition(element) {
    const eleRect = element.getBoundingClientRect();
    const targetRect = header.getBoundingClientRect();
    return eleRect.left - targetRect.left;
  }

  function getElementRightPosition(element) {
    const eleRect = element.getBoundingClientRect();
    const targetRect = header.getBoundingClientRect();
    return eleRect.right - targetRect.left;
  }

  function positionMenuItems(menuItems) {
    const headerPadding = parseInt(window.getComputedStyle(header).getPropertyValue('padding-left'), 10);
    const headerMenuPadding = parseInt(window.getComputedStyle(headerMenu).getPropertyValue('padding-left'), 10);

    menuItems.forEach((menuItem) => {
      const expandMenuItem = menuItem.querySelector('.expand-menu');

      if (menuItem.classList.contains('menu__item--full')) {
        const expandLeftPosition = getElementLeftPosition(menuItem);
        const currentHeaderContent = document.querySelector('.header__content');
        const headerContentPosition = getElementLeftPosition(currentHeaderContent);
        expandMenuItem.style.left = `${-(expandLeftPosition -headerContentPosition)}px`;
        // expandMenuItem.style.left = `${headerPadding + headerMenuPadding - expandLeftPosition}px`;
      }
      else if ((header.offsetWidth - getElementRightPosition(expandMenuItem)) < headerPadding) {
        menuItem.classList.add('menu__item--right');
        menuItem.classList.remove('menu__item--left');
      }
      else {
        menuItem.classList.remove('menu__item--right');
        if (menuItem.getAttribute('data-position') === 'left') {
          menuItem.classList.add('menu__item--left');
        }
      }
    });
  }
}
