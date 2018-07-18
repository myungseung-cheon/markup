Chart.defaults.LineWithLine = Chart.defaults.line;
Chart.controllers.LineWithLine = Chart.controllers.line.extend({
  draw: function(ease) {
    Chart.controllers.line.prototype.draw.call(this, ease);

    if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
      var activePoint = this.chart.tooltip._active[0],
      ctx = this.chart.ctx,
      x = activePoint.tooltipPosition().x,
      topY = this.chart.scales['y-axis-0'].top,
      bottomY = this.chart.scales['y-axis-0'].bottom;

      // draw line
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#3F3F3F';
      ctx.stroke();
      ctx.restore();
    }
  }
});

// Show tooltips always even the stats are zero
Chart.pluginService.register({
  beforeRender: function(chart) {
    if (chart.config.options.showAllTooltips) {
      // create an array of tooltips
      // we can't use the chart tooltip because there is only one tooltip per chart
      chart.pluginTooltips = [];
      chart.config.data.datasets.forEach(function(dataset, i) {
        chart.getDatasetMeta(i).data.forEach(function(sector, j) {
          chart.pluginTooltips.push(new Chart.Tooltip({
            _chart: chart.chart,
            _chartInstance: chart,
            _data: chart.data,
            _options: chart.options.tooltips,
            _active: [sector]
          }, chart));
        });
      });

      // turn off normal tooltips
      chart.options.tooltips.enabled = false;
    }
  },
  afterDraw: function(chart, easing) {
    if (chart.config.options.showAllTooltips) {
      // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
      if (!chart.allTooltipsOnce) {
        if (easing !== 1)
        return;
        chart.allTooltipsOnce = true;
      }

      // turn on tooltips
      chart.options.tooltips.enabled = true;
      Chart.helpers.each(chart.pluginTooltips, function(tooltip) {
        tooltip.initialize();
        tooltip.update();
        // we don't actually need this since we are not animating tooltips
        tooltip.pivot();
        tooltip.transition(easing).draw();
      });
      chart.options.tooltips.enabled = false;
    }
  }
});


var ctx = document.getElementById("profitChart");
var ctk = document.getElementById("profitChartSmall");
var cty = document.getElementById("stockChart");
var ctz = document.getElementById("assetChart");

// 수익률 차트
var profitChart = new Chart(ctx, {
  type: 'LineWithLine',
  mode: 'vertical',
  scaleID: 'x-axis-label',
  borderColor: '#3F3F3F',
  borderWidth: 3,
  data: {
    labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    datasets: [{
      label: false,
      data: [1, 9, 7, 18, 24, 41, 65, 54, 88, 75, 66, 71],
      fill: false,
      borderColor: '#f44336',
      borderWidth: 2,
      pointRadius: '0',
      lineTension: '0',

    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        },
        display: false
      }],
      xAxes: [{
        gridLines: {
          display: false
        },
        display: false,
        ticks: {
          maxRotation: 0,
          autoSkipPadding: 8
        }
      }]
    },
    tooltips: {
      position: 'nearest',
      intersect: false,
      yPadding: 8,
      xPadding: 12,
      caretSize: 6,
      backgroundColor: '#3F3F3F',
      borderColor: '#3F3F3F',
      borderWidth: 0,
      cornerRadius: 4,
      owAllTooltips: true,
      titleFontSize: 13,
      bodyFontSize: 16,
      custom: function(tooltip) {
        if (!tooltip) return;
        tooltip.displayColors = false;
      },
      callbacks: {
        label: function(tooltipItems, data) {
          return tooltipItems.yLabel + '%';
        },
      }
    }
  }
});

// 자산 구성 차트
var assetChart = new Chart(ctz, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [ 50, 16, 4, 30 ],
      backgroundColor: [ '#144ae1','#4e7bfa', '#103bb4', '#00c1a8' ]
    }],
    labels: [ '주식', '채권', '유동성', '기타' ]
  },
  options: {

    responsive: true,
    legend: {
      position: 'right',
      label: {
        boxWidth: 2
      }
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var datasetLabel = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] || 'Other';
          var label = data.labels[tooltipItem.index];
          return label + ': ' + datasetLabel ;
        }
      }
    }
  }
});

// 주식 구성 차트
var stockChart = new Chart(cty, {
  type: 'horizontalBar',
  data: {
    labels: ["삼성전자", "맥쿼리", "GS", "LG", "기업은행", "KT&G", "LG전자우", "LG디스플레이", "현대모비스", "한국전력"],
    datasets: [{
      data: [ 9.73, 4.12, 4.08, 3.36, 3.19, 3.14, 3.12, 2.86, 2.85, 2.84 ],
      backgroundColor: []
    }]
  },

  options: {
    categoryPercentage: 0.2,
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
        },
        gridLines: {
          display: false
        },

      }],
      xAxes: [{
        ticks: {
          beginAtZero:true,
          callback: function(value) {
            return value + "%"
          }
        }
      }]
    }
  }
});
