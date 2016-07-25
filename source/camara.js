class Camara{
	constructor(video_id, canvas_id, callback){
		this.video = document.getElementById(video_id)
		this.canvas = document.getElementById(canvas_id)

		//const user_media = this.media()	

		if (this.hasMedia()){
			navigator.webkitGetUserMedia(this.constrains(), (localMediaStream)=>{
			

				this.set_video(localMediaStream)	
				this.set_canvas()

				callback()		

			},(err)=> console.log(err))						
		}else{
			alert("Navegador desactualizado")						
		}
			
	}	


	set_video(stream){
		this.video.src = window.URL.createObjectURL(stream)
	}


	set_canvas(stream){
		this.context = this.canvas.getContext("2d")
		video.addEventListener("play",()=> this.loop())
	}



	loop(){
		if(this.video.paused || this.video.ended) return
		this.draw()
		setInterval(()=> this.loop(), 1000 / 25)
	}



	draw(){
		this.context.drawImage(this.video,0,0)
	}




	constrains(){
		return {
			video: true
		}
	}

	hasMedia(){ 
		return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia)
	}	
}
 
