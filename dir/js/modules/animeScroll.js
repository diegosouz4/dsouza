const classAnime="animate",debounce=(a,n,e)=>{let t;return(...i)=>{const o=this,c=e&&!t;clearTimeout(t),t=setTimeout((()=>{t=null,e||a.apply(o,i)}),n),c&&a.apply(o,i)}},animaScroll=a=>{const n=window.scrollY+3*window.innerHeight/4;a.forEach((a=>{n>a.offsetTop?a.classList.add("animate"):a.classList.remove("animate")}))},ativaAnimacao=()=>{const a=document.querySelectorAll("[data-anime]");a.length&&(animaScroll(a),window.addEventListener("scroll",debounce((()=>{animaScroll(a)}),200)))};export function initAnimeDefault(){ativaAnimacao()}export function initAnimeFetch(){ativaAnimacao()}