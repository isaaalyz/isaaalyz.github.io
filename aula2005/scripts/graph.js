const agents = [];
const subjects = [];
const regionals = [];
const reports = [];

google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
    const data = google.visualization.arrayToDataTable([
        ['Tipo', 'Quantidade', { role: 'style' }],
        ['Agentes', agents.length, 'lightgreen'],
        ['Assuntos', subjects.length, 'lightblue'],
        ['Regionais', regionals.length, 'orange'],
        ['Relatórios', reports.length, 'color: red']
    ]);

    const options = {
        legend: { position: 'none' },
        title: 'Quantidade de Registros por Tipo',
    };

    const chart = new google.visualization.ColumnChart(document.getElementById('chart'));
    chart.draw(data, options);
}
