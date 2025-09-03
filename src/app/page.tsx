'use client';
import React from 'react';
import Image from 'next/image';
import logoSrc from '../../public/logo.jpg';

/**
 * Europe-China Youth Peace Forum ｜ 单页官网（组件化版本）
 * 颜色方案：#e6efea（浅背景） #6a8f82（主色） #3b6351（深色）
 * 使用：将本文件保存为 app/page.tsx；项目需已启用 TailwindCSS。
 */

/* ---------------- 共用组件 ---------------- */
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
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#3b6351]">
        {title}
      </h2>
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

/* ---------------- 页面 ---------------- */
export default function Home() {
  const nav = [
    { id: 'mission', label: '宗旨与背景' },
    { id: 'basic', label: '基本信息' },
    { id: 'agenda', label: '详细议程' },
    { id: 'highlights', label: '活动亮点' },
    { id: 'organizers', label: '组织架构' },
    { id: 'register', label: '报名与联系' },
    { id: 'volunteers', label: '加入志愿者' },
    { id: 'partners', label: '邀请合作' },
  ];

  return (
    <div className="min-h-screen bg-[#e6efea] text-neutral-900 selection:bg-[#6a8f82]/30 selection:text-[#3b6351]">
      {/* 顶部导航 */}
      <header className="backdrop-blur supports-[backdrop-filter]:bg-[#e6efea]/80 sticky top-0 z-50 border-b border-[#6a8f82]/30">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            {/* <div className="w-8 h-8 rounded-lg bg-[#6a8f82] grid place-items-center text-white font-bold">
              Y
            </div> */}
            <Image src={logoSrc} alt="Logo" width={50}/>
            <div className="leading-tight">
              <div className="font-semibold text-[#3b6351]">欧华青年和平论坛</div>
              <div className="text-xs text-neutral-600">Europe-China Youth Peace Forum</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-5 text-sm">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-neutral-700 hover:text-[#3b6351]">
                {n.label}
              </a>
            ))}
            <a
              href="#register"
              className="ml-2 rounded-xl bg-[#3b6351] px-3 py-1.5 text-white hover:bg-[#6a8f82]"
            >
              立即报名
            </a>
          </nav>
        </div>
      </header>

      {/* 英雄区 */}
      <section id="top" className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#6a8f82]/30 px-3 py-1 text-xs text-neutral-600">
              <span>Geneva · 2025</span>
              <span className="h-1 w-1 rounded-full bg-neutral-400" />
              <span>Stop War, Start Dialogue</span>
            </span>
            <h1 className="mt-4 text-3xl md:text-7xl font-extrabold tracking-tight text-[#3b6351]">
              欧华青年和平论坛
            </h1>
            <h2 className="mt-2 text-xl md:text-4xl font-semibold text-[#6a8f82]">
              Europe-China Youth Peace Forum
            </h2>
            <p className="mt-4 text-neutral-700 md:text-lg">
              前事不忘 · 和平永续（Past Lessons, Future Peace）
            </p>
          </div>
        </div>
      </section>


      {/* 宗旨与背景 */}
      <Section id="mission" title="宗旨与背景">
        <div className="space-y-4 text-neutral-800">
          <p>
            2025年，适逢中国人民抗日战争暨世界反法西斯战争胜利80周年。战争的惨痛代价换来了珍贵的和平，也奠定了当代国际秩序与联合国宪章精神。值此历史节点，全球冲突频发，和平赤字不断加剧，青年的责任愈加凸显。
          </p>
          <p>
            我们——旅欧华侨华人青年，发起“欧华青年和平论坛”，旨在：
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>缅怀历史，反思战争灾难</li>
            <li>凝聚青年，传播和平理念</li>
            <li>面向世界，发出青年和平之声</li>
          </ul>
          <p>
            在“国际和平之都”日内瓦，我们将联合欧洲青年、专家学者及国际友人，共议和平之道，促跨文化理解与对话。论坛成果将递交联合国相关机构，推动青年声音融入国际和平机制。论坛将致力于构建常态化平台，推动成立“欧华青年和平网络”，持续促进青年参与全球和平对话与倡议。
          </p>
        </div>
      </Section>


      {/* 基本信息 */}
      <Section id="basic" title="基本信息">
        <div className="rounded-2xl border border-[#6a8f82]/30 bg-white">
          <div className="p-5">
            <KVRow k="时间" v={<span>9 月 15 日（周一）</span>} />
            <KVRow
              k="地点"
              v={
                <span>
                  日内瓦音乐学院，Salle Franz Liszt, Pl. de Neuve 5, 1204 Genève, Switzerland
                </span>
              }
            />
            <KVRow
              k="规模"
              v={<span>欧洲各国华侨华人青年代表、专家学者、国际组织嘉宾、媒体记者等</span>}
            />
            <KVRow k="语言" v={<span>中文、英文</span>} />
            <KVRow
              k="形式"
              v={
                <span>
                  主旨演讲、圆桌对话、主题研讨、和平宣言发布、闭幕式音乐会
                </span>
              }
            />
          </div>
        </div>
      </Section>

      {/* 详细议程 */}
      <Section id="agenda" title="详细议程">
        <div className="rounded-2xl border border-[#6a8f82]/30 bg-white">
          <div className="p-5">
            <AgendaItem time="08:45–09:30" stage="报到" content="代表签到、资料包领取（含和平宣言草案）" />
            <AgendaItem
              time="09:30–10:30"
              stage="开幕式·代表发言"
              content="大会主席致辞、议程说明；历史回顾短片放映、80 秒默哀；中国驻瑞士使馆钱敏坚大使致辞；组委会主席及组委会主要成员致辞；联合国受邀官员致辞"
            />
            <AgendaItem time="10:30–10:45" stage="茶歇" content="——" />
            <AgendaItem
              time="10:45–12:00"
              stage="主旨演讲"
              content="中国国际问题研究院 苏晓晖教授 60 分钟发言 + 15 分钟互动交流"
            />
            <AgendaItem time="12:00–13:00" stage="午餐休息" content="——" />
            <AgendaItem time="13:00–14:15" stage="主题演讲" content="联合国系统官员、青年代表" />
            <AgendaItem time="14:15–14:30" stage="茶歇" content="——" />
            <AgendaItem
              time="14:30–16:00"
              stage="小组讨论"
              content={
                <div className="space-y-2">
                  <div className="font-medium">议题：</div>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      从苦难到团结：纪念中国十四年抗日战争胜利八十周年；在全球背景下理解中国十四年抗战；和平的代价与价值；危机中的国际团结。
                    </li>
                    <li>
                      多元文化中的相互理解：青年视角下的跨文化交流与冲突化解；刻板印象与偏见；冲突预防与调解；文化差异：摩擦 &amp; 和平与创新。
                    </li>
                    <li>
                      从二战到今天：欧洲与中国的历史记忆与和平教育；记忆与身份认同；和平教育的比较；走向共同的历史理解。
                    </li>
                  </ol>
                </div>
              }
            />
            <AgendaItem time="16:00–18:30" stage="茶歇 & 简餐" content="音乐会签到" />
            <AgendaItem
              time="18:30–20:30"
              stage="闭幕式 & 音乐会"
              content="青年代表宣读并向联合国秘书长古特雷斯先生代表递交《日内瓦欧华青年和平宣言》；音乐会：国内专业合唱团受邀演出"
            />
            <AgendaItem time="21:00" stage="招待会" content="酒会" />
          </div>
        </div>
      </Section>

      {/* 活动亮点 */}
      <Section id="highlights" title="活动亮点">
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="历史影像·80 秒默哀">以 80 秒静默纪念 80 年岁月与无数逝者。</Card>
          <Card title="青年圆桌·多语言">多语盲盒、零障碍中外对话。</Card>
          <Card title="互动问答">与受邀专家面对面问答互动，实现思想的碰撞与交锋。</Card>
          <Card title="“和平之声”音乐会">融合中西经典，艺术凝聚共识。</Card>
        </div>
      </Section>


      {/* 组织架构 */}
      <Section id="organizers" title="组织架构">
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="发起单位">瑞士中华联谊会、瑞士福建同乡会、瑞士华商会。</Card>
          <Card title="支持单位">中国驻瑞士大使馆、欧洲华侨华人社团及相关组织。</Card>
          <Card title="闭幕式音乐会协办单位">北京律动爱乐文化传媒有限公司。</Card>
          <Card title="综合事务协理">立齐达文化旅游有限公司。</Card>
        </div>
      </Section>

      {/* 报名与联系 */}
      <Section id="register" title="联系方式及报名">
        <Card title="我们欢迎大会参与者——">
          <ul className="list-disc pl-5 space-y-1 text-neutral-700">
            <li>旅欧青年与国际学生</li>
            <li>青年公益组织、跨文化交流倡导者</li>
            <li>关注和平与发展的青年代表</li>
          </ul>
          <p className="mt-3 text-neutral-700">
            无论你来自哪里，只要你心怀和平梦想，我们都欢迎你的加入。
            让我们相聚日内瓦，共同为世界发出青年的和平之声。
          </p>
          <p className="mt-4">
            📩 立即报名：
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeGdoxCFVQJWbmC_95T5qpl8Dkdruy9V_pv1TturGyPKGml3g/viewform?pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3b6351] underline hover:text-[#6a8f82]"
            >
              报名链接
            </a>
            （需谷歌账号登录）
          </p>
        </Card>
      </Section>


      {/* 志愿者 */}
      <Section id="volunteers" title="加入志愿者队伍 · 与和平同行">
        <Card>
          <p className="text-neutral-700">
            论坛将面向旅欧青年招募志愿服务团队，岗位包括：
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-neutral-700">
            <li>会务协助（签到、协调组织）</li>
            <li>嘉宾接待（语言翻译、现场引导）</li>
            <li>媒体支持（摄影摄像、文字记录）</li>
          </ul>
          <p className="mt-3 text-neutral-700">
            🌍 无需经验，只需热忱与责任感；和平之路，从志愿同行开始。
          </p>
          <p className="mt-4">
            📖 志愿者报名入口：{' '}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScSvKNKPGv_BmTd4L50GLUI-t2Ltj6YQxhy8t5ER0g85PFWlA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3b6351] underline hover:text-[#6a8f82]"
            >
              点击申请加入志愿者团队
            </a>
          </p>
        </Card>
      </Section>


      {/* 合作伙伴 */}
      <Section id="partners" title="邀请合作 · 共筑青年和平网络">
        <Card>
          <p className="text-neutral-700">
            我们诚挚邀请以下伙伴加入合作：
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-neutral-700">
            <li>欧洲各地高校、学生学者联谊会</li>
            <li>青年智库、学术研究机构</li>
            <li>国际和平与发展议题相关 NGO</li>
          </ul>
          <p className="mt-3 text-neutral-700">
            让我们携手打造“欧华青年和平论坛”合作网络，构建面向未来的青年和平平台。
          </p>
          <p className="mt-4">
            📮 合作联系邮箱：{' '}
            <a
              href="mailto:euro-china@outlook.com"
              className="text-[#3b6351] underline hover:text-[#6a8f82]"
            >
              euro-china@outlook.com
            </a>
          </p>
        </Card>
      </Section>


      {/* 页脚 */}
      <footer className="mt-16 border-t border-[#6a8f82]/30">
        <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-6 text-sm text-neutral-600">
          <div>
            <div className="font-semibold text-[#3b6351]">欧华青年和平论坛</div>
            <p className="mt-2">Europe-China Youth Peace Forum © 2025</p>
          </div>
          <div>
            <div className="font-semibold text-[#3b6351]">快速导航</div>
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
            <div className="font-semibold text-[#3b6351]">联系</div>
            <p className="mt-2 text-sm text-neutral-700">
              赵元 +41 79 546 3996<br />
              陈峰 +41 78 629 5558<br />
              陈金品 +41 79 926 4638<br />
              潘东鹏 +41 79 749 7226
            </p>
            <p className="mt-3 text-sm text-neutral-700">
              官方邮箱：{' '}
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
  );
}
