const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny" && temperature < 86) {
        para.textContent = `It is ${temperature} degrees outside - nice and sunny. Let's go out to the beach, or the pack and get an ice cream.`
  } else if ( choice === "sunny" &&  temperature >= 86) {
        para.textContent = `It is ${temperature} degrees outside - REALLY HOT! If you want to go outside make sure you put some sunscreen on.`
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}

// Sample two...

if (iceCreamVanOutside || houseStatus === "on fire") {
    console.log("You should leave the house quickly.")
  }  else {
    console.log("Probably just stay in then.")
  }