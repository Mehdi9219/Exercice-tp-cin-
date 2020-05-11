$(document).ready(()=>{ 
    console.log("ok")
    $.getJSON("./js/cine.json",(data)=>{

	for(let i = 0; i < data.film.length; i++){
		$("section").append(`<div><img src="./asset/${data.film[i].image}" alt=""><ul>
              <li>${data.film[i].titre}</li>
              <li>Date: ${data.film[i].date}</li>
              <li>Réalisateur: ${data.film[i].réalisateur}</li>
              <li>Genre: ${data.film[i].genre}</li>
              <li>Sortie DVD: ${data.film[i].sortiedvd}</li></ul></div>
              `)

        }
    })
})
