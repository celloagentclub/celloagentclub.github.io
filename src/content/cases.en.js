export const clientCases = [
  {
    id: 'furniture',
    who: 'Large-furniture manufacturer-retailer',
    sub: 'Amazon / Wayfair / Walmart',
    scale: 'Mid-size team · multiple overseas warehouses',
    deliver:
      '40+ table data foundation → AI replenishment and alerting control tower; 11 Skills + 20 Prompts covering ocean rollover alerts, large-item restock, oversize red-line checks and ad diagnosis.',
    metrics: ['85% less manual work', '90% fewer stockouts', 'Zero oversize penalties'],
    blocks: [
      { t: 'h', level: 3, text: 'Client profile' },
      {
        t: 'list',
        items: [
          { text: '**Category**: large furniture and home goods — items of tens of kilos with edges over 2–3 m, designed and manufactured in house', subs: [] },
          { text: '**Platforms**: Amazon and Wayfair as the core, plus Walmart and Temu', subs: [] },
          { text: '**Model**: integrated manufacturing and retail, curated series, high-ticket, asset-heavy supply chain', subs: [] },
          { text: '**Logistics**: full-container ocean freight plus multiple overseas warehouses and Amazon FBA — a 45–60 day chain', subs: [] },
        ],
      },
      { t: 'h', level: 3, text: 'Pain points' },
      {
        t: 'list',
        items: [
          { text: '**Stockouts are irreversible**: ocean freight runs 45–60 days with no air option, and one stockout resets listing weight', subs: [] },
          { text: '**Inventory eats margin**: overseas warehouse space for bulky goods is expensive, and overstocking turns profit into overage fees', subs: [] },
          { text: '**Manual reporting is slow**: 40+ disconnected spreadsheets and 2–3 hours of daily export-and-reconcile work', subs: [] },
          { text: '**No guardrails**: oversize specs and replenishment calls relied on experience and group-chat chasing', subs: [] },
        ],
      },
      { t: 'h', level: 3, text: 'Three-phase rollout' },
      {
        t: 'list',
        items: [
          {
            text: '**Phase 01 · Data foundation** — consolidated 8 business domains and connected 40+ core tables with a single SKU mapping key. **One shared ledger company-wide, 100% consistent master data.**',
            subs: [
              'Domains: product master, new-product development, suppliers, shipments, warehousing, replenishment alerts, operations BI and profit modelling.',
              '40+ tables connected so scattered ledgers became one structured Feishu data flow, ending cross-team reconciliation disputes.',
            ],
          },
          {
            text: '**Phase 02 · Operational dashboards** — a promotional diagnostics dashboard that drills through ad spend and store sales, plus team-level tagging and leaderboard mechanisms. **Operations became transparent at a glance.**',
            subs: [],
          },
          {
            text: '**Phase 03 · AI control tower** — a “21-tables-in-one” ops centre with **11 Skills + 20 Prompts** covering ocean-freight rollover alerts, oversize red lines (49KG/320CM), profit modelling and second-level daily reports. **85% time saved, guardrails intact.**',
            subs: ['Every AI decision keeps a human approval node: price changes, orders and blocking actions are confirmed by a person, never fully automated.'],
          },
        ],
      },
      { t: 'h', level: 3, text: 'Outcome' },
      {
        t: 'p',
        text: '40+ tables unified under one master-data key, cutting manual export and reconciliation time by **85%**. Ocean-freight issues are flagged **5 days early**, peak-season stockouts fell **90%**, and oversize logistics penalties dropped to **zero**.',
      },
      {
        t: 'quote',
        text: '“Every morning three people used to log into several back ends and reconcile spreadsheets, and in peak season an ocean-freight rollover could still leave an overseas warehouse out of stock. Now the full-channel operating report lands automatically at 8:30 — AI runs ahead of the business, and the team finally spends its energy on product selection and strategy.”',
      },
    ],
  },
  {
    id: 'autoparts',
    who: 'Auto-parts matrix, 24 stores',
    sub: 'US / AU / CA multi-site',
    scale: '30+ people · multiple competing teams',
    deliver:
      '1,400+ SKUs normalised, 1,500+ virtual SKU mappings, network-wide infringement defence, 1,200+ audited operations and automated multi-team daily reports.',
    metrics: ['95% less linked-risk exposure', 'Zero error rate', '1.5–2h saved daily'],
    blocks: [
      { t: 'h', level: 3, text: 'Client profile' },
      {
        t: 'list',
        items: [
          { text: '**Category**: aftermarket auto parts and accessories with heavy fitment logic, spanning tens of thousands of vehicle models', subs: [] },
          { text: '**Matrix**: **24 stores across US, AU and CA**, covering Amazon, eBay, Walmart and other platforms', subs: [] },
          { text: '**Team**: 30+ people split into competing operating squads managing 1,400+ real SKUs', subs: [] },
        ],
      },
      { t: 'h', level: 3, text: 'Pain points' },
      {
        t: 'list',
        items: [
          { text: '**Account-linking risk**: one policy violation in a store can take down the whole 24-store matrix', subs: [] },
          { text: '**Virtual SKU drift**: 1,500+ virtual SKUs mapped by hand, so mismatches and mis-shipments were common', subs: [] },
          { text: '**Infringement blind spots**: trademark and patent issues were found only after takedowns', subs: [] },
          { text: '**No audit trail for operations**: 1,200+ actions without any quality review, and manual daily reporting across 24 stores', subs: [] },
        ],
      },
      { t: 'h', level: 3, text: 'Three-phase rollout' },
      {
        t: 'list',
        items: [
          { text: '**Phase 01 · SKU and data normalisation** — unified 1,400+ real SKUs and 1,500+ virtual SKU mappings across stores under one code system. **Cross-store data conflicts eliminated.**', subs: [] },
          { text: '**Phase 02 · Risk and operations dashboards** — networked infringement detection, plus a 24-store operational audit ledger that logs and scores every team action. **Errors traced to zero.**', subs: [] },
          { text: '**Phase 03 · AI daily-report and approval loop** — automated cross-store daily reports with human approval nodes for any action that touches pricing or listing state, saving **1.5–2 hours per person per day**.', subs: [] },
        ],
      },
      { t: 'h', level: 3, text: 'Outcome' },
      {
        t: 'p',
        text: 'Account-linking risk exposure fell **95%**, operational error rate went to **zero**, infringement findings moved from after-the-fact takedowns to pre-emptive defence, and every squad saved **1.5–2 hours** of manual reporting each day — redirecting that time into listing quality and margin.',
      },
    ],
  },
  {
    id: 'shein',
    who: 'SHEIN multi-store resale',
    sub: '6+ store matrix',
    scale: '20–30 person resale team',
    deliver:
      '55 tables unified, SPU/SKC/SK three-level mapping, dynamic replenishment (alloy items 3–5 days, rhinestone 5–7 days) and a 2,000+ per-month campaign ledger.',
    metrics: ['80% fewer stockouts', '70% faster campaigns', '35% faster turnover'],
    blocks: [
      { t: 'h', level: 3, text: 'Client profile' },
      {
        t: 'list',
        items: [
          { text: '**Category**: fast-fashion accessories — fashion jewellery, alloy and rhinestone pieces, and wearables; highly seasonal and short-lived', subs: [] },
          { text: '**Matrix**: **SHEIN as the core platform with 6+ cross-border stores (A–F)** running a resale-and-race model', subs: [] },
          { text: '**Team**: **20–30+ operators** across selection, campaigns, stock monitoring and quality control, managing tens of thousands of SPU/SKC links', subs: [] },
        ],
      },
      { t: 'h', level: 3, text: 'Pain points' },
      {
        t: 'list',
        items: [
          { text: '**Stockouts and dead stock at once**: a bestseller selling 9 units a day had 7 in stock (0.8 days of cover) while slowly-moving items kept being produced', subs: [] },
          { text: '**55 disconnected tables**: SPU/SKC status and supply prices drifted apart, causing cross-store price conflicts that ate margin', subs: [] },
          { text: '**Thousands of campaign submissions a month**: over 2,000 submissions per store per month, easy to miss, conflict or oversell', subs: [] },
          { text: '**Operations were a black box**: image swaps, price changes and delistings happened on instinct with no way to audit quality', subs: [] },
        ],
      },
      { t: 'h', level: 3, text: 'Three-phase rollout' },
      {
        t: 'list',
        items: [
          { text: '**Phase 01 · 55 tables unified** — consolidated link, campaign, quality and stock tables across six stores and built SPU → SKC → SK mapping. **One pricing and lifecycle standard across the network.**', subs: [] },
          { text: '**Phase 02 · Sales focus dashboard** — a 33-chart dashboard covering total volume, 7-day trends, paid orders and bestseller rankings, plus one ledger for 2,000+ monthly campaigns. **Two hours of manual reporting removed every day.**', subs: [] },
          {
            text: '**Phase 03 · Intelligent dispatch and dynamic replenishment** — a “to-do centre” that auto-triggers P0/P1 tickets by daily sales and days-of-cover, with replenishment quantities computed separately for alloy (3–5 days) and rhinestone (5–7 days) lead times. **Stockouts down 80%, turnover up 35%.**',
            subs: ['Operators moved from blind mass listing to data-driven, finely managed operations.'],
          },
        ],
      },
      { t: 'h', level: 3, text: 'Outcome' },
      {
        t: 'list',
        items: [
          { text: '**Hard results**: 55 tables governed, cross-store pricing conflicts down to **zero**, stockouts down **80%** via 100+ live replenishment tickets, campaign handling efficiency up **70%**, and **2 hours** of manual reporting removed daily.', subs: [] },
          {
            text: '**Client’s own words**: “The worst part of SHEIN resale was too many stores and links and too many campaigns — we were either chasing stock or exporting tables all day, and bestsellers would go out of stock before anyone noticed. Now the 55 tables finally make sense. Every morning I open the to-do list and know exactly which store and which item needs how many units, with alloy and rhinestone lead times already accounted for.”',
            subs: [],
          },
        ],
      },
    ],
  },
]
