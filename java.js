const loadingtext = document.querySelector('.loadingtext');
const bg = document.querySelector('.bc');


let load = 0 ;
let timer = setInterval(blur , 40);

function blur(){
    load++
    if (load > 99 ){
        clearInterval(timer);
    }

    loadingtext.innerHTML = `${load}%`
    loadingtext.style.opacity = scale(load , 0 , 100 , 1 , 0)
    bg.style.filter = `blur(${scale(load , 0 , 100 , 30 , 0)}px)`

}

const scale = (num , in_min ,in_max, out_min, out_max)=> {
    return (num - in_min )* (out_max - out_min) / (in_max - in_min) + out_min ;
}