// Dados de exemplo (nomes e porcentagens)
let map = {
  excelente: 0,
  mb: 0,
  bom: 0,
  mediano: 0,
  melhorar: 0
}


// Chamada da função para gerar as barras
gerarBarras();

function createChart() {

  let user = {
    nome: "",
    pontos: []
  }

  let array = [];

  // console.log(user)

  array = JSON.parse(getLocalStorageValue(USER_LIST));
  console.log(array)

  if (array != null) {
    array.forEach(element => {
      let sum = 0;
      element.pontos.forEach(ponto => {
        sum += ponto;
      });
      checkPosition(sum);
    });
  }

  CanvasJS.addColorSet("greenShades",
    [//colorSet Array
      "#FF0000",
      "#fcba03",
      "#f4fc03",
      "#097a0a",
      "#03fc07"
    ]);

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    colorSet: "greenShades",
    title: {
      text: array == null ? "Ninguém jogou" : "Resultados: ",
      horizontalAlign: array == null ? "center" : "left",
      fontColor: "#fff"
    },
    backgroundColor: "#44444400",
    data: [{
      type: "doughnut",
      indexLabelFontColor: "#FFF",
      startAngle: 60,
      //innerRadius: 60,
      indexLabelFontSize: 17,
      indexLabel: "{label} - #percent%",
      toolTipContent: "<b>{label}:</b> {y} (#percent%)",
      dataPoints: [
        { y: map.melhorar, label: "A melhorar" },
        { y: map.mediano, label: "Mediano" },
        { y: map.bom, label: "Bom" },
        { y: map.mb, label: "Muito bom" },
        { y: map.excelente, label: "Excelente" }
      ]
    }]
  });
  return chart;
}









function checkPosition(ponto) {
  let percent = Math.round((ponto / 15) * 100);
  if (percent < 30) {
    map.melhorar += 1;
  }
  else if (percent >= 30 && percent < 50) {
    map.mediano += 1;
  }
  else if (percent >= 50 && percent < 70) {
    map.bom += 1;
  }
  else if (percent >= 70 && percent < 90) {
    map.mb += 1;
  }
  else {
    map.excelente += 1;
  }

}    


var limparStorage = document.getElementById('limparStorage')


limparStorage.addEventListener('click', function(event) {
  console.log("Botão clicado!")
  event.preventDefault();
})












