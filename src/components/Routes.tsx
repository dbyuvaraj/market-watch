import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Watchlist from '../pages/Watchlist'
import Coin from '../pages/Coin'
import Forex from '../pages/Forex'

const RouteConfig: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/watchlist" element={<Watchlist />}></Route>
    <Route path="/forex" element={<Forex />} />
    <Route path="/coin" element={<Coin />} />
  </Routes>
)

export default RouteConfig
