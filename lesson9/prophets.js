const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";



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
    h2.textContent = prophet.name + ' ' + prophet.lastname;


    let dob = document.createElement('p');
    dob.textContent = `Date of Birth: ${prophet.birthdate}`

    let birthPlace = document.createElement('p');
    birthPlace.textContent = `Place of Birth: ${prophet.birthdate}`

    let pic = document.createElement('img');
    pic.src = prophet.imageurl;
    pic.alt = 'image of prophet';

    

    card.appendChild(h2);
    card.appendChild(dob);
    card.appendChild(birthPlace);
    card.appendChild(pic);

    document.querySelector('div.cards').appendChild(card);
  }

  
  