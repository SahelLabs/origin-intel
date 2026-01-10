'use client';
import React, { useState } from 'react';
import { AlertCircle, Zap, Brain, TrendingUp, Check, ChevronDown } from 'lucide-react';

export default function OriginIntelLanding() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = () => {
    if (!email || !email.includes('@')) return;
    setStatus('submitting');
    
    // Simulate API call - replace with actual endpoint
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  const faqs = [
    {
      q: "What data do you access from my X account?",
      a: "We only read your following list and public engagement to understand which crypto projects matter to you. We never post, like, or take any action on your behalf. Minimal OAuth scopes only."
    },
    {
      q: "How much does it cost?",
      a: "Free tier: 3 projects with daily digest. Pro: $49/mo for 25 projects with real-time alerts. Elite: $199/mo for unlimited projects and advanced features."
    },
    {
      q: "How do you get information before news sites?",
      a: "We monitor developers and founders directly on X/Twitter—the actual people building the projects. When they tweet about exploits, updates, or issues, we catch it 6-24 hours before it reaches aggregators like CoinDesk."
    },
    {
      q: "Won't I get spammed with alerts?",
      a: "No. We use a 3-tier AI filter to eliminate 90%+ noise. Only significant developments from verified authorities reach you. You control alert preferences per project."
    }
  ];

  const WaitlistForm = () => (
    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
        placeholder="your@email.com"
        className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
      />
      <button
        onClick={handleSubmit}
        disabled={status === 'submitting'}
        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all transform hover:scale-105 disabled:opacity-50"
      >
        {status === 'submitting' ? 'Joining...' : 'Join Waitlist'}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative z-10 max-w-4xl text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
            Intelligence from the origin—before it becomes news
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-white to-cyan-400 bg-clip-text text-transparent leading-tight">
            Know What Matters<br />Before Everyone Else
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            AI-powered crypto intelligence that monitors developers and founders at the source. Get alerts 6-24 hours before mainstream news.
          </p>
          
          <WaitlistForm />
          
          {status === 'success' && (
            <div className="text-green-400 flex items-center justify-center gap-2 mb-4">
              <Check size={20} /> You're on the list! We'll be in touch soon.
            </div>
          )}
          
          <p className="text-sm text-gray-500">Zero setup. We only read, never post. 100+ early adopters already signed up.</p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop Missing Critical Updates</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: AlertCircle, title: "Hours Scrolling", desc: "Endless Twitter feeds, Telegram chaos, Discord noise" },
              { icon: TrendingUp, title: "Always Late", desc: "News hits aggregators 6-24 hours after it happens" },
              { icon: Brain, title: "Information Overload", desc: "Can't separate signal from noise across 50+ projects" }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/50 transition-colors">
                <item.icon className="w-12 h-12 mb-4 mx-auto text-purple-400" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Monitor Authorities, Not Aggregators</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Origin Intel tracks developers, founders, and core contributors directly—the people who know first. AI filters the noise. You get what matters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Auto-Discovery",
                desc: "Connect your X account. We analyze who you follow and engage with to auto-detect the crypto projects you care about. No manual setup.",
                gradient: "from-purple-600 to-pink-600"
              },
              {
                title: "Authority Tracking",
                desc: "We identify key developers and founders using GitHub commits, X interactions, and governance participation. Track information at its source.",
                gradient: "from-cyan-600 to-blue-600"
              },
              {
                title: "AI Noise Filter",
                desc: "3-tier pipeline eliminates 90%+ irrelevant tweets. Regex catches spam, small LLM classifies importance, heavy LLM analyzes critical updates.",
                gradient: "from-purple-600 to-cyan-600"
              },
              {
                title: "Anomaly Detection",
                desc: "We learn normal behavior patterns. Sudden silence, unusual timing, topic shifts—we flag deviations that signal something's wrong.",
                gradient: "from-pink-600 to-purple-600"
              }
            ].map((feature, i) => (
              <div key={i} className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-all">
                <div className={`w-12 h-1 mb-4 bg-gradient-to-r ${feature.gradient} rounded-full`} />
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-cyan-950/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">How It Works</h2>
          
          <div className="space-y-8">
            {[
              { num: "01", title: "Connect X Account", desc: "OAuth login. We read your following list—that's it. Zero manual configuration." },
              { num: "02", title: "AI Analyzes Your Interests", desc: "We auto-detect which crypto projects matter to you based on who you follow and engage with." },
              { num: "03", title: "Monitor Authorities 24/7", desc: "Track developers, founders, core contributors. We know who's building what and watch them at the source." },
              { num: "04", title: "Get Contextual Alerts", desc: "Receive filtered, analyzed updates 6-24 hours before they hit CoinDesk, Bloomberg, or crypto aggregators." }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="text-5xl font-bold text-purple-500/20 group-hover:text-purple-500/40 transition-colors">
                  {step.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Built For Serious Crypto Participants</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "VCs & Investors", desc: "Monitor portfolio companies and opportunities" },
              { label: "Crypto Researchers", desc: "Track development activity and governance" },
              { label: "Active Traders", desc: "Get information edge before price moves" }
            ].map((item, i) => (
              <div key={i} className="p-6">
                <div className="text-4xl mb-4">
                  {i === 0 ? '💼' : i === 1 ? '🔬' : '📈'}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-white/5 transition-colors text-left"
                >
                  <span className="font-semibold">{faq.q}</span>
                  <ChevronDown className={`transform transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 border-t border-white/10 bg-white/5">
                    <p className="text-gray-300">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Stop Being the Last to Know
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the waitlist and get early access to intelligence that moves markets.
          </p>
          
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2026 Origin Intel. Intelligence from the origin—before it becomes news.</p>
        </div>
      </footer>
    </div>
  );
}
