//Used to get the vin from the url
jQuery(document).ready(function(){
    var urlVin = location.search.substring(1)
    var vin = urlVin.slice(4,urlVin.length)
    $('#form').submit(function(eventObj){
    $(this).appendTo('<input type="hidden" name="vin" value="' + vin + '" />');
    return true;
    })
});
