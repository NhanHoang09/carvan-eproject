var div = document.getElementById("products");
for (var i = 0; i < data.length; i++) {
var x = data[i];
div.innerHTML +=
'<div class="thumbnail">'+
    ' <img src="'+ x.Image1+'" alt="">'+
    '<div class="product-details">'+
        ' <h2>'+x.Model +'</h2>'+
        '<p>'+ x.Pricing+'</p>'+
        '<a href="detail.html?id=' + i + '">SEE MORE</a>'+
        '</div>'+
        ' </div>';
}




$(document).ready(function(){
    var img1 = $('#img1').attr('src');
    var img2 = $('#img2').attr('src');
    var img3 = $('#img3').attr('src');
    var img4 = $('#img4').attr('src');
    var img5 = $('#img5').attr('src');
    $('#img1').click(function(){
        $('#image').fadeOut(0);
        $('#image').stop().fadeIn(400).attr('src', img1);
    });
    $('#img2').click(function(){
        $('#image').fadeOut(0);
        $('#image').stop().fadeIn(400).attr('src', img2);
    });
    $('#img3').click(function(){
        $('#image').fadeOut(0);
        $('#image').stop().fadeIn(400).attr('src', img3);
    });
    $('#img4').click(function(){
        $('#image').fadeOut(0);
        $('#image').stop().fadeIn(400).attr('src', img4);
    });
    $('#img5').click(function(){
        $('#image').fadeOut(0);
        $('#image').stop().fadeIn(400).attr('src', img5);
    });
});

var url_string = window.location.href
var url = new URL(url_string);
var i = url.searchParams.get("id");
// alert(i);
document.getElementById("image").src = data[i].Image1;
document.getElementById("img1").src = data[i].Image2;
document.getElementById("img2").src = data[i].Image3;
document.getElementById("img3").src = data[i].Image4;
document.getElementById("img4").src = data[i].Image5;
document.getElementById("img5").src = data[i].Image6;
document.getElementById("brand").innerText = data[i].Brand;
document.getElementById("name").innerText = data[i].Model;
document.getElementById("description").innerText = data[i].Description;
document.getElementById("details").innerHTML = data[i].Details;
document.getElementById("price").innerText = data[i].Pricing;


let thumbnails = document.getElementsByClassName('thumbnail');
let slider = document.getElementById('products');

let buttonRight = document.getElementById('slide-right');
let buttonLeft = document.getElementById('slide-left');

buttonLeft.addEventListener('click', function(){
    slider.scrollLeft -= 125;
})

buttonRight.addEventListener('click', function(){
    slider.scrollLeft += 125;
})

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
// alert(maxScrollLeft);
// alert("Left Scroll:" + slider.scrollLeft);

//AUTO PLAY THE SLIDER 
function autoPlay() {
    if (slider.scrollLeft > (maxScrollLeft - 1)) {
        slider.scrollLeft -= maxScrollLeft;
    } else {
        slider.scrollLeft += 1;
}
}
let play = setInterval(autoPlay, 50);

// PAUSE THE SLIDE ON HOVER
for (var i=0; i < thumbnails.length; i++){

    thumbnails[i].addEventListener('mouseover', function() {
    clearInterval(play);
});

thumbnails[i].addEventListener('mouseout', function() {
    return play = setInterval(autoPlay, 50);
});
}