// Version 3

// 1.
// Write a function that:
// - Makes an API call using the Fetch API or the regular XMLHttpRequest
// - Uses the following URL: https://jsonplaceholder.typicode.com/users
// - Displays the "name", "email" and "city" of the first person inside an unordered list 
// (created programmatically using JavaScript)

const apiUrl = "https://jsonplaceholder.typicode.com/users";

function fetchAndDisplayData(url) {
  fetch(url)
    .then(res => res.json())
    .then(response => {
      // console.log(response);

      response.forEach((user, index) => {
        if (index < 1) {
          const ul = document.createElement("ul");
          document.body.appendChild(ul);
          // console.log(user);

          const myProperties = [];
          myProperties.push(user.name);
          myProperties.push(user.email);
          myProperties.push(user.address.city);
          // console.log(myProperties);

          for (let i = 0; i < myProperties.length; i++) {
            const li = document.createElement("li");
            ul.appendChild(li);
            li.textContent = myProperties[i];

            li.style.color = "blue";
            li.style.fontWeight = "bold";
            li.style.fontSize = "30px";
          }
        }
      })
    })
    .catch(err => {
      const h3 = document.createElement("h3");
      document.body.appendChild(h3);
      h3.textContent = "Error: " + err.message;

      h3.style.color = "red";
      h3.style.fontWeight = "bold";
      h3.style.fontSize = "30px";
    })
}
fetchAndDisplayData(apiUrl);


// 2.
// Write a function that:
// - Takes in an array of strings:
const fruits = ["Strawberry", "Apple", "Papaya", "Banana", "Apricot", "Pear"];
// - Returns an array with the fruits that start with the letter "P"

// First Way:

const fruitsWithP = fruits.filter(fruit => fruit.startsWith("P"));
console.log(fruitsWithP);

// Second Way:


function logFruitsWithP(arr) {
  const fruitsWithP = arr.filter(fruit => fruit.startsWith("P"));
  console.log(fruitsWithP);
}

logFruitsWithP(fruits);

// 3.
// Using JavaScript only (adding HTML to index.html is NOT allowed), write a function that:
// - Creates a button element (with text "click me!")
// - Creates an empty image element and add it to the document.
// - Inserts an image URL into the <img> tag, when the button is clicked
// - Removes the button after the click
// - Use the following image URL: https://thehub.dk/files/5ad4b4a9f9ac4aa13c3d2d58/logo_upload-6d537cf7e5de664db275b32b3c6ae12d.png

const imgUrl = "https://thehub.dk/files/5ad4b4a9f9ac4aa13c3d2d58/logo_upload-6d537cf7e5de664db275b32b3c6ae12d.png";
const myImgUrl = "https://placeit-assets.s3-accelerate.amazonaws.com/landing-pages/sports-logo-v3/Logo-Maker-for-a-Baseball-Team-with-Tiger-Clipart-o3dbuhdjv5bvkg9m6utxjqs7ld0fgzix1qnptxi0lk.png"

function appendButtonAndImage(url) {
  const button = document.createElement("button");
  document.body.appendChild(button);
  button.textContent = "Click Me!";
  button.style.padding = "20px"

  const img = document.createElement("img");
  document.body.appendChild(img);

  button.addEventListener("click", () => {
    img.setAttribute("src", url);
    img.setAttribute("alt", "logo image");

    img.style.width = "400px";
    img.style.height = "400px";
    document.body.removeChild(button);
  })
}

appendButtonAndImage(myImgUrl);