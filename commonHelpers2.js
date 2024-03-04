import{b as t,r as l}from"./assets/shopping-list-functions-64bce7ec.js";import{c as p,b as a}from"./assets/vendor-a024345d.js";const e=document.querySelector(".shopping-list-is-filled");function c(i){return i.map(s=>`<li class="shopping-list-book-item">
                        <div class="shopping-list-card">
            
                                <img class="shopping-list-book-cover" src="${s.book_image}" alt="cover">   
                        
                                <div class="shopping-list-card-wrap">
                                    <div class="shopping-list-card-top-line">
                                        <div class="title-category-wrap">
                                            <h2 class="shopping-list-book-title">${s.title}</h2>
                                            <h3 class="shopping-list-book-category">${s.list_name}</h3>
                                        </div>

                                        <button data-id="${s._id}" type="button" class="shopping-list-item-remove-button">
                                        <svg width="16" height="16" class="icon-bin" alt="bin">
                                            <use href="./images/icons.svg#icon-bin"></use>
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
                                            <use href="./images/icons.svg#icon-amazon-1"></use>
                                        </svg>   
                                                </a>
                                            </li>
                                            <li class="shopping-list-buy-link-item">
                                                <a rel="noreferrer noopener nofollow" class="shopping-list-buy-link" href="${s.buy_links[1].url} " target="_blank">
                                                <svg width="16" height="16" class="shopping-list-buy-link-applebooks" alt="logo-apple-books">
                                            <use href="./images/icons.svg#icon-apple-ibooks"></use>
                                        </svg>    
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                </div>
                            </div>
                            </li>`).join("")}function r(){let i=` <div class="shopping-list-is-empty">
    <p class="shopping-list-text">This page is empty, add some books and proceed to order.</p>
    <picture>
        <source srcset="
                      ./images/Book-picture-tab-min.png    1x,
                      ./images/Book-picture-tab-2x-min.png 2x" media="(min-width:768px)" />
        <source srcset="
                      ./images/Book-picture-mob-min.png    1x,
                      ./images/Book-picture-mob-2x-min.png 2x" media="(min-width:320px)" />
        <img class="shopping-list-image" src="./images/Book-picture-tab-min.png" alt="Stack of books">
    </picture>
</div>`;e.innerHTML=i}function g(){return e.innerHTML=c(t)}function n(){t.length!==0?g():r()}window.lb=p;document.querySelector("#my-button").addEventListener("click",i=>{console.log("clicked");const o=a.create(`
    <div class="modal">
      <div>
      <button type="button" class="modal-close-button">x</button>
      <p>
          Your first lightbox with just a few lines of code.
          Yes, it's really that simple.
      </p>
      <button type="button" class="add-to-sl-button">ADD TO SHOPPING LIST</button>
      </div>
    </div>
`);console.log(o),o.show()});n();document.querySelectorAll(".shopping-list-item-remove-button").forEach(i=>{i.addEventListener("click",o=>{console.log(i.dataset.id),l(i.dataset.id),i.closest("li.shopping-list-book-item").remove(),t.length===0&&n()})});
//# sourceMappingURL=commonHelpers2.js.map
