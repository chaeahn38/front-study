let isStarted = false;


const auth=() => {

	if(isStarted === false){
		isStarted = true;
		document.getElementById('btn').disabled = false
		const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0");
		document.getElementById("target").innerText = token
		document.getElementById("target").style.color= "#" + token;

		
		let time =180;
		let timer;
	timer =	setInterval(function(){
			if(time>=0){
				let min = Math.floor(time/60)
				let sec = String(time % 60).padStart(2,"0")
				document.getElementById("timer").innerText = min +":" + sec
				time--;
				}else{
				
				document.getElementById("btn").disabled= true;
				isStarted = false;
				clearInterval(timer)
				}
		},1000)
	}else {
	}

}
