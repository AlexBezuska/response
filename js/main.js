
$(document).ready(function(){
    var url = window.location.hash.substring(1);
    loadURL(url);
    $('.urlToTest').val(url);
});

function loadURL(URL){
    $('iframe').attr("src", URL); 
}

$(document).keypress(function(e) {
   var url = $('.urlToTest').val();
     window.location.hash = url;
     loadURL(url);
});

$('.go').click(function() {
     var url = $('.urlToTest').val();
     window.location.hash = url;
     loadURL(url);
});
