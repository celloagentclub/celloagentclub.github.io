import { caseDocs } from './cases.zh.js'

const docOf = (id) => (caseDocs.find((d) => d.id === id) || { blocks: [] }).blocks

export const zh = {
  code: 'zh',
  htmlLang: 'zh-CN',
  switchLabel: 'EN',
  pdfLabel: 'PDF',

  nav: [
    { id: 'work', label: '工作经历' },
    { id: 'ai', label: 'AI 落地' },
    { id: 'skills', label: '专业技能' },
  ],

  brand: { name: '李洪宇', sub: 'Li Hongyu' },
  a11y: {
    toTop: '回到顶部',
    toggleTheme: '切换深色模式',
    toggleLang: '切换语言',
    downloadPdf: '下载 PDF 简历',
    openMenu: '打开导航',
    closeMenu: '关闭导航',
    closeModal: '关闭弹窗',
  },

  hero: {
    eyebrow: 'Resume · 2026',
    title1: '李洪宇',
    title2: 'LI HONGYU · RESUME 2026',
    tagline: '懂深水区跨境电商业务的产品经理，也是能亲手落地生产级 Agent 中控的 FDE 工程师。',
    role: ['Amazon 欧美站 · 产品经理', '企业 AI 落地 · FDE', '长沙'],
  },

  about: {
    eyebrow: 'Dossier 01 / Proclamation & Context',
    name: '李洪宇',
    role: 'Product Strategy × Forward Deployed Engineer (FDE)',
    phone: '15682131751',
    email: '864901440@qq.com',
    school: '中南林业科技大学',
    period: '2020.09 — 2024.06',
    major: '工业设计 · 本科',
    intro:
      '目前 base 长沙，在看跨境产品经理 / AI 解决方案方向的机会。过去两年半在 Amazon 欧美站操盘书写类品类到年 $400 万 GMV，之后给 8 家跨境公司落地过 Agent 工作流和业务中控。',
    tagline: 'Dual Discipline · Product Strategy & Applied AI',
  },

  manifesto: {
    badge: 'Philosophy',
    tag: '落地方法论',
    quote: '好的企业 AI 落地不是让员工写更长的 Prompt，而是把混沌的跨境供应链与履约逻辑，收敛成具备确定性与风控边界的 Agent 执行中控。',
    byline: '李洪宇 · 从业务实战抽象出的工程准则',
  },

  stats: [
    { num: '$200', unit: '万/年', label: 'Amazon 书写类马克笔品类 GMV' },
    { num: '8', unit: '家', label: '跨境电商企业 AI 落地交付' },
    { num: '20', unit: '款 SKU', label: '独立开发的文创产品线' },
    { num: '98%', unit: '↓', label: 'AI 视频单条制作成本降幅' },
  ],

  work: {
    label: 'Experience',
    title: '工作经历',
    lede: '',
    cardsLabel: '能力要点',
    casesLabel: '企业数字化落地案例',
    casesHint: '',
    projectsLabel: '代表项目',
    libraryLabel: '在飞书案例库中查看',
    entries: [
      {
        id: 'work',
        org: '长沙典客电子商务有限公司',
        when: '2024.06 — 2026.02',
        role: '文具产品经理 · Amazon 美国站',
        summary:
          '统筹 Amazon 美国站品线规划，延续公司书写类马克笔品线产品类型开发和扩展；后续负责整个丙烯马克笔新品牌项目，从开发到采购以及后续的辅助运营。',
        cards: [
          {
            icon: 'target',
            tag: '品类操盘',
            metric: '$200 万/年',
            text: '延续书写类马克笔产品线开发：市场调研 → 供应商对接 → 打样跟进 → Listing 上架全流程推进。',
          },
          {
            icon: 'chart',
            tag: '选品方法论',
            metric: 'MECE × Kano',
            text: '基于 MECE 原则切分类目，从数据上定位低垄断、高增速赛道；再用 Kano 模型深度挖掘用户需求，区分必备属性与魅力属性，精准切入差异化机会点。',
          },
        ],
        projectsLabel: '代表项目 · 核心产品线与数据中控',
        projects: [
          {
            name: '书写类马克笔产品线开发',
            role: '产品线负责人',
            thumb: '/assets/marker-product-line.svg',
            points: [
              '公司马克笔品线已有一定基础，在此之上规划新品类方向、开发现有品线的新 SKU。',
              '通过市场调研和数据分析确定可行的颜色与配色方案，结合供应链新技术优化笔身磁铁结构，并完成配品开模新设计。',
              '头部单 SKU 月销稳定 **7000+**，马克笔品线年销售额从 **$200 万** 量级提升至 **$400 万** 量级。',
            ],
          },
          {
            name: '丙烯马克笔文创品牌线打造',
            role: '项目组长',
            thumb: '/assets/acrylic-marker-creative.svg',
            points: [
              '公司要开拓全新品类，从 0 建立一个独立文创品牌。',
              '广泛调研类目站内外竞品与用户数据，输出品牌定位方案，主导 VI 设计到产品设计，对接供应商完成下单生产。',
              '从 0 完成新品牌的定位、VI 设计、产品开发到首批上架全流程，跑通了新品类从调研到落地的完整链路，积累了品牌策划与供应链对接经验。',
            ],
          },
          {
            name: '竞品与 VOC 分析系统建立',
            role: '创作者',
            thumb: '/assets/voc-analytics-board.svg',
            points: [
              '产品部门缺乏系统化的 VOC 分析方法，过去靠人工零散搜集评论，效率低且不成体系。',
              '系统学习 VOC 分析方法论，结合飞书多维表格与 Python 爬虫搭建完整的 VOC 分析系统。',
              '单次清洗 **数万条** 评论，自动提炼 Top 差评痛点反哺供应链优化，Listing 图文精准反转，大幅降低人工搜集成本。',
            ],
          },
        ],
      },
      {
        id: 'ai',
        featured: false,
        org: '企业 AI 落地',
        when: '2026.02 — 至今',
        role: 'AI 落地顾问 · 服务 8 家电商企业',
        cards: [
          {
            icon: 'target',
            tag: '痛点挖掘',
            metric: '随岗诊断',
            text: '深入客服、补货、广告、品控等真实业务场景，通过随岗调研与需求访谈，把模糊的业务问题拆解成可落地的改进清单。',
          },
          {
            icon: 'flow',
            tag: '方案落地',
            metric: '技术匹配',
            text: '根据业务场景匹配合适的 AI 技术方案，搭建 Agent 工作流与业务中控，关键动作保留人工门禁，确保系统可验收、可运行。',
          },
          {
            icon: 'book',
            tag: '交付培训',
            metric: '实战内训',
            text: '用真实业务案例带一线员工上手 AI 工具，配套培训营把个人经验沉淀成团队可复用的 SOP 资产。',
          },
        ],
        projects: [
          {
            name: '大件家具工贸一体·供应链数字化中控',
            role: 'AI 落地顾问',
            thumb: '/assets/ai-supply-chain.svg',
            points: [
              '海运周期 45~60 天，甩柜导致海外仓断货；40+ 张表严重割裂，每日 2~3 小时人工导表；超重超规频遭巨额罚款。',
              '治理 40+ 核心数据表，打造「21 表合一」业务中控台；搭建 11 个专属 Skill + 20 个 Prompt 矩阵，覆盖海运追踪、大件补货与规格强拦截。',
              '人工省时 **85%**，断货率降 **90%**，超规罚款**清零**。',
            ],
          },
          {
            name: '跨境汽配 24 店矩阵·精细化运营中控',
            role: 'AI 落地顾问',
            thumb: '/assets/ai-store-matrix.svg',
            points: [
              '24 店铺多运营各自为政，同品跟卖自杀式降价；侵权全网连坐封店风险高；1500+ 虚拟 SKU 与真实库存映射混乱。',
              '完成 1400+ SKU 归一与动态映射；搭建全网侵权联防阻断规则引擎；1200+ 条日常运营动作自动审计与小组赛马日报。',
              '连坐风险降 **95%**，库存配货 **100% 准确**，单运营日省 **1.5–2 小时**。',
            ],
          },
          {
            name: '希音多店铺铺货型·数字化业务中控',
            role: 'AI 落地顾问',
            thumb: '/assets/ai-product-flow.svg',
            points: [
              '55 张业务表割裂混乱；合金款（3-5天）与水钻款（5-7天）工期差异大导致断货频发；每月 2000+ 场活动手工提报繁琐易错漏。',
              '完成 55 表归一与 SPU/SKC/SK 三级映射；搭建区分生产周期的动态材质缓冲补货算法；月度 2000+ 场营销活动全自动申报与锁库台账中控。',
              '断货率降 **80%**，活动提效 **70%**，存货周转提速 **35%**。',
            ],
          },
        ],
      },
    ],
  },

  ai: {
    label: 'AI 落地',
    title: '企业 AI 落地与 Agent 业务中控',
    lede: '',
  },

  video: {
    label: 'Video',
    title: '视频展示',
    lede: 'AI 内容工业化流水线的部分产出：从主图视频、长口播带货，到产品动态渲染。标「原片 vs 复刻」的两组，是同一套流水线的对照验证。',
    groups: [
      {
        tag: 'Amazon',
        title: '亚马逊主图视频产出展示',
        desc: 'AI 内容流水线产出的亚马逊主图视频，直接投放 Listing 主图位。',
        clips: [
          { label: '示例 01', ratio: '16 / 9', src: '/videos/amazon-1.mp4' },
          { label: '示例 02', ratio: '16 / 9', src: '/videos/amazon-2.mp4' },
        ],
      },
      {
        tag: 'UGC',
        title: '长口播带货视频',
        desc: '人物与口播被完整复刻，单条制作成本从 1500–2500 元降至 10–20 元。',
        clips: [
          { label: '原片', ratio: '9 / 16', src: '/videos/talk-orig.mp4' },
          { label: 'AI 复刻', ratio: '9 / 16', src: '/videos/talk-ai.mp4' },
        ],
      },
      {
        tag: 'UGC',
        title: '地坪漆带货视频',
        desc: '跨品类复用同一条流水线，验证工作流的可迁移性。',
        clips: [
          { label: '原片', ratio: '9 / 16', src: '/videos/floor-orig.mp4' },
          { label: '复刻', ratio: '9 / 16', src: '/videos/floor-ai.mp4' },
        ],
      },
      {
        tag: 'CG',
        title: '高端商业产品动态渲染示范',
        desc: '产品动态渲染，服务高客单价品类的视觉表达。',
        clips: [
          { label: '示例 01', ratio: '9 / 16', src: '/videos/render-1.mp4' },
          { label: '示例 02', ratio: '9 / 16', src: '/videos/render-2.mp4' },
          { label: '示例 03', ratio: '3 / 4', src: '/videos/render-3.mp4' },
        ],
      },
    ],
  },

  skills: {
    label: 'Skills',
    title: '专业技能',
    items: [
      {
        cat: 'AI 应用落地',
        pills: [
          { name: 'AI Agent 设计', level: 3 },
          { name: 'Prompt Engineering', level: 3 },
          { name: 'AI 视频/内容生成流水线', level: 3 },
          { name: '飞书多维表格 + 自动化', level: 3 },
          { name: 'Codex / Claude / Trae', level: 2 },
        ],
      },
      {
        cat: '跨境电商',
        pills: [
          { name: 'Amazon 选品与竞品分析', level: 3 },
          { name: 'VOC 挖掘', level: 3 },
          { name: 'Listing 优化', level: 3 },
        ],
      },
      {
        cat: '数据分析',
        pills: [
          { name: '数据采集清洗', level: 3 },
          { name: 'Excel 数据分析', level: 3 },
          { name: 'Python 爬虫', level: 2 },
          { name: '决策数据集构建', level: 2 },
        ],
      },
      {
        cat: '设计与协作',
        pills: [
          { name: 'Photoshop', level: 2 },
          { name: 'Illustrator', level: 2 },
          { name: 'UI/UX 体验设计', level: 2 },
        ],
      },
    ],
  },

  education: {
    label: 'Education',
    title: '教育经历',
    entries: [
      {
        org: '中南林业科技大学',
        when: '2020.09 — 2024.06',
        role: '工业设计 · 本科',
        bullets: [
          '深度考察制造工厂，将理论对接市场级设计规范；完成品牌视觉与海报设计项目。',
          '参与国内外设计赛事，积累体系完整的产品设计作品集。',
        ],
      },
    ],
  },

  footer: {
    copy: '© 2026 李洪宇 · Crafted in Anthropic Editorial Aesthetic',
    links: [],
  },

  modal: { kicker: '客户实战案例详情', metricsLabel: '落地成效指标', openLabel: '查看完整技术架构与 SOP' },
}
