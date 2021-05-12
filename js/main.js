let randomBtn = document.getElementById("random-btn");
let searchBtn = document.querySelector(".search-btn");
let resultsCon = document.querySelector('#results-con');
let search = document.querySelector(".search");

randomBtn.addEventListener("click", showRandom);
function showRandom() {
  return window.open("https://en.wikipedia.org/wiki/Special:Random");
};


searchBtn.addEventListener("click", getResults);
function getResults() {
  let searchInput = document.querySelector('.search-input');
  let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchInput.value}`;

  fetch(url)
    .then(response => response.json())
    .then(data => showResults(data.query.search)
    )
    .catch(function () {
      console.log('Something is wrong');
    });
};

function showResults(myArray) {
  resultsCon.innerHTML = " ";
  myArray.forEach(function (item) {
    let itemTitle = item.title;
    let itemLink = item.snippet;
    let itemUrl = encodeURI(`https://en.wikipedia.org/wiki/${itemTitle}`);

    resultsCon.insertAdjacentHTML('beforeend',
      `<div class="resultItem">
<h2>
<a href="${itemUrl} target="_blank"">${itemTitle}</a>
</h2>
<p>
<a href="${itemUrl}"  target="_blank">
${itemLink}</a>
</p>
</div>`
    );
  });
};
