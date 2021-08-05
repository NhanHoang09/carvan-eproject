//  ----Scroll to up---- 
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});


    // ----Show login----
    function menuToggle(){
      const toogleMenu = document.querySelector('.menu');
      toogleMenu.classList.toggle('active')
  }

  var hotcar =  data.filter(data => data.status == "hot");

  for(var i=0; i<hotcar.length; i++){
    
    var div = document.getElementById("hot-products");
    var hot = hotcar[i];
  div.innerHTML +=
  
    '<div class="col-md-4 col-sm-6" ">' +
        '<div class="product-grid4" style="width: 100%; height: 380px">' +
        '<div class="product-image4">' +
            '<a href="#">' +
            '<img class="pic-1" src="'+hot.Image7 +'" style="height: 230px">' +
            '<img class="pic-2" src="'+hot.Image8 +'"style="height: 230px">' +
            '</a>' +
            '<ul class="social">' +
                '<li><a href="#" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>' +
                '<li><a href="#" data-tip="Search"><i class="fa fa-search"></i></a></li>' +
                '<li><a href="#" data-tip="Contact"><i class="fa fa-phone"></i></i></a></li>' +
            '</ul>' +
            '<span class="product-new-label">New</span>' +
            '<span class="product-discount-label">HOT</span>' +
            '</div>' +
            '<div class="product-content">' +
                '<h3 class="title"><a href="#">'+hot.Model +'</a></h3>' +
                '<div class="price">' +
                    hot.Pricing+
                    '</div>' +
                    '<a class="add-to-cart" href="./htmls/detail.html?id=' + hot.No + '">SEE MORE</a>' +
                    '</div>' +
                    '</div>' +
                    '</div>' ;
  };
  
  var bestseller =  data.filter(data => data.seller == "best");
  for(var i=0;i< bestseller.length; i++){
    var sellerbest = document.getElementById("products");
    var best = bestseller[i];
  
    sellerbest.innerHTML += 
  
      '<div class="col-md-4 col-sm-6" >' +
          '<div class="product-grid4" style="width: 100%; height: 380px">' +
          '<div class="product-image4">' +
              '<a href="#">' +
              '<img class="pic-1" src="'+ best.Image7 +'" style="height: 230px">' +
              '<img class="pic-2" src="'+ best.Image8 +'" style="height: 230px">' +
              '</a>' +
              '<ul class="social">' +
                  '<li><a href="#" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>' +
                  '<li><a href="#" data-tip="Search"><i class="fa fa-search"></i></a></li>' +
                  '<li><a href="#" data-tip="Contact"><i class="fa fa-phone"></i></i></a></li>' +
              '</ul>' +
              '<span class="product-new-label">New</span>' +
              '<span class="product-discount-label">BEST</span>' +
              '</div>' +
              '<div class="product-content">' +
                  '<h3 class="title"><a href="#">'+best.Model +'</a></h3>' +
                  '<div class="price">' +
                      best.Pricing +
                      '</div>' +
                      '<a class="add-to-cart" href="./htmls/detail.html?id=' + best.No + '">SEE MORE</a>' +
                      '</div>' +
                      '</div>' +
                      '</div>' ;
      };
