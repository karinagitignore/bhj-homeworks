const tabNavigations = document.querySelectorAll('.tab__navigation');

tabNavigations.forEach(nav => {
  const tabs = Array.from(nav.querySelectorAll('.tab'));

  const contentsContainer = nav.nextElementSibling;
  const contents = Array.from(contentsContainer.querySelectorAll('.tab__content'));

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('tab_active'));
      tab.classList.add('tab_active');

      contents.forEach(c => c.classList.remove('tab__content_active'));
      contents[index].classList.add('tab__content_active');
    });
  });
});