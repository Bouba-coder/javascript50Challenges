/*variables*/
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

/*start point*/
let currentActive = 1

/*fuction next button call-back*/
next.addEvenListener('click', () => {
    currentActive++
    /*condition*/
    if(currentActive > circles.length){
        currentActive = circles.length
    }

})


/*fuction prev button call-back*/
prev.addEvenListener('click', () => {
    currentActive--
    /*condition*/
    if(currentActive < 1){
        currentActive = 1
    }

    update()
})

function update() {
    /*foreach index*/
    circles.forEach((circle, idx) => {
        if(idx < currentActive)
        {
            circle.classList.add('active')
        }else {
            circle.classList.remove('active')
        }

    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1)
    {
        prev.disabled = true
    }else if(currentActive === circles.length)
    {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

}