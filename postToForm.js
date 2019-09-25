//Used to get the vin from the url
var urlVin = location.search.substring(1)
var vin = urlVin.slice(4,urlVin.length)
$('#form').submit(function(eventObj){
$(this).append('<input type="hidden" name="vin"' + vin + '" />');
return true;
})