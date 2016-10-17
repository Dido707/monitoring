	    $(document).ready(function() {

//	    	编辑账户弹窗
	    	$('#btnAdd').click(function() {
	    		$("#alertCreate").show();
	    	});
	    	
	    	$('.btn-close').click(function() {
	    		$(".info-box").css("display", "none");
	    	});

	    	$('#btnCreate').click(function() {
	    		$("#alertCreate").css("display", "none");
	    	});
	    	
	    	$('.btn-edit-user').click(function() {
	    		$("#alertEdit").show();
	    	});

	    	$('#btnEdit').click(function() {
	    		$("#alertEdit").css("display", "none");
	    	});
	    	
//	    	创建小区弹窗
	    	$('.btn-add-xiaoqu').click(function() {
	    		$("#alertCreatBuilding").show();
	    	});
	    	
	    	//	修改密码弹窗
	    	$('.sitting').click(function() {
	    		$("#alertSitting").show();
	    	});
	    	
//	    	编辑楼盘
	    	$(".btn-edit").click(function(){
					$(this).parents(".main-lpbj").children(".btn-sm").css("display","block");
					$(this).parents(".main-lpbj").find(".check box-select").css("display","block");	
				});
	    	$(".btn-undo").click(function(){
					$(this).parents(".main-lpbj").children(".btn-sm").css("display","none");
					$(this).parents(".main-lpbj").find(".checkbox-select").css("display","none");					
				});
			$(".btn-delect").click(function(){
				$(this).parents(".main-lpbj").find("input:checkbox:checked").each(function() {
		            $(this).parents("li").remove();
		       });
				$(this).parents(".main-lpbj").children(".btn-sm").css("display","none");
				$(this).parents(".main-lpbj").find(".checkbox-select").css("display","none");			
			});
			
//	    	编辑楼层
	    	$(".btn-edit-floor").click(function(){
					$(".btn-louceng").css("display","block");
					$(".checkbox-md").css("display","block");	
				});
	    	$(".btn-md-undo").click(function(){
					$(".btn-louceng").css("display","none");
					$(".checkbox-md").css("display","none");					
				});
			$(".btn-md-delect").click(function(){
				$(this).parents(".floor").find("input:checkbox:checked").each(function() {
		            $(this).parents(".padding-fj").remove();
		       });
			    $(".btn-louceng").css("display","none");
				$(".checkbox-md").css("display","none");		       
			});
//			 楼层选中后显示复选框,楼层未选中隐藏单选框   
//			 房间号选中后点击删除选中的被删除，后按钮和复选框隐藏 
	    });
