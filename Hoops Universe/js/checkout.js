$(document).ready(()=>{
    $(".allproduct").click(function(){
        const imageSource = $(this).attr("id")
        window.location.href = `product.html?imgid=${imageSource}`
    })
})