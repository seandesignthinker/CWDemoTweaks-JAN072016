$(document).ready(function(){
	 $(".popup-modal-dismiss").click(function(e){ 
		 $.magnificPopup.close(); 
	});
		
	 $('.popup-modal').magnificPopup({
		  type: 'inline',
		  preloader: false,
		  focus: '#search',
		   removalDelay: 300,
		   mainClass: 'mfp-fade',
		  modal: true
	});		 
		 
	/*$('.main-menu ul.nav li.dropdown').hover(function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
			}, function() {
	 $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});*/	 
});