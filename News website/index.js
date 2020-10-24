let source = "google-news";
let apiKey = "f2c04ae73e5643dfb6d9473ce506b79b";
// url : http://newsapi.org/v2/top-headlines?sources=bbc-news&apikey=f2c04ae73e5643dfb6d9473ce506b79b

//Grab the news container.
let newsAccordion = document.getElementById("newsAccordion");

//Create an AJAX get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apiKey}`, true);

//What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        
        let newsHtml = "";
        
        articles.forEach((element,index) => {
            let news =   `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button
                                    class="btn btn-link btn-block text-left "
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapse${index}"
                                    aria-expanded="true"
                                    aria-controls="collapse${index}">
                                    <b>Breaking news ${index+1} : </b>${element["title"]}
                                </button>
                                </h2>
                            </div>


                            <div
                                id="collapse${index}"
                                class="collapse"
                                aria-labelledby="heading${index}"
                                data-parent="#newsAccordion">

                                <div class="card-body">
                              ${element["content"]}. <a href="${element["url"]}" target="_blank"> Read more here.</a>
                                </div>
                            </div>
                          </div>`
                        newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    } 
  else {
    console.log("some error occured");
  }
};

xhr.send();


