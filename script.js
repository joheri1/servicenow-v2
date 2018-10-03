
const articlesDiv = document.getElementById("demo")

const key = "f109cae89aa843ef8658fff38f6bd1c1"
const url = `https://newsapi.org/v2/everything?q=servicenow&sortBy=popularity&language=en&apiKey=${key}`
const weatherurl = `https://samples.openweathermap.org/data/2.5/weather?q=Stockholm,se&appid=b6907d289e10d714a6e88b30761fae22`

// Our main function
const recievedNews = (newsdata) => {
  // For each article object from the API, and create a new div in HTML.
      /*const articlesDiv = document.querySelector(".articles")*/
      newsdata.articles.forEach((article) => {
  			//Here we create and add html elements to our html file
        document.querySelector(".allNews").innerHTML +=
        `<div class="news">
              <h2>${article.title}</h2>
              <img src="${article.urlToImage}"/>
              <h3>${article.description}<h3>
              <h4><a href="${article.url}" target="_blank">Read more</a><h4>
              </div>`
      })
  }
  //Fetch sends a request to the API.
  //Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.
  fetch(url)
    .then(response => response.json())
    .then(recievedNews)
