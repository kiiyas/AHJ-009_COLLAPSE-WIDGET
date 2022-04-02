export default class Collapse {
  constructor() {
    // this.container = container || document.body;
    this.btns = document.querySelectorAll('.collapsible-btn');
  }

  start() {
    for (const btn of this.btns) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.classList.toggle('active');
        const content = btn.closest('div.btn-container').nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          // потому что обратные кавычки не срабатывают
          // eslint-disable-next-line prefer-template
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }
  }
}
