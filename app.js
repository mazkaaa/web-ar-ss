window.onload = () => {
    var scene = document.querySelector('a-scene')
	scene.addEventListener('loaded', (e)=>{
        $(".ss-section").addClass("open")
    })
}