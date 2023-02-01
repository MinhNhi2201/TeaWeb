/*$(".drop")
  .mouseover(function() {
  $(".dropdown").show(300);
});
$(".drop")
  .mouseleave(function() {
  $(".dropdown").hide(300);     
});
*/






//slideshow NEWS
$(document).ready(function(){
  $('.news').slick({
    dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
  });
});


//slideshow DANH MUC SP

$('.list').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2
});


//back to top

let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

	



     
 /* data
 myData = {
  "juice": [
      {name: "TRÀ PHÚC BỒN TỬ", price: "40.000 vnđ", url: "https://bizweb.dktcdn.net/thumb/large/100/415/010/products/6.jpg?v=1608878870957"}, 
      {name: "juice 2", price: "99$", url: "https://bizweb.dktcdn.net/thumb/large/100/415/010/products/12.jpg?v=1608878605447"}, 
      {name: "juice 3", price: "99$", url: "https://picsum.photos/200"}, 
      {name: "juice 4", price: "99$", url: "https://picsum.photos/200"}, 
      {name: "juice 5", price: "99$", url: "https://picsum.photos/200"}, 
      {name: "juice 6", price: "99$", url: "https://picsum.photos/200"}, 
      {name: "juice 7", price: "99$", url: "https://picsum.photos/200"}, 
      {name: "juice 8", price: "99$", url: "https://picsum.photos/200"}
  ],
  "cafe": [
      {name: "cafe 1", price: "99$", url: "https://picsum.photos/200"}, 
      {name: "cafe 2", price: "99$", url: "https://picsum.photos/200"}, 
      {name: "cafe 3", price: "99$", url: "https://picsum.photos/200"}, 
      {name: "cafe 4", price: "99$", url: "https://picsum.photos/200"}, 
      {name: "cafe 5", price: "99$", url: "https://picsum.photos/200"}, 
      {name: "cafe 6", price: "99$", url: "https://picsum.photos/200"}, 
      {name: "cafe 7", price: "99$", url: "https://picsum.photos/200"}, 
      {name: "cafe 8", price: "99$", url: "https://picsum.photos/200"}
  ]
} 

document.querySelectorAll(".btn-list").forEach(e => {
  e.addEventListener('click', ()=>{
      console.log(e.value)
      document.querySelector('.menu-item').innerHTML = ""
      myData[e.value].forEach(item => {
          document.querySelector('.menu-item').innerHTML += `
              <div class="menu-item">
                  <img class="img-menu" src=${item.url} alt=""> 
                  <p class="name">${item.name}</p> 
                  <p class="position">${item.price}</p>
                 
              </div>
          `
      })
  })
})
*/