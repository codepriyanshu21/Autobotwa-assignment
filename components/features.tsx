"use client"

import { Zap, Shield, TrendingUp } from "lucide-react"

export default function Features() {
  const features = [
    {
      id: 1,
      icon: Zap,
      title: "Lightning Fast Trading",
      description:
        "Execute trades in milliseconds with our optimized infrastructure and zero-latency connections to global markets.",
    },
    {
      id: 2,
      icon: Shield,
      title: "Bank-Level Security",
      description:
        "Military-grade encryption, cold storage wallets, and multi-signature authentication protect your assets 24/7.",
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Advanced Analytics",
      description:
        "AI-powered market insights, technical analysis tools, and real-time price alerts to stay ahead of the market.",
    },
    {
      id: 4,
      icon: Zap,
      title: "Low Fees",
      description:
        "Transparent pricing with industry-leading rates. No hidden fees, no surprises. Trade more, pay less.",
    },
    {
      id: 5,
      icon: Shield,
      title: "24/7 Support",
      description: "Our expert support team is available around the clock to assist you with any questions or issues.",
    },
    {
      id: 6,
      icon: TrendingUp,
      title: "Mobile Trading",
      description:
        "Trade on the go with our native iOS and Android apps featuring full platform functionality and notifications.",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">CryptoVault</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for traders who demand the best. Experience the platform that millions trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.id}
                className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 group"
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
