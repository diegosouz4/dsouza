(()=>{const t=document.querySelector("[data-projetos]");if(!t)return;const e=()=>{t.classList.add("erro"),t.innerHTML='\n      <li data-anime="bottom">\n        <h3>Não foi possível carregar a lista de projetos.</h3>\n        <p>Atualize a página ou tente novamente mais tarde.</p>\n      </li>\n    '},n=(e,n=12)=>{e.forEach((o=>{if(e.indexOf(o)+1>n)return;const r=(t=>{const e=document.createElement("p");return t.forEach((t=>{const n=document.createElement("span");n.innerHTML=t,e.appendChild(n)})),e.innerHTML})(o.tags),a=document.createElement("li");a.setAttribute("data-anime","bottom"),a.innerHTML=`\n        <li data-anime="bottom">\n          <picture>\n            <source srcset="${o.thumb_webp}" type="image/webp">\n            <img width="350" width="250" src="${o.thumb}" alt="Projeto ${o.title}">\n          </picture>\n          <div class="thumbs__info">\n            <div class="info_content">\n              <h3>${o.title}</h3>\n              <p class="tags">${r}</p>\n              <a href="./projetos/${o.slug}.html" class="btn btn--border" title="Ver projeto">Ver projeto</a>\n            </div>\n          </div>\n        </li>\n      `,t.appendChild(a)})),o()};fetch("https://rest.dsouza.com.br/wp-json/dsProjetos/v1/projetos").then((t=>{if(!t.ok)throw t;return t.json()})).then((e=>{"home"!==t.getAttribute("data-projetos")?n(e):n(e,6)})).catch((t=>{console.log(t.status),e()}));const o=()=>{document.querySelectorAll("[data-projetos] li").forEach((t=>{t.addEventListener("click",(t=>{const e=t.currentTarget.querySelector("a").getAttribute("href");location.href=e}))}))}})();