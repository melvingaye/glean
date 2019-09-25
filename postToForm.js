//Used to get the vin from the url
jQuery(document).ready(function($){
    $('#form').on('submit',function(eventObj){
        eventObj.preventDefault();
        var urlVin = location.search.substring(1);
        var vin = urlVin.slice(4,urlVin.length);
            $('<input>',{
                type: 'text',
                id: 'hiddenField',
                name: 'vin',
                value: vin
            }).appendTo('#form');
            $('[data-role="submit"]').focus().click();
    });
});
