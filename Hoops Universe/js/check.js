function urlPara(para){
    var url = window.location.search.substring(1);
    var urlVar = url.split('&');
    for (var i = 0; i < urlVar.length; i++){
        var paraName = urlVar[i].split('=');
        if (paraName[0] == para){
            return paraName[1];
        }
    }
}

var shoes = {
    curryjersey : {name : "Curry Jersey ALL STAR 21", price : "Rp 1.500.000", src: "image/Accesories/CurryJersey.jpg"},
    wilsonball : {name : "Wilson Ball", price : "Rp 700.000", src : "image/Accesories/wilson.jpg"},
    splading : {name : "Spalding Ball", price : "Rp 850.000", src : "image/Accesories/Spalding.jpg"},
    powerslide : {name : "Powerslide knee", price : "Rp 150.000", src : "image/Accesories/powerslide.jpg"},
    adidasknee : {name : "Adidas Knee", price : "Rp 150.000", src : "image/Accesories/AdidasKnee.jpg"},
    lakersjacket : {name :"Lakers Jacket", price : "Rp 2.000.000", src : "image/Accesories/Lakers.jpg"},
    hornetjacket : {name : "Hornet Jacket", price : "Rp 2.500.000", src : "image/Accesories/Hornet.jpg"},
    kobejersey : {name : "Kober Jersey Old School", price : "Rp 2.450.000", src : "image/Accesories/KobeJersey.gif"},
    lebronjersey : {name : "Lebron Jersey", price : "Rp 2.000.000", src : "image/Accesories/LebronJersey.jpg"},
    westbrook : {name : "Westbrook jersey", price : "Rp 1.400.000", src : "image/Accesories/WestJersey.jpg"},
    nikecosmic : {name : "Nike Cosmic", price : "Rp 2.600.000", src : "image/Nike/NKcosmic.jpg"},
    zoomfreak2 : {name : "Zoom Freak 2", price : "Rp 2.850.000", src : "image/Nike/NKzoomfreak2.jpg"},
    hardenvol3 : {name : "Harden Vol 3", price : "Rp 3.200.000", src : "image/adidas/HardenVol3.jpg"},
    kyrieflytrap4 : {name : "Kyrie Flytrap 4", price : "Rp 1.900.000", src : "image/nike/NKkyrierflytrap4.jpg"},
    kyriehorus : {name : "Kyrie Horus", price : "Rp 2.650.000", src : "image/nike/NKkyrie7horus.png"},
    dame6mcd : {name : "Dame 6 McD", price : "Rp 2.300.000", src : "image/adidas/dame 6.jpg"},
    drose11 : {name : "DRose 11 Pink", price : "Rp 1.710.000", src : "image/adidas/Drose11.jpg"},
    adidaspro : {name : "Adidas Pro Bounce 2019", price : "Rp 990.000", src : "image/adidas/probounce.jpg"},
    zion : {name : "Air Jordan 34 Zion", price : "Rp 2.780.000", src : "image/jordan/airjordan34Zion.jpg"},
    whynot4 : {name : "Why Not Zero 4", price : "Rp 1.975.000", src : "image/jordan/whynot.jpg"},
    jordanfire : {name : "Air Jordan 35 Fire", price : "Rp 2.350.000", src : "image/jordan/jordanfire.jpg"},
    jordan11 : {name : "Air Jordan 11 Black White", price : "Rp 1.890.000", src : "image/jordan/jordan11.jpg"},
    curry8 : {name : "Curry 8 Flow", price : "Rp 3.580.000", src : "image/under armor/curryflow8.jpg"},
    curry7 : {name : "Curry 7 Red", price : "Rp 1.950.000", src : "image/under armor/curry7.jpg"},
    curry4 : {name : "Curry 4 More Dimes", price : "Rp 1.699.000", src : "image/under armor/Curry4.jpg"},
    curry6 : {name : "Curry 6 Dub Nation", price : "Rp 2.499.000", src : "image/under armor/curry6.jpg"}
}

$(document).ready(() => {
    var id = urlPara('imgid')
    var imageSource = shoes[id].src
    var productName = shoes[id].name
    var productPrice = shoes[id].price

    $('#product-image').attr('src', imageSource)
    let price = document.querySelector('#product-price')
    price.innerText = "Product Price" + " " + ':' + " " + productPrice
    let displayName = document.querySelector('#product-name')
    displayName.innerText = "Product Name" + " " + ':' + " " + productName
})
