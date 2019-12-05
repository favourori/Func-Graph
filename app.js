//Formular

//Y = 2x^2;

plotFunction = x => {
  let y = [];

  for (let i = 0; i < x.length; i++) {
    let valueOfY = Math.pow(x[i], 2);
    console.log(valueOfY);
    y.push(valueOfY);
  }

  new Chart(document.getElementById("myChart"), {
    type: "line",
    data: {
      labels: x,
      datasets: [
        {
          data: y,
          label: "Y = x^2",
          borderColor: "#c45850",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Graphing a function 😖"
      }
    }
  });
};

plotFunction([-8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8]);
