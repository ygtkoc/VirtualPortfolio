function makeActive(element) {
    var navItems = document.querySelectorAll('nav ul li a');
    for (var i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove('active');
    }
    element.classList.add('active');
  }


  const tabLinks = document.querySelectorAll('.tab-link');
  const tabs = document.querySelectorAll('.tab');
  
  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = link.dataset.tab;
      activateTab(tabId);
    });
  });
  
  function activateTab(tabId) {
    tabs.forEach(tab => {
      if (tab.id === tabId) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  
    tabLinks.forEach(link => {
      if (link.dataset.tab === tabId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }