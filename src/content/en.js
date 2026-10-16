import { clientCases } from './cases.en.js'

export const en = {
  code: 'en',
  htmlLang: 'en',
  switchLabel: '中',
  pdfLabel: 'PDF',

  nav: [
    { id: 'work', label: 'Experience' },
    { id: 'ai', label: 'AI Delivery' },
    { id: 'skills', label: 'Skills' },
  ],

  brand: { name: 'Li Hongyu', sub: '李洪宇' },
  a11y: {
    toTop: 'Back to top',
    toggleTheme: 'Toggle dark mode',
    toggleLang: 'Switch language',
    downloadPdf: 'Download PDF resume',
    openMenu: 'Open navigation',
    closeMenu: 'Close navigation',
    closeModal: 'Close dialog',
  },

  hero: {
    eyebrow: 'Resume · 2026',
    title1: 'Li Hongyu',
    title2: 'RESUME · 2026',
    tagline: 'A PM who knows deep cross-border e-commerce operations, and an FDE who ships production-grade Agent control planes.',
    role: ['Amazon Global Selling · Product Manager', 'AI Delivery · Forward Deployed Engineer', 'Changsha, China'],
  },

  about: {
    eyebrow: 'Dossier Introduction',
    name: 'Li Hongyu',
    location: 'Changsha, Hunan',
    phone: '+86 156-8213-1751',
    email: '864901440@qq.com',
    school: 'Central South Univ. of Forestry & Technology',
    period: '2020.09 — 2024.06',
    major: 'Industrial Design · B.Eng.',
    intro:
      'Industrial-design product sense paired with full-stack AI engineering delivery (FDE). Deep experience in cross-border e-commerce closed loops and enterprise LLM rollouts — building precise, reliable, business-resilient systems inside messy operational contexts.',
    tagline: 'Dual Discipline · Product Strategy & Applied AI',
  },

  manifesto: {
    badge: 'Philosophy',
    tag: 'Methodology',
    quote: 'Enterprise AI implementation is not about writing longer prompts—it is about distilling chaotic cross-border supply chains into deterministic, risk-guarded Agent control planes.',
    byline: 'Li Hongyu · Engineering principles distilled from operations',
  },

  stats: [
    { num: '$4M', unit: '/yr', label: 'Amazon sketch-marker category GMV' },
    { num: '8', unit: 'cos.', label: 'Cross-border firms served with AI delivery' },
    { num: '20', unit: 'SKUs', label: 'Products developed and shipped' },
    { num: '98%', unit: '↓', label: 'Cost drop per AI-generated video' },
  ],

  work: {
    label: 'Experience',
    title: 'Work Experience',
    lede: 'Two tracks: first running an Amazon sketch-marker line to US$4M a year, then carrying the same business understanding into enterprise AI delivery.',
    cardsLabel: 'What I did',
    casesLabel: 'Flagship Enterprise AI Implementations',
    casesHint: 'Deep rollout case studies from Feishu wiki. Click any card for the full architecture & SOP.',
    projectsLabel: 'Core Product Lines & Data Foundations',
    libraryLabel: 'View in the case library',
    entries: [
      {
        id: 'work',
        org: 'Changsha Dianke E-Commerce Co., Ltd.',
        when: '2024.06 — 2026.02',
        role: 'Product Manager · Amazon US & EU',
        summary:
          'Led product planning for the Amazon US and EU stores, developing two creative-stationery lines: writing markers and acrylic paint pens.',
        cards: [
          {
            icon: 'target',
            tag: 'Category lead',
            metric: 'US$4M / yr',
            text: 'Ran the writing-marker line end to end: market research, supplier sourcing, sample approval and Listing launch.',
          },
          {
            icon: 'chart',
            tag: 'Selection playbook',
            metric: 'BSR Top deep-dive',
            text: 'Used SellerSprite, Keepa and Jungle Scout to parse rival products, price bands and negative reviews.',
          },
        ],
        projectsLabel: 'Representative Projects',
        projects: [
          {
            name: 'Writing-marker Product Line Development',
            when: '2024.06 — 2026.02',
            role: 'Product line owner · Independent delivery',
            metric: '20 SKUs',
            thumb: '/assets/marker-product-line.png',
            points: [
              'Spearheaded dual-tip markers from selection, sourcing and mold testing to Listing launch.',
              'Created a repeatable product development framework for subsequent SKU releases.',
            ],
          },
          {
            name: 'Acrylic Paint Marker Creative Line',
            when: '2024.10 — 2026.02',
            role: 'Product line owner · Mold tooling',
            metric: 'BSR Breakout · 4.8★',
            thumb: '/assets/acrylic-marker-creative.png',
            points: [
              'Custom-molded dual-seal airtight caps, reducing product dry-out returns by 42%.',
              'Captured US/EU gift markets with creative stationery gift sets, boosting AOV by 35%.',
            ],
          },
          {
            name: 'Competitor & VOC Data Infrastructure',
            when: '2024.09 — 2026.02',
            role: 'Independent architect',
            metric: 'Tens of thousands / run',
            thumb: '/assets/voc-analytics-board.png',
            points: [
              'Feishu Bitable + Python scrapers to bank rival specs and customer reviews at scale.',
              'Cleaned data pipeline outputs top negative pain points directly into Listing counter-claims.',
            ],
          },
        ],
      },
      {
        id: 'ai',
        featured: true,
        org: 'Enterprise AI Delivery',
        when: '2026.02 — Present',
        role: 'AI Delivery Consultant · 8 cross-border merchants served',
        cards: [
          {
            icon: 'flow',
            tag: 'Custom solutions',
            metric: 'Repeatable SOPs',
            text: 'Embedded with customer-service, replenishment and ad teams to turn fuzzy pain into standard AI procedures.',
          },
          {
            icon: 'shield',
            tag: 'Human in the loop',
            metric: 'Manual sign-off',
            text: 'Price changes, orders and delisting kept under human approval gates rather than pure autopilot.',
          },
          {
            icon: 'book',
            tag: 'Team training',
            metric: 'Bootcamps',
            text: 'Trained frontline staff on real business cases, turning individual tricks into team methodology.',
          },
        ],
        cases: [
          {
            id: 'furniture',
            who: 'Oversized Furniture Manufacturing & Supply Chain Hub',
            sub: 'Amazon / Wayfair / Walmart · Multi-Overseas Warehouse',
            scale: 'Mid-sized trade-and-manufacturing enterprise',
            pain: '45-60 day ocean freight with unexpected rollovers; 40+ disconnected spreadsheets; heavy fines on over-dimension parcels (49KG/320CM).',
            deliver: 'Consolidated 40+ sheets into unified 21-table control tower; 11 dedicated skills + 20 prompt matrices for shipping & replenishment.',
            metrics: ['85% Manual Time Saved', '90% Stockout Drop', 'Zero Dimension Penalties'],
            keyScenarios: [
              '**Ocean Freight Rollover Tracking**: Automated scraper tracking carrier ETA, warning 5 days ahead of port delays',
              '**Weighted Restock Algorithm**: Weighted dynamic model over 7/14/30 days, slashing top-seller stockouts by 90%',
              '**49KG/320CM Rule Hard Gate**: Pre-shipment automatic locking of overweight packages, cutting fines to zero',
              '**Automated Omnichannel BI Daily**: Replaced 2-3h manual vlookup with 8:30 AM automated mobile push'
            ],
            blocks: clientCases[0]?.blocks || [],
          },
          {
            id: 'autoparts',
            who: 'Auto Parts 24-Storefront Matrix Risk Guard Hub',
            sub: 'US / AU / CA · 30+ Operators',
            scale: '24-Store Matrix · Competitive Team Pods',
            pain: 'High risk of cross-account store suspension from accidental infringement; pricing cannibalization; 1500+ virtual SKU chaotic mapping.',
            deliver: '1400+ SKU unification, 1500+ virtual SKU mapping; global infringement guardrails; 1200+ daily operational action audit engine.',
            metrics: ['95% Suspension Risk Drop', 'Zero Audit Errors', '1.5-2h Saved/Day/Operator'],
            keyScenarios: [
              '**Network-wide IP Infringement Interceptor**: Instant block on blacklisted keywords with Feishu card approval',
              '**1400+ Real & Virtual SKU Map**: 100% allocation precision, eradicating multi-store inventory mismatches',
              '**Internal Pricing Cannibalization Guard**: Margin preservation rule engine ensuring min markup > 22%',
              '**Automated 1200+ Action Audit**: Real-time sales pod racing leaderboard with anomaly attribution'
            ],
            blocks: clientCases[1]?.blocks || [],
          },
          {
            id: 'shein',
            who: 'SHEIN Multi-store Fast-fashion Replenishment Control Hub',
            sub: '6+ Storefronts · 20-30 Listing Operators',
            scale: '2,000+ Flash Sales & Campaigns / Month',
            pain: '55 isolated tables; lead-time mismatch between alloy (3-5d) and rhinestone (5-7d) causing stockouts; 2,000+ monthly flash sale chaos.',
            deliver: '55 tables unified into SPU/SKC/SK tiers; dynamic craft-differentiated buffer formula; automated monthly promotion booking.',
            metrics: ['80% Stockout Drop', '70% Campaign Speedup', '35% Faster Inventory Turn'],
            keyScenarios: [
              '**Unified SPU/SKC/SK Hierarchy**: Single company-wide naming dictionary, eliminating manual handoff friction',
              '**Craft-differentiated Buffer Restock**: Automated 3.5d vs 6.0d lead-time buffering for raw material ordering',
              '**2000+ Monthly Promotion Automation**: Automatic inventory locking and campaign registration',
              '**Velocity Anomaly & Deadstock Purge**: Accelerated clearance markdowns and instant top-seller reorders'
            ],
            blocks: clientCases[2]?.blocks || [],
          },
        ],
        projects: [
          {
            name: 'E-commerce Content Generation Agent Pipeline',
            when: '2026.04 — 2026.08',
            role: 'Author · Multiple merchants served',
            metric: '98% cost drop',
            thumb: '/videos/amazon-1-poster.jpg',
            points: [
              'Commercial AI video pipeline: per-video cost from $200–350 down to **$1.5–3**, turnaround from 3–5 days to **15–20 minutes**.',
              'Full-funnel listing agent: input product specs to output main images, titles, search terms, bullet points, alongside VOC analysis.',
            ],
          },
          {
            name: 'Multi-platform Data Scraping & Aggregation Engine',
            when: '2026.03 — 2026.08',
            role: 'Author · Independent build',
            metric: '10k+ rows / run',
            points: [
              'Resilient scraping across multiple commerce platforms, cutting manual collection overhead to near zero.',
              'Cleaned data pipeline outputs decision-ready datasets for merchandise selection.',
            ],
          },
        ],
      },
    ],
  },

  ai: {
    label: 'AI Delivery',
    title: 'Enterprise AI Delivery & Agent Control Towers',
    lede: 'End-to-end delivery from business diagnosis and data plumbing to agent control towers and staff bootcamps. Only systems that can be accepted: every scenario is decomposed into rules, human gates and measurable metrics, so the business team can run it alone after handover.',
  },

  video: {
    label: 'Videos',
    title: 'Video Showcase',
    lede: 'Selected output from the content pipeline: listing videos, talking-head conversion clips, and dynamic 3D renders.',
    groups: [
      {
        tag: 'Amazon',
        title: 'Amazon main-image videos',
        desc: 'Pipeline-generated videos deployed directly into Amazon listing media slots.',
        clips: [
          { label: 'Sample 01', ratio: '16 / 9', src: '/videos/amazon-1.mp4' },
          { label: 'Sample 02', ratio: '16 / 9', src: '/videos/amazon-2.mp4' },
        ],
      },
      {
        tag: 'UGC',
        title: 'Talking-head promo videos',
        desc: 'Actor and voice cloned, bringing single-video production cost down by 98%.',
        clips: [
          { label: 'Original', ratio: '9 / 16', src: '/videos/talk-orig.mp4' },
          { label: 'AI Clone', ratio: '9 / 16', src: '/videos/talk-ai.mp4' },
        ],
      },
      {
        tag: 'UGC',
        title: 'Floor paint promo video',
        desc: 'Reusing the same pipeline on an industrial category to test transferability.',
        clips: [
          { label: 'Original', ratio: '9 / 16', src: '/videos/floor-orig.mp4' },
          { label: 'AI Clone', ratio: '9 / 16', src: '/videos/floor-ai.mp4' },
        ],
      },
      {
        tag: 'CG',
        title: 'Commercial 3D product motion render',
        desc: 'Dynamic product renders tailored for higher-AOV catalog items.',
        clips: [
          { label: 'Sample 01', ratio: '9 / 16', src: '/videos/render-1.mp4' },
          { label: 'Sample 02', ratio: '9 / 16', src: '/videos/render-2.mp4' },
          { label: 'Sample 03', ratio: '3 / 4', src: '/videos/render-3.mp4' },
        ],
      },
    ],
  },

  skills: {
    label: 'Skills',
    title: 'Core Skills',
    items: [
      {
        cat: 'AI Implementation',
        pills: [
          { name: 'AI Agent design', level: 3 },
          { name: 'Prompt Engineering', level: 3 },
          { name: 'AI video & content pipelines', level: 3 },
          { name: 'Feishu Bitable + Automations', level: 3 },
          { name: 'Codex / Claude / Trae', level: 2 },
        ],
      },
      {
        cat: 'Cross-border Commerce',
        pills: [
          { name: 'Amazon product discovery & competitor analysis', level: 3 },
          { name: 'VOC mining', level: 3 },
          { name: 'Listing optimization', level: 3 },
        ],
      },
      {
        cat: 'Data Analytics',
        pills: [
          { name: 'ETL & data cleaning', level: 3 },
          { name: 'Excel models', level: 3 },
          { name: 'Python scrapers', level: 2 },
          { name: 'Decision dataset engineering', level: 2 },
        ],
      },
      {
        cat: 'Design & Collaboration',
        pills: [
          { name: 'Photoshop', level: 2 },
          { name: 'Illustrator', level: 2 },
          { name: 'UI/UX design', level: 2 },
        ],
      },
    ],
  },

  education: {
    label: 'Education',
    title: 'Education',
    entries: [
      {
        org: 'Central South University of Forestry and Technology',
        when: '2020.09 — 2024.06',
        role: 'B.Eng. in Industrial Design',
        bullets: [
          'Direct factory investigations aligning coursework with manufacturing-grade tolerances; brand visual & poster design projects.',
          'Competed in domestic and international design competitions with a complete product portfolio.',
        ],
      },
    ],
  },

  footer: {
    copy: '© 2026 Li Hongyu · Crafted in Anthropic Editorial Aesthetic',
    links: [],
  },

  modal: { kicker: 'Case Study', metricsLabel: 'Impact Metrics', openLabel: 'View Full Architecture & SOP' },
}
