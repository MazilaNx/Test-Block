import React, { Component } from 'react'
import Draggable from 'react-draggable'
import { Scrollbars } from 'react-custom-scrollbars'

import { StyledWidget } from './widget.style'
import arrow from './../images/arrow.png'
import { round } from './../helpers/round'
import { columns } from './columns'

class Widget extends Component {
  constructor() {
    super()

    this.rowsCount = 10
    this.minWidgetHeight = 50
    this.minWidgetWidth = 250
    this.maxWidgetHeight = 450
    this.maxWidgetWidth = 975

    this.state = {
      dataRows: [],
      widgetHeight: this.maxWidgetHeight,
      widgetWidth: this.maxWidgetWidth,
      closed: false
    }
  }

  componentDidMount() {
    this.getOrderBook()
  }

  createDataRows(asks, bids) {
    const dataRows = []

    bids.forEach((values, index) => {
      const data = {
        bids: {},
        asks: {}
      }

      data.bids.price = values[0]
      data.bids.usd = round(values[1])
      data.bids.btc = bids[index - 1] ? round(dataRows[index - 1].bids.btc + values[1]) : round(values[1])
      this.maxBidsBTC = data.bids.btc

      data.asks.price = asks[index][0]
      data.asks.usd = round(asks[index][1])
      data.asks.btc = asks[index - 1]
        ? round(dataRows[index - 1].asks.btc + asks[index][1])
        : round(asks[index][1])
      this.maxAsksBTC = data.asks.btc

      dataRows.push(data)
    })

    return dataRows
  }

  calcColumnsWidth() {
    const maxWidth = Math.max(
      ...Array.from(this.tableRef.querySelectorAll(`.custom-td`)).map(elem => elem.offsetWidth)
    )

    Array.from(document.querySelectorAll(`.custom-td`)).forEach(elem => (elem.style.width = maxWidth + 'px'))
  }

  async getOrderBook() {
    try {
      const { asks, bids } = await fetch(
        `https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_NXT&depth=${this.rowsCount}`
      ).then(response => response.json())

      this.rowsCount += 10

      this.setState({ dataRows: this.createDataRows(asks, bids) }, () => {
        this.calcColumnsWidth()
      })
    } catch (error) {
      console.error(error)
    }
  }

  handleScroll = event => {
    if (event.top > 0.98) {
      this.getOrderBook()
    }
  }

  toggleWidgetSize = () => {
    this.setState({
      widgetHeight:
        this.state.widgetHeight === this.minWidgetHeight ? this.maxWidgetHeight : this.minWidgetHeight,
      widgetWidth: this.state.widgetWidth === this.minWidgetWidth ? this.maxWidgetWidth : this.minWidgetWidth,
      closed: this.state.closed ? false : true
    })
  }

  render() {
    const { dataRows, widgetHeight, widgetWidth, closed } = this.state

    return (
      <Draggable
        handle=".handle"
        defaultPosition={{ x: 70, y: 70 }}
        position={null}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        <StyledWidget style={{ height: widgetHeight, width: widgetWidth }}>
          <div className="handle">
            <div className="wrapper-header-table">
              <div className="title-table">Test Block</div>
              <img
                src={arrow}
                className={`arrow ${closed && 'closed'}`}
                alt="arrow"
                onClick={this.toggleWidgetSize}
              />
            </div>
          </div>
          <div className="table-wrapp">
            <div className="title-row">
              {columns.map((column, index) => (
                <div className={column.class + ` custom-td`} key={column.title + index}>
                  {column.title}
                </div>
              ))}
            </div>

            <div className="content-table" ref={table => (this.tableRef = table)}>
              <Scrollbars
                autoHeight
                autoHeightMin={280}
                autoHeightMax={280}
                onScrollFrame={this.handleScroll}
                className="scrollbars"
                ref={scrollbar => (this.scrollBarRef = scrollbar)}
              >
                {dataRows.map((row, index) => (
                  <div className="content-row" key={index}>
                    {columns.map((column, index) => (
                      <div className={`item-row custom-td`} key={index}>
                        {column.render(row)}
                      </div>
                    ))}
                    <div className="overlay-wrapper">
                      <div
                        className="left"
                        style={{
                          left: 50 - row.bids.btc / (this.maxBidsBTC / 100) / 2 + '%',
                          width: row.bids.btc / (this.maxBidsBTC / 100) / 2 + '%',
                          opacity: 1 - 0.001 * index
                        }}
                      />
                      <div
                        className="right"
                        style={{
                          width: row.asks.btc / (this.maxAsksBTC / 100) / 2 + '%',
                          opacity: 1 - 0.001 * index
                        }}
                      />
                    </div>
                  </div>
                ))}
              </Scrollbars>
            </div>
          </div>
        </StyledWidget>
      </Draggable>
    )
  }
}

export { Widget }
