# Origin Intel

**Authority-based intelligence platform for monitoring the cryptocurrency ecosystem.**

Origin Intel surfaces high-signal activity across developers, governance forums, and social platforms to identify emerging risks, narratives, and systemic events.

---

## High-Level Architecture

- **Backend**: Python, FastAPI, asynchronous workers
- **Data Layer**: PostgreSQL, Redis
- **Frontend**: Next.js 14, Tailwind CSS, shadcn/ui
- **Mobile**: React Native with push notifications
- **Intelligence Pipeline**:
  - Lightweight models for rapid triage
  - Deeper models for contextual analysis
- **Data Sources**:
  - Social platforms (e.g. X)
  - GitHub
  - Governance systems (Snapshot, Tally)

> Architecture details may evolve as the system matures.

---

## Core Systems

1. **Authority Graph Builder**  
   Identifies and scores authoritative entities across platforms.

2. **Monitoring Engine**  
   Adaptive polling optimized for rate limits and signal density.

3. **Triage Pipeline**  
   Multi-stage signal classification to prioritize meaningful events.

4. **Anomaly Detection**  
   Baseline behavior tracking with deviation flagging.

5. **Context Engine**  
   Links related events across projects, timeframes, and ecosystems.

6. **Learning System**  
   Continuously improves from analyst and user feedback.

---

## Design Principles

- Signal over noise  
- Authority-weighted intelligence  
- Cross-project awareness  
- Human-in-the-loop learning  

---

## Project Status

Origin Intel is under active development.

Public repositories may be incomplete while core systems are stabilized.
