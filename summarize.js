'use strict';

const request = require ('request');

// User settings
const subscriptionKey = 'your_subcription_key';
const data = "Winner of the 30th anniversary Arthur C Clarke Award for Best Novel. Adrian Tchaikovksy’s critically acclaimed, stand-alone novel Children of Time is the epic story of humanity’s battle for survival on a terraformed planet. Who will inherit this new Earth? The last remnants of the human race left a dying Earth, desperate to find a new home among the stars. Following in the footsteps of their ancestors, they discover the greatest treasure of the past age - a world terraformed and prepared for human life. But all is not right in this new Eden. In the long years since the planet was abandoned, the work of its architects has borne disastrous fruit. The planet is not waiting for them, pristine and unoccupied. New masters have turned it from a refuge into mankind’s worst nightmare. Now two civilizations are on a collision course, both testing the boundaries of what they will do to survive. As the fate of humanity hangs in the balance, who are the true heirs of this new Earth?";
const sentences = 2;

const options = {
    uri: 'https://api.algorithmia.com/v1/algo/nlp/Summarizer/0.1.8?timeout=300',
    body: JSON.stringify([data,sentences]),
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Simple ' + subscriptionKey
    }
};

request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
  console.log(jsonResponse);
}); 