import{c as o,a as l}from"./assets/check-page-a3c351b8.js";const t=document.querySelector(".shopping-list-container");function p(i){return'<ul class="shopping-list-is-filled">'+i.map(s=>`<li class="shopping-list-book-item">
                        <div class="shopping-list-card">
            
                                <img class="shopping-list-book-cover" src="${s.book_image}" alt="cover" loading="lazy">   
                        
                                <div class="shopping-list-card-wrap">
                                    <div class="shopping-list-card-top-line">
                                        <div class="title-category-wrap">
                                            <h2 class="shopping-list-book-title">${s.title}</h2>
                                            <h3 class="shopping-list-book-category">${s.list_name}</h3>
                                        </div>

                                        <button data-id="${s._id}" type="button" class="shopping-list-item-remove-button">
                                        <svg width="16" height="16" class="icon-bin" alt="bin">
                                            <use href="./img/icons.svg#icon-bin"></use>
                                        </svg>
                                    </button>
                                    </div>
        
                                    <p class="shopping-list-book-description">${s.description}</p>
        
                                    <div class="shopping-list-card-bottom-line">
                                        <p class="shopping-list-book-author">${s.author}</p>
                                        <ul class="shopping-list-buy-links">
                                            <li class="shopping-list-buy-link-item">
                                                <a rel="noreferrer noopener nofollow" class="shopping-list-buy-link" href="${s.buy_links[0].url}" target="_blank">
                                                <svg width="32" height="11" class="shopping-list-buy-link-amazon" alt="logo-amazon">
                                            <use href="./img/icons.svg#icon-amazon-1"></use>
                                        </svg>   
                                                </a>
                                            </li>
                                            <li class="shopping-list-buy-link-item">
                                                <a rel="noreferrer noopener nofollow" class="shopping-list-buy-link" href="${s.buy_links[1].url} " target="_blank">
                                                <svg width="16" height="16" class="shopping-list-buy-link-applebooks" alt="logo-apple-books">
                                            <use href="./img/icons.svg#icon-apple-ibooks"></use>
                                        </svg>    
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                </div>
                            </div>
                            </li>`).join("")+"</ul>"}function a(){let i=` <div class="shopping-list-is-empty">
    <p class="shopping-list-text">This page is empty, add some books and proceed to order.</p>
    <picture>
        <source srcset="
                      ./img/Book-picture-tab-min.png    1x,
                     ./img/Book-picture-tab-2x-min.png 2x" media="(min-width:768px)" />
        <source srcset="
                      ./img/Book-picture-mob-min.png    1x,
                     ./img/Book-picture-mob-2x-min.png 2x" media="(min-width:320px)" />
        <img class="shopping-list-image" src="./img/Book-picture-tab-min.png" alt="Stack of books">
    </picture>
</div>`;t.innerHTML=i}function r(){return t.innerHTML=p(o)}function e(){o.length!==0?r():a()}e();document.querySelectorAll(".shopping-list-item-remove-button").forEach(i=>{i.addEventListener("click",n=>{console.log(i.dataset.id),l(i.dataset.id),i.closest("li.shopping-list-book-item").remove(),o.length===0&&e()})});
//# sourceMappingURL=commonHelpers2.js.map
