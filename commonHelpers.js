import"./assets/modulepreload-polyfill-3cfb730f.js";import"./assets/main-35507c9b.js";import"./assets/vendor-0cb09735.js";document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".item-charity"),e=document.querySelector(".btn-scroll-up"),n=document.querySelector(".btn-scroll-down");c(0,5),n.addEventListener("click",l),e.addEventListener("click",r);function l(){s(0,3),c(3,8),n.classList.add("hidden"),e.classList.remove("hidden")}function r(){s(3,8),c(0,5),n.classList.remove("hidden"),e.classList.add("hidden")}function c(d,i){for(let t=d;t<=i;t++)o[t].classList.remove("hidden")}function s(d,i){for(let t=d;t<=i;t++)o[t].classList.add("hidden")}});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".charity-image").forEach(e=>{e.addEventListener("click",()=>{const n=e.getAttribute("data-url");window.open(n,"_blank")})})});
//# sourceMappingURL=commonHelpers.js.map
