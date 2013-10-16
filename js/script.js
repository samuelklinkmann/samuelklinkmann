$(function () {
    'use strict';

    var timer = 300;
    
    fader("header", "h1", "h2", "p", "ul");


    function fader(element1, element2, element3, element4, element5){
    	setTimeout(function(){
	    	$(element1).fadeIn();
	    	setTimeout(function(){
	    		$(element2).fadeIn();
	    		setTimeout(function(){
			   		$(element3).fadeIn();
			    	setTimeout(function(){
				   		$(element4).fadeIn();
			    		setTimeout(function(){
					   		$(element5).fadeIn();
				    	
					    }, timer);	
				    }, timer);	
			    }, timer);
	    	}, timer);
	    }, timer);
    }

}());
