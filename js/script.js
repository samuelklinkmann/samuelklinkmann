$(function () {
    'use strict';

    $("body").addClass("loaded");

}());

$(document).ready(function() {
 $("#preload").load(function(e){
        $(e.currentTarget).fadeIn(1000);
    });

});
