function show(){
				//while(true){
					window.alert("你好")
					
				//}
			}
			
			function closeWindow(){
				var isClose=window.confirm("are you sure close?")
				if(isClose){
					window.close();
				}
			}
			
			function load(){
				var img=document.getElementById("img")
				img.onclick=show;
				var btn=document.getElementById("closeButton")
				btn.onclick=closeWindow;
			}
			window.onload=load;