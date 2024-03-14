 const redBtn = document.getElementById('redBtn');
 const roseBtn = document.getElementById('roseBtn');
 const greenBtn = document.getElementById('greenBtn');
 const viloteBtn = document.getElementById('viloteBtn');

 const redDiv = document.getElementById('redDiv');
 const roseDiv = document.getElementById('roseDiv');
 const greenDiv = document.getElementById('greenDiv');
 const viloteDiv = document.getElementById('viloteDiv');

 const redCircle = document.getElementById('redCircle');
 const roseCircle = document.getElementById('roseCircle');
 const greenCircle = document.getElementById('greenCircle');
 const viloteCircle = document.getElementById('viloteCircle');


 // treanding heading
 const trendingHead = document.getElementById('trendingHead');

 //add to cart btn
 const addcartBtn = document.querySelectorAll('#addCart');

 for (let i = 0; i < addcartBtn.length; i++) {
     addcartBtn[i].style.color = "#ff7575";
 }

 const navbarBrand = document.getElementById('navabarBrand');





 redBtn.onclick = function() {
     redDiv.style.display = 'block';
     roseDiv.style.display = 'none';
     greenDiv.style.display = 'none';
     viloteDiv.style.display = 'none';
     trendingHead.style.color = '#ff7575';
     //navbar brand color change
     navbarBrand.style.color = '#ff7575';
     for (let i = 0; i < addcartBtn.length; i++) {
         addcartBtn[i].style.color = "#ff7575";
     }

     redCircle.style.display = 'block';
     roseCircle.style.display = 'none';
     greenCircle.style.display = 'none';
     viloteCircle.style.display = 'none';


 }
 roseBtn.onclick = function() {
     redDiv.style.display = 'none';
     roseDiv.style.display = 'block';
     greenDiv.style.display = 'none';
     viloteDiv.style.display = 'none';
     trendingHead.style.color = '#ff7ee7';
     //navbar brand color change
     navbarBrand.style.color = '#ff7ee7';
     for (let i = 0; i < addcartBtn.length; i++) {
         addcartBtn[i].style.color = "#ff7ee7";
     }

     redCircle.style.display = 'none';
     roseCircle.style.display = 'block';
     greenCircle.style.display = 'none';
     viloteCircle.style.display = 'none';
 }

 greenBtn.onclick = function() {
     redDiv.style.display = 'none';
     roseDiv.style.display = 'none';
     greenDiv.style.display = 'block';
     viloteDiv.style.display = 'none';
     trendingHead.style.color = 'green';
     //navbar brand color change
     navbarBrand.style.color = 'green';
     for (let i = 0; i < addcartBtn.length; i++) {
         addcartBtn[i].style.color = "green";
     }


     redCircle.style.display = 'none';
     roseCircle.style.display = 'none';
     greenCircle.style.display = 'block';
     viloteCircle.style.display = 'none';
 }

 viloteBtn.onclick = function() {
     redDiv.style.display = 'none';
     roseDiv.style.display = 'none';
     greenDiv.style.display = 'none';
     viloteDiv.style.display = 'block';
     trendingHead.style.color = '#c88eff';
     //navbar brand color change
     navbarBrand.style.color = '#c88eff';
     for (let i = 0; i < addcartBtn.length; i++) {
         addcartBtn[i].style.color = "#c88eff";
     }

     redCircle.style.display = 'none';
     roseCircle.style.display = 'none';
     greenCircle.style.display = 'none';
     viloteCircle.style.display = 'block';
 }