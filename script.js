let wordnikurl = 'https://api.wordnik.com/v4/words.json/randomWord?&minLength=5&maxLength=-1&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7';

let giphyUrl = function (param) {
  return `https://api.giphy.com/v1/gifs/search?api_key=wlwc546wdl9NhW9763jtIjTnudx1Qc6u&q=${param}&limit=25&offset=0&rating=g&lang=en`;
};
fetch(wordnikurl)
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    return fetch(giphyUrl(data.word));
  })
  .then((giphy) => {
    return giphy.json();
  })
  .then((giphyResponse) => {
    console.log(giphyResponse.data[0].embed_url);
    let content = document.getElementById('content');
    if (giphyResponse.data.length !== 0) {
      let img = document.createElement('iframe');
      img.src = giphyResponse.data[0].embed_url;
      img.width = 700;
      img.height = 700;
      content.appendChild(img);
    } else {
      content.style = 'color:red';
      content.innerText = 'Gif Not found for the query !!!';
    }
  });
