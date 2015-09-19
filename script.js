// activate Nestable for list 1
$('#nestable').nestable()


$(function () {

// var menu = $('#menu').find('input[name="menu"]').val();
 //Set
var menu = $('#menu').val();
var url = $('#url').val();



	// var menu = $( "#menu" ).val();
    var nestablecount = 1;
    $('#appendnestable').click({menu : menu , url: url},function (event) {
    	
    	
        console.log(event.data.menu);

         $('ol.outer').append('<li class="dd-item " data-id="' + nestablecount + '"> <div class="dd-handle lefta">'+ event.data.menu +'</div><div class="rightb"> <a href="' + url + '"target=blank>link</a></div></li>');
        
        nestablecount++;
    });
});