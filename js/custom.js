// Jquery with no conflict
jQuery(document).ready(function($) { 
    /********* Mi codigo jejej  *********/
    var FavoritasClickFired = false;
    seekImages();
 
    //##########################################
    // CLICK   en  Botar Favorita
    //##########################################
  
    $("#BT_SelFavorita").click(function (e) {       
        FavoritasClickFired = true;       
        var html_instruccionts = "<div id='modal_favoritas' class='info_favoritas'>Haga <strong>click</strong> sobre su imagen Favorita</div>";
        $("body").append($(html_instruccionts).hide());
        var coor_x = e.pageX;
        var coor_y = e.pageY;
        $("#modal_favoritas").css("top", coor_y).css("left", coor_x + 15).show("slow");
        $(document).live("mousemove", function (e) {
            var coor_x = e.pageX;
            var coor_y = e.pageY;
            $("#modal_favoritas").css("top", coor_y).css("left", coor_x + 15);           
        });
        seekImages("all");       
    });
  
    //##########################################
    // light box
    //##########################################
       
    $('h3').click(function () {
        $("h3").css("color", "#FFF");
        $(this).css("color", "#0f0f0f");
        var filter = this.id;
        seekImages(filter);
    });
    //##########################################
    // SEEK_IMAGES (busca las imagenes que se van a mostrar segun la seccion)
    //##########################################
   
    function seekImages(filter) {

        if (filter == undefined) {
            var filter = "Favoritas";
        }
        $.get("config/imagenes_config.xml", "", function (data) {
            var listResult = [];
            $(data).find("Imagen").each(function () {
                var imagen = {
                    src_Thumbs: $(this).attr("src_Thumbs"),
                    src_Pictures: $(this).attr("src_Picture"),
                    name: $(this).attr("name"),
                    section: $(this).attr("section"),
                   
                };
                var count = localStorage.getItem($(this).attr("name"));
                if (isNaN(count) || count == undefined) {
                    count = 0;
                } else {
                    count = parseInt(count);
                }
                imagen.count_Favoritas = count;               
                
                if (imagen.section == filter  || filter == "all" || filter == "Favoritas") {
                    listResult.push(imagen);                   
                }                
            });
            var orderedImages = SortImagesByCountFavorita(listResult);
            $("#gallery-holder ul").children("li").remove();
            var htmlslides = "";
            if (filter == "Favoritas") {
                orderedImages = orderedImages.slice(0,5);                
            }
            for (var i = 0; i < orderedImages.length; i++) {
                htmlslides += "<li class='graphics fltlft'>";
                htmlslides += "<a href='" + orderedImages[i].src_Pictures + "' rel='prettyPhoto[group]' class='plusbg'>";
                htmlslides += "<img src='" + orderedImages[i].src_Thumbs + "' title='" + orderedImages[i].name + "' alt='" + orderedImages[i].name + "'/></a></li>";
            }
            $("#gallery-holder ul").append($(htmlslides));         
            if(filter!="all" ){
                 $("a[rel^='prettyPhoto']").prettyPhoto();            
             }
            $("a[rel^='prettyPhoto']").click(function (event) {
                event.preventDefault();
                var elementclicked = $(this);
                if (FavoritasClickFired == true) {
                    var element = $(this).find("img");                    
                    var count_Favorita;
                    var gerundio=" ocaciones";
                    count_Favorita = localStorage.getItem(element.attr("title"));
                    if (count_Favorita == null || count_Favorita == undefined || count_Favorita== NaN)
                    { count_Favorita = 1; gerundio = " ocacion"; } else { count_Favorita = parseInt(count_Favorita) +1; }
                    localStorage.setItem(element.attr("title"), count_Favorita.toString());                    
                    $("#modal_favoritas").remove();
                    muestraMensaje("Su Imagen Favorita", "Esta foto ha sido seleccionada Favorita en " + count_Favorita + gerundio);                    
                    FavoritasClickFired = false;
                    $("#Favoritas").trigger('click');
                                       
                }
               
            });
           
        }, "xml");
    }
    function SortImagesByCountFavorita(array) {
        for (var i = 0; i < array.length; i++) {
            for (var j = i+1; j < array.length; j++) {
                if (array[i].count_Favoritas < array[j].count_Favoritas) {
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
        return array;
    }

    // Gallery restart
    function galleryRestart() {      
        // prettyPhoto restart   
      
        // preserve the status of the description
        $displayText = $(".gallery-filter .layout-notext").hasClass("active");
        //console.log($displayText);

        if ($displayText) {
            $filterList.find(".thumb-description").slideUp(0);
        }

    }

  
	//##########################################
	// Nav menu
	//##########################################
	
	$("ul.sf-menu").superfish({ 
        animation: {height:'show'},   // slide-down effect without fade-in 
        delay:     400 ,              // 1.2 second delay on mouseout 
        autoArrows:  false,
        speed:         'normal'
    });
    
    //##########################################
	// Header nav
	//##########################################
	
    $(document).mousemove(function(e){
    	if((e.pageY) < 200){
			$("#headernav").fadeIn();
		}else{
			$("#headernav").fadeOut();
		}
   	}); 
	
	


	//##########################################
	// Front slides
	//##########################################

	$('#front-slides').slides({
		preload: true,
		generateNextPrev: false,
		slideSpeed: 500,
		animationStart: function(current){
			$slideCaption = $(".slides_container div.slide:eq("+ (current-1) +") .caption").text();
			$("#headline h6").text($slideCaption);
			
			if($slideCaption != ''){
				$("#headline").stop().hide().slideDown(600);
			}else{
				$("#headline").hide();
			}
		}
	});
	
	// default headline
	$firstCaption = $(".slides_container div.slide:eq(0) .caption").text();
	if($firstCaption != ''){
		$("#headline h6").text($firstCaption);
	}else{
		$("#headline").hide();
	}
	
	//##########################################
	// Reel slides
	//##########################################

	$('#reel').slides({
		preload: true,
		generateNextPrev: false,
		generatePagination: false,
		next: 'next',
		slideSpeed: 700
	});
	
	
	//##########################################
	// Rollovers
	//##########################################
	
	$('.gallery-thumbs a').live("mouseover mouseout", function(event){
			
		if ( event.type == "mouseover" ) {
			thiImage = $(this).children('img');
			thiImage.stop().animate({opacity:0.3},{queue:false,duration:200});
		}else{
			thiImage.stop().animate({opacity:1},{queue:false,duration:200});
		}
		
	});
	
	//##########################################
	// QUICKSAND FILTER
	//##########################################	
	
	// get the initial (full) list
	
	var $filterList = $('ul#portfolio-list');
		
	// Unique id 
	for(var i=0; i<$('ul#portfolio-list li').length; i++){
		$('ul#portfolio-list li:eq(' + i + ')').attr('id','unique_item' + i);
	}

	// clone list
	var $data = $filterList.clone();
	
	// Click
	$('#portfolio-filter a').click(function(e) {
	
		if($(this).attr('rel') == 'all') {
			// get a group of all items
			var $filteredData = $data.find('li');
		} else {
			// get a group of items of a particular class
			var $filteredData = $data.find('li.' + $(this).attr('rel'));
		}
		
		// call Quicksand
		$('ul#portfolio-list').quicksand($filteredData, {
			duration: 500,
			attribute: function(v) {
				// this is the unique id attribute we created above
				return $(v).attr('id');
			}
		}, function() {
	        // restart functions
	        galleryRestart();
		});
		// remove # link
		e.preventDefault();
			
	});


	
	
	//##########################################
	// Gallery layout display
	//##########################################
	
	var $layout_text = $(".gallery-filter .layout-text");
	var $layout_notext = $(".gallery-filter .layout-notext");
	var $gallery = $filterList;
	
	// text button
	$layout_text.live('click', function(){
		if(!$(this).hasClass("active")){
			$(this).addClass("active");
			$layout_notext.removeClass("active");
			$gallery.find(".thumb-description").slideDown();
		}
	});
	
	// no text button
	$layout_notext.live('click', function(){
		if(!$(this).hasClass("active")){
			$(this).addClass("active");
			$layout_text.removeClass("active");
			$gallery.find(".thumb-description").slideUp();
		}
	});	
	
	
		
	//##########################################
	// Comments switcher
	//##########################################

	var $comments_switcher = $(".show-comments");
	var $comments_holder = $(".comments-switcher");
	
	$comments_switcher.click(function(){
		if($comments_holder.css("display") == "block"){
			$comments_switcher.children("span").text("click to show");		
		}else{
			$comments_switcher.children("span").text("click to hide");
		}
		$comments_holder.slideToggle();
	});
	
});

// search clearance	
function defaultInput(target){
	if((target).value == 'Search...'){(target).value=''}
}

function clearInput(target){
	if((target).value == ''){(target).value='Search...'}
}

