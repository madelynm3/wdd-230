// store the URL of the JSON file into a const variable
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    for (let i = 0; i < prophets.length; i++ ) {   
    }
  });

  // store the results of the converted response into an array
  const prophets = jsonObject['prophets'];


  // define a function named "displayProphets" which will be called for each prophet record in the prophets list
  prophets.forEach(displayProphets);

  function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');

    let dob = document.createElement('prophet');
    dob.textContent = `Date of Birth: ${prophet.birthdate}`

    let birthPlace = document.createElement('prophet');
    birthPlace.textContent = `Place of Birth: ${prophet.birthdate}`

    let portrait = document.createElement('img');
    portrait.src = prophet.imageurl;
    portrait.alt = 'image of prophet';

    h2.textContent = '${prophet.name + prophet.lastname}'; 

    card.appendChild(prophetName);
    card.appendChild(dob);
    card.appendChild(birthPlace);
    card.appendChild(picture);

    resultElement.appendChild(card);
  }

  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    image.setAttribute('src', prophet.imageurl);
    image.setAttribute('alt', 'Portait of ${prophet.name} ${prophet.lastname}');
    image.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(image);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  