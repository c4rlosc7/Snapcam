
;(function(){

	const boton = document.getElementById('snap')

	const boton_download = document.getElementById("download")

	const link = document.getElementById("link")

	const camara = new Camara("video","canvas",()=>{
		boton.addEventListener("click",()=>{
			camara.video.pause()
			showElement("actions")
		})
	})



boton_download.addEventListener("click",()=>{
	link.href = camara.canvas.toDataURL("image/png")
	link.download = "photo.png"
	link.click()

	hideElement("actions")
	camara.video.play()
})


function showElement(id){
	document.getElementById(id).style.display = "block"
}

function hideElement(id){
	document.getElementById(id).style.display = "none"
}

})()