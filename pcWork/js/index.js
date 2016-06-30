$(function () {
	/*var lightbox = $('.upImgMask .icon a').lightBox();

	  lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'positionFromTop':50
    });*/
	  
    $('.upImgMask .icon').bind('click' , function (){
    	var lightbox = $("#lightbox"); 
    	if (lightbox.find('.btnDelete').length ==1) {
    		return;
    	}else{
    		var btnDelete = $('<button class="btnDelete" type="button"><a href="javascript:void(0)">删除</a></div>');
    			btnDelete.css({
    			'width':'80px',
    			'height':'40px',
    			'line-height':'40px',
    			'text-align':'center',
    			'color':'#fff',
    			'background':'#589',
    			'text-decoration:':'none'
    			});
    		setTimeout(function () {
    				lightbox.append(btnDelete);

    			},1000)
    	}
		
    })


    var imgNumArr = [1,3,3];

	$(".upImg input").on("change", function(){
		// Get a reference to the fileList
		var files = !!this.files ? this.files : [];
		var idStr = $(this).attr('id');
		console.log(idStr);
		var index = parseInt(idStr.charAt(10));

		console.log(index);
		var oLabel = $(this).parent();
		var oPreview = oLabel.next('.preview');
		console.log(oPreview.attr('class'));
	
		var imgNum = imgNumArr[index-1];
		console.log(imgNum+'imgNum')

		upImg(files,imgNum,oLabel,oPreview);
		
	});		
})

// 上传图片，根据图片数量不同选择不同样式
function upImg(files,imgNum,oLabel,oPreview) {
	

		// If no files were selected, or no FileReader support, return
			if (!files.length || !window.FileReader) return;

			// Only proceed if the selected file is an image
			if (/^image/.test( files[0].type)){

			    // Create a new instance of the FileReader
			    var reader = new FileReader();

			    // Read the local file as a DataURL
			    reader.readAsDataURL(files[0]);

			    if(imgNum < 2){
					// When loaded, set image data as background of div
				    reader.onloadend = function(){
					   	oPreview.css({
						   	"background-image":"url("+this.result+")",
						   	"background-size":"cover",
						   	"background-position": "0 0",
						   	"display":"block"
					   });
					   	oLabel.css({
					   		"display":"none"
					   	})
			    	}
				}else{
					//多张图片上传
					var oProceed = $('<div class="proceed" >继续添加</div>');
					var oBox = $('.box' + index);

					
					// When loaded, set image data as background of div
				    reader.onloadend = function(){
					   	oPreview.css({
						   	"background-image":"url("+this.result+")",
						   	"background-size":"cover",
						   	"background-position": "0 0",
						   	"display":"block"
					   });
					   	oLabel.css({
					   		"display":"none"
					   	})
			    	}
				}
			    
			}
}