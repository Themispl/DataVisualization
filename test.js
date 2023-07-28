const filter1 = document.querySelector('#filter1');
	const filter2 = document.querySelector('#filter2');
	const filter3 = document.querySelector('#filter3');
	const filter4 = document.querySelector('#filter4');

	let myChart;

	filter1.addEventListener('click', () => {
	  updateChart([10, 20, 30, 40, 50, 60, 70]);
	});

	filter2.addEventListener('click', () => {
	  updateChart([20, 10, 30, 20, 40, 30, 50]);
	});

	filter3.addEventListener('click', () => {
	  updateChart([30, 40, 10, 50, 20, 60, 30]);
	});

	filter4.addEventListener('click', () => {
	  updateChart([60, 50, 40, 30, 20, 10, 5]);
	});
  // update and destroy the chart data 
	function updateChart(data) {
	  if (myChart) {
	    myChart.destroy();
	  }
    //new chart object using the Chart.js library
	  const ctx = document.getElementById('myChart').getContext('2d');
	  myChart = new Chart(ctx, {
	    type: 'line',
	    data: {
	      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	      datasets: [
	        {
	          label: 'My Dataset',
	          data: data,
	          backgroundColor: 'rgba(93, 93, 93, 0.2)',
	          borderColor: 'rgba(93, 93, 93, 1)',
	          fill: true, 
	          borderWidth: 2,
	        },
	      ],
	    },
	    options: {
	      responsive: true,
	      plugins: {
	        title: {
	          display: true,
	          text: 'My Chart',
	          font: {
	            size: 16,
	          },
	        },
	        legend: {
	          display: false,
	        },
	      },
	      scales: {
	        y: {
	          beginAtZero: true,
	        },
	      },
	    },
	  });
	}

	updateChart([10, 20, 30, 40, 50, 60, 70]);
