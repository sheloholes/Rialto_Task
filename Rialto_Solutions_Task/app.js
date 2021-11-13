var movie=document.querySelectorAll(".movie")
// console.log(movie.length);
for(let i=0;i<8;i++){
    movie[i].addEventListener("click",()=>{
        alert(`${movie[i].children[1].textContent}`);
    })
}











