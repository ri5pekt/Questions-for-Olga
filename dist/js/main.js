$(document).ready(function(){

	var main = $('#main_nav ul');
	var mobile = $('#mobile_nav ul');

	main.find('a').each(function( index, element ) {
		$(element).click(function(event) {	        
		    event.preventDefault();	 
		    var full_url = this.href,
		        parts = full_url.split('#'),
		        trgt = parts[1],
		        target_offset = $('#'+trgt).offset(),
		        target_top = target_offset.top;
		    $('html, body').animate({scrollTop:target_top - 55}, 500);
		    main.children().children().removeClass('active');
		    $(this).addClass('active');

		    mobile.children().children().removeClass('active');
		    mobile.find("a").eq(index).addClass('active');
		});
	});

	$(".sell").click(function(event) {
		var menuItem = main.find('a').eq(3);

		target_offset = $('#profit').offset(),
		target_top = target_offset.top;
		$('html, body').animate({scrollTop:target_top - 55}, 500);

	    main.children().children().removeClass('active');
	    menuItem.addClass('active');
	    mobile.children().children().removeClass('active');
	    mobile.find("a").eq(3).addClass('active');

	});

	mobile.find('.main-link').each(function( index, element ) {
		$(element).click(function(event) {	        
		    event.preventDefault();	 
		    var full_url = this.href,
		        parts = full_url.split('#'),
		        trgt = parts[1],
		        target_offset = $('#'+trgt).offset(),
		        target_top = target_offset.top;
		    $('html, body').animate({scrollTop:target_top - 55}, 500);
		    mobile.children().children().removeClass('active');
		    $(this).addClass('active');

		    main.children().children().removeClass('active');
		    main.find("a").eq(index).addClass('active');

		    $('#mobile_menu_modal').modal('hide');
		});
	});

	
	




	$(".custom-select").each(function( index ) {
		var select = $(this);
		var body = select.children(".body");
		body.width(select.children(".title").width());
		select.children(".title").children('p').text(body.children(".option").first().text());

		body.hide();
		select.children(".title").click(function(){  				
	   		body.slideToggle();
	   	});

	   	body.children(".option").click(function(){  				
	   		body.slideToggle();
	   		select.children(".title").children('p').text($(this).text());
	   	});
	});


	$('input:radio[name="contact-type"]').change(
    function(){
        $("#selected_contact_input").attr("placeholder", "Введите ваш " + this.value);
    });

	var formIsValid = true;
   $('.reg-button').click(function(e){  
   		e.preventDefault();	

   		formIsValid = true;
   		
   		$('.form-error-caption').remove();

   		var login = $(this).parent().find(".reg_login");
   		if(isEmpty(login));
   		else validField(login);
  
   		var email = $(this).parent().find('.reg_email');
   		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   		if(isEmpty(email));
   		else if(regex.test(email.val()) == false) invalidField(email, "Неверный формат");
   		else validField(email);

   		var pass1 = $(this).parent().find('.reg_pass1');
   		var pass2 = $(this).parent().find('.reg_pass2');
   		if(isEmpty(pass1));
   		else if(pass1.val() != pass2.val()) invalidField(pass1, "Пароли не совпадают");
   		else validField(pass1);

   		if(isEmpty(pass2));
   		else if(pass1.val() != pass2.val()) invalidField(pass2, "Пароли не совпадают");
   		else validField(pass2);

   		var wmr = $(this).parent().find('.reg_wmr');
   		if(isEmpty(wmr));
   		else validField(wmr);

   		var skype = $(this).parent().find('.reg_skype');
   		if(isEmpty(skype));
   		else validField(skype);

   		var txt = $(this).parent().find('.reg_text');
   		if(isEmpty(txt));
   		else validField(txt);

   		var reg_checkbox = $(this).parent().find('.reg_checkbox');
   		reg_checkbox_captioin = $(this).parent().find('.reg_checkbox_caption');
   		console.log(reg_checkbox_captioin)
   		if(reg_checkbox.prop("checked") == false) 
   		{
   			formIsValid = false;
   			reg_checkbox_captioin.after("<p style='position: static;' class='form-error-caption'>Вы не согласились с условиями оферты.</p>");
   		}


   		// Если true, можно отправять
   		console.log(formIsValid);

   	});

   function isEmpty(field)
   {
   		if(field.val() == "") 
   		{
   			formIsValid = false;
   			invalidField(field, "Нужно заполнить");
   			return true;
   		}
   		else return false;
   }

   function invalidField(field, text)
   {
   		formIsValid = false;
   		field.before("<p class='form-error-caption'>"+text+"</p>")
        .addClass("invalid-field");
   }

   function validField(field)
   {
        field.removeClass("invalid-field");
   }

    var width = $(window).width();
	$( window ).resize(function() {
		if($(window).width() == width) return;
		width = $(window).width();
	  	$(".custom-select").each(function( index ) {
			var select = $(this);
			var body = select.children(".body");
			body.width(select.children(".title").width());
		});

		initGallery();
	});



	//Landing pages slider
	function initGallery()
	{
		var viewportWidth = $(window).width();
		
		function setDistance(dist, mw, mh, arrDist, isMobile)
		{
			$('#container-gallery').carousel({
		        num: 3,
		        maxWidth: mw,
		        maxHeight: mh,
		        distance: dist,
		        scale: 0.75,
		        animationTime: 1000,
		        showTime: 4000,
		        arrowsDistance: arrDist,
		        isMobile: isMobile,
		        content: galleryContent
		    });
			$('#container-gallery').css({"margin" : "30px auto", "height" : "300px", "width" : "200px"});	
		}
		
		if (viewportWidth <= 610)
		{
			//console.log("xs");
			setDistance(25, 194, 311, -20, true);
		}
		else if(viewportWidth > 610 && viewportWidth <= 940)
		{
			//console.log("sm");
			setDistance(100, 220, 353, -50, false);

		}
		else if(viewportWidth > 940 && viewportWidth <= 1200)
		{
			//console.log("md");
			setDistance(270, 220, 353, -50, false);
		}
		else if(viewportWidth > 1200)
		{
			//console.log("lg");
			setDistance(270, 220, 353, -50, false);
		}
	}

	$("#landing_pages_menu").find($("a")).each(function (index, element) {
		$(element).click(function(e){  
	   		e.preventDefault();
	   		$("#landing_pages_menu").find($("a")).removeClass("selected");
	   		$(this).addClass("selected");   		
	   		var select = $("#landing_pages_select");
			var body = select.children(".body");
			select.children(".title").children('p').text(body.children(".option").eq(index).text());
			reloadSlider(index);
	   	});
	});

	var select = $("#landing_pages_select");
	var body = select.children(".body");
	body.children(".option").each(function (index, element) {
		$(element).click(function(){  
			$("#landing_pages_menu").find($("a")).removeClass("selected");
			var text = $("#landing_pages_menu").children("li").eq(index).children("a").addClass("selected");
			reloadSlider(index);
   		});
   	});

	function reloadSlider(contentIndex)
	{
		galleryContent = all_content[contentIndex];

		$('#container-gallery').fadeOut(250);
   		$(".cover").fadeOut(250, function() {
	    	initGallery();
	    });
	}

	var gallery_music = [
		{image: "images/gallery/music/1.png", operator: "images/logo1.png", price: 59},
		{image: "images/gallery/music/2.png", operator: "images/logo2.png", price: 69},
		{image: "images/gallery/music/3.png", operator: "images/logo3.png", price: 79},
		{image: "images/gallery/music/4.png", operator: "images/logo2.png", price: 89},
	];

	var gallery_video = [
		{image: "images/gallery/video/1.png", operator: "images/logo1.png", price: 59},
		{image: "images/gallery/video/2.png", operator: "images/logo2.png", price: 69},
		{image: "images/gallery/video/3.png", operator: "images/logo3.png", price: 79},
		{image: "images/gallery/video/4.png", operator: "images/logo4.png", price: 89},
	];

	var gallery_files = [
		{image: "images/gallery/files/1.png", operator: "images/logo1.png", price: 59},
		{image: "images/gallery/files/2.png", operator: "images/logo2.png", price: 69},
		{image: "images/gallery/files/3.png", operator: "images/logo3.png", price: 79},
		{image: "images/gallery/files/4.png", operator: "images/logo4.png", price: 89},
	];

	var gallery_food = [
		{image: "images/gallery/food/1.png", operator: "images/logo1.png", price: 59},
		{image: "images/gallery/food/2.png", operator: "images/logo2.png", price: 69},
		{image: "images/gallery/food/3.png", operator: "images/logo3.png", price: 79},
		{image: "images/gallery/food/4.png", operator: "images/logo4.png", price: 89},
	];

	

	var gallery_all = gallery_music.concat(gallery_video, gallery_files, gallery_food);

	var all_content = [gallery_all, gallery_music, gallery_video, gallery_files, gallery_food];
	var galleryContent = gallery_all;
    initGallery();









    //Trafic calculate

	var trafic_type = [2, 0.7, 2, 1];
	var trafic_subject = [2, 5, 2, 2.5, 5, 5, 5, 2.5];

	var type_mult = trafic_type[0];
	var subject_mult = trafic_subject[0];

	select = $("#subject_select");
	body = select.children(".body");
	body.children(".option").each(function (index, element) {
		$(element).click(function(){  
			subject_mult = trafic_subject[index];
   		});
   	});

   	select = $("#type_select");
	body = select.children(".body");
	body.children(".option").each(function (index, element) {
		$(element).click(function(){  
			type_mult = trafic_type[index];
   		});
   	});



    $("#button_profit").click(function(){ 
    	
    	if($("#field_trafic").val() > 999999) $("#field_trafic").val(999999);
    	var profit = $("#field_trafic").val();

    	profit *= subject_mult * type_mult;


    	$(".calc_d_output").text(profit);
    	$(".calc_m_output").text(profit * 30);
    	$(".calc_y_output").text(profit * 30 * 12);



    	$('.calc_d_output, .calc_m_output, .calc_y_output').each(function () {
    	$(this).prop('Counter',0).animate({
       		Counter: $(this).text()
		    }, {
		        duration: 2000,
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
		});

	});




});