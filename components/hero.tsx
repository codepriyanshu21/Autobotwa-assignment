"use client"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="mb-10 mt-4 sm:mb-10 inline-block">
          <span className="px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm font-semibold tracking-wide inline-block whitespace-nowrap">
           🚀 The Future of Crypto Trading is Here
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
          Trade Crypto with
          <span className="block gradient-text mt-3 sm:mt-4">Precision & Speed</span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the most advanced crypto trading platform. Real-time market data, AI-powered insights, and
          lightning-fast execution in your hands.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 rounded-lg bg-linear-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 transition-all font-bold text-primary-foreground text-lg">
            Start Trading Now
          </button>
          <button className="px-8 py-4 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/10 transition-colors font-bold text-lg">
            Watch Demo →
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 border-t border-border/30">
          <div>
            <div className="text-3xl sm:text-4xl font-bold gradient-text">500K+</div>
            <p className="text-sm sm:text-base text-muted-foreground">Active Traders</p>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold gradient-text">$50B+</div>
            <p className="text-sm sm:text-base text-muted-foreground">Daily Volume</p>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold gradient-text">99.9%</div>
            <p className="text-sm sm:text-base text-muted-foreground">Uptime</p>
          </div>
        </div>
      </div>
    </section>
  )
}
