import yfinance as yf
import json
from pathlib import Path

def fetch_and_save(ticker):
    df = yf.download(ticker, period='max')
    records = [
        {'Date': str(idx.date()), 'Close': float(val)}
        for idx, val in df['Close'].items()
    ]
    Path('data').mkdir(exist_ok=True)
    with open(f'data/{ticker}.json','w') as f:
        json.dump(records, f, indent=2)

if __name__=='__main__':
    for t in ['AAPL','MSFT','GOOG','AMZN','TSLA']:
        fetch_and_save(t)
