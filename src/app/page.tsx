'use client';
import React, { createContext, useContext, useMemo, useState } from 'react';
import Image from 'next/image';
import logoSrc from '../../public/logo.jpg';

/** ------------------------------------------------
 *  Minimal i18n by Context + Dictionary
 * ------------------------------------------------*/
type Lang = 'zh' | 'en';
const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'zh',
  setLang: () => {},
});
const useLang = () => useContext(LanguageContext);

const dict = {
  zh: {
    siteFull: '欧华青年和平论坛',
    siteFullEn: 'Europe-China Youth Peace Forum',

    nav: {
      mission: '宗旨与背景',
      basic: '基本信息',
      agenda: '详细议程',
      highlights: '活动亮点',
      organizers: '组织架构',
      register: '报名与联系',
      volunteers: '加入志愿者',
      partners: '邀请合作',
    },

    hero: {
      badgeLeft: 'Geneva · 2025',
      badgeRight: 'Stop War, Start Dialogue',
      titleZh: '欧华青年和平论坛',
      titleEn: 'Europe-China Youth Peace Forum',
      slogan: '前事不忘 · 和平永续（Past Lessons, Future Peace）',
    },

    mission: {
      title: '宗旨与背景',
      p1: '2025年，适逢中国人民抗日战争暨世界反法西斯战争胜利80周年。战争的惨痛代价换来了珍贵的和平，也奠定了当代国际秩序与联合国宪章精神。值此历史节点，全球冲突频发，和平赤字不断加剧，青年的责任愈加凸显。',
      p2lead: '我们——旅欧华侨华人青年，发起“欧华青年和平论坛”，旨在：',
      li1: '缅怀历史，反思战争灾难',
      li2: '凝聚青年，传播和平理念',
      li3: '面向世界，发出青年和平之声',
      p3: '在“国际和平之都”日内瓦，我们将联合欧洲青年、专家学者及国际友人，共议和平之道，促跨文化理解与对话。论坛成果将递交联合国相关机构，推动青年声音融入国际和平机制。论坛将致力于构建常态化平台，推动成立“欧华青年和平网络”，持续促进青年参与全球和平对话与倡议。',
    },

    basic: {
      title: '基本信息',
      timeK: '时间',
      timeV: '9 月 15 日（周一）',
      placeK: '地点',
      placeV:
        '日内瓦音乐学院，Salle Franz Liszt, Pl. de Neuve 5, 1204 Genève, Switzerland',
      scaleK: '规模',
      scaleV: '欧洲各国华侨华人青年代表、专家学者、国际组织嘉宾、媒体记者等',
      langK: '语言',
      langV: '中文、英文',
      formK: '形式',
      formV: '主旨演讲、圆桌对话、主题研讨、和平宣言发布、闭幕式音乐会',
    },

    agenda: {
      title: '详细议程',
      r1: ['08:45–09:30', '报到', '代表签到、资料包领取（含和平宣言草案）'],
      r2: [
        '09:30–10:30',
        '开幕式·代表发言',
        '大会主席致辞、议程说明；历史回顾短片放映、80 秒默哀；中国驻瑞士使馆钱敏坚大使致辞；组委会主席及组委会主要成员致辞；联合国受邀官员致辞',
      ],
      r3: ['10:30–10:45', '茶歇', '——'],
      r4: [
        '10:45–12:00',
        '主旨演讲',
        '中国国际问题研究院 苏晓晖教授 60 分钟发言 + 15 分钟互动交流',
      ],
      r5: ['12:00–13:00', '午餐休息', '——'],
      r6: ['13:00–14:15', '主题演讲', '联合国系统官员、青年代表'],
      r7: ['14:15–14:30', '茶歇', '——'],
      r8Title: '小组讨论',
      r8Head: '议题：',
      r8li1:
        '从苦难到团结：纪念中国十四年抗日战争胜利八十周年；在全球背景下理解中国十四年抗战；和平的代价与价值；危机中的国际团结。',
      r8li2:
        '多元文化中的相互理解：青年视角下的跨文化交流与冲突化解；刻板印象与偏见；冲突预防与调解；文化差异：摩擦 & 和平与创新。',
      r8li3:
        '从二战到今天：欧洲与中国的历史记忆与和平教育；记忆与身份认同；和平教育的比较；走向共同的历史理解。',
      r9: ['16:00–18:30', '茶歇 & 简餐', '音乐会签到'],
      r10: [
        '18:30–20:30',
        '闭幕式 & 音乐会',
        '青年代表宣读并向联合国秘书长古特雷斯先生代表递交《日内瓦欧华青年和平宣言》；音乐会：国内专业合唱团受邀演出',
      ],
      r11: ['21:00', '招待会', '酒会'],
    },

    highlights: {
      title: '活动亮点',
      h1: '历史影像·80 秒默哀',
      h1d: '以 80 秒静默纪念 80 年岁月与无数逝者。',
      h2: '青年圆桌·多语言',
      h2d: '多语盲盒、零障碍中外对话。',
      h3: '互动问答',
      h3d: '与受邀专家面对面问答互动，实现思想的碰撞与交锋。',
      h4: '“和平之声”音乐会',
      h4d: '融合中西经典，艺术凝聚共识。',
    },

    org: {
      title: '组织架构',
      a: '发起单位',
      aV: '瑞士中华联谊会、瑞士福建同乡会、瑞士华商会。',
      b: '支持单位',
      bV: '中国驻瑞士大使馆、欧洲华侨华人社团及相关组织。',
      c: '闭幕式音乐会协办单位',
      cV: '北京律动爱乐文化传媒有限公司。',
      d: '综合事务协理',
      dV: '立齐达文化旅游有限公司。',
    },

    register: {
      title: '联系方式及报名',
      welcomeTitle: '我们欢迎大会参与者——',
      li1: '旅欧青年与国际学生',
      li2: '青年公益组织、跨文化交流倡导者',
      li3: '关注和平与发展的青年代表',
      p: '无论你来自哪里，只要你心怀和平梦想，我们都欢迎你的加入。让我们相聚日内瓦，共同为世界发出青年的和平之声。',
      apply: '报名链接',
      note: '（需谷歌账号登录）',
    },

    volunteers: {
      title: '加入志愿者队伍 · 与和平同行',
      pLead: '论坛将面向旅欧青年招募志愿服务团队，岗位包括：',
      li1: '会务协助（签到、协调组织）',
      li2: '嘉宾接待（语言翻译、现场引导）',
      li3: '媒体支持（摄影摄像、文字记录）',
      p2: '🌍 无需经验，只需热忱与责任感；和平之路，从志愿同行开始。',
      linkText: '点击申请加入志愿者团队',
    },

    partners: {
      title: '邀请合作 · 共筑青年和平网络',
      p1: '我们诚挚邀请以下伙伴加入合作：',
      li1: '欧洲各地高校、学生学者联谊会',
      li2: '青年智库、学术研究机构',
      li3: '国际和平与发展议题相关 NGO',
      p2: '让我们携手打造“欧华青年和平论坛”合作网络，构建面向未来的青年和平平台。',
      mailLabel: '合作联系邮箱',
      mail: 'euro-china@outlook.com',
    },

    footer: {
      quick: '快速导航',
      contact: '联系',
      rights: 'Europe-China Youth Peace Forum © 2025',
      phones:
        '赵元 +41 79 546 3996\n陈峰 +41 78 629 5558\n陈金品 +41 79 926 4638\n潘东鹏 +41 79 749 7226',
      officialMail: '官方邮箱',
    },

    ctaApply: '立即报名',
    partnerBtn: '成为合作伙伴',
  },

  en: {
    siteFull: '欧华青年和平论坛',
    siteFullEn: 'Europe-China Youth Peace Forum',

    nav: {
      mission: 'Mission & Background',
      basic: 'Key Info',
      agenda: 'Agenda',
      highlights: 'Highlights',
      organizers: 'Organization',
      register: 'Register',
      volunteers: 'Volunteers',
      partners: 'Partnership',
    },

    hero: {
      badgeLeft: 'Geneva · 2025',
      badgeRight: 'Stop War, Start Dialogue',
      titleZh: '欧华青年和平论坛',
      titleEn: 'Europe-China Youth Peace Forum',
      slogan: 'Past Lessons, Future Peace',
    },

    mission: {
      title: 'Mission & Background',
      p1: `In 2025, we mark the 80th anniversary of the victory of the Chinese People's War of Resistance and the World Anti-Fascist War. The hard-won peace shaped today's international order and the spirit of the UN Charter. Amid frequent global conflicts and growing “peace deficit”, youth bear greater responsibility.`,
      p2lead: 'We—overseas Chinese youth in Europe—launch the Forum to:',
      li1: 'Commemorate history and reflect on the tragedies of war',
      li2: 'Unite youth and spread the idea of peace',
      li3: 'Voice the youth call for peace to the world',
      p3: `In Geneva—the “Capital of Peace”—we bring together European youth, scholars and international friends to discuss pathways to peace and foster intercultural dialogue. Outcomes will be submitted to relevant UN bodies to amplify youth voices in global peace mechanisms. The Forum will strive to build a lasting platform and an “Europe-China Youth Peace Network”.`,
    },

    basic: {
      title: 'Key Info',
      timeK: 'Date',
      timeV: 'Mon, Sept 15',
      placeK: 'Venue',
      placeV:
        'Conservatoire de Musique de Genève, Salle Franz Liszt, Pl. de Neuve 5, 1204 Genève, Switzerland',
      scaleK: 'Participants',
      scaleV:
        'Overseas Chinese youth across Europe, scholars, guests from international organizations, media, etc.',
      langK: 'Languages',
      langV: 'Chinese & English',
      formK: 'Format',
      formV:
        'Keynotes, Roundtables, Thematic Sessions, Peace Declaration, Closing Concert',
    },

    agenda: {
      title: 'Agenda',
      r1: ['08:45–09:30', 'Registration', 'Check-in and materials (incl. draft Peace Declaration)'],
      r2: [
        '09:30–10:30',
        'Opening & Remarks',
        'Opening remarks; historical short film & 80s silence; remarks by Amb. Qian Minjian; organizing committee; invited UN official',
      ],
      r3: ['10:30–10:45', 'Coffee Break', '—'],
      r4: ['10:45–12:00', 'Keynote', 'Prof. Su Xiaohui (60m) + Q&A (15m)'],
      r5: ['12:00–13:00', 'Lunch', '—'],
      r6: ['13:00–14:15', 'Thematic Talks', 'UN officials & youth representatives'],
      r7: ['14:15–14:30', 'Coffee Break', '—'],
      r8Title: 'Group Discussion',
      r8Head: 'Topics:',
      r8li1:
        'From Suffering to Solidarity: the 80th anniversary of victory; costs and values of peace; international solidarity in crises.',
      r8li2:
        'Mutual Understanding in Diversity: intercultural exchange; stereotypes; conflict prevention & mediation; friction, peace & innovation.',
      r8li3:
        'From WWII to Today: European & Chinese memories and peace education; identity & memory; towards shared understandings.',
      r9: ['16:00–18:30', 'Coffee & Snack', 'Concert check-in'],
      r10: ['18:30–20:30', 'Closing & Concert', 'Reading and submitting the Geneva Youth Peace Declaration'],
      r11: ['21:00', 'Reception', '—'],
    },

    highlights: {
      title: 'Highlights',
      h1: 'Historical Footage & 80s Silence',
      h1d: 'Commemorating the 80 years with 80 seconds of silence.',
      h2: 'Youth Roundtables & Multilingual',
      h2d: 'Barrier-free dialogue across languages and cultures.',
      h3: 'Interactive Q&A',
      h3d: 'Face-to-face conversations with invited experts.',
      h4: '“Voice of Peace” Concert',
      h4d: 'Bridging classics from East and West.',
    },

    org: {
      title: 'Organization',
      a: 'Initiators',
      aV: 'Swiss Chinese Association, Fujian Association in Switzerland, Swiss Chinese Business Association.',
      b: 'Support',
      bV: 'Embassy of China in Switzerland; Chinese associations across Europe.',
      c: 'Concert Co-organizer',
      cV: 'Beijing Rhythm Philharmonic Culture & Media Co., Ltd.',
      d: 'General Affairs',
      dV: 'LiQida Culture & Tourism Co., Ltd.',
    },

    register: {
      title: 'Register',
      welcomeTitle: 'We welcome participants:',
      li1: 'Overseas youth and international students',
      li2: 'Youth NGOs and intercultural advocates',
      li3: 'Young people caring about peace & development',
      p: 'Wherever you are from, if you care about peace, you are welcome. Let’s meet in Geneva and make our voices heard.',
      apply: 'Registration Form',
      note: '(Google account required)',
    },

    volunteers: {
      title: 'Join Volunteers · Walk with Peace',
      pLead: 'We recruit volunteers for the Forum in Europe. Roles include:',
      li1: 'Logistics (check-in, coordination)',
      li2: 'Guest reception (interpretation, guidance)',
      li3: 'Media support (photo/video, notes)',
      p2: 'No prior experience required—just passion and responsibility.',
      linkText: 'Apply to join the volunteer team',
    },

    partners: {
      title: 'Partnership · Build a Youth Peace Network',
      p1: 'We sincerely invite partners to join:',
      li1: 'Universities and associations across Europe',
      li2: 'Youth think tanks & research institutes',
      li3: 'NGOs on peace & development',
      p2: 'Let’s co-create a forward-looking youth peace platform.',
      mailLabel: 'Partnership Email',
      mail: 'euro-china@outlook.com',
    },

    footer: {
      quick: 'Quick Links',
      contact: 'Contact',
      rights: 'Europe-China Youth Peace Forum © 2025',
      phones:
        'Zhao Yuan +41 79 546 3996\nChen Feng +41 78 629 5558\nChen Jinping +41 79 926 4638\nPan Dongpeng +41 79 749 7226',
      officialMail: 'Official Email',
    },

    ctaApply: 'Apply Now',
    partnerBtn: 'Become a Partner',
  },
} as const;

function useT() {
  const { lang } = useLang();
  return useMemo(() => dict[lang], [lang]);
}

/** ---------------- 共用组件 ---------------- */
function Section({
  id,
  title,
  children,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-14">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#3b6351]">{title}</h2>
      {subtitle && <p className="mt-1 text-neutral-600">{subtitle}</p>}
      <div className="mt-5 text-[15px] leading-relaxed">{children}</div>
    </section>
  );
}

function Card({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[#6a8f82]/30 p-5 bg-[#e6efea]">
      {title && <h4 className="font-semibold text-[#3b6351]">{title}</h4>}
      <div className={title ? 'mt-1' : ''}>{children}</div>
    </div>
  );
}

function KVRow({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[88px_1fr] gap-3 py-2 border-b border-[#6a8f82]/30 last:border-b-0">
      <div className="text-neutral-600">{k}</div>
      <div className="text-neutral-800">{v}</div>
    </div>
  );
}

function AgendaItem({
  time,
  stage,
  content,
}: {
  time: string;
  stage: string;
  content: React.ReactNode;
}) {
  return (
    <div className="grid md:grid-cols-[140px_160px_1fr] gap-3 py-3 border-b border-[#6a8f82]/30 last:border-b-0">
      <div className="text-xs md:text-sm text-neutral-500">{time}</div>
      <div className="font-medium text-[#3b6351]">{stage}</div>
      <div className="text-neutral-800">{content}</div>
    </div>
  );
}

/** ---------------- 页面 ---------------- */
export default function Home() {
  const [lang, setLang] = useState<Lang>('zh');
  const t = dict[lang];

  const nav = [
    { id: 'mission', label: t.nav.mission },
    { id: 'basic', label: t.nav.basic },
    { id: 'agenda', label: t.nav.agenda },
    { id: 'highlights', label: t.nav.highlights },
    { id: 'organizers', label: t.nav.organizers },
    { id: 'register', label: t.nav.register },
    { id: 'volunteers', label: t.nav.volunteers },
    { id: 'partners', label: t.nav.partners },
  ];

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="min-h-screen bg-[#e6efea] text-neutral-900 selection:bg-[#6a8f82]/30 selection:text-[#3b6351]">
        {/* 顶部导航 */}
        <header className="backdrop-blur supports-[backdrop-filter]:bg-[#e6efea]/80 sticky top-0 z-50 border-b border-[#6a8f82]/30">
          <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
            <a href="#top" className="flex items-center gap-3 group">
              <Image src={logoSrc} alt="Logo" width={50} />
              <div className="leading-tight">
                <div className="font-semibold text-[#3b6351]">{t.siteFull}</div>
                <div className="text-xs text-neutral-600">{t.siteFullEn}</div>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-5 text-sm">
              {nav.map((n) => (
                <a key={n.id} href={`#${n.id}`} className="text-neutral-700 hover:text-[#3b6351]">
                  {n.label}
                </a>
              ))}

              {/* 语言切换 */}
              <div className="ml-2 flex items-center gap-2">
                <button
                  aria-label="Switch to Chinese"
                  onClick={() => setLang('zh')}
                  className={`rounded-md px-2 py-1 border ${
                    lang === 'zh'
                      ? 'bg-[#3b6351] text-white border-[#3b6351]'
                      : 'border-[#6a8f82]/40 text-neutral-700 hover:border-[#6a8f82]'
                  }`}
                >
                  中
                </button>
                <button
                  aria-label="Switch to English"
                  onClick={() => setLang('en')}
                  className={`rounded-md px-2 py-1 border ${
                    lang === 'en'
                      ? 'bg-[#3b6351] text-white border-[#3b6351]'
                      : 'border-[#6a8f82]/40 text-neutral-700 hover:border-[#6a8f82]'
                  }`}
                >
                  EN
                </button>
              </div>

              <a
                href="#register"
                className="ml-2 rounded-xl bg-[#3b6351] px-3 py-1.5 text-white hover:bg-[#6a8f82]"
              >
                {t.ctaApply}
              </a>
            </nav>
          </div>
        </header>

        {/* 英雄区 */}
        <section id="top" className="relative isolate overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#6a8f82]/30 px-3 py-1 text-xs text-neutral-600">
                <span>{t.hero.badgeLeft}</span>
                <span className="h-1 w-1 rounded-full bg-neutral-400" />
                <span>{t.hero.badgeRight}</span>
              </span>
              <h1 className="mt-4 text-3xl md:text-7xl font-extrabold tracking-tight text-[#3b6351]">
                {t.hero.titleZh}
              </h1>
              <h2 className="mt-2 text-xl md:text-4xl font-semibold text-[#6a8f82]">
                {t.hero.titleEn}
              </h2>
              <p className="mt-4 text-neutral-700 md:text-lg">{t.hero.slogan}</p>
            </div>
          </div>
        </section>

        {/* 宗旨与背景 / Mission */}
        <Section id="mission" title={t.mission.title}>
          <div className="space-y-4 text-neutral-800">
            <p>{t.mission.p1}</p>
            <p>{t.mission.p2lead}</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>{t.mission.li1}</li>
              <li>{t.mission.li2}</li>
              <li>{t.mission.li3}</li>
            </ul>
            <p>{t.mission.p3}</p>
          </div>
        </Section>

        {/* 基本信息 */}
        <Section id="basic" title={t.basic.title}>
          <div className="rounded-2xl border border-[#6a8f82]/30 bg-white">
            <div className="p-5">
              <KVRow k={t.basic.timeK} v={<span>{t.basic.timeV}</span>} />
              <KVRow k={t.basic.placeK} v={<span>{t.basic.placeV}</span>} />
              <KVRow k={t.basic.scaleK} v={<span>{t.basic.scaleV}</span>} />
              <KVRow k={t.basic.langK} v={<span>{t.basic.langV}</span>} />
              <KVRow k={t.basic.formK} v={<span>{t.basic.formV}</span>} />
            </div>
          </div>
        </Section>

        {/* 详细议程 */}
        <Section id="agenda" title={t.agenda.title}>
          <div className="rounded-2xl border border-[#6a8f82]/30 bg-white">
            <div className="p-5">
              <AgendaItem time={t.agenda.r1[0]} stage={t.agenda.r1[1]} content={t.agenda.r1[2]} />
              <AgendaItem time={t.agenda.r2[0]} stage={t.agenda.r2[1]} content={t.agenda.r2[2]} />
              <AgendaItem time={t.agenda.r3[0]} stage={t.agenda.r3[1]} content={t.agenda.r3[2]} />
              <AgendaItem time={t.agenda.r4[0]} stage={t.agenda.r4[1]} content={t.agenda.r4[2]} />
              <AgendaItem time={t.agenda.r5[0]} stage={t.agenda.r5[1]} content={t.agenda.r5[2]} />
              <AgendaItem time={t.agenda.r6[0]} stage={t.agenda.r6[1]} content={t.agenda.r6[2]} />
              <AgendaItem time={t.agenda.r7[0]} stage={t.agenda.r7[1]} content={t.agenda.r7[2]} />

              <div className="grid md:grid-cols-[140px_160px_1fr] gap-3 py-3 border-b border-[#6a8f82]/30 last:border-b-0">
                <div className="text-xs md:text-sm text-neutral-500">14:30–16:00</div>
                <div className="font-medium text-[#3b6351]">{t.agenda.r8Title}</div>
                <div className="text-neutral-800 space-y-2">
                  <div className="font-medium">{t.agenda.r8Head}</div>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>{t.agenda.r8li1}</li>
                    <li>{t.agenda.r8li2}</li>
                    <li>{t.agenda.r8li3}</li>
                  </ol>
                </div>
              </div>

              <AgendaItem time={t.agenda.r9[0]} stage={t.agenda.r9[1]} content={t.agenda.r9[2]} />
              <AgendaItem
                time={t.agenda.r10[0]}
                stage={t.agenda.r10[1]}
                content={t.agenda.r10[2]}
              />
              <AgendaItem time={t.agenda.r11[0]} stage={t.agenda.r11[1]} content={t.agenda.r11[2]} />
            </div>
          </div>
        </Section>

        {/* 活动亮点 */}
        <Section id="highlights" title={t.highlights.title}>
          <div className="grid md:grid-cols-2 gap-4">
            <Card title={t.highlights.h1}>{t.highlights.h1d}</Card>
            <Card title={t.highlights.h2}>{t.highlights.h2d}</Card>
            <Card title={t.highlights.h3}>{t.highlights.h3d}</Card>
            <Card title={t.highlights.h4}>{t.highlights.h4d}</Card>
          </div>
        </Section>

        {/* 组织架构 */}
        <Section id="organizers" title={t.org.title}>
          <div className="grid md:grid-cols-2 gap-4">
            <Card title={t.org.a}>{t.org.aV}</Card>
            <Card title={t.org.b}>{t.org.bV}</Card>
            <Card title={t.org.c}>{t.org.cV}</Card>
            <Card title={t.org.d}>{t.org.dV}</Card>
          </div>
        </Section>

        {/* 报名与联系（只有报名） */}
        <Section id="register" title={t.register.title}>
          <Card title={t.register.welcomeTitle}>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>{t.register.li1}</li>
              <li>{t.register.li2}</li>
              <li>{t.register.li3}</li>
            </ul>
            <p className="mt-3 text-neutral-700">{t.register.p}</p>
            <p className="mt-4">
              📩{' '}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeGdoxCFVQJWbmC_95T5qpl8Dkdruy9V_pv1TturGyPKGml3g/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3b6351] underline hover:text-[#6a8f82]"
              >
                {t.register.apply}
              </a>{' '}
              {t.register.note}
            </p>
          </Card>
        </Section>

        {/* 志愿者 */}
        <Section id="volunteers" title={t.volunteers.title}>
          <Card>
            <p className="text-neutral-700">{t.volunteers.pLead}</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-neutral-700">
              <li>{t.volunteers.li1}</li>
              <li>{t.volunteers.li2}</li>
              <li>{t.volunteers.li3}</li>
            </ul>
            <p className="mt-3 text-neutral-700">{t.volunteers.p2}</p>
            <p className="mt-4">
              📖{' '}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScSvKNKPGv_BmTd4L50GLUI-t2Ltj6YQxhy8t5ER0g85PFWlA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3b6351] underline hover:text-[#6a8f82]"
              >
                {t.volunteers.linkText}
              </a>
            </p>
          </Card>
        </Section>

        {/* 合作伙伴 */}
        <Section id="partners" title={t.partners.title}>
          <Card>
            <p className="text-neutral-700">{t.partners.p1}</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-neutral-700">
              <li>{t.partners.li1}</li>
              <li>{t.partners.li2}</li>
              <li>{t.partners.li3}</li>
            </ul>
            <p className="mt-3 text-neutral-700">{t.partners.p2}</p>
            <p className="mt-4">
              📮 {lang === 'zh' ? t.partners.mailLabel : `${t.partners.mailLabel}:`}{' '}
              <a
                href="mailto:euro-china@outlook.com"
                className="text-[#3b6351] underline hover:text-[#6a8f82]"
              >
                {t.partners.mail}
              </a>
            </p>
          </Card>
        </Section>

        {/* 页脚 */}
        <footer className="mt-16 border-t border-[#6a8f82]/30">
          <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-6 text-sm text-neutral-600">
            <div>
              <div className="font-semibold text-[#3b6351]">{t.siteFull}</div>
              <p className="mt-2">{dict[lang].footer.rights}</p>
            </div>
            <div>
              <div className="font-semibold text-[#3b6351]">
                {dict[lang].footer.quick}
              </div>
              <ul className="mt-2 space-y-1">
                {nav.map((n) => (
                  <li key={n.id}>
                    <a className="hover:text-[#3b6351]" href={`#${n.id}`}>
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-semibold text-[#3b6351]">
                {dict[lang].footer.contact}
              </div>
              <p className="mt-2 text-sm whitespace-pre-line text-neutral-700">
                {dict[lang].footer.phones}
              </p>
              <p className="mt-3 text-sm text-neutral-700">
                {dict[lang].footer.officialMail}：{' '}
                <a
                  href="mailto:euro-china@outlook.com"
                  className="text-[#3b6351] underline hover:text-[#6a8f82]"
                >
                  euro-china@outlook.com
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </LanguageContext.Provider>
  );
}
