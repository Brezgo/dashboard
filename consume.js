const xname1 = [];
const xquantity1 = [];
chartIt();
async function chartIt() {
    await getData();
    const div1 = document.getElementById('Chart1').getContext('2d');

    const Chart1 = new Chart(div1, {
        type: 'pie',
        data: {
            labels: xname1,
            datasets: [{
                    label: 'Caritas',
                    data: xquantity1,
                    backgroundColor: ['rgba(242, 7, 7, 0.8)','rgba(199, 70, 70, 0.8)','rgba(255, 251, 5, 0.8)','rgba(166, 245, 193, 0.8)','rgba(9, 219, 81, 0.8)']
                    ,
                    borderColor: ['rgba(0, 123, 255, 1)','rgba(0, 123, 255, 1)','rgba(0, 123, 255, 1)','rgba(0, 123, 255, 1)','rgba(0, 123, 255, 1)']
                    ,
                    borderWidth: 1
                }]
        },
        options: {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        }
    });
    //Chart number 2

}
//Codigo de consumo GET
//fetch('URL');
async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    data.forEach(row => {
        const name = row.title; //dato para las filas
        xname1.push(name);
        console.log(xname1);
        const quantity = row.id;  //dato para las columnas
        xquantity1.push(quantity);
        console.log(xquantity1);
    });
}
