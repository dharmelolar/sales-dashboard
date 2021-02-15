
let ctx = document.getElementById('myChart');
let lineChart = document.getElementById('line-chart');
let menu = document.querySelector('.lni-menu')
let sideNav = document.querySelector('.side_nav')




let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        datasets: [{
            label: '# of Votes',
            data: [20,60,40,10,20,30,50,30,20,40,50,40,20,10,40,20,60,20,10,30,20,60,30,40,20,15,40],
            backgroundColor:'#2F4CDD',
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

let salesChart= new Chart(lineChart, {
    type: 'line',
    data: {
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'],
        datasets: [{
            label: 'Income',
            data: [200,300,100,500,200,800,100,300,200,700,100],
            backgroundColor:'#B519EC',
            borderWidth: 1
        },
        {
            label: 'Expenses',
            data: [300,800,400,700,100,500,200,300,600,700,100],
            backgroundColor:'#2F4CDD',
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        maintainAspectRatio:false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


menu.addEventListener(click,()=>{
    sideNav.classList.toggle('.toggle')
})



