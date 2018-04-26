const columns = [
  {
    title: 'price',
    class: 'item-title-row',
    render: row => row.bids.price
  },
  {
    title: 'BTC',
    class: 'item-title-row other-item',
    render: row => row.bids.btc
  },
  {
    title: 'USD',
    class: 'item-title-row',
    render: row => row.bids.usd
  },
  {
    title: 'USD',
    class: 'item-title-row other-item',
    render: row => row.asks.usd
  },
  {
    title: 'BTC',
    class: 'item-title-row',
    render: row => row.asks.btc
  },
  {
    title: 'price',
    class: 'item-title-row',
    render: row => row.asks.price
  }
]

export { columns }
