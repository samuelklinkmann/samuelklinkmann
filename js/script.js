$(function () {
    'use strict';

    $("body").addClass("loaded");

}());

$(document).ready(function() {
 $("#preload").load(function(e){
        $("#preload").fadeIn(1000);
    });

});
