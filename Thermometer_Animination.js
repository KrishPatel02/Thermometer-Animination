const thermoload = () => {
  // Declaration

  let thermoimg = document.querySelector(".thermoimg");

  setTimeout(() => {
    thermoimg.src =
      "/Thermometer-Animination/Thermometer_Animination_Empty.svg";
  }, 500);

  setTimeout(() => {
    thermoimg.src =
      "/Thermometer-Animination/Thermometer_Animination_Quarter.svg";
  }, 1000);

  setTimeout(() => {
    thermoimg.src = "/Thermometer-Animination/Thermometer_Animination_Half.svg";
  }, 1500);

  setTimeout(() => {
    thermoimg.src =
      "/Thermometer-Animination/Thermometer_Animination_Three_Quarters.svg";
  }, 2000);

  setTimeout(() => {
    thermoimg.src = "/Thermometer-Animination/Thermometer_Animination_Full.svg";
  }, 2500);
};

thermoload();

setInterval(thermoload, 2500);
