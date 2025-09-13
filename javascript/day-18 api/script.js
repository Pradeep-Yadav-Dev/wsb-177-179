let main=document.querySelector(".main")

let displayData=async()=>{

    let fetchApi=await fetch("https://dummyjson.com/products?limit=200")
    let jsonData=await fetchApi.json()
    let finalData=  jsonData.products

    main.innerHTML=""

    finalData.forEach((v,i)=>{
        main.innerHTML +=`
             <div class="product-card">
            <div class="product-badge">Premium</div>
            <div class="product-tilt-effect">
                <div class="product-image">
                    <img src=${v.thumbnail}
                        alt="Premium Watch">
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">Luxury Timepiece</div>
                <h2 class="product-title">Chrono S-Series Watch</h2>
                <div class="product-description">
                    <p>Precision engineering meets timeless design. Swiss movement with sapphire crystal and genuine
                        leather band.</p>
                </div>
                <div class="product-features">
                    <span class="feature">Water Resistant</span>
                    <span class="feature">5-Year Warranty</span>
                    <span class="feature">Swiss Made</span>
                </div>
                <div class="product-bottom">
                    <div class="product-price">
                        <span class="price-was">$1,299</span>
                        <span class="price-now">$899</span>
                    </div>
                    <button class="product-button">
                        <span class="button-text">Add to Cart</span>
                        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                    </button>
                </div>
                <div class="product-meta">
                    <div class="product-rating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                            fill="#FFD700" stroke="#FFD700" stroke-width="0.5">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                            </polygon>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                            fill="#FFD700" stroke="#FFD700" stroke-width="0.5">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                            </polygon>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                            fill="#FFD700" stroke="#FFD700" stroke-width="0.5">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                            </polygon>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                            fill="#FFD700" stroke="#FFD700" stroke-width="0.5">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                            </polygon>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                            fill="#FFD700" stroke="#FFD700" stroke-width="0.5">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                            </polygon>
                        </svg>
                        <span class="rating-count">128 Reviews</span>
                    </div>
                    <div class="product-stock">In Stock</div>
                </div>
            </div>
        </div>
        `
    })


}

displayData()


