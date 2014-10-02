(function(){

	function createCookie( name,value,days ) {
		if ( days ) {
			var date = new Date();
			date.setTime( date.getTime()+( days*24*60*60*1000 ) );
			var expires = '; expires=' + date.toGMTString();
		}
		else var expires = '';
		document.cookie = name + '=' + value+expires + '; path=/';
	}
	function readCookie( name ) {
		var nameEQ = name + '=';
		var siteCookies = document.cookie.split( ';' );
		for( var i=0; i < siteCookies.length; i++ ) {
			var c = siteCookies[i];
			while ( c.charAt(0) == ' ' ) c = c.substring( 1, c.length );
			if ( c.indexOf( nameEQ ) == 0 ) return c.substring( nameEQ.length, c.length );
		}
		return null;
	}

	$( window ).load( function() {
		$( '.carousel a.carousel-control' ).on( 'click', function() {
			$(this).blur();
		});
		$( '#gallery img' ).on( 'click', function() {
			var image = $(this).attr( 'src' );
			$( '#galleryModal img' ).attr( 'src', image );
			$( '#galleryModal' ).modal( 'show' );
		})
		$( '#warning a:first-child' ).on( 'click', function() {
			createCookie( 'thunderConsent', 'accept', 1 );
		});
		$( '#warning a:last-child' ).on( 'click', function() {
			createCookie( 'thunderConsent', '', -1 );
		});
	});
	$( document ).ready( function() {
		if ( readCookie( 'thunderConsent' ) != 'accept' && window.location.href.indexOf( 'warning' ) < 0 ) {
			window.location.replace(' /warning.html' );
		}
	});
})();

