<script type="text/javascript">
	    	var timer = null;
	  		//var session = new QiSession();
	    	//var behavior_mng_service = session.sercive("ALBehaviorManager");
	    	//tabletService = session.service("ALTabletService")
	    	var Slide_Nr;


	    	function firstButtonClicked(command){
	    		var ws = new ActiveXObject("WScript.Shell");
	    		ws.exec(command);
	    		alert('a');	    	
	    	}
	    		//time.sleep(0.5);
	    	$(function() {
	    		$("#secondButtonClicked").click(function(){
	    			$.ajax({
	    				url: 'F:\\ostfalia\\praxis\\Take Class\\test.py',
	    				type: 'GET',
	    				
	    			}).done(function(){
	    				alert('a');
	    			})
	    		});
	    	});

	    	function secondButtonClicked(){
	    		session.service("ALBehaviorManager").done(function(behavior){
	    			behavior.runBehavior("behavior_class2")
	    		})
	    	}

	    	function thirdButtonClicked(){
	    		session.service("ALMemory").done(function(ALMemory){
	    			ALMemory.raiseEvent("class3")
	    		})
	    	}
	  		
				//若执行什么语言，返回主页
	    </script>