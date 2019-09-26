jQuery(document).ready(function(){
	jQuery('#form').on('submit', function(){
        var urlVin = location.search.substring(1);
        var vin = urlVin.slice(4,urlVin.length);
        jQuery('[data-id="57231621"] input').val(vin);
    });
    jQuery('[data-role="submit"]').focus().click();
    return true;
});

// //Used to get the vin from the url
// jQuery(document).ready(function($){
//     var urlVin = location.search.substring(1);
//     var vin = urlVin.slice(4,urlVin.length);
//     // $('#form').submit(function(eventObj){
//     // $(this).appendTo('<input type="hidden" name="vin" value="' + vin + '" />');
//     // jQuery('[data-role="submit"]').focus().click();
//     // return true;
//     //})
//     $('#form').appendTo('[data-id="49250505"] input[name="vin"]').val(vin);
//     return true;
// });

// jQuery(document).ready(function($){
//     $('#form').on('submit',function(eventObj){
//         eventObj.preventDefault();
//         var urlVin = location.search.substring(1);
//         var vin = urlVin.slice(4,urlVin.length);
//             $('<input>',{
//                 type: 'text',
//                 id: 'hiddenField',
//                 name: 'vin',
//                 value: vin
//             }).appendTo('#form');
//             $('[data-role="submit"]').focus().click();
//     });
// });

// jQuery(document).ready(function($){
//     $('#form').on('submit',function(eventObj){
//         eventObj.preventDefault();
//         var urlVin = location.search.substring(1);
//         var vin = urlVin.slice(4,urlVin.length);
//             $('<input>',{
//                 type: 'text',
//                 id: 'hiddenField',
//                 name: 'vin',
//                 value: vin
//             }).appendTo('#form');
//             $('[data-role="submit"]').focus().click();
//     });
// });


// //Used to get the vin from the url
// jQuery(document).ready(function($){
//     var urlVin = location.search.substring(1);
//     var vin = urlVin.slice(4,urlVin.length);
//     //$('[data-id="57167239"] input[data-index=3]').val('yes').appendTo('[data-id="57167239"] input[data-index=2]');
//         $('<input>',{
//             type: 'text',
//             id: 'hiddenField',
//             name: 'vin',
//             value: vin
//         }).appendTo('#27');
// });
