const searchForm= document.querySelector('.search-form');
const movieContainer= document.querySelector('.movie-container');
const inputBox= document.querySelector('.input-box');


const movieInfo = async(movie) =>{

     
    const myApiKey= "230a762e"

    const url= `http://www.omdbapi.com/?apikey=${myApiKey}&t=${movie}`; 
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    
    movieData(data);
    

}

const movieData = (data) =>{
    movieContainer.innerHTML= "";
    movieContainer.classList.remove('active');

    const{Title,imdbRating, Genre, Released, Runtime, Actors, Plot, Poster}= data;

    const movieCard= document.createElement('div');

    movieCard.classList.add('movie-info');

    movieCard.innerHTML=`<h2>${Title}</h2> 
                        <p><b>Rating: &#11088</b> ${imdbRating}</p>`;

    const movieGenre= document.createElement('div');
    movieGenre.classList.add('movie-genre');

    Genre.split(',').forEach((e)=>{
        const p = document.createElement('p');
        p.innerText=e;

        movieGenre.appendChild(p);


    });

    movieCard.appendChild(movieGenre);

    movieCard.innerHTML +=`<p><b>Released Date:</b> ${Released}</p>
                        <p><b>Duration:</b> ${Runtime}</p>
                        <p><b>Cast:</b> ${Actors}</p>
                        <p><b>Plot:</b> ${Plot}</p>`; 

    const moviePoster= document.createElement('div');
    moviePoster.classList.add('movie-poster');
    moviePoster.innerHTML=`<img src="${Poster}"/>`; 


    movieContainer.appendChild(moviePoster);
    movieContainer.appendChild(movieCard);                    
                         

}


searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const movieName= inputBox.value.trim();
    if(movieName!==""){
        movieInfo(movieName); 

    }
    else{
        movieContainer.innerHTML= `<h2 class="error">Please enter movie name.</h2>`;  
        movieContainer.classList.add('active');
    }



});