function scuberGreetingForFeet(rideLength){
  if(rideLength > 2500) {
    return "No can do."
  } else if(rideLength < 400) {
    return "This one is on me!"
  } else if (rideLength > 2000) {
    return "I will gladly take your thirty bucks."
  }
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
  let response;

  switch(tip) {
    case "generous":
      response = 'Thank you so much.';
      return response;
      break;
    case 'not as generous':
      response = 'Thank you.'
      return response;
      break;
    default:
      response = 'Bye.';
      return response;
      break;

  }
}