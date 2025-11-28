"use client"

import { Check } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for beginners",
      features: [
        "Real-time price data",
        "Basic charting tools",
        "Up to 10 trades/day",
        "Community support",
        "Mobile app access",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "For active traders",
      features: [
        "Advanced analytics",
        "Unlimited trades",
        "Priority support",
        "API access",
        "Custom alerts",
        "Portfolio tracking",
        "Tax reporting tools",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Elite",
      price: "$99",
      period: "/month",
      description: "For professional traders",
      features: [
        "Everything in Professional",
        "Personal account manager",
        "Advanced bot trading",
        "White-glove support",
        "Custom integrations",
        "Institutional rates",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your trading needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl transition-all ${
                plan.highlighted
                  ? "glass-card border-primary/60 shadow-xl shadow-primary/20 scale-105"
                  : "glass-card border-primary/30 hover:border-primary/50"
              } p-8 flex flex-col`}
            >
              {plan.highlighted && (
                <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/20 border border-primary/50 text-primary text-sm font-semibold w-fit">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6 text-sm">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground ml-1">{plan.period}</span>}
              </div>

              <button
                className={`py-3 rounded-lg font-bold mb-8 transition-all ${
                  plan.highlighted
                    ? "bg-linear-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground"
                    : "border border-primary/50 hover:bg-primary/10"
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-3 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
