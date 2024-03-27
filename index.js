document.addEventListener('DOMContentLoaded', function() {
    const cardElements = document.querySelectorAll('.card');
    cardElements.forEach(function(cardElement) {
        cardElement.addEventListener('click', function() {
            // console.log(cardElement.id);
            the_other_card = document.getElementById(cardElement.id == 'c1' ? 'c2' : 'c1');
            // console.log(the_other_card.id);
            the_other_card.classList.remove('card--active');
            cardElement.classList.toggle('card--active');
        });
    });
    });


window.onload = function() {
    window.scrollTo(0, 0);
};

window.addEventListener('load', function() {
  const logo = document.getElementById('logo-main');
  logo.style.opacity = 1;  
});

