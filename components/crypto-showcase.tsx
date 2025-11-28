"use client"

import { useEffect, useState } from "react"
import { TrendingUp, TrendingDown } from "lucide-react"

interface CryptoData {
  id: string
  name: string
  symbol: string
  image: string
  current_price: number
  price_change_percentage_24h: number
  market_cap_rank: number
}

export default function CryptoShowcase() {
  const [cryptos, setCryptos] = useState<CryptoData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&sparkline=false&locale=en",
        )
        const data = await response.json()
        setCryptos(data)
      } catch (error) {
        console.error("Error fetching crypto data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCryptos()
    const interval = setInterval(fetchCryptos, 30000) 
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="trading" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Live Market Data</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-time cryptocurrency prices from the world's top digital assets
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-64">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading market data...</p>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cryptos.map((crypto) => {
              const isPositive = crypto.price_change_percentage_24h >= 0
              return (
                <div
                  key={crypto.id}
                  className="glass-card p-6 rounded-xl border-primary/30 hover:border-primary/60 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={crypto.image || "/placeholder.svg"}
                        alt={crypto.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-bold text-lg">{crypto.symbol.toUpperCase()}</h3>
                        <p className="text-sm text-muted-foreground">#{crypto.market_cap_rank}</p>
                      </div>
                    </div>
                    {isPositive ? (
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-red-500" />
                    )}
                  </div>

                  <div className="mb-4">
                    <p className="text-2xl font-bold mb-2">
                      $
                      {crypto.current_price.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>
                    <p className={`text-sm font-semibold ${isPositive ? "text-green-500" : "text-red-500"}`}>
                      {isPositive ? "+" : ""}
                      {crypto.price_change_percentage_24h.toFixed(2)}%
                    </p>
                  </div>

                  <button className="w-full py-2 rounded-lg border border-primary/50 hover:bg-primary/10 transition-colors font-semibold text-sm">
                    Trade {crypto.symbol.toUpperCase()}
                  </button>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
