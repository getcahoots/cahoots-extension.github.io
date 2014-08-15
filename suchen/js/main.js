$(document).ready(function(){
	var storedValue = sessionStorage.getItem("searchValue");
	console.log(sessionStorage.getItem("searchValue"));
	$('#search').val(storedValue);
	sessionStorage.setItem("searchValue", '');

	if ($('#search').keyup()) && ($("search").val().length > 2)) {
		if ($(window).width() > 960) {
			$('header').css({ backgroundPosition: 'left center', margin: '30px auto 10px auto', transition: 'all 0.3s linear', WebkitTransition: 'all 0.3s linear', WebkitTransitionDelay: '0.05s', transitionDelay: '0.05s',});
			$('.results').css({ opacity: '1', WebkitOpacity: '1', margin: '60px 0 80px 0', WebkitTransform: 'scale(1)', MozTransform: 'scale(1)', MsTransform: 'scale(1)', OTransform: 'scale(1)', transform: 'scale(1)', transition: 'all 0.4s cubic-bezier(0,.99,.66,.99)', WebkitTransition: 'all 0.4s cubic-bezier(0,.99,.66,.99)', WebkitTransitionDelay: '1s', transitionDelay: '1s',});
			$('#del').css({ display: 'none',});
		} else {
			$('header').css({ backgroundPosition: 'left center', margin: '0 auto 0 auto', transition: 'all 0.3s linear', WebkitTransition: 'all 0.3s linear', WebkitTransitionDelay: '0.05s', transitionDelay: '0.05s',});
			$('.results').css({ opacity: '1', WebkitOpacity: '1', margin: '25px 0 80px 0', transition: 'all 0.4s cubic-bezier(0,.99,.66,.99)', WebkitTransition: 'all 0.4s cubic-bezier(0,.99,.66,.99)', WebkitTransitionDelay: '1s', transitionDelay: '1s',});
			$('#del').css({ display: 'none',});
		}
	});
	$(window).keydown(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
	 		return false;
		}
	});
});