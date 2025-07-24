# Stock Viz Estático en GitHub Pages

Este proyecto es un sitio estático que muestra series temporales de acciones usando Plotly.js y JSON preprocesado con yfinance.

## Estructura
- `index.html`: página principal con controles y gráfico.
- `assets/`: estilos y lógica JS.
- `data/`: archivos JSON con datos históricos de cada ticker.
- `scripts/fetch_stock.py`: Python script para descargar datos desde yfinance.
- `.github/workflows/update-data.yml`: GitHub Action que ejecuta el script diariamente y commitea los JSON.

## Despliegue
1. Activa GitHub Pages desde la rama `main`.
2. Asegúrate de que `data/` contiene los JSON de los tickers.
3. El sitio se sirve estático en `https://<usuario>.github.io/<repo>/`.
