import { Options } from "highcharts";

export const donutChart: Options = {
    chart : {
        type : 'pie',
        plotShadow : false,
    },
    credits : {
        enabled : false
    },
    plotOptions : {
        pie : {
            innerSize : '99%',
            borderWidth : 40,
            borderColor : null,
            slicedOffset : 20,
            dataLabels : {
                connectorWidth : 0
            }
        }
    },
    title : {
        verticalAlign : 'middle',
        floating : true,
        text : 'Reservations'
    },
    legend : {
        enabled : false,
    },
    series : [
        {
            type:'pie',
            data : [
                {name :'Terrain 1', y:1,color : '#09C878'},
                {name :'Terrain 2', y:2,color : '#34173D'},
                {name :'Terrain 3', y:3,color : '#3165F3'},
                {name :'Terrain 4', y:4,color : '#E90052'},
            ]
        }
    ]
}