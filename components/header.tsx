"use client"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 glass-effect border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-linear-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">₿</span>
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:inline">CryptoVault</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {["Features", "Trading", "Security", "Pricing"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-3">
            <button className="px-4 py-2 rounded-lg border border-primary hover:border-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium">
              Sign In
            </button>
            <button className="px-4 py-2 rounded-lg bg-linear-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 transition-colors text-sm font-bold text-primary-foreground">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <nav className="flex flex-col gap-4 pt-4">
              {["Features", "Trading", "Security", "Pricing"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="px-4 py-2 rounded-lg border border-primary w-full text-sm font-medium">Sign In</button>
              <button className="px-4 py-2 rounded-lg bg-linear-to-r from-primary to-secondary w-full text-sm font-bold text-primary-foreground">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
