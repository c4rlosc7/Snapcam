class Camara{
	constructor(video_id, canvas_id){
		this.video = document.getElementById(video_id)
		this.canvas = document.getElementById(canvas_id)

		//const user_media = this.media()	

		if (this.hasMedia()){
			navigator.webkitGetUserMedia({video: true}, (localMediaStream)=>{
				console.log("Hola Snapcam")
			},(err)=> console.log(err))						
		}else{
			alert("Navegador desactualizado")						
		}
			
	}	

	hasMedia(){ 
		return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);
	}	
}

