$(function(){"use strict";var o=$("html, body");$(".stop-this").on("click",function(o){o.preventDefault()}),$(".navbar .nav-item .nav-link").on("click",function(){$(this).addClass("active").parent().siblings().find(".nav-link").removeClass("active"),o.animate({scrollTop:$("#"+$(this).data("scroll")).offset().top+1},1e3)}),$(".button-scroll").on("click",function(){o.animate({scrollTop:0},1e3)}),$(window).on("scroll",function(){$(".block").each(function(){var o=$(this).attr("id");$(window).scrollTop()>$(this).offset().top&&($(".navbar .nav-item .nav-link").removeClass("active"),$('.navbar .nav-item .nav-link[data-scroll="'+o+'"]').addClass("active"))}),$(window).scrollTop()>37?$(".navbar").addClass("navbar-fixed"):$(".navbar").removeClass("navbar-fixed"),$(window).scrollTop()>=700?"-40px"==$(".button-scroll").css("bottom")&&($(".button-scroll").animate({bottom:"10px"},400),$(".button-scroll").on("click",function(){o.animate({scrollTop:0},1e3)})):$(window).scrollTop()<=700&&"10px"==$(".button-scroll").css("bottom")&&$(".button-scroll").animate({bottom:"-40px"},400)}),$(".dropdown-menu .form-dropdown input:last-child").on("click",function(){$(".block").each(function(){$(".dropdown-menu .form-dropdown input:first-child").val()==$(this).attr("id")&&o.animate({scrollTop:$(this).offset().top+5},1e3)})}),$(".gallary .gallary-img img").on("click",function(){$(this).parent().parent().addClass("selected").siblings().removeClass("selected"),$("body").css("overflow-y","hidden"),$(".popup-gallary").fadeIn(),$(".popup-gallary .intro-popup .popup-img-container img").attr("src",$(this).attr("src")),$(".intro-popup").css("margin-top",-$(".intro-popup img").height()/2),o.animate({scrollTop:$(this).parent().parent().offset().top},800)}),$(window).on("resize",function(){$(".intro-popup").css("margin-top",-$(".intro-popup img").height()/2)}),$(".intro-popup .fa-times").on("click",function(){$("body").css("overflow-y","auto"),$(".popup-gallary").fadeOut()}),$(".popup-gallary .chevrones .fa-chevron-right").on("click",function(){$(".gallary .selected").is(":last-child")?$(".gallary .gallary-parent:first-child img").click():$(".gallary .selected").next().find("img").click()}),$(".popup-gallary .chevrones .fa-chevron-left").on("click",function(){$(".gallary .selected").is(":first-child")?$(".gallary .gallary-parent:last-child img").click():$(".gallary .selected").prev().find("img").click()}),$(".intro .intro-info button:last-of-type").on("click",function(){o.animate({scrollTop:$(".services").offset().top+1},1e3)}),$(".about-down .about-text button").on("click",function(){o.animate({scrollTop:$(".address").offset().top+1},1e3)}),$(".team-down .team-down-info button:last-of-type").on("click",function(){o.animate({scrollTop:$(".blog").offset().top+1},1e3)})});