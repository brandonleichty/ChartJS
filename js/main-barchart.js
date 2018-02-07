
const CHART = document.getElementById("lineChart");

Chart.defaults.scale.ticks.beginAtZero = true;

let barChart = new Chart(CHART, {
    type: 'bar',
    data: {
        labels: ['Saints', 'Steelers', 'Buccaneers', 'Lions', 'Bears', 'Packers', 'Ravens', 'Browns', 'Redskins', 'Rams', 'Lions', 'Falcons', 'Panthers', 'Bengles', 'Packers', 'Bears'],
        datasets: [
            {
                label: 'Points scored by Vikings',
                borderColor: '#400748',
                backgroundColor: '#400748',
                borderWidth: 4,
                data: [29, 9, 34, 7, 20, 23, 24, 33, 38, 24, 30, 14, 31, 34]
            }, {
                label: 'Points scored by opponents', 
                boarderColor: '#DBDCDB', 
                borderWidth: 2, 
                data: [19, 26, 17, 14, 17, 10, 16, 16, 30, 7, 23, 9, 31, 7]
            }
        ]
    },  
    options: {
        title: {
            display: true,
            text: 'Vikings 2017'
        }
    }
});