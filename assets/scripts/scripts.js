jQuery.noConflict();

jQuery(document).ready(function( $ ) {
    $('body').bsgdprcookies();
    
    $('.sub-list').hover( function() {
        $(this).toggleClass('open').children('.sub-nav').toggleClass('nav-open');
    })
    
    $('.info-button').on('click', function() {
        $triggered = $(this).attr('data-href');
        $modal = $('#info-modal');
        
        if ( $triggered == 'mo-text') { 
            $modal.find('.modal-title').text('Monitorul Oficial Local');
            $modal.find('.content').hide();
            $modal.find('#mo-text').show();
            $(this).attr('data-target','#info-modal');
        } 
        else if ( $triggered == 'fo-text') {
            $modal.find('.modal-title').text('Formulare online');
            $modal.find('.content').hide();
            $modal.find('#fo-text').show();
            $(this).attr('data-target','#info-modal');
        }
            
    })
});

jQuery(document).on('change', function() {
    if ($('.navbar-toggler').attr('aria-expanded') == 'false') {
            $('.navbar-expand-md').css('width', '100%');
        } else {
            $('.navbar-expand-md').css('width', 'auto');
        }
})

// When the user scrolls the page, execute myFunction
window.onscroll = function() {fixNavbar()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function fixNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}