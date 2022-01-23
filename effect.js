const btn = document.querySelector('.btn');

    btn.onmousemove = function(e){
        const x = e.pageX - btn.offSetLeft;
        const y = e.pageY - btn.offSetTop;
        btn.style.setProperty('--x', x + 'px');
        btn.style.setProperty('--y', y + 'px');
    }
