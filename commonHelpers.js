import{s as w,r as M,a as x}from"./assets/shopping-list-functions-64bce7ec.js";import{a as h,b as D}from"./assets/vendor-a024345d.js";async function O(){const o="https://books-backend.p.goit.global/books/",e="category-list";try{const s=`${o}${e}`;return(await h.get(s)).data}catch(s){console.log(s)}}async function R(){const o="https://books-backend.p.goit.global/books/",e="top-books";try{const s=`${o}${e}`;return(await h.get(s)).data}catch(s){console.log(s)}}async function E(o){const e="https://books-backend.p.goit.global/books/",s=`category?category=${o}`;try{const r=`${e}${s}`;return(await h.get(r)).data}catch(r){console.log(r)}}function j(o){return o.map(e=>`<li class="sidebar-categories-item"><a class="sidebar-category-link">
   ${e.list_name}
   </a>
  </li>`).join(`
`)}function N(o){const e=j(o);t.categories.insertAdjacentHTML("beforeend",e)}function H(o){return o.map(({list_name:e,books:s})=>{let r;return window.innerWidth>=1440?r=b(s,e):window.innerWidth>=768?r=b(s.slice(0,3),e):r=b(s.slice(0,1),e),`
       
      <div class="best-books-category">

          <p class="best-books-subtitle">${e}</p>
          <ul class="best-books-list">
            <li class="best-books-item">${r}</li>
          </ul>
          <div class="btn-see-more-wrap">
          <button class="btn-see-more" type="button" data-cat="${e}">SEE MORE</button>
        </div>
          </div>
      `}).join(`
`)}function P(o){const e=H(o);t.bestBooks.insertAdjacentHTML("beforeend",e)}function b(o,e){return o.filter(({list_name:s})=>s===e).map(({author:s,list_name:r,book_image:n,title:a,_id:u})=>`
    <div class="best-books-wrap" >
      <div class="best-books-content"  id="${u}">
      <img class="best-books-image" src="${n}" alt="book" loading="lazy"/>
      <p class="best-books-overlay-text">quick view</p>
    </div>
    <h3 class="best-books-heading">${a}</h3>
    <p class="best-books-text">${s}</p>
    </div>
  `).join(`
`)}function U(o){const e=o.target.closest("li");!e||e===o.currentTarget||(t.categoriesItems.forEach(s=>s.classList.remove("sidebar-active")),e.classList.add("sidebar-active"))}function p(o){return o.target.closest("li").textContent.trim()}function T(o){if(o.target.classList.contains("btn-see-more")){const e=o.target.dataset.cat.trim();return t.categoriesItems.forEach(s=>{s.classList.remove("sidebar-active"),s.textContent.trim()===e&&s.classList.add("sidebar-active")}),e}}function W(o){return`
  <div class="hardcover-wrap">
    <ul class="hardcover-list">
      ${o.map(({author:e,list_name:s,book_image:r,title:n,_id:a})=>`
          <li class="hardcover-item" id="${a}">
          <div class="hardcover-books-content">
          <img class="hardcover-img" src="${r}" alt="card">
          <p class="hardcover-books-overlay-text">quick view</p>
          </div>
            
            <h3 class="hardcover-subtitle">${n}</h3>
            <p class="hardcover-descr">${e}</p>
          </li>
        `).join(`
`)}
    </ul>
  </div>
  `}function $(o){const e=W(o);t.bestBooks.innerHTML=e}function B(o){if(!o)return;let e;if(o==="All categories")e=`<h1 class="best-books-title">
    Best Sellers<span class="best-books-title-colour"> Books</span>
  </h1>`,t.categoryTitle.innerHTML=e;else{const s=o.split(" "),r=s.slice(-1);e=`<h1 class="best-books-title">${s.slice(0,-1).join(" ")} <span class="best-books-title-colour">${r.join(" ")}</span></h1>`,t.categoryTitle.innerHTML=e}}function m(o){o.forEach(e=>{document.getElementById(e._id).addEventListener("click",r=>{r.preventDefault(),console.log(`${e._id} clicked`);const n=D.create(`
          <div class="modal">
            <button class="modal-close-btn" type="button">
            <svg class="modal-close-svg" width="16" height="16">
              <use href="./img/header/symbol-defs.svg#icon-close"></use>
            </svg>
            </button>
                            <div class="pop-up-card-wrap">
                              <img class="pop-up-book-cover" src="${e.book_image}" alt="cover">
                                  <div class="pop-up-card-top-line">
                                          <h2 class="pop-up-book-title">${e.title}</h2>
                                          <p class="pop-up-book-author">${e.author}</p>
                                          <p class="pop-up-book-description">${e.description}</p>
                                      <div class="pop-up-card-bottom-line">
                                          <ul class="pop-up-buy-links">
                                              <li class="pop-up-buy-link-item">
                                                  <a rel="noreferrer noopener nofollow" class="shopping-list-buy-link" href="${e.buy_links[0].url}" target="_blank">
                                                  <svg width="32" height="11" class="pop-up-buy-link-amazon" alt="logo-amazon">
                                              <use href="./images/icons.svg#icon-amazon-1"></use>
                                          </svg>   
                                                  </a>
                                              </li>
                                              <li class="shopping-list-buy-link-item">
                                                  <a rel="noreferrer noopener nofollow" class="pop-up-buy-link" href="${e.buy_links[1].url} " target="_blank">
                                                  <svg width="16" height="16" class="pop-up-buy-link-applebooks" alt="logo-apple-books">
                                              <use href="./images/icons.svg#icon-apple-ibooks"></use>
                                          </svg>    
                                                  </a>
                                              </li>
                                          </ul>
                                      </div>
                                 </div>
                            </div>
            <button data-id="${e._id}" type="button" class="add-to-sl-button">${w(e._id)?"Remove":"ADD TO SHOPPING LIST"}</button>
            <p class='book-added-text'>the book has been added</p>
          </div>
        `);console.log(n),n.show(),document.querySelector(".add-to-sl-button").addEventListener("click",a=>{w(e._id)?M(e._id):(x(e),document.querySelector(".book-added-text"))})})})}async function q(){t.loader.classList.remove("hidden"),t.loader1.classList.remove("hidden");try{const o=await O(),e=await R();N(o),P(e),t.loader.classList.add("hidden"),t.loader1.classList.add("hidden"),e.forEach(s=>{m(s.books)})}catch(o){k(o)}t.oneCategory=document.querySelector(".sidebar-category-link"),t.categoriesItems=document.querySelectorAll(".sidebar-categories-item"),t.allCategories.classList.add("sidebar-active"),t.categories.addEventListener("click",F),t.seeMoreBtn.addEventListener("click",z)}async function z(o){t.loader1.classList.remove("hidden");try{const e=await E(T(o));$(e),B(T(o)),t.loader1.classList.add("hidden"),t.scrollToEl.scrollIntoView({behavior:"smooth"}),console.log(" the first function"),m(e)}catch(e){k(e)}}async function F(o){t.loader.classList.remove("hidden");try{const e=await E(p(o));p(o)==="All categories"&&q(),$(e),B(p(o)),U(o),t.loader.classList.add("hidden"),t.scrollToEl.scrollIntoView({behavior:"smooth"}),console.log("second function"),m(e)}catch(e){k(e)}}function k(o){throw o}function Y(){window.addEventListener("scroll",o);function o(){window.scrollY>200?t.btnToTop.classList.add("show"):t.btnToTop.classList.remove("show")}t.btnToTop.addEventListener("click",e);function e(){window.scrollY!=0&&setTimeout(function(){window.scrollTo(0,window.scrollY-70),e()},10)}}function G(){t.headerMenu.classList.toggle("hidden"),t.burgerSvg.getAttribute("href")=="/img/header/symbol-defs.svg#icon-burger"?(t.burgerSvg.setAttribute("href","/img/header/symbol-defs.svg#icon-close"),t.headerIcon.setAttribute("width","18"),t.headerIcon.setAttribute("height","18"),t.headerMenu.style.padding="5px"):(t.burgerSvg.setAttribute("href","/img/header/symbol-defs.svg#icon-burger"),t.headerIcon.setAttribute("width","28"),t.headerIcon.setAttribute("height","28"))}function V(o){o.preventDefault(),localStorage.removeItem("colorScheme"),t.root.classList.toggle("dark"),t.root.classList.contains("dark")?localStorage.setItem("colorScheme","dark"):localStorage.setItem("colorScheme","light")}function Q(){localStorage.getItem("colorScheme"),localStorage.getItem("colorScheme")=="dark"?(t.root.classList.add("dark"),t.headerToggle.checked=!0):(t.root.classList.remove("dark"),t.headerToggle.checked=!1)}document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".item-charity"),e=document.querySelector(".btn-scroll-up"),s=document.querySelector(".btn-scroll-down"),r=document.querySelector(".swiper"),n=2;I(0,5),s.addEventListener("click",a),e.addEventListener("click",u);function a(){v(r,r.scrollTop+(r.scrollHeight-r.scrollTop)/n),s.classList.add("hidden"),e.classList.remove("hidden")}function u(){v(r,0),s.classList.remove("hidden"),e.classList.add("hidden")}function I(i,g){for(let l=i;l<=g;l++)o[l].classList.remove("hidden")}function v(i,g){const f=i.scrollTop,C=g-f,y=20;function A(c,d,S,_){return c/=_/2,c<1?S/2*c*c+d:(c--,-S/2*(c*(c-2)-1)+d)}function L(c){c+=y;const d=A(c,f,C,500);i.scrollTop=d,c<500&&setTimeout(function(){L(c)},y)}L(0)}});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".charity-image").forEach(e=>{e.addEventListener("click",()=>{const s=e.getAttribute("data-url");window.open(s,"_blank")})})});const t={bestBooks:document.querySelector(".best-books-category"),categories:document.querySelector(".sidebar-categories"),allCategories:document.querySelector(".sidebar-all-categories"),categoryTitle:document.querySelector(".best-books-title"),loader:document.querySelector(".loader"),loader1:document.querySelector(".loader1"),scrollToEl:document.querySelector(".global-books-block"),modalWindow:document.querySelector("modal-window"),seeMoreBtn:document.querySelector(".best-books-category"),headerBtn:document.querySelector(".header-burger-btn"),headerIcon:document.querySelector(".header-burger-icon"),headerMenu:document.querySelector(".header-modal-menu"),burgerSvg:document.querySelector("#burger-svg"),headerToggle:document.querySelector("#headerToggle"),root:document.querySelector(":root"),btnToTop:document.querySelector(".to-top")};q();Y();t.headerBtn.addEventListener("click",G);t.headerToggle.addEventListener("change",V);Q();
//# sourceMappingURL=commonHelpers.js.map
