const TICKERS = ['AAPL','MSFT','GOOG','AMZN','TSLA'];

// Inicializa select y fechas
function initControls() {
  const sel = document.getElementById('ticker-select');
  TICKERS.forEach(t => sel.add(new Option(t, t)));
  const today = new Date().toISOString().slice(0,10);
  document.getElementById('end-date').value = today;
  const past = new Date(); past.setFullYear(past.getFullYear()-1);
  document.getElementById('start-date').value = past.toISOString().slice(0,10);
}

// Carga JSON local y filtra por fechas
async function fetchData(ticker) {
  const res = await fetch(`data/${ticker}.json`);
  const data = await res.json();
  return data;
}

// Renderiza gráfico con Plotly
function renderChart(data, ticker) {
  const start = document.getElementById('start-date').value;
  const end   = document.getElementById('end-date').value;
  const filtered = data.filter(d => d.Date>=start && d.Date<=end);
  const trace = {
    x: filtered.map(d=>d.Date),
    y: filtered.map(d=>d.Close),
    mode: 'lines', name: ticker
  };
  Plotly.newPlot('chart',[trace], {title: `${ticker} Closing Price`});
}

// Evento del botón
document.getElementById('load-btn').addEventListener('click', async() => {
  const ticker = document.getElementById('ticker-select').value;
  const data = await fetchData(ticker);
  renderChart(data, ticker);
});

// Setup
initControls();
