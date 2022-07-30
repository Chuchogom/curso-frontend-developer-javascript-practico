const navEmail = document.querySelector('.navbar-email')
const menuHamMenu = document.querySelector('.menu')
const menuCart = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const productDetail = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

navEmail.addEventListener('click', toggleMenu)
menuHamMenu.addEventListener('click', toggleMobileMenu)
menuCart.addEventListener('click', toggleAsideCart)


function toggleMenu(){

    const isProductDetailClose = productDetail.classList.contains('inactive'); 

    if (!isProductDetailClose){
        productDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){

    const isProductDetailClose = productDetail.classList.contains('inactive'); 

    if (!isProductDetailClose){
        productDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleAsideCart(){
    
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive'); 

    
    if (!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClose){
        desktopMenu.classList.add('inactive')
    }

    productDetail.classList.toggle('inactive');
} 

const productList = [];
productList.push({
    name: 'Bike',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 150,
})
productList.push({
    name: 'TV',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 150,
})
productList.push({
    name: 'Bike',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 150,
})
productList.push({
    name: 'Bike',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 150,
})
productList.push({
    name: 'TV',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 150,
})
productList.push({
    name: 'Bike',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 150,
})

function renderProducts (arr){
    for (product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
    
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)

