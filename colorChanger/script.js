const btn = document.querySelectorAll(".contain2")
const body =  document.querySelector("body")

btn.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id
        };
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id
        };
        if (e.target.id === 'green') {
            body.style.backgroundColor = e.target.id
        };
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id
        };
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id
        };
    })
})