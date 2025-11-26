import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Layers, Lightbulb, Zap, Sparkles, MessageSquare, TrendingUp, Globe, Shield, Star, User } from "lucide-react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [testimonialsExpanded, setTestimonialsExpanded] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupDismissed, setPopupDismissed] = useState(false);

  useEffect(() => {
    // Check if popup was dismissed in this session
    const dismissed = sessionStorage.getItem("tracr_popup_dismissed");
    if (dismissed) {
      setPopupDismissed(true);
    } else {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        if (!popupDismissed) {
          setPopupOpen(true);
          document.body.style.overflow = "hidden";
        }
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [popupDismissed]);

  const closePopup = () => {
    setPopupOpen(false);
    setPopupDismissed(true);
    sessionStorage.setItem("tracr_popup_dismissed", "1");
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && popupOpen) {
        closePopup();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [popupOpen]);

  return (
    <div className="min-h-screen page-gradient text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-ink-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#top" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center font-bold text-sm">
                T
              </div>
              <span className="font-semibold tracking-wide">Tracr AI</span>
            </a>
            
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#how" className="hover:text-accent-400 transition-colors">How it works</a>
              <a href="#features" className="hover:text-accent-400 transition-colors">Features</a>
              <a href="#proof" className="hover:text-accent-400 transition-colors">Proof</a>
              <a href="#pricing" className="hover:text-accent-400 transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-accent-400 transition-colors">FAQ</a>
            </nav>
            
            <div className="hidden md:flex items-center gap-3">
              <a href="#offer" className="btn-cta-outline text-sm">
                Vantage Offer
              </a>
              <a href="#cta" className="btn-cta-gradient text-sm">
                Start Free Trial
              </a>
            </div>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md border border-white/15 hover:border-accent-500 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10">
            <nav className="px-4 py-3 space-y-2">
              <a href="#how" className="block px-3 py-2 rounded hover:bg-white/5" onClick={() => setMobileMenuOpen(false)}>How it works</a>
              <a href="#features" className="block px-3 py-2 rounded hover:bg-white/5" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#proof" className="block px-3 py-2 rounded hover:bg-white/5" onClick={() => setMobileMenuOpen(false)}>Proof</a>
              <a href="#pricing" className="block px-3 py-2 rounded hover:bg-white/5" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="#faq" className="block px-3 py-2 rounded hover:bg-white/5" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a href="#offer" className="block px-3 py-2 rounded hover:bg-white/5" onClick={() => setMobileMenuOpen(false)}>Vantage Offer</a>
              <a href="#cta" className="block px-3 py-2 rounded bg-accent-500 hover:bg-accent-600 text-center" onClick={() => setMobileMenuOpen(false)}>Start Free Trial</a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none hero-gradient-bg" aria-hidden="true"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 pb-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
                  AI that explains <span className="text-brand-orange">why</span> the market moves — not just what happens.
                </h1>
                <p className="mt-5 text-white/80 text-lg max-w-xl">
                  Tracr AI combines real-time price action, sentiment, and fundamentals to tell you the story behind every US market move — so you can trade with clarity and confidence.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="#cta" className="btn-primary text-center">Start Free Trial</a>
                  <a href="#offer" className="btn-secondary text-center">Register via Vantage (1-year free)</a>
                </div>
                <div className="mt-4 text-sm text-white/60">
                  No credit card required · Non-advisory insights · Built for UK traders
                </div>
              </div>
              
              <div className="card-glass rounded-2xl p-4 lg:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                <div className="aspect-video rounded-xl bg-ink-800 border border-white/10 flex items-center justify-center p-6">
                  <div className="text-white/60 text-sm sm:text-base text-center">
                    <div className="mb-3 font-semibold text-white/90">Product demo placeholder</div>
                    <p>Embed a 20–30s screen recording: select candles → generate → AI explanation appears.</p>
                  </div>
                </div>
                <div className="mt-4 text-white/70 text-sm">
                  Example insight: <span className="text-white">"Walmart up 5% on e-commerce growth and positive sentiment; watch 110 support."</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* PROBLEM / PROMISE */}
      <section className="py-16 lg:py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold">You don't need more data. You need clarity.</h2>
            <p className="mt-4 text-white/75 max-w-3xl">
              Most traders juggle charts, news feeds, and indicators yet still wonder <em>why</em> price moved. Tracr brings it all together — turning complex signals into a simple, AI-powered story you can act on.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="feature-card">
                <Layers className="w-8 h-8 mb-3 card-icon" />
                <div className="font-semibold mb-1 card-title">Less tab-hopping</div>
                <p className="text-white/75 text-sm">Stop switching between tools to connect the dots.</p>
              </div>
              <div className="feature-card">
                <Lightbulb className="w-8 h-8 mb-3 card-icon" />
                <div className="font-semibold mb-1 card-title">Know the "why"</div>
                <p className="text-white/75 text-sm">Combine price action, fundamentals, and sentiment in one view.</p>
              </div>
              <div className="feature-card">
                <Zap className="w-8 h-8 mb-3 card-icon" />
                <div className="font-semibold mb-1 card-title">Decide faster</div>
                <p className="text-white/75 text-sm">Instant plain-English explanation and what to watch next.</p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="py-16 lg:py-20 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">From chaos to clarity in three steps</h2>
            <div className="mt-10 grid lg:grid-cols-3 gap-6">
              <div className="feature-card">
                <TrendingUp className="w-10 h-10 mb-3 card-icon" />
                <div className="text-white/60 text-sm mb-2">Step 1</div>
                <h3 className="font-semibold mb-2 card-title">Select a stock or pair</h3>
                <p className="text-white/75 text-sm">Choose from top US equities, major forex pairs, and leading crypto assets.</p>
              </div>
              <div className="feature-card">
                <Sparkles className="w-10 h-10 mb-3 card-icon" />
                <div className="text-white/60 text-sm mb-2">Step 2</div>
                <h3 className="font-semibold mb-2 card-title">AI reads the market</h3>
                <p className="text-white/75 text-sm">Tracr analyses price action, news sentiment, and fundamentals in seconds.</p>
              </div>
              <div className="feature-card">
                <Lightbulb className="w-10 h-10 mb-3 card-icon" />
                <div className="text-white/60 text-sm mb-2">Step 3</div>
                <h3 className="font-semibold mb-2 card-title">Get the "why" & next watch</h3>
                <p className="text-white/75 text-sm">Plain-English insight — plus key levels and factors to monitor.</p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <a href="#demo" className="inline-flex items-center gap-2 btn-secondary">
                See Tracr in action
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* DEMO */}
        <section id="demo" className="py-16 lg:py-20 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold">See what AI-powered clarity looks like</h2>
            <div className="mt-6 grid lg:grid-cols-2 gap-6 items-stretch">
              <div className="demo-card">
                <div className="aspect-video rounded-xl bg-ink-800 border border-white/10 flex items-center justify-center flex-1">
                  <div className="text-white/60 text-sm sm:text-base text-center p-6">
                    <div className="mb-2 font-semibold text-white/90">Demo video placeholder</div>
                    <p>Drop your product screencast here (MP4/WebM) or embed YouTube.</p>
                  </div>
                </div>
              </div>
              <div className="demo-card">
                <h3 className="font-semibold">What you'll see</h3>
                <ul className="mt-3 space-y-3 text-white/75 text-sm list-disc list-inside flex-1">
                  <li>Drag across candles → generate AI explanation</li>
                  <li>Summary, news sentiment & fundamentals in one view</li>
                  <li>Next watch: key levels & risk cues (non-advisory)</li>
                </ul>
                <a href="#cta" className="mt-6 inline-block btn-primary w-full text-center">
                  Try it free for 14 days
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="py-16 lg:py-20 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">
              <span className="text-brand-orange">Why</span> traders choose Tracr AI
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: "AI Candle Insights", desc: "Instant explanations for price moves — in plain English.", icon: Sparkles },
                { title: "AI Chatbot", desc: "Ask context-aware questions on the chart.", icon: MessageSquare },
                { title: "Pattern Recognition (v2)", desc: "Spot historical setups that mirror today's move.", icon: TrendingUp },
                { title: "US-Market Focus", desc: "Designed for UK traders investing in the US.", icon: Globe },
                { title: "Compliance-First", desc: "Non-advisory insights; GDPR-respecting data.", icon: Shield },
              ].map((feature, i) => {
                const IconComponent = feature.icon;
                return (
                  <div key={i} className="feature-card">
                    <IconComponent className="w-8 h-8 mb-2 card-icon" />
                    <div className="font-semibold mb-1 card-title">{feature.title}</div>
                    <p className="text-white/75 text-sm">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 text-center">
              <a href="#cta" className="inline-block btn-secondary">
                Join waitlist for early access
              </a>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section id="proof" className="py-16 lg:py-20 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Trusted by early traders & market learners</h2>
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              {[
                { quote: "Finally understand why prices move. It changed how I plan entries.", author: "Beta user — London", rating: 5 },
                { quote: "Feels like having a personal market analyst on the chart.", author: "Trader — Manchester", rating: 5 },
                { quote: "Clarity in seconds. No hype — just useful context.", author: "Crypto user — Bristol", rating: 5 },
              ].map((testimonial, i) => (
                <div key={i} className="testimonial-card">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white/5 flex-shrink-0">
                      <User className="w-6 h-6" style={{ color: '#C8CCD1' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-white text-sm mb-1.5">{testimonial.author}</div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star 
                            key={starIndex} 
                            className="w-4 h-4" 
                            fill={starIndex < testimonial.rating ? '#FF6A39' : 'none'}
                            style={{ color: starIndex < testimonial.rating ? '#FF6A39' : '#C8CCD1' }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm leading-[150%]" style={{ color: '#E6ECF5' }}>"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
            
            {/* Additional testimonials - hidden by default */}
            <div 
              className={`grid sm:grid-cols-3 gap-6 mt-6 transition-all duration-300 overflow-hidden ${
                testimonialsExpanded ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'
              }`}
            >
              {[
                { quote: "Great context — I use it when I plan my day trades.", author: "Active Trader — Leeds", rating: 5 },
                { quote: "Makes complex setups simple to read.", author: "Options Trader — Glasgow", rating: 5 },
                { quote: "Helps me hold positions with more confidence.", author: "Swing Trader — Dublin", rating: 5 },
              ].map((testimonial, i) => (
                <div key={`extra-${i}`} className="testimonial-card">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white/5 flex-shrink-0">
                      <User className="w-6 h-6" style={{ color: '#C8CCD1' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-white text-sm mb-1.5">{testimonial.author}</div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star 
                            key={starIndex} 
                            className="w-4 h-4" 
                            fill={starIndex < testimonial.rating ? '#FF6A39' : 'none'}
                            style={{ color: starIndex < testimonial.rating ? '#FF6A39' : '#C8CCD1' }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm leading-[150%]" style={{ color: '#E6ECF5' }}>"{testimonial.quote}"</p>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button 
                onClick={() => setTestimonialsExpanded(!testimonialsExpanded)}
                aria-expanded={testimonialsExpanded}
                className="inline-flex items-center justify-center px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-lg transition-all duration-200"
              >
                {testimonialsExpanded ? 'See Less' : 'See More'}
              </button>
            </div>
          </div>
        </section>

        {/* PRICING / OFFERS */}
        <section id="pricing" className="py-16 lg:py-20 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">Choose how you want to start</h2>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <div className="card-glass rounded-2xl p-6">
                <h3 className="font-semibold text-lg">Free Trial</h3>
                <p className="text-white/75 text-sm mt-2">14 days · No card required · Full access</p>
                <a href="#cta" className="mt-6 inline-block btn-primary w-full text-center">
                  Start Free Trial
                </a>
              </div>
              <div id="offer" className="card-glass rounded-2xl p-6 border-accent-500/40">
                <h3 className="font-semibold text-lg">Vantage Offer</h3>
                <p className="text-white/75 text-sm mt-2">Deposit $500 with Vantage → Get 1-year Tracr free</p>
                <a href="#cta" className="mt-6 inline-block btn-secondary w-full text-center">
                  Register via Vantage
                </a>
              </div>
              <div className="card-glass rounded-2xl p-6">
                <h3 className="font-semibold text-lg">Pro Subscription</h3>
                <p className="text-white/75 text-sm mt-2">Unlimited insights · Priority updates</p>
                <a href="#cta" className="mt-6 inline-block btn-secondary w-full text-center">
                  View Plans
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* COMPLIANCE */}
        <section className="py-12 lg:py-16 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-3 gap-6 items-start">
              <div>
                <h3 className="text-xl font-bold">Transparency is our foundation</h3>
                <p className="text-white/75 mt-3">Non-advisory AI insights · GDPR-respecting data · Compliance-first marketing</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-white/60 text-sm">
                  Tracr AI provides analytical tools and insights for educational purposes only. It does not offer financial advice or trading recommendations. Past performance is not indicative of future results. Market participation involves risk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA + FORM */}
        <section id="cta" className="py-16 lg:py-20 border-t border-white/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">Ready to trade smarter?</h2>
            <p className="text-white/75 mt-3">Start your 14-day free trial or join the waitlist to get early access updates.</p>
            <form className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3 card-glass rounded-xl p-3">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full bg-ink-800 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-accent-500 transition-colors"
              />
              <button type="submit" className="btn-primary">
                Start Free Trial
              </button>
            </form>
            <div className="mt-3 text-sm text-white/60">
              Or <a href="#offer" className="text-accent-500 hover:text-accent-400 underline underline-offset-4">register via Vantage</a> for 1-year free access.
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 lg:py-20 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Common questions</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {[
                { q: "Is this financial advice?", a: "No. Tracr explains why markets moved, but does not provide trading signals or recommendations." },
                { q: "Do I need experience?", a: "No. Tracr is built for both beginners and experienced traders who want faster clarity." },
                { q: "What markets are covered?", a: "Major US equities, key USD forex pairs, and select cryptocurrencies — expanding over time." },
                { q: "Can I cancel anytime?", a: "Yes. Free trial first, then flexible plans with no lock-ins." },
              ].map((faq, i) => (
                <div key={i} className="card-glass rounded-xl p-6">
                  <h4 className="font-semibold">{faq.q}</h4>
                  <p className="text-white/75 text-sm mt-2">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center font-bold text-sm">
                T
              </div>
              <span className="text-white/70 text-sm">
                © {new Date().getFullYear()} Tracr AI. All rights reserved.
              </span>
            </div>
            <nav className="flex items-center gap-5 text-white/70 text-sm">
              <a href="#" className="hover:text-accent-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-accent-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-accent-400 transition-colors">Disclaimer</a>
            </nav>
          </div>
        </div>
      </footer>

      {/* Popup Modal */}
      {popupOpen && (
        <>
          <div 
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            onClick={closePopup}
          />
          <div className="fixed inset-0 z-[61] flex items-center justify-center p-4">
            <div className="gradient-panel max-w-xl w-full mx-auto rounded-2xl border border-accent-500/35 shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-6 sm:p-8 text-white">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-bold">Register Your Interest</h3>
                <button
                  onClick={closePopup}
                  className="p-2 rounded-md hover:bg-white/10 transition-colors"
                  aria-label="Close"
                >
                  <X size={22} />
                </button>
              </div>
              <p className="mt-4 text-white/80 leading-relaxed">
                Be among the first to experience Tracr's AI-powered market insights. Traders, investors, and learners worldwide are joining the waitlist — don't miss your chance to get early access.
              </p>
              <p className="mt-3 text-white/80">
                Deposit $500 with Vantage today and unlock <strong>lifetime</strong> access to Tracr AI.
              </p>
              <form className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="w-full bg-ink-800 border border-white/15 rounded-lg px-4 py-3 focus:outline-none focus:border-accent-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full bg-ink-800 border border-white/15 rounded-lg px-4 py-3 focus:outline-none focus:border-accent-500 transition-colors"
                  />
                </div>
                <button type="submit" className="w-full btn-primary">
                  Register Interest
                </button>
              </form>
              <div className="mt-4 text-xs text-white/70 border border-white/10 rounded-xl p-3">
                By registering, you agree to receive updates about Tracr's launch. We respect your privacy and won't spam you. You can unsubscribe at any time.
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
