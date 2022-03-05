const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';



fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  });

const prophets = jsonObject['prophets'];

prophets.forEach(displayProphets);

  function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');

    let dob = document.createElement('prophet');
    dob.textContent = ("Date of Birth: ${prophet.birthdate}");

    let birthPlace = document.createElement('prophet');
    birthPlace.textContent = ("Place of Birth: ${prophet.birthdate}");

    let portrait = document.createElement('img');
    portrait.src = prophet.imageurl;
    portrait.alt = 'image of prophet';

    h2.textContent = ("${prophet.name + prophet.lastname}"); 

    card.appendChild(prophetName);
    card.appendChild(dob);
    card.appendChild(birthPlace);
    card.appendChild(picture);

    document.querySelector('div.cards').appendChild(card);
  }

  
  