!function(s){function t(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return s[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={};return t.m=s,t.c=a,t.i=function(s){return s},t.d=function(s,a,e){t.o(s,a)||Object.defineProperty(s,a,{configurable:!1,enumerable:!0,get:e})},t.n=function(s){var a=s&&s.__esModule?function(){return s.default}:function(){return s};return t.d(a,"a",a),a},t.o=function(s,t){return Object.prototype.hasOwnProperty.call(s,t)},t.p="",t(t.s=3)}([function(s,t){},function(s,t,a){s.exports=a.p+"files/resume.pdf?aaa8264cbff798807c285164aca30251"},function(s,t){!function(s){s.fn.lhSlider=function(t,a){function e(s,t){w||(w=!0,f.animate({left:-s*p},function(){h=s,0===s?(f.css({left:-(x-2)*p}),h=x-2):s===x-1&&(f.css({left:-p}),h=1),n(h),w=!1,"function"==typeof t&&t()}))}function r(){a=setInterval(function(){e(++h)},3e3)}function m(){clearInterval(a)}function n(s){var t=_+s;o.find(".lh_points").find("div").css("opacity","0.3"),o.find(".lh_points").find("."+t).find("div").css("opacity","0.8")}var c=!0,o=this,_="lh_point",l=30;void 0!=a&&(c=a),o.css("overflow","hidden"),o.css("position","relative"),o.css("font-size","0px");var f=o.find("div:first"),x=f.find("img").length+2,p=o.width();o.css("height",p/t+l+"px"),f.css("position","absolute"),f.css("width",x*p+"px");var $=f.find("img");$.css("float","left"),$.css("width",p+"px"),$.css("height",p/t+"px"),$.click(function(t){window.open(s(t.currentTarget).attr("src"))});var d=f.find("img:first").clone(),u=f.find("img:last").clone();f.append(d),f.prepend(u),s(window).resize(function(){p=o.width(),o.css("height",p/t+l+"px"),f.css("width",x*p+"px"),f.css("left",-h*p+"px");var s=f.find("img");s.css("width",p+"px"),s.css("height",p/t+"px")});var h=1;f.css("left",-h*p+"px"),o.find("#lh_left").click(function(){m(),e(--h,function(){c&&r()})}),o.find("#lh_right").click(function(){m(),e(++h,function(){c&&r()})});var a,w=!1;c&&r();var g=16,Y=4,v=s(document.createElement("div"));v.css("position","absolute"),v.css("bottom","10px"),v.css("width","100%"),v.css("font-size","0px"),o.append(v);var k=s(document.createElement("div"));for(v.append(k),k.attr("class","lh_points"),k.css("margin","auto"),k.css("width",(2*Y+g)*(x-2)+"px"),i=0;i<x-2;i++){var b=s(document.createElement("a"));b.css("display","inline-block"),b.attr("href","javascript:void(0)"),b.attr("class",_+(i+1));var y=s(document.createElement("div"));y.css("width",g+"px"),y.css("height","3px"),0==i?y.css("opacity","0.8"):y.css("opacity","0.3"),y.css("background-color","#888"),y.css("border-radius","1.5px"),y.css("margin-left",Y+"px"),y.css("margin-right",Y+"px"),b.append(y),k.append(b),b.click(function(s){var t=s.currentTarget.className.substr(s.currentTarget.className.length-1,1);m(),e(t,function(){c&&r()})})}}}(jQuery)},function(s,t,a){a(0),a(2),a(1),$(document).ready(function(){function s(){var s=window.pageYOffset-$("#page2").offset().top+window.innerHeight,t=($("#page2").height(),window.innerHeight),a=t/2+d-s;if(a<0&&(a*=-1),a<=100)$("#mx_rail_1").css("transform","scale(1.5)"),$("#mx_rail_1").css("-ms-transform","scale(1.5)"),$("#mx_rail_1").css("-webkit-transform","scale(1.5)"),$("#mx_rail_1").css("-moz-transform","scale(1.5)"),$("#mx_rail_1").css("-o-transform","scale(1.5)"),$("#mx_edu_item_1").css("transform","scale(1.0)"),$("#mx_edu_item_1").css("-ms-transform","scale(1.0)"),$("#mx_edu_item_1").css("-webkit-transform","scale(1.0)"),$("#mx_edu_item_1").css("-moz-transform","scale(1.0)"),$("#mx_edu_item_1").css("-o-transform","scale(1.0)");else if(a<=300){var e=-.0025*a+1.75;$("#mx_rail_1").css("transform","scale("+e+")"),$("#mx_rail_1").css("-ms-transform","scale("+e+")"),$("#mx_rail_1").css("-webkit-transform","scale("+e+")"),$("#mx_rail_1").css("-moz-transform","scale("+e+")"),$("#mx_rail_1").css("-o-transform","scale("+e+")");var r=-5e-4*a+1.05;$("#mx_edu_item_1").css("transform","scale("+r+")"),$("#mx_edu_item_1").css("-ms-transform","scale("+r+")"),$("#mx_edu_item_1").css("-webkit-transform","scale("+r+")"),$("#mx_edu_item_1").css("-moz-transform","scale("+r+")"),$("#mx_edu_item_1").css("-o-transform","scale("+r+")")}else $("#mx_rail_1").css("transform","scale(1.0)"),$("#mx_rail_1").css("-ms-transform","scale(1.0)"),$("#mx_rail_1").css("-webkit-transform","scale(1.0)"),$("#mx_rail_1").css("-moz-transform","scale(1.0)"),$("#mx_rail_1").css("-o-transform","scale(1.0)"),$("#mx_edu_item_1").css("transform","scale(0.9)"),$("#mx_edu_item_1").css("-ms-transform","scale(0.9)"),$("#mx_edu_item_1").css("-webkit-transform","scale(0.9)"),$("#mx_edu_item_1").css("-moz-transform","scale(0.9)"),$("#mx_edu_item_1").css("-o-transform","scale(0.9)");var m=t/2+u-s;if(m<0&&(m*=-1),m<=100)$("#mx_rail_2").css("transform","scale(1.5)"),$("#mx_rail_2").css("-ms-transform","scale(1.5)"),$("#mx_rail_2").css("-webkit-transform","scale(1.5)"),$("#mx_rail_2").css("-moz-transform","scale(1.5)"),$("#mx_rail_2").css("-o-transform","scale(1.5)"),$("#mx_edu_item_2").css("transform","scale(1.0)"),$("#mx_edu_item_2").css("-ms-transform","scale(1.0)"),$("#mx_edu_item_2").css("-webkit-transform","scale(1.0)"),$("#mx_edu_item_2").css("-moz-transform","scale(1.0)"),$("#mx_edu_item_2").css("-o-transform","scale(1.0)");else if(m<=300){var n=-.0025*m+1.75;$("#mx_rail_2").css("transform","scale("+n+")"),$("#mx_rail_2").css("-ms-transform","scale("+n+")"),$("#mx_rail_2").css("-webkit-transform","scale("+n+")"),$("#mx_rail_2").css("-moz-transform","scale("+n+")"),$("#mx_rail_2").css("-o-transform","scale("+n+")");var c=-5e-4*m+1.05;$("#mx_edu_item_2").css("transform","scale("+c+")"),$("#mx_edu_item_2").css("-ms-transform","scale("+c+")"),$("#mx_edu_item_2").css("-webkit-transform","scale("+c+")"),$("#mx_edu_item_2").css("-moz-transform","scale("+c+")"),$("#mx_edu_item_2").css("-o-transform","scale("+c+")")}else $("#mx_rail_2").css("transform","scale(1.0)"),$("#mx_rail_2").css("-ms-transform","scale(1.0)"),$("#mx_rail_2").css("-webkit-transform","scale(1.0)"),$("#mx_rail_2").css("-moz-transform","scale(1.0)"),$("#mx_rail_2").css("-o-transform","scale(1.0)"),$("#mx_edu_item_2").css("transform","scale(0.9)"),$("#mx_edu_item_2").css("-ms-transform","scale(0.9)"),$("#mx_edu_item_2").css("-webkit-transform","scale(0.9)"),$("#mx_edu_item_2").css("-moz-transform","scale(0.9)"),$("#mx_edu_item_2").css("-o-transform","scale(0.9)");var i=t/2+h-s;if(i<0&&(i*=-1),i<=100)$("#mx_rail_3").css("transform","scale(1.5)"),$("#mx_rail_3").css("-ms-transform","scale(1.5)"),$("#mx_rail_3").css("-webkit-transform","scale(1.5)"),$("#mx_rail_3").css("-moz-transform","scale(1.5)"),$("#mx_rail_3").css("-o-transform","scale(1.5)"),$("#mx_edu_item_3").css("transform","scale(1.0)"),$("#mx_edu_item_3").css("-ms-transform","scale(1.0)"),$("#mx_edu_item_3").css("-webkit-transform","scale(1.0)"),$("#mx_edu_item_3").css("-moz-transform","scale(1.0)"),$("#mx_edu_item_3").css("-o-transform","scale(1.0)");else if(i<=300){var o=-.0025*i+1.75;$("#mx_rail_3").css("transform","scale("+o+")"),$("#mx_rail_3").css("-ms-transform","scale("+o+")"),$("#mx_rail_3").css("-webkit-transform","scale("+o+")"),$("#mx_rail_3").css("-moz-transform","scale("+o+")"),$("#mx_rail_3").css("-o-transform","scale("+o+")");var _=-5e-4*i+1.05;$("#mx_edu_item_3").css("transform","scale("+_+")"),$("#mx_edu_item_3").css("-ms-transform","scale("+_+")"),$("#mx_edu_item_3").css("-webkit-transform","scale("+_+")"),$("#mx_edu_item_3").css("-moz-transform","scale("+_+")"),$("#mx_edu_item_3").css("-o-transform","scale("+_+")")}else $("#mx_rail_3").css("transform","scale(1.0)"),$("#mx_rail_3").css("-ms-transform","scale(1.0)"),$("#mx_rail_3").css("-webkit-transform","scale(1.0)"),$("#mx_rail_3").css("-moz-transform","scale(1.0)"),$("#mx_rail_3").css("-o-transform","scale(1.0)"),$("#mx_edu_item_3").css("transform","scale(0.9)"),$("#mx_edu_item_3").css("-ms-transform","scale(0.9)"),$("#mx_edu_item_3").css("-webkit-transform","scale(0.9)"),$("#mx_edu_item_3").css("-moz-transform","scale(0.9)"),$("#mx_edu_item_3").css("-o-transform","scale(0.9)")}function t(){window.pageYOffset>=$("#page1").offset().top&&window.pageYOffset<$("#page2").offset().top-40?($("#mx_nav_item1").css("color","#26CC63"),$("#mx_nav_item2").css("color","#888"),$("#mx_nav_item3").css("color","#888")):window.pageYOffset>=$("#page2").offset().top-40&&window.pageYOffset<$("#page3").offset().top-40?($("#mx_nav_item1").css("color","#888"),$("#mx_nav_item2").css("color","#26CC63"),$("#mx_nav_item3").css("color","#888")):window.pageYOffset>=$("#page3").offset().top-40?($("#mx_nav_item1").css("color","#888"),$("#mx_nav_item2").css("color","#888"),$("#mx_nav_item3").css("color","#26CC63")):($("#mx_nav_item1").css("color","#888"),$("#mx_nav_item2").css("color","#888"),$("#mx_nav_item3").css("color","#888"))}function a(){for(i=1;i<5;i++)e(i);!w&&window.pageYOffset+window.innerHeight>$("#mx_edu").offset().top&&($("#mx_edu").css("opacity","1.0"),$("#mx_edu").css("transform","translateY(0px)"),$("#mx_edu").css("-ms-transform","translateY(0px)"),$("#mx_edu").css("-moz-transform","translateY(0px)"),$("#mx_edu").css("-webkit-transform","translateY(0px)"),$("#mx_edu").css("-o-transform","translateY(0px)")),!g&&window.pageYOffset+window.innerHeight>$("#mx_skills").offset().top&&($("#mx_skills").css("opacity","1.0"),$("#mx_skills").css("transform","translateY(0px)"),$("#mx_skills").css("-ms-transform","translateY(0px)"),$("#mx_skills").css("-moz-transform","translateY(0px)"),$("#mx_skills").css("-webkit-transform","translateY(0px)"),$("#mx_skills").css("-o-transform","translateY(0px)"),setTimeout(function(){$("#mx_skill_1").animate({width:"100%"},Y),$("#mx_skill_7").animate({width:"100%"},Y)},50),setTimeout(function(){$("#mx_skill_2").animate({width:"100%"},Y),$("#mx_skill_8").animate({width:"100%"},Y)},100),setTimeout(function(){$("#mx_skill_3").animate({width:"100%"},Y),$("#mx_skill_9").animate({width:"100%"},Y)},200),setTimeout(function(){$("#mx_skill_4").animate({width:"100%"},Y),$("#mx_skill_10").animate({width:"100%"},Y)},300),setTimeout(function(){$("#mx_skill_5").animate({width:"100%"},Y),$("#mx_skill_11").animate({width:"100%"},Y)},400),setTimeout(function(){$("#mx_skill_6").animate({width:"100%"},Y),$("#mx_skill_12").animate({width:"100%"},Y)},500))}function e(s){!o[s]&&window.pageYOffset+window.innerHeight>$("#mx_p"+s).offset().top&&($("#mx_p"+s+"_left").css("opacity","1.0"),$("#mx_p"+s+"_left").css("transform","translateY(0px)"),$("#mx_p"+s+"_left").css("-ms-transform","translateY(0px)"),$("#mx_p"+s+"_left").css("-moz-transform","translateY(0px)"),$("#mx_p"+s+"_left").css("-webkit-transform","translateY(0px)"),$("#mx_p"+s+"_left").css("-o-transform","translateY(0px)"),setTimeout(function(){$("#mx_p"+s+"_right").css("opacity","1.0"),$("#mx_p"+s+"_right").css("transform","translateY(0px)"),$("#mx_p"+s+"_right").css("-ms-transform","translateY(0px)"),$("#mx_p"+s+"_right").css("-moz-transform","translateY(0px)"),$("#mx_p"+s+"_right").css("-webkit-transform","translateY(0px)"),$("#mx_p"+s+"_right").css("-o-transform","translateY(0px)")},300),o[s]=!0)}function r(s){$("#mx_p"+s+"_desc").css("transform","translateY(10px)"),$("#mx_p"+s+"_desc").css("-ms-transform","translateY(10px)"),$("#mx_p"+s+"_desc").css("-moz-transform","translateY(10px)"),$("#mx_p"+s+"_desc").css("-webkit-transform","translateY(10px)"),$("#mx_p"+s+"_desc").css("-o-transform","translateY(10px)"),$("#mx_p"+s+"_desc").css("opacity","0.0"),$("#mx_p"+s+"_detail").css("transform","translateY(10px)"),$("#mx_p"+s+"_detail").css("-ms-transform","translateY(10px)"),$("#mx_p"+s+"_detail").css("-moz-transform","translateY(10px)"),$("#mx_p"+s+"_detail").css("-webkit-transform","translateY(10px)"),$("#mx_p"+s+"_detail").css("-o-transform","translateY(10px)"),$("#mx_p"+s+"_detail").css("display","inherit"),setTimeout(function(){$("#mx_p"+s+"_desc").css("display","none"),$("#mx_p"+s+"_detail").css("opacity","1.0"),$("#mx_p"+s+"_detail").css("transform","translateY(0px)"),$("#mx_p"+s+"_detail").css("-ms-transform","translateY(0px)"),$("#mx_p"+s+"_detail").css("-moz-transform","translateY(0px)"),$("#mx_p"+s+"_detail").css("-webkit-transform","translateY(0px)"),$("#mx_p"+s+"_detail").css("-o-transform","translateY(0px)")},300)}function m(s){$("#mx_p"+s+"_detail").css("transform","translateY(-10px)"),$("#mx_p"+s+"_detail").css("-ms-transform","translateY(-10px)"),$("#mx_p"+s+"_detail").css("-moz-transform","translateY(-10px)"),$("#mx_p"+s+"_detail").css("-webkit-transform","translateY(-10px)"),$("#mx_p"+s+"_detail").css("-o-transform","translateY(-10px)"),$("#mx_p"+s+"_detail").css("opacity","0.0"),$("#mx_p"+s+"_desc").css("transform","translateY(-10px)"),$("#mx_p"+s+"_desc").css("-ms-transform","translateY(-10px)"),$("#mx_p"+s+"_desc").css("-moz-transform","translateY(-10px)"),$("#mx_p"+s+"_desc").css("-webkit-transform","translateY(-10px)"),$("#mx_p"+s+"_desc").css("-o-transform","translateY(-10px)"),setTimeout(function(){$("#mx_p"+s+"_desc").css("display","inherit")},200),setTimeout(function(){$("#mx_p"+s+"_detail").css("display","none"),$("#mx_p"+s+"_desc").css("opacity","1.0"),$("#mx_p"+s+"_desc").css("transform","translateY(0px)"),$("#mx_p"+s+"_desc").css("-ms-transform","translateY(0px)"),$("#mx_p"+s+"_desc").css("-moz-transform","translateY(0px)"),$("#mx_p"+s+"_desc").css("-webkit-transform","translateY(0px)"),$("#mx_p"+s+"_desc").css("-o-transform","translateY(0px)")},300)}function n(s){$("#"+s+"desc").css("transform","translateY(10px)"),$("#"+s+"desc").css("-ms-transform","translateY(10px)"),$("#"+s+"desc").css("-moz-transform","translateY(10px)"),$("#"+s+"desc").css("-webkit-transform","translateY(10px)"),$("#"+s+"desc").css("-o-transform","translateY(10px)"),$("#"+s+"desc").css("opacity","0.0"),$("#"+s+"detail").css("transform","translateY(10px)"),$("#"+s+"detail").css("-ms-transform","translateY(10px)"),$("#"+s+"detail").css("-moz-transform","translateY(10px)"),$("#"+s+"detail").css("-webkit-transform","translateY(10px)"),$("#"+s+"detail").css("-o-transform","translateY(10px)"),$("#"+s+"detail").css("display","inherit"),setTimeout(function(){$("#"+s+"detail").css("opacity","1.0"),$("#"+s+"detail").css("transform","translateY(0px)"),$("#"+s+"detail").css("-ms-transform","translateY(0px)"),$("#"+s+"detail").css("-moz-transform","translateY(0px)"),$("#"+s+"detail").css("-webkit-transform","translateY(0px)"),$("#"+s+"detail").css("-o-transform","translateY(0px)")},300)}function c(s){$("#"+s+"detail").css("transform","translateY(-10px)"),$("#"+s+"detail").css("-ms-transform","translateY(-10px)"),$("#"+s+"detail").css("-moz-transform","translateY(-10px)"),$("#"+s+"detail").css("-webkit-transform","translateY(-10px)"),$("#"+s+"detail").css("-o-transform","translateY(-10px)"),$("#"+s+"detail").css("opacity","0.0"),$("#"+s+"desc").css("transform","translateY(-10px)"),$("#"+s+"desc").css("-ms-transform","translateY(-10px)"),$("#"+s+"desc").css("-moz-transform","translateY(-10px)"),$("#"+s+"desc").css("-webkit-transform","translateY(-10px)"),$("#"+s+"desc").css("-o-transform","translateY(-10px)"),setTimeout(function(){$("#"+s+"detail").css("display","none"),$("#"+s+"desc").css("opacity","1.0"),$("#"+s+"desc").css("transform","translateY(0px)"),$("#"+s+"desc").css("-ms-transform","translateY(0px)"),$("#"+s+"desc").css("-moz-transform","translateY(0px)"),$("#"+s+"desc").css("-webkit-transform","translateY(0px)"),$("#"+s+"desc").css("-o-transform","translateY(0px)")},300)}var o=new Array(!1,!1,!1,!1),_=80;window.pageYOffset<=0?$("#mx_nav_top").css("opacity","0.0"):$("#mx_nav_top").css("opacity","1.0"),$("#mx_nav_top").click(function(){$("html, body").animate({scrollTop:$("#mx_header").offset().top},1e3)}),$(".mx_nav_item").click(function(s){var t=s.currentTarget.className.substr(s.currentTarget.className.length-1,1);$("html, body").animate({scrollTop:$("#page"+t).offset().top},1e3)}),$("#mx_p1_left").lhSlider(1.75),$("#mx_p2_left").lhSlider(1.75),$("#slider_1_1").lhSlider(1.75,!1),$("#slider_1_2").lhSlider(1.75,!1),$("#slider_2_1").lhSlider(1.75,!1),$("#slider_2_2").lhSlider(1.75,!1),a(),t(),s();var l=!1,f=380,x=60,p=40;$(window).scroll(function(){window.pageYOffset>=f&&!l?(mark1=!0,"fixed"!=$("#mx_nav").css("position")&&($("#mx_nav").css("position","fixed"),$("#mx_nav_line").css("height","0px"),$("#page1").css("margin-top",x+"px"),$("#mx_nav").animate({height:p},500),$("#mx_nav_bg").animate({opacity:.95},500),$("#mx_nav_content").animate({top:0},500,function(){$("#mx_nav").css("box-shadow","0px 10px 20px rgba(88, 88, 88, 0.0)")}),$(".mx_nav_item").animate({marginLeft:60},500),$("#page1").animate({marginTop:p},500))):window.pageYOffset<f&&(l=!1,"relative"!=$("#mx_nav").css("position")&&($("#mx_nav").css("position","relative"),$("#mx_nav").css("box-shadow","0px 10px 20px rgba(88, 88, 88, 0.1)"),$("#page1").css("margin-top","0px"),$("#mx_nav").animate({height:x},500),$("#mx_nav_bg").animate({opacity:0},500),$("#mx_nav_content").animate({top:10},500,function(){$("#mx_nav_line").css("height","1px")}),$(".mx_nav_item").animate({marginLeft:30},500))),window.pageYOffset>0&&0==$("#mx_nav_top").css("opacity")?$("#mx_nav_top").animate({opacity:1},500):window.pageYOffset<=0&&1==$("#mx_nav_top").css("opacity")&&$("#mx_nav_top").animate({opacity:0},500),a(),t(),s()}),$(".mx_header_down").mouseover(function(s){$(s.currentTarget).css("background-color","#26CC63"),$(s.currentTarget).css("border-color","#fff"),$(s.currentTarget).find("a").css("color","#fff")}),$(".mx_header_down").mouseout(function(s){$(s.currentTarget).css("background-color","#fff"),$(s.currentTarget).css("border-color","#26CC63"),$(s.currentTarget).find("a").css("color","#26CC63")});var d=50,u=d+150+20,h=u+150+20,w=!1,g=!1,Y=1500;$(window).resize(function(){"none"==$("#mx_p1_desc").css("display")&&m(1),$("#mx_p1").height()!=$("#mx_p1_left").height()&&$("#mx_p1").css({height:$("#mx_p1_left").height()+_}),"none"==$("#mx_p2_desc").css("display")&&m(2),$("#mx_p2").height()!=$("#mx_p2_left").height()&&$("#mx_p2").css({height:$("#mx_p2_left").height()+_})}),$("#mx_p1_more").click(function(){r(1),setTimeout(function(){$("#mx_p1_left").height()+_<$("#mx_p1_content").height()&&$("#mx_p1").animate({height:$("#mx_p1_content").height()},400)},300)}),$("#mx_p1_less").click(function(){m(1),setTimeout(function(){$("#mx_p1").animate({height:$("#mx_p1_left").height()+_},400)},300)}),$("#mx_p2_more").click(function(){r(2),setTimeout(function(){$("#mx_p2_left").height()+_<$("#mx_p2_content").height()&&$("#mx_p2").animate({height:$("#mx_p2_content").height()},400)},300)}),$("#mx_p2_less").click(function(){m(2),setTimeout(function(){$("#mx_p2").animate({height:$("#mx_p2_left").height()+_},400)},300)}),$("#mx_p1_1_more").click(function(){n("mx_p1_1_")}),$("#mx_p1_1_less").click(function(){c("mx_p1_1_")}),$("#mx_p2_1_more").click(function(){n("mx_p2_1_")}),$("#mx_p2_1_less").click(function(){c("mx_p2_1_")})})}]);