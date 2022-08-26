import React, { useState } from 'react'

const Watchlist: React.FC = () => {
  const [symbol, setSymbol] = useState('')
  const [atr, setAtr] = useState('')
  const [rrRatio, setRrRatio] = useState('')

  return (
    <form>
      Stock symbol:
      <input
        type="text"
        value={symbol}
        onChange={(evt) => setSymbol(evt.target.value)}
      />
      Average True Range:
      <input
        type="text"
        value={atr}
        onChange={(evt) => setAtr(evt.target.value)}
      />
      Risk Reward Ratio:
      <input
        type="text"
        value={rrRatio}
        onChange={(evt) => setRrRatio(evt.target.value)}
      />
    </form>
  )
}

export default Watchlist
