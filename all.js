
//--------------設定每一頁的高，讓每一頁的高都和視窗高度一樣

/*var pageHeight = window.innerHeight;
var count_id = $(".wrap > div").size()*-1;
var count_num = $(".wrap > div").size()*-1;

function getHeight(){
	var pageNum = '#'+$('.wrap > div')[count_id-count_num].id;
	$(pageNum).height(pageHeight);
	//console.log($("#first").height(pageHeight));
	//console.log($("pageNum").height(pageHeight));
	//console.log($(pageNum));
	//console.log('#'+$(".wrap > div")[count_id-count_num].id);
	

}

while(count_id<0){
	getHeight();
	count_id++;
	//console.log(count_id);
}*/

//---------------讓TAG可以滑鼠滑過去變色+跑出標籤
//似乎可以用show...貌似會讓事情變簡單Orz

function OpenTag(){
	$(".opentag>li").mouseover(function(){
		var countTag = 0;
		while(countTag<=4){
			if(this == $(".opentag>li")[countTag]){ //亮
				var targetdot = $(".opentag>li>div")[countTag];
				$(targetdot).addClass("divdothover");//點亮
				//$(targetdot).animate({"background-color ": "#FFFF00"},"5000");//為啥不行QQ
				//var tag = '#'+'tag'+countTag;
				var tag = $(".tag>a>li")[countTag];//黃標籤
				var taghover = {
					width : "100",
					opacity : "1",
					cursor : "pointer"
				}
				var tagout = {
					width : "0",
					opacity : "-=1",
					cursor : "default"
				}
				$(tag).css(taghover);//標籤亮
				
				$(".opentag>li").mouseout(function(){ //消失
					$(targetdot).removeClass("divdothover");
					//$(targetdot).animate({"background-color": "#666"},"5000");
					$(tag).css(tagout);
				});

				$(tag).mouseover(function(){ //滑鼠移到黃標籤上仍會打開//小BUG，因為黃標籤是opacity=1看不到，滑鼠滑過去仍會出現cursor並開啟標籤
					$(tag).css(taghover);
					$(targetdot).addClass("divdothover");
				});
				$(tag).mouseout(function(){
					$(tag).css(tagout);
					$(targetdot).removeClass("divdothover");
				});



				break;
			}
			countTag++;
		}

		//console.log(countTag);
	});
	//----------------移到某頁該TAG就會自己打開
	$(document).ready(function(){
		var targetscroll = document.getElementById("wrap");
		var countTag = 0;//換函數了再抓一次目標
		var tag = $(".tag>a>li")[countTag];//黃標籤
		var taghover = {
			width : "100",
			opacity : "1",
			cursor : "pointer"
		}
		var tagout = {
			width : "0",
			opacity : "-=1",
			cursor : "default"
		}
		$(tag).css(taghover);
		$(this).scroll(function(){
			var bodyHeight = targetscroll.scrollHeight; //整體網頁的高度
			var viewportHeight = $(window).height(); //所見範圍的高度
			var scrollTop= $(this).scrollTop(); //偵測目前捲軸頂點
			//console.log(bodyHeight);
			//console.log(viewportHeight);
			//console.log(scrollTop);
			if(scrollTop+viewportHeight>=viewportHeight){
				countTag = 0;
			}
			if(scrollTop+viewportHeight>=1.4*viewportHeight){
				countTag = 1;
			}
			if(scrollTop+viewportHeight>=2.4*viewportHeight){
				countTag = 2;
			}
			if(scrollTop+viewportHeight>=3.4*viewportHeight){
				countTag = 3;
			}
			if(scrollTop+viewportHeight>=4.2*viewportHeight){
				countTag = 4;
			}
			
			var targetdot = $(".opentag>li>div")[countTag];
			var tag = $(".tag>a>li")[countTag];
			
			if(countTag){
				$($(".opentag>li>div")[countTag-1]).removeClass("divdothover");
				$($(".tag>a>li")[countTag-1]).css(tagout);
			}
			if(countTag+1){
				$($(".opentag>li>div")[countTag+1]).removeClass("divdothover");
				$($(".tag>a>li")[countTag+1]).css(tagout);				
			}
			$(targetdot).addClass("divdothover");
			$(tag).css(taghover);
			
			//console.log(countTag);
		});
	});
}

OpenTag();

//-------------

function ScrollMove(){
	$(".tag>a").click(function(){
		var targetTag = this.name;
		console.log(targetTag);
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');//這串??
		$body.animate({
			scrollTop: $(targetTag).offset().top
		},1000);
		return false;
	});
}

ScrollMove();


//--------------

function showtext(){
	var boxmove = {
		top : "-75px",
		left : "11.5px",
		opacity : "1"
	};
	var boxback = {
		top : "-50px",
		left : "45px",
		opacity : "0.7"
	};
	var arrowmove = {
		left : "-40px"
	};
	var arrowback = {
		left : "-80px"
	};
	$(".textbox").mouseover(function(){
		$(".textbox").html("無歌單台中場");
		$(".textbox").css(boxmove);
		$(".forth_text>div>img").css(arrowmove);
		/*$(".textbox").animate({ //用animate也可以!!
			top : "-75px",
			left : "11.5px",
			opacity : "1"
		});*/
	});
	$(".textbox").mouseout(function(){
		$(".textbox").html("");
		$(".textbox").css(boxback);
		$(".forth_text>div>img").css(arrowback);
	});
}

showtext();

/*----------------隱蔽多出的字

$(function(){
	var len = 80;
	$(".fifth_text_box").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"..."+"<span class='more'>更多</span>";
            $(this).html(text);
        }
    });
});*/


//--------------點擊標題產生相對的字

$(function(){
	var title = $(".fifth_text>div>section>h4");
	//var lastcount;
	$(title).click(function(){
		var count = 0;

		while(count<=7){
			var lastcount = count;
			var compare = $(".fifth_text>div>section>h4")[count];
			if(this == compare){
				$(".box"+count).css("display","block");
				break;
			}			
			count++;
		}

		while(lastcount<=7){
			if(lastcount!=count){
				$(".box"+lastcount).css("display","none");
				console.log(lastcount);
			}
			lastcount++;
		}

	});


});
