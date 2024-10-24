document.addEventListener("DOMContentLoaded", function () {
  let container = document.createElement("div");
  container.classList.add("container");
  document.body.prepend(container);
  const h1 = document.createElement("h1");
  h1.textContent = "Calculate a weight of an object on a planet";
  container.appendChild(h1);
  let div = document.createElement("div");
  container.appendChild(div);
  let input = document.createElement("input");
  input.placeholder = "Mass in kg";
  input.type = "number";
  input.required = true;
  input.min = 0;
  div.appendChild(input);
  let select = document.createElement("select");
  select.required = true;
  let options = [
    "--select planet--",
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
    "Pluto",
  ];
  let optionn = [
    {
      name: "select planet",
      value: "",
    },
    {
      name: "Mercury",
      value: "Mercury",
    },
    {
      name: "Venus",
      value: "Venus",
    },
    {
      name: "Earth",
      value: "Earth",
    },
    {
      name: "Mars",
      value: "Mars",
    },
    {
      name: "Jupiter",
      value: "Jupiter",
    },
    {
      name: "Saturn",
      value: "Saturn",
    },
    {
      name: "Uranus",
      value: "Uranus",
    },
    {
      name: "Neptune",
      value: "Neptune",
    },
    {
      name: "Pluto",
      value: "Pluto",
    },
  ];
  let option = document.createElement("option");
  option.textContent = "--select planet--";
  select.appendChild(option);
  for (let i = 1; i < options.length; i++) {
    let option = document.createElement("option");
    option.value = options[i];
    option.textContent = options[i];
    select.appendChild(option);
  }
  div.appendChild(select);
  let button = document.createElement("button");
  button.textContent = "calculate";
  div.appendChild(button);
  const planetCoefficients = {
    Венера: 8.87,
    Земля: 9.8,
    Марс: 3.71,
    Юпитер: 24.79,
    Сатурн: 10.44,
    Уран: 8.69,
    Нептун: 11.15,
    Плутон: 0.62,
    Меркурии: 3.7,
    Луна: 1.62,
  };
  let resultPanel = document.createElement("div");
  resultPanel.classList.add("resultPanel");
  resultPanel.style.backgroundColor = "rgb(20, 20, 20, 0.6)";
  resultPanel.style.margin = "0 auto";
resultPanel.style.width = "50%";


  document.body.append(resultPanel);

  let resultBlock = document.createElement("div");
  resultBlock.classList.add("resultBlock");
  resultBlock.style.display = "none";
  resultBlock.style.color = "white";
  resultBlock.style.backgroundColor = "rgb(88, 88, 88)";
  resultPanel.append(resultBlock);

  let planetImg = document.createElement("div");
  planetImg.classList.add("planetImages");
  planetImg.style.display = "none";
  resultPanel.append(planetImg);

  let div2 = document.createElement("div");
  div2.style.display = "none";
  container.appendChild(div2);

  let result = document.createElement("div");
  result.classList.add("result");

  select.addEventListener("change", (event) => {
    select.value = event.target.value;

    resultBlock.style.display = "none";
    planetImg.innerHTML = "";

    if (optionn[select.selectedIndex].value === "Venus") {
      planetImg.style.display = "flex";
		resultPanel.style.padding = "25px 5px";
		planetImg.innerHTML =
        "<img class='planets' src='img/venus.png' alt='venus'>";
		planetImg.style.justifyContent = "center";
		planetImg.style.alignItems = "center";
		planetImg.style.display = "flex";
    } else if (optionn[select.selectedIndex].value === "Earth") {
		resultPanel.style.padding = "25px 5px";
		planetImg.style.display = "flex";
      planetImg.innerHTML =
        "<img class='planets' src='img/earth.png' alt='venus'>";		planetImg.style.justifyContent = "center";
		planetImg.style.alignItems = "center";
		planetImg.style.display = "flex";
    } else if (optionn[select.selectedIndex].value === "Mars") {
		resultPanel.style.padding = "25px 5px";
		planetImg.innerHTML =
        "<img class='planets' src='img/mars.png' alt='venus'>";
      planetImg.style.display = "flex";
	  planetImg.style.justifyContent = "center";
	  planetImg.style.alignItems = "center";
	  planetImg.style.display = "flex";
    } else if (optionn[select.selectedIndex].value === "Jupiter") {
		resultPanel.style.padding = "25px 5px";
		planetImg.innerHTML =
        "<img class='planets' src='img/jupiter.png' alt='venus'>";
      planetImg.style.display = "flex";
	  planetImg.style.justifyContent = "center";
	  planetImg.style.alignItems = "center";
	  planetImg.style.display = "flex";
    } else if (optionn[select.selectedIndex].value === "Saturn") {
		resultPanel.style.padding = "25px 5px";
		planetImg.innerHTML =
        "<img class='planets' src='img/saturn.png' alt='venus'>";
      planetImg.style.display = "flex";
	  planetImg.style.justifyContent = "center";
	  planetImg.style.alignItems = "center";
	  planetImg.style.display = "flex";
    } else if (optionn[select.selectedIndex].value === "Uranus") {
		resultPanel.style.padding = "25px 5px";
		planetImg.innerHTML =
        "<img class='planets' src='img/uranus.png' alt='venus'>";
      planetImg.style.display = "flex";
	  planetImg.style.justifyContent = "center";
	  planetImg.style.alignItems = "center";
	  planetImg.style.display = "flex";
    } else if (optionn[select.selectedIndex].value === "Neptune") {
		resultPanel.style.padding = "25px 5px";
		planetImg.innerHTML =
        "<img class='planets' src='img/neptune.png' alt='venus'>";
      planetImg.style.display = "flex";
	  planetImg.style.justifyContent = "center";
	  planetImg.style.alignItems = "center";
	  planetImg.style.display = "flex";
    } else if (optionn[select.selectedIndex].value === "Pluto") {
		resultPanel.style.padding = "25px 5px";
		planetImg.innerHTML =
        "<img class='planets' src='img/pluto.png' alt='venus'>";
      planetImg.style.display = "flex";
	  planetImg.style.justifyContent = "center";
	  planetImg.style.alignItems = "center";
	  planetImg.style.display = "flex";
    } else if (optionn[select.selectedIndex].value === "Mercury") {
		resultPanel.style.padding = "25px 5px";
		planetImg.innerHTML =
        "<img class='planets' src='img/mercury.png' alt='venus'>";
      planetImg.style.display = "flex";
	  planetImg.style.justifyContent = "center";
	  planetImg.style.alignItems = "center";
	  planetImg.style.display = "flex";
    } else if (optionn[select.selectedIndex].value === "Moon") {
		resultPanel.style.padding = "25px 5px 25px 5px";
		planetImg.innerHTML =
        "<img class='planets' src='img/moon.png' alt='venus'>";
      planetImg.style.display = "flex";
	  planetImg.style.justifyContent = "center";
	  planetImg.style.alignItems = "center";
	  planetImg.style.display = "flex";
    } else {
      planetImg.style.display = "block";
      let p = document.createElement("p");
      p.textContent = "Please select planet";
      p.style.color = "white";
      p.style.fontSize = "25px";
	  planetImg.style.display = "grid";
	  planetImg.style.justifyItems = "center";
	  planetImg.style.gridTemplateColumns = "1fr 1fr 1fr";
	  p.style.gridArea = "1 / 2 / 1 / 3";
	  planetImg.style.width = "200%";
	  planetImg.style.margin = "0 auto";
      planetImg.appendChild(p);
    }
  });

  input.addEventListener("input", (event) => {
    input.value = event.target.value;
    input.value = Number(input.value);
    button.addEventListener("click", () => {
      if (optionn[select.selectedIndex].value === "Venus") {
        planetImg.innerHTML =
          "<img class='planets' src='img/venus.png' alt='venus'>";
        resultBlock.style.display = "flex";
		resultBlock.textContent = "Вес на Венере равен: ";
        result.innerHTML = (input.value * planetCoefficients.Венера).toFixed(2) + " N";
		planetImg.style.width = "50%";
		let rer = document.createElement("div");
		rer.style.display = "grid";
		resultBlock.style.display = "flex";
		resultBlock.style.flexDirection = "column";
		result.style.marginLeft = "40px";
		result.style.marginTop = "10px";
		result.style.border = "1px solid white";
		result.style.borderRadius = "25px";
		result.style.backgroundColor = "rgb(166, 166, 166)";
		result.style.width = "80px";
		result.style.paddingLeft = "10px";
		result.style.paddingTop = "10px";
		result.style.paddingBottom = "10px";
		resultBlock.style.marginRight = "-50px";
		resultBlock.style.paddingTop = "50px";
		resultBlock.style.paddingBottom = "50px";
		resultBlock.style.paddingLeft = "75px";
		resultBlock.style.paddingRight = "75px";
		rer.style.gridTemplateColumns = "1fr 1fr";
		rer.style.justifyItems = "center";
		rer.style.alignItems = "center";
		resultPanel.appendChild(rer);
		rer.appendChild(planetImg);
		rer.appendChild(resultBlock);
        resultBlock.append(result);
      } else if (optionn[select.selectedIndex].value === "Earth") {
        planetImg.style.display = "flex";
        planetImg.innerHTML =
          "<img class='planets' src='img/earth.png' alt='venus'>";
		resultBlock.textContent = "Вес на Земле равен: ";
        result.innerHTML = (input.value * planetCoefficients.Земля).toFixed(2) + " N";
		planetImg.style.width = "50%";
		let rer = document.createElement("div");
		rer.style.display = "grid";
		resultBlock.style.display = "flex";
		resultBlock.style.flexDirection = "column";
		result.style.marginLeft = "40px";
		result.style.marginTop = "10px";
		result.style.border = "1px solid white";
		result.style.borderRadius = "25px";
		result.style.backgroundColor = "rgb(166, 166, 166)";
		result.style.width = "80px";
		result.style.paddingLeft = "10px";
		result.style.paddingTop = "10px";
		result.style.paddingBottom = "10px";
		resultBlock.style.marginRight = "-50px";
		resultBlock.style.paddingTop = "50px";
		resultBlock.style.paddingBottom = "50px";
		resultBlock.style.paddingLeft = "75px";
		resultBlock.style.paddingRight = "75px";
		rer.style.gridTemplateColumns = "1fr 1fr";
		rer.style.justifyItems = "center";
		rer.style.alignItems = "center";
		resultPanel.appendChild(rer);
		rer.appendChild(planetImg);
		rer.appendChild(resultBlock);
        resultBlock.append(result);
      } else if (optionn[select.selectedIndex].value === "Mars") {
        planetImg.innerHTML =
          "<img class='planets' src='img/mars.png' alt='venus'>";
        planetImg.style.display = "flex";
		resultBlock.textContent = "Вес на Марсе равен: ";
        result.innerHTML = (input.value * planetCoefficients.Марс).toFixed(2) + " N";
		planetImg.style.width = "50%";
		let rer = document.createElement("div");
		rer.style.display = "grid";
		resultBlock.style.display = "flex";
		resultBlock.style.flexDirection = "column";
		result.style.marginLeft = "40px";
		result.style.marginTop = "10px";
		result.style.border = "1px solid white";
		result.style.borderRadius = "25px";
		result.style.backgroundColor = "rgb(166, 166, 166)";
		result.style.width = "80px";
		result.style.paddingLeft = "10px";
		result.style.paddingTop = "10px";
		result.style.paddingBottom = "10px";
		resultBlock.style.marginRight = "-50px";
		resultBlock.style.paddingTop = "50px";
		resultBlock.style.paddingBottom = "50px";
		resultBlock.style.paddingLeft = "75px";
		resultBlock.style.paddingRight = "75px";
		rer.style.gridTemplateColumns = "1fr 1fr";
		rer.style.justifyItems = "center";
		rer.style.alignItems = "center";
		resultPanel.appendChild(rer);
		rer.appendChild(planetImg);
		rer.appendChild(resultBlock);
        resultBlock.append(result);
      } else if (optionn[select.selectedIndex].value === "Jupiter") {
        planetImg.innerHTML =
          "<img class='planets' src='img/jupiter.png' alt='venus'>";
        planetImg.style.display = "flex";
		resultBlock.textContent = "Вес на Юпитере равен: ";
        result.innerHTML = (input.value * planetCoefficients.Юпитер).toFixed(2) + " N";
		planetImg.style.width = "50%";
		let rer = document.createElement("div");
		rer.style.display = "grid";
		resultBlock.style.display = "flex";
		resultBlock.style.flexDirection = "column";
		result.style.marginLeft = "40px";
		result.style.marginTop = "10px";
		result.style.border = "1px solid white";
		result.style.borderRadius = "25px";
		result.style.backgroundColor = "rgb(166, 166, 166)";
		result.style.width = "80px";
		result.style.paddingLeft = "10px";
		result.style.paddingTop = "10px";
		result.style.paddingBottom = "10px";
		resultBlock.style.marginRight = "-50px";
		resultBlock.style.paddingTop = "50px";
		resultBlock.style.paddingBottom = "50px";
		resultBlock.style.paddingLeft = "75px";
		resultBlock.style.paddingRight = "75px";
		rer.style.gridTemplateColumns = "1fr 1fr";
		rer.style.justifyItems = "center";
		rer.style.alignItems = "center";
		resultPanel.appendChild(rer);
		rer.appendChild(planetImg);
		rer.appendChild(resultBlock);
        resultBlock.append(result);
      } else if (optionn[select.selectedIndex].value === "Saturn") {
        planetImg.innerHTML =
          "<img class='planets' src='img/saturn.png' alt='venus'>";
        planetImg.style.display = "flex";
		resultBlock.textContent = "Вес на Сатурне равен: ";
        result.innerHTML = (input.value * planetCoefficients.Сатурн).toFixed(2) + " N";
		planetImg.style.width = "50%";
		let rer = document.createElement("div");
		rer.style.display = "grid";
		resultBlock.style.display = "flex";
		resultBlock.style.flexDirection = "column";
		result.style.marginLeft = "40px";
		result.style.marginTop = "10px";
		result.style.border = "1px solid white";
		result.style.borderRadius = "25px";
		result.style.backgroundColor = "rgb(166, 166, 166)";
		result.style.width = "80px";
		result.style.paddingLeft = "10px";
		result.style.paddingTop = "10px";
		result.style.paddingBottom = "10px";
		resultBlock.style.marginRight = "-50px";
		resultBlock.style.paddingTop = "50px";
		resultBlock.style.paddingBottom = "50px";
		resultBlock.style.paddingLeft = "75px";
		resultBlock.style.paddingRight = "75px";
		rer.style.gridTemplateColumns = "1fr 1fr";
		rer.style.justifyItems = "center";
		rer.style.alignItems = "center";
		resultPanel.appendChild(rer);
		rer.appendChild(planetImg);
		rer.appendChild(resultBlock);
        resultBlock.append(result);
      } else if (optionn[select.selectedIndex].value === "Uranus") {
        planetImg.innerHTML =
          "<img class='planets' src='img/uranus.png' alt='venus'>";
        planetImg.style.display = "flex";
		resultBlock.textContent = "Вес на Уране равен: ";
        result.innerHTML = (input.value * planetCoefficients.Уран).toFixed(2) + " N";
		planetImg.style.width = "50%";
		let rer = document.createElement("div");
		rer.style.display = "grid";
		resultBlock.style.display = "flex";
		resultBlock.style.flexDirection = "column";
		result.style.marginLeft = "40px";
		result.style.marginTop = "10px";
		result.style.border = "1px solid white";
		result.style.borderRadius = "25px";
		result.style.backgroundColor = "rgb(166, 166, 166)";
		result.style.width = "80px";
		result.style.paddingLeft = "10px";
		result.style.paddingTop = "10px";
		result.style.paddingBottom = "10px";
		resultBlock.style.marginRight = "-50px";
		resultBlock.style.paddingTop = "50px";
		resultBlock.style.paddingBottom = "50px";
		resultBlock.style.paddingLeft = "75px";
		resultBlock.style.paddingRight = "75px";
		rer.style.gridTemplateColumns = "1fr 1fr";
		rer.style.justifyItems = "center";
		rer.style.alignItems = "center";
		resultPanel.appendChild(rer);
		rer.appendChild(planetImg);
		rer.appendChild(resultBlock);
        resultBlock.append(result);
      } else if (optionn[select.selectedIndex].value === "Neptune") {
        planetImg.innerHTML =
          "<img class='planets' src='img/neptune.png' alt='venus'>";
        planetImg.style.display = "flex";
		resultBlock.textContent = "Вес на Нептуне равен: ";
        result.innerHTML = (input.value * planetCoefficients.Нептун).toFixed(2) + " N";
		planetImg.style.width = "50%";
		let rer = document.createElement("div");
		rer.style.display = "grid";
		resultBlock.style.display = "flex";
		resultBlock.style.flexDirection = "column";
		result.style.marginLeft = "40px";
		result.style.marginTop = "10px";
		result.style.border = "1px solid white";
		result.style.borderRadius = "25px";
		result.style.backgroundColor = "rgb(166, 166, 166)";
		result.style.width = "80px";
		result.style.paddingLeft = "10px";
		result.style.paddingTop = "10px";
		result.style.paddingBottom = "10px";
		resultBlock.style.marginRight = "-50px";
		resultBlock.style.paddingTop = "50px";
		resultBlock.style.paddingBottom = "50px";
		resultBlock.style.paddingLeft = "75px";
		resultBlock.style.paddingRight = "75px";
		rer.style.gridTemplateColumns = "1fr 1fr";
		rer.style.justifyItems = "center";
		rer.style.alignItems = "center";
		resultPanel.appendChild(rer);
		rer.appendChild(planetImg);
		rer.appendChild(resultBlock);
        resultBlock.append(result);
      } else if (optionn[select.selectedIndex].value === "Pluto") {
        planetImg.innerHTML =
          "<img class='planets' src='img/pluto.png' alt='venus'>";
        planetImg.style.display = "flex";
		resultBlock.textContent = "Вес на Плутоне равен: ";
        result.innerHTML = (input.value * planetCoefficients.Плутон).toFixed(2) + " N";
		planetImg.style.width = "50%";
		let rer = document.createElement("div");
		rer.style.display = "grid";
		resultBlock.style.display = "flex";
		resultBlock.style.flexDirection = "column";
		result.style.marginLeft = "40px";
		result.style.marginTop = "10px";
		result.style.border = "1px solid white";
		result.style.borderRadius = "25px";
		result.style.backgroundColor = "rgb(166, 166, 166)";
		result.style.width = "80px";
		result.style.paddingLeft = "10px";
		result.style.paddingTop = "10px";
		result.style.paddingBottom = "10px";
		resultBlock.style.marginRight = "-50px";
		resultBlock.style.paddingTop = "50px";
		resultBlock.style.paddingBottom = "50px";
		resultBlock.style.paddingLeft = "75px";
		resultBlock.style.paddingRight = "75px";
		rer.style.gridTemplateColumns = "1fr 1fr";
		rer.style.justifyItems = "center";
		rer.style.alignItems = "center";
		resultPanel.appendChild(rer);
		rer.appendChild(planetImg);
		rer.appendChild(resultBlock);
        resultBlock.append(result);
      } else if (optionn[select.selectedIndex].value === "Mercury") {
        planetImg.innerHTML =
          "<img class='planets' src='img/mercury.png' alt='venus'>";
        planetImg.style.display = "flex";
		resultBlock.textContent = "Вес на Меркурии равен: ";
        result.innerHTML = (input.value * planetCoefficients.Меркурии).toFixed(2) + " N";
		planetImg.style.width = "50%";
		let rer = document.createElement("div");
		rer.style.display = "grid";
		resultBlock.style.display = "flex";
		resultBlock.style.flexDirection = "column";
		result.style.marginLeft = "40px";
		result.style.marginTop = "10px";
		result.style.border = "1px solid white";
		result.style.borderRadius = "25px";
		result.style.backgroundColor = "rgb(166, 166, 166)";
		result.style.width = "80px";
		result.style.paddingLeft = "10px";
		result.style.paddingTop = "10px";
		result.style.paddingBottom = "10px";
		resultBlock.style.marginRight = "-50px";
		resultBlock.style.paddingTop = "50px";
		resultBlock.style.paddingBottom = "50px";
		resultBlock.style.paddingLeft = "75px";
		resultBlock.style.paddingRight = "75px";
		rer.style.gridTemplateColumns = "1fr 1fr";
		rer.style.justifyItems = "center";
		rer.style.alignItems = "center";
		resultPanel.appendChild(rer);
		rer.appendChild(planetImg);
		rer.appendChild(resultBlock);
        resultBlock.append(result);
      } else if (optionn[select.selectedIndex].value === "Moon") {
        planetImg.innerHTML =
          "<img class='planets' src='img/moon.png' alt='venus'>";
        planetImg.style.display = "flex";
		resultBlock.textContent = "Вес на Луне равен: ";
        result.innerHTML = (input.value * planetCoefficients.Луна).toFixed(2) + " N";
		planetImg.style.width = "50%";
		let rer = document.createElement("div");
		rer.style.display = "grid";
		resultBlock.style.display = "flex";
		resultBlock.style.flexDirection = "column";
		result.style.marginLeft = "40px";
		result.style.marginTop = "10px";
		result.style.border = "1px solid white";
		result.style.borderRadius = "25px";
		result.style.backgroundColor = "rgb(166, 166, 166)";
		result.style.width = "80px";
		result.style.paddingLeft = "10px";
		result.style.paddingTop = "10px";
		result.style.paddingBottom = "10px";
		resultBlock.style.marginRight = "-50px";
		resultBlock.style.paddingTop = "50px";
		resultBlock.style.paddingBottom = "50px";
		resultBlock.style.paddingLeft = "75px";
		resultBlock.style.paddingRight = "75px";
		rer.style.gridTemplateColumns = "1fr 1fr";
		rer.style.justifyItems = "center";
		rer.style.alignItems = "center";
		resultPanel.appendChild(rer);
		rer.appendChild(planetImg);
		rer.appendChild(resultBlock);
        resultBlock.append(result);
      }
    });
  });
});
