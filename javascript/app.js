document.addEventListener('DOMContentLoaded',  function(){
    const chart = Highcharts.chart('highcharts',{
        chart:{
            type: 'spline',
        },
        title: {
            text: ' Grades',
        },
        xAxis:{
            categories:['1P','2P','1S','3P','4P','2S','TOT']
        },
        yAxis:{
            title:{
              text: ''  
            }
        },
        series: [{
            name:'Semestre',
            data:[1,2,3,4,2,8,1],
            color: '#bcd9e7',
        },{
            name:'Totat',
            data: [6,2,5,4,5,6,1],
            color: '#58585a'
        }]
    });
});

//For our MENU-HAMBURGEUR
const menu = document.querySelector('.menu-icons');
const exit = document.querySelector('.menu-container');

menu.addEventListener('click', () =>{
    menu.classList.toggle('menu-mobile');
    exit.classList.toggle('menu-mobile');
})

document.querySelectorAll('.nav-links').forEach(n => n.addEventListener('click', () =>{
    menu.classList.remove('menu-mobile');
    exit.classList.remove('menu-mobile');
}))