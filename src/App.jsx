import {
  AtSign,
  Download,
  Globe2,
  Mail,
  Phone,
} from 'lucide-react'
import SiteHeader from './components/SiteHeader'
import ProjectDetailPage from './ProjectDetailPage'
import WorksPage from './WorksPage'
import { appUrl, assetUrl } from './utils/paths'
import './App.css'

const experience = [
  {
    period: '2025年2月 - 至今',
    company: '浙江高美基因科技有限公司',
    role: '品宣设计',
    details: [
      '负责微信公众号日常运营，撰写医疗科普及产品文案，完成图文排版及视觉素材设计，提升用户活跃度与传播效果；',
      '负责行业展会全案视觉设计、现场拍摄与短视频发布，围绕医疗设备策划产品宣传内容；',
      '运营品牌官网及移动端，持续优化图文排版与交互体验；',
      '统筹品牌运营策略，协调内外部资源，联动市场与销售推进营销活动。',
    ],
  },
  {
    period: '2024年8月 - 2025年2月',
    company: '第六空间大都会家居（临安区）',
    role: '平面设计',
    details: [
      '负责商场营销活动及重点项目的视觉设计，完成大型促销活动与高端家居品牌开业项目的整体视觉呈现；',
      '围绕产品宣传与活动跟拍创作视频内容，设计符合高端家居品牌调性的动态视觉素材；',
      '从创意构思、设计输出到物料制作全程跟进，确保设计效果与活动目标匹配；',
      '建立资源库与素材复用机制，提升团队协作效率及品牌视觉一致性。',
    ],
  },
  {
    period: '2023年8月 - 2024年7月',
    company: '广西桂品云信息科技有限公司',
    role: '视觉设计',
    details: [
      '负责电商小程序整体视觉设计，包括活动落地页、店铺首页、商品主图与详情页；',
      '参与品牌视觉体系建设，完成标志优化、VI 规范与产品画册的设计迭代；',
      '对接印刷厂，跟进印前打样、生产及成品验收，保障设计落地质量；',
      '协同运营与产品团队持续优化视觉呈现，助力农产品及非遗产品销售增长。',
    ],
  },
]

const skills = [
  'Adobe Illustrator（AI）',
  'CorelDRAW',
  'Adobe Photoshop（PS）',
  'Figma',
  'Adobe XD',
  'Axure RP',
  'AIGC',
  '剪映',
]

const projects = [
  {
    title: '活动运营设计',
    image: '/assets/project-aigc-1.png',
    className: 'project-card project-card--tilt-left',
  },
  {
    title: '品牌视觉系统',
    image: null,
    className: 'project-card project-card--neutral',
  },
  {
    title: 'AI 协同创作系列',
    image: '/assets/project-aigc-2.png',
    className: 'project-card project-card--tilt-right',
  },
]

function SectionHeading({ eyebrow, title }) {
  return (
    <header className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </header>
  )
}

function ProfileCard() {
  return (
    <aside className="profile-card">
      <div className="portrait-wrap">
        <img src={assetUrl('/assets/profile.png')} alt="刘航的形象照" />
      </div>

      <div className="profile-facts">
        <div><span>年龄</span><strong>25岁</strong></div>
        <div><span>学历</span><strong>本科</strong></div>
        <div className="wide"><span>学校</span><strong>桂林电子科技大学信息科技学院</strong></div>
      </div>

      <div className="mini-contact">
        <a href="tel:18277503029">
          <span className="icon-box"><Phone size={17} /></span>
          <span><small>电话</small>18277503029</span>
        </a>
        <a href="mailto:2473669591@qq.com">
          <span className="icon-box"><Mail size={17} /></span>
          <span><small>邮箱</small>2473669591@qq.com</span>
        </a>
      </div>

      <div className="skill-block">
        <h3>技能工具</h3>
        <div className="skill-list">
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </div>

      <button className="resume-button" type="button" onClick={() => window.print()}>
        <Download size={17} />
        下载完整简历
      </button>
    </aside>
  )
}

function ExperienceTimeline() {
  return (
    <section className="experience" aria-labelledby="experience-title">
      <div className="experience-title-row">
        <span><AtSign size={28} /></span>
        <h3 id="experience-title">工作经历</h3>
      </div>
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={item.company}>
            <span className="timeline-dot" />
            <p className="period">{item.period}</p>
            <h4>{item.company}</h4>
            <p className="role">{item.role}</p>
            <ul>
              {item.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function App() {
  const searchParams = new URLSearchParams(window.location.search)
  const view = searchParams.get('view')

  if (view === 'project') {
    return <ProjectDetailPage projectId={searchParams.get('project')} />
  }

  if (view === 'works') {
    return <WorksPage />
  }

  return (
    <main>
      <div className="home-header">
        <SiteHeader />
      </div>

      <section className="hero" id="home">
        <img className="hero-art" src={assetUrl('/assets/hero-texture.png')} alt="" aria-hidden="true" />
        <div className="hero-content">
          <h1>Portfolio</h1>
          <p className="identity">刘航&nbsp;&nbsp; 视觉设计师</p>
          <p className="hero-copy">精进制图能力，探索创新设计风格，审美与细节把控突出，依托 AIGC 解锁创意无限可能。</p>
          <div className="hero-actions">
            <a className="button button--light" href="#about">了解我</a>
            <a className="button button--dark" href={appUrl({ search: '?view=works' })}>查看作品</a>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <SectionHeading eyebrow="关于我" title="自我介绍" />
        <div className="about-layout page-container">
          <ProfileCard />
          <ExperienceTimeline />
        </div>
      </section>

      <section className="portfolio-section" id="portfolio">
        <SectionHeading eyebrow="作品集" title="项目案例" />
        <div className="project-grid page-container">
          {projects.map((project) => (
            <a
              className={project.className}
              href={appUrl({ search: '?view=works' })}
              aria-label={`查看${project.title}`}
              key={project.title}
            >
              {project.image ? <img src={assetUrl(project.image)} alt={project.title} /> : <span>{project.title}</span>}
            </a>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-layout page-container">
          <div className="contact-intro">
            <p>联系方式</p>
            <h2>让我们一起创造更多可能</h2>
            <span>Let's create more possibilities<br />together</span>
          </div>
          <div className="contact-panel">
            <p className="contact-kicker"><span /> Welcome&nbsp; to&nbsp; contact&nbsp; us</p>
            <a href="mailto:2473669591@qq.com"><Mail size={20} />2473669591@qq.com</a>
            <a href="tel:18277503029"><Phone size={20} />18277503029</a>
            <a href="https://www.baidu.com" target="_blank" rel="noreferrer"><Globe2 size={20} />www.baidu.com</a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
