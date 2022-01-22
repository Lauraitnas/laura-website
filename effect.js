
// const button = document.querySelector('.button');

// button.addEventListener('click', () => {
//     let overlay = document.createElement('span');
//     overlay.style.cssText = "
//     position: absolute;
//     height: 200px;
//     width: 200px;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     background-color: #22646e;
//     z-index: -1;
//     border-radius: 50%;
//     opacity: 0;
//     animation= button_animation 1s ease;
//     "

//     button.appendChild(overlay)
// })

const buttons = document.querySelector('.button');

buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        let xAxis = e.clientX - e.target.offSetLeft
        let yAxis = e.clientY - e.target.offSetTop

        let span = document.createElement('span');
        span.style.left = $ {xAxis}px

    })
})
