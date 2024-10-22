const videos = document.querySelectorAll(".video-control") 

videos.forEach((video) => {
    video.addEventListener("mouseover", function() {
        video.play()
    })

    video.addEventListener("mouseout", function() {
        video.pause()
        video.currentTime = 0
    })
})

// JavaScript apenas para os rodar os videos