(()=>{"use strict";(new class{constructor(){this.btns=document.querySelectorAll(".collapsible-btn")}start(){for(const t of this.btns)t.addEventListener("click",(e=>{e.preventDefault(),t.classList.toggle("active");const s=t.closest("div.btn-container").nextElementSibling;s.style.maxHeight?s.style.maxHeight=null:s.style.maxHeight=s.scrollHeight+"px"}))}}).start()})();