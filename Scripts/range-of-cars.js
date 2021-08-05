var products = "",
brands = "",
models = "",
rangeofcars = "";

for (var i = 0; i < data.length; i++) {
var brand = data[i].Brand,
model = data[i].Model,
rangeofcar = data[i].Rangeofcar,
price = data[i].Pricing,
condition = data[i].condition,
rawPrice = price.replace("$",""),
rawPrice = parseInt(rawPrice.replace(",","")),
image1 = data[i].Image1;
image2 = data[i].Image2;
image3 = data[i].Image3;
image4 = data[i].Image4;


//create product cards
products += 
  '<div class="col-md-4 col-sm-6 store-product product" car-brand="' + brand + '" car-model="' + model + '" car-rangeofcar="' + rangeofcar + '" car-price="' + rawPrice + '">' +
  '<div class="product-grid4" style="width: 100%; height: 380px">' +
    '<div class="product-image4">' +
      '<a href="#">' +
        '<img class="pic-1" src="'+image1 +'" style="height: 210px">' +
        '<img class="pic-2" src="'+image2 +'" style="height: 210px">' +
        '</a>' +
        '<ul class="social">' +
          '<li><a href="#" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>' +
          '<li><a href="#" data-tip="Search"><i class="fa fa-search"></i></a></li>' +
          '<li><a href="#" data-tip="Contact"><i class="fa fa-phone"></i></i></a></li>' +
        '</ul>' +
        '<span class="product-new-label">'+condition+'</span>' +
        '<span class="product-discount-label">HOT</span>' +
        '</div>' +
        '<div class="product-content">' +
          '<h3 class="title"><a href="#">'+model +'</a></h3>' +
          '<div class="price">' +
                price+
                '</div>' +
                '<a class="add-to-cart" href="detail.html?id=' + i + '">SEE MORE</a>' +
                '</div>' +
                '</div>' +
                '</div>' ;
//create dropdown of makes
if (brands.indexOf("<option value='" + brand + "'>" + brand + "</option>") == -1) {
brands += "<option value='" + brand + "'>" + brand + "</option>";
}

//create dropdown of models
if (models.indexOf("<option value='" + model+"'>" + model + "</option>") == -1) {
models += "<option value='" + model + "'>" + model + "</option>";
}

//create dropdown of types
if (rangeofcars.indexOf("<option value='" + rangeofcar + "'>" + rangeofcar + "</option>") == -1) {
rangeofcars += "<option value='" + rangeofcar + "'>" + rangeofcar + "</option>";
}
}


$("#products").html(products);
$(".filter-brand").append(brands);
$(".filter-model").append(models);
$(".filter-rangeofcar").append(rangeofcars);

var filtersObject = {};

//on filter change
$(".filter").on("change",function() {
  var filterName = $(this).data("filter"),
  filterVal = $(this).val();
  console.log(filterVal);

if (filterVal == "") {
  delete filtersObject[filterName];
  } else {
    filtersObject[filterName] = filterVal;
  }

var filters = "";

for (var key in filtersObject) {
  if (filtersObject.hasOwnProperty(key)) {
    filters += "[car-"+key+"='"+filtersObject[key]+"']";
 }
}

if (filters == "") {
  $(".product").show();
  } else {
    $(".product").hide();
    $(".product").hide().filter(filters).show();
  }
});

//on search form submit
$("#search-form").submit(function(e) {
	e.preventDefault();
	var query = $("#search-form input").val().toLowerCase();

	$(".product").hide();
	$(".product").each(function() {

		var brand = $(this).data("Brand").toLowerCase(),
			model = $(this).data("Model").toLowerCase(),
			rangeofcar = $(this).data("Rangeofcar").toLowerCase();

		if (brand.indexOf(query) > -1 || model.indexOf(query) > -1 || rangeofcar.indexOf(query) > -1) {
			$(this).show();
		}
	});
});







