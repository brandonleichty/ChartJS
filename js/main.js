
const CHART = document.getElementById("lineChart");

let lineChart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: ["Game 1", "Game 2", "Game 3", "Game 4", "Game 5", "Game 6", "Game 7", "Game 8", "Game 9", "Game 10", "Game 11", "Game 12", "Game 13", "Game 14", "Game 15", "Game 16"],
        datasets: [
            {
                label: "Vikings Points Scored 2016",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(75,75,192,0.4)",
                borderColor: "rgba(75,72,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,72,192,1)",
                pointBackgroundColor: "#fff", 
                pointBorderWidth: 1, 
                pointHoverRadious: 5, 
                pointHoverBackgroundColor: "rgba(75,72,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",                
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10, 
                data: [25, 17, 22, 24, 31, 10, 10, 16, 20, 30, 13, 15, 25, 6, 25, 38]
            }, {
                label: "Vikings Points Scored 2017",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(255,198,47,0.4)",
                borderColor: "rgba(255,198,47,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(255,198,47,1)",
                pointBackgroundColor: "#FFF", 
                pointBorderWidth: 1, 
                pointHoverRadious: 5, 
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10, 
                data: [29, 9, 34, 7, 20, 23, 24, 33, 38, 24, 30, 14, 24, 34]
            }
        ]
    }
});