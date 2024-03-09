let rectangle = document.querySelector('.rectangle')

rectangle.addEventListener('mousemove', (e)=>{
    let recLocation = rectangle.getBoundingClientRect()
    let insideRectangle = e.clientX - recLocation.left;
    if(insideRectangle<recLocation.width/2){
      let redColor = gsap.utils.mapRange(0,recLocation.width/2,255,0,insideRectangle)
      gsap.to(rectangle,{
        backgroundColor : `rgb(${redColor},0,0)`,
        ease : Power4
      })
    }
    else{
        let blueColor = gsap.utils.mapRange(recLocation.width/2,recLocation.width,0,255,insideRectangle)
        gsap.to(rectangle,{
          backgroundColor : `rgb(0,0,${blueColor})`,
          ease : Power4
        })
    }
})

// let recLocation = rectangle.getBoundingClientRect()



