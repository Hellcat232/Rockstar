(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const t={bestBooks:document.querySelector(".best-books-category"),categories:document.querySelector(".sidebar-categories"),allCategories:document.querySelector(".sidebar-all-categories"),categoryTitle:document.querySelector(".best-books-title"),loader:document.querySelector(".loader"),loader1:document.querySelector(".loader1"),scrollToEl:document.querySelector(".global-books-block"),modalWindow:document.querySelector("modal-window"),seeMoreBtn:document.querySelector(".best-books-category"),headerBtn:document.querySelector(".header-burger-btn"),headerIcon:document.querySelector(".header-burger-icon"),headerMenu:document.querySelector(".header-modal-menu"),burgerSvg:document.querySelector("#burger-svg"),headerToggle:document.querySelector("#headerToggle"),root:document.querySelector(":root"),btnToTop:document.querySelector(".to-top"),element:document.querySelectorAll(".header-navigation-list-item"),modalElement:document.querySelectorAll(".header-modal-menu-navigation-list-item"),svg:document.querySelector(".header-modal-menu-icon"),modalLinks:document.querySelectorAll(".header-modal-menu-link"),links:document.querySelectorAll(".header-link"),svg1:document.querySelector(".header-bucket-icon")};let i=JSON.parse(localStorage.getItem("shoppingList"))||[];function w(e){return!!i.find(r=>r._id===e)}function k(e){if(console.log("adding the book",e),console.log(!e._id,!e.book_image,!e.title,!e.list_name,!e.author,!e.buy_links),!e._id||!e.book_image||!e.title||!e.list_name||!e.author||!e.buy_links)throw new Error("Book _id, book_image, title, list_name, author, buy_links are required");w(e._id)||(i.push(e),localStorage.setItem("shoppingList",JSON.stringify(i)))}window.atsl=k;window.sl=i;function T(e){i=i.filter(r=>r._id!==e),localStorage.setItem("shoppingList",JSON.stringify(i))}function I(){t.headerMenu.classList.toggle("hidden"),t.burgerSvg.getAttribute("href")=="./img/header/symbol-defs.svg#icon-burger"?(t.burgerSvg.setAttribute("href","./img/header/symbol-defs.svg#icon-close"),t.headerIcon.setAttribute("width","18"),t.headerIcon.setAttribute("height","18"),t.headerMenu.style.padding="5px"):(t.burgerSvg.setAttribute("href","./img/header/symbol-defs.svg#icon-burger"),t.headerIcon.setAttribute("width","28"),t.headerIcon.setAttribute("height","28"))}t.headerBtn.addEventListener("click",I);function _(e){e.preventDefault(),localStorage.removeItem("colorScheme"),t.root.classList.toggle("dark"),t.root.classList.contains("dark")?localStorage.setItem("colorScheme","dark"):localStorage.setItem("colorScheme","light")}function A(){localStorage.getItem("colorScheme"),localStorage.getItem("colorScheme")=="dark"?(t.root.classList.add("dark"),t.headerToggle.checked=!0):(t.root.classList.remove("dark"),t.headerToggle.checked=!1)}t.headerToggle.addEventListener("change",_);A();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".item-charity"),r=document.querySelector(".btn-scroll-up"),s=document.querySelector(".btn-scroll-down"),c=document.querySelector(".swiper"),o=2;L(0,5),s.addEventListener("click",n),r.addEventListener("click",d);function n(){h(c,c.scrollTop+(c.scrollHeight-c.scrollTop)/o),s.classList.add("hidden"),r.classList.remove("hidden")}function d(){h(c,0),s.classList.remove("hidden"),r.classList.add("hidden")}function L(a,g){for(let u=a;u<=g;u++)e[u].classList.remove("hidden")}function h(a,g){const f=a.scrollTop,b=g-f,S=20;function v(l,m,p,q){return l/=q/2,l<1?p/2*l*l+m:(l--,-p/2*(l*(l-2)-1)+m)}function y(l){l+=S;const m=v(l,f,b,500);a.scrollTop=m,l<500&&setTimeout(function(){y(l)},S)}y(0)}});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".charity-image").forEach(r=>{r.addEventListener("click",()=>{const s=r.getAttribute("data-url");window.open(s,"_blank")})})});function E(){return window.location.pathname.split("/").pop()}function O(){E()==="index.html"?(t.element[0].classList.add("header-current"),t.modalElement[0].classList.add("header-modal-current"),t.modalLinks[0].classList.add("link-current"),t.links[0].style.color="#111"):(t.element[1].classList.add("header-current"),t.modalElement[1].classList.add("header-modal-current"),t.modalLinks[1].classList.add("link-current"),t.links[1].style.color="#111",t.svg.classList.add("svg-current"),t.svg1.style.fill="#111")}window.onload=function(){O()};export{T as a,k as b,i as c,t as r,w as s};
//# sourceMappingURL=check-page-c981891c.js.map
