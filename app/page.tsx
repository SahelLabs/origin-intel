export default function Page() {
  const content = `Intelligence from the origin—before it becomes news

# Know What Matters
# Before Everyone Else

AI-powered crypto intelligence that monitors developers and founders at the source. Get alerts 6-24 hours before mainstream news.

**your@email.com**
**Join Waitlist**

Zero setup. We only read, never post. 100+ early adopters already signed up.

## Stop Missing Critical Updates

**Hours Scrolling**
Endless Twitter feeds, Telegram chaos, Discord noise

**Always Late**
News hits aggregators 6-24 hours after it happens

**Information Overload**
Can't separate signal from noise across 50+ projects

## Monitor Authorities, Not Aggregators

Origin Intel tracks developers, founders, and core contributors directly—the people who know first. AI filters the noise. You get what matters.

**Auto-Discovery**
Connect your X account. We analyze who you follow and engage with to auto-detect the crypto projects you care about. No manual setup.

**Authority Tracking**
We identify key developers and founders using GitHub commits, X interactions, and governance participation. Track information at its source.

**AI Noise Filter**
3-tier pipeline eliminates 90%+ irrelevant tweets. Regex catches spam, small LLM classifies importance, heavy LLM analyzes critical updates.

**Anomaly Detection**
We learn normal behavior patterns. Sudden silence, unusual timing, topic shifts—we flag deviations that signal something's wrong.

## How It Works

**01 Connect X Account**
OAuth login. We read your following list—that's it. Zero manual configuration.

**02 AI Analyzes Your Interests**
We auto-detect which crypto projects matter to you based on who you follow and engage with.

**03 Monitor Authorities 24/7**
Track developers, founders, core contributors. We know who's building what and watch them at the source.

**04 Get Contextual Alerts**
Receive filtered, analyzed updates 6-24 hours before they hit CoinDesk, Bloomberg, or crypto aggregators.

## Built For Serious Crypto Participants

**💼 VCs & Investors**
Monitor portfolio companies and opportunities

**🔬 Crypto Researchers**
Track development activity and governance

**📈 Active Traders**
Get information edge before before price moves

Join the waitlist and get early access to intelligence that moves markets.

**your@email.com**
**Join Waitlist**

© 2026 Origin Intel. Intelligence from the origin—before it becomes news.`;

  return (
    <main className="container">
      <header className="header">
        <h1 className="page-title">Origin Intel</h1>
        <p className="subtitle">Intelligence from the origin—before it becomes news</p>
      </header>

      <article className="card">
        <div className="accent-bar">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="content" role="article">
          {content.split('\n').map((line, i) => {
            if (line.startsWith('# ')) {
              return <h1 key={i}>{line.replace('# ', '')}</h1>;
            } else if (line.startsWith('## ')) {
              return <h2 key={i}>{line.replace('## ', '')}</h2>;
            } else if (line.trim().startsWith('**') && line.trim().endsWith('**')) {
              return <p key={i}><strong>{line.trim().replace(/\*\*/g, '')}</strong></p>;
            } else if (line.trim() === '') {
              return <br key={i} />;
            } else {
              return <p key={i}>{line}</p>;
            }
          })}
        </div>

        <footer className="footer">
          <div className="tech-stack">
            <div className="tech-badge">Montserrat</div>
            <div className="tech-badge">Next.js 15</div>
            <div className="tech-badge">Tailwind 3</div>
          </div>
        </footer>
      </article>
    </main>
  );
}
