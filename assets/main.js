/******
 * Main Javascript for Nevergivapp Scholarship module
 * 
*/




//Search Result Show 

const card = document.getElementById('card');

card.addEventListener('click', (event) => {
    event.preventDefault();
    setTimeout(() => { 
      document.getElementById("result-search").style.display = "block";
    }, 90); 
 
});


const close = document.getElementById('close');

close.addEventListener('click', (event) => {
  event.preventDefault();
  setTimeout(() => { 
    document.getElementById("result-search").style.display = "none";
  }, 90); 

});



// For Drop Menu 
$('.alignright.dropdown')
    .dropdown({
        transition: 'drop'
  });

// Back to Top button 

  var btn = $('#back-top');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
  
  