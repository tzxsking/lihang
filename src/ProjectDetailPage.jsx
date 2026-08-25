import SiteHeader from './components/SiteHeader'
import { appUrl, assetUrl } from './utils/paths'
import './project-detail.css'

const projectDetails = {
  'marketing-01': {
    type: 'marketing',
    title: '家居建材抖音联动活动',
    background:
      '家居建材联盟促销活动，依托抖音流量做本地营销，面向家装消费人群，传递活动时间、福利权益，吸引用户到店、促进成交。为临安商场六空甄选名品联盟家装促销项目设计系列海报，联动抖音新媒体流量，实现线上传播引流、线下门店转化，产出 1 张主视觉海报 + 3 张专题竖版海报，适配线下喷绘与社交平台传播。',
    concept:
      '将短视频平台视觉语言融入传统建材商业海报，以抖音符号作为核心视觉记忆点。采用霓虹赛博渐变高饱和配色，强化活动热闹潮流氛围；区分主海报与专题海报信息层级，主海报完整输出活动全貌，竖版海报每张聚焦一项福利，信息轻量化，兼顾线下展板与手机端阅读，整套视觉保持统一，提升系列识别度。',
    keywords: '赛博霓虹｜新媒体流量营销｜商业促销｜系列化海报｜高饱和渐变｜线上引流线下转化',
    applications: ['主海报：户外展板、门头喷绘；', '竖版海报：朋友圈、易拉宝、线上转发、宣传物料。'],
    galleryWidth: 902,
    gallery: [
      { src: '/assets/marketing-details/marketing-01-showcase.png', alt: '家居建材抖音联动活动系列海报' },
    ],
  },
  'marketing-02': {
    type: 'marketing',
    title: '毛铺草本年份酒系列BANNER',
    background:
      '劲牌毛铺草本年份酒产品系列海报，包含 8 年、15 年两款产品，用于品牌宣传与产品展示，输出统一版式的系列视觉物料，适配展厅展板及线上传播。针对草本年份酒高端礼品、商务消费场景，传递产品年份、草本工艺、专利技术等核心卖点，建立产品家族统一视觉形象。',
    concept:
      '采用左文右图经典版式，以品牌墨绿色搭配金色构建高端东方视觉基调；左侧通过图标、文字拆解产品核心卖点，竖排文案烘托中式酒文化，右侧展示酒瓶礼盒实物与倒影，还原产品质感。两款海报保持版式体系统一，替换产品信息与实物，实现系列化表达，兼顾商业信息传递与文化氛围感。',
    keywords: '绿金中式｜高端白酒｜系列产品海报｜卖点可视化｜礼品酒｜实物静物展示',
    applications: ['展厅展板、线下展架、品牌线上宣传物料'],
    galleryWidth: 900,
    gallery: [
      { src: '/assets/marketing-details/marketing-02-08.png', alt: '毛铺草本年份酒八年产品海报' },
      { src: '/assets/marketing-details/marketing-02-15.png', alt: '毛铺草本年份酒十五年产品海报' },
    ],
  },
  'marketing-03': {
    type: 'marketing',
    title: '第六空间临安商场联合开业活动主视觉',
    background:
      '第六空间临安商场年中巅峰盛典活动，完成活动主背景板、签到处背景板两套线下物料设计，用于品牌联合开业线下盛典现场，展示入驻品牌矩阵，烘托开业氛围。家居商场 20 大品牌联合开业周年庆典，产出现场舞台、签到墙大型喷绘物料，面向本地家装客户，传递开业活动信息，展示合作品牌阵容。',
    concept:
      '选用蓝紫科技渐变作为主视觉色彩，以科技几何底纹塑造高端现代的家居商业氛围。两套物料保持统一视觉规范，区分舞台主视觉与签到场景：主视觉强化活动主题与时间；签到版突出签到指引。底部规整排布全部合作品牌 LOGO 矩阵，兼顾远距离可读性与版面秩序感，适配大型线下喷绘输出。',
    keywords: '商业活动主视觉｜签到背景板｜品牌矩阵｜蓝紫科技渐变｜家居商场｜线下喷绘物料',
    applications: ['活动舞台背景、签到墙、现场大屏、线下大型喷绘'],
    galleryMargin: 49,
    galleryWidth: 902,
    gallery: [
      { src: '/assets/marketing-details/marketing-03-signin.png', alt: '第六空间临安商场活动签到墙' },
      { src: '/assets/marketing-details/marketing-03-stage.png', alt: '第六空间临安商场活动舞台背景' },
    ],
  },
  'marketing-04': {
    type: 'marketing',
    title: '左右家居品牌日',
    galleryOnly: true,
    galleryWidth: 907,
    gallery: [
      { src: '/assets/marketing-details/marketing-04-general.png', alt: '左右家居品牌日通用物料' },
      { src: '/assets/marketing-details/marketing-04-dm-01.png', alt: '左右家居品牌日活动物料一' },
      { src: '/assets/marketing-details/marketing-04-dm-02.png', alt: '左右家居品牌日活动物料二' },
      { src: '/assets/marketing-details/marketing-04-sofa-display.png', alt: '左右家居沙发展架系列物料' },
      { src: '/assets/marketing-details/marketing-04-sleep-dm-01.png', alt: '左右睡眠品牌日活动物料一' },
      { src: '/assets/marketing-details/marketing-04-sleep-dm-02.png', alt: '左右睡眠品牌日活动物料二' },
      { src: '/assets/marketing-details/marketing-04-sleep-display.png', alt: '左右睡眠展架系列物料' },
    ],
  },
  'marketing-05': {
    type: 'marketing',
    title: '美宅思享荟・美宅设计师俱乐部',
    threeColumnGallery: true,
    background:
      '家居商场举办室内设计师交流沙龙活动，需要塑造专业高级的活动形象，呈现设计师嘉宾矩阵，面向设计师与家装客户进行活动传播。',
    concept:
      '以黑色竖纹肌理为底，搭配玫瑰金构建轻奢高级调性；左侧采用黑白人物群像，叠加解构式品牌大字母做视觉装饰；右侧排布活动主题与设计师个人简介。黑白人像弱化杂色干扰，文字层级清晰，兼顾大型喷绘远观冲击力与近读信息可读性，凸显设计行业专业质感。',
    keywords: '轻奢高级｜设计师沙龙 KV｜人物群像海报｜黑金配色｜家居商业活动｜嘉宾阵容展示',
    applications: ['活动主背景喷绘、线上宣传、活动展板'],
    galleryMargin: 49,
    galleryWidth: 928,
    gallery: [
      { src: '/assets/marketing-details/marketing-05-wall.png', alt: '美宅思享荟活动形象墙', className: 'is-full' },
      { src: '/assets/marketing-details/marketing-05-poster-left.png', alt: '美宅思享荟活动嘉宾海报一' },
      { src: '/assets/marketing-details/marketing-05-poster-center.png', alt: '美宅思享荟活动嘉宾海报二' },
      { src: '/assets/marketing-details/marketing-05-poster-right.png', alt: '美宅思享荟活动嘉宾海报三' },
      { src: '/assets/marketing-details/marketing-05-kv-01.png', alt: '美宅思享荟活动主视觉一', className: 'is-full' },
      { src: '/assets/marketing-details/marketing-05-kv-02.png', alt: '美宅思享荟活动主视觉二', className: 'is-full' },
    ],
  },
  'aigc-01': {
    type: 'marketing',
    title: '葱鸡餐饮',
    galleryOnly: true,
    galleryWidth: 900,
    galleryGap: 0,
    galleryMobileGap: 0,
    gallery: [
      { src: '/assets/aigc-details/aigc-01-01.png', alt: '葱鸡餐饮品牌设计展示一' },
      { src: '/assets/aigc-details/aigc-01-02.png', alt: '葱鸡餐饮品牌设计展示二' },
      { src: '/assets/aigc-details/aigc-01-03.png', alt: '葱鸡餐饮品牌设计展示三' },
      { src: '/assets/aigc-details/aigc-01-04.png', alt: '葱鸡餐饮品牌设计展示四' },
      { src: '/assets/aigc-details/aigc-01-05.png', alt: '葱鸡餐饮品牌设计展示五' },
      { src: '/assets/aigc-details/aigc-01-06.png', alt: '葱鸡餐饮品牌设计展示六' },
      { src: '/assets/aigc-details/aigc-01-07.png', alt: '葱鸡餐饮品牌设计展示七' },
      { src: '/assets/aigc-details/aigc-01-08.png', alt: '葱鸡餐饮品牌设计展示八' },
      { src: '/assets/aigc-details/aigc-01-09.png', alt: '葱鸡餐饮品牌设计展示九' },
      { src: '/assets/aigc-details/aigc-01-10.png', alt: '葱鸡餐饮品牌设计展示十' },
      { src: '/assets/aigc-details/aigc-01-11.png', alt: '葱鸡餐饮品牌设计展示十一' },
      { src: '/assets/aigc-details/aigc-01-12.png', alt: '葱鸡餐饮品牌设计展示十二' },
      { src: '/assets/aigc-details/aigc-01-13.png', alt: '葱鸡餐饮品牌设计展示十三' },
      { src: '/assets/aigc-details/aigc-01-14.png', alt: '葱鸡餐饮品牌设计展示十四' },
    ],
  },
  'package-01': {
    title: '靖西-百香果（大众版）',
    hero: '/assets/package-details/package-01-hero.jpg',
    background:
      '靖西百香果，产自北纬 22° 的广西靖西壮乡，扎根海拔 800 米高负氧离子生态山水间。依托当地得天独厚的山地气候与自然生态资源，立足乡村特色农产发展，深耕百香果特色果品产业。坚守原生态种植理念，依托本土优良的自然环境，打造具有地域辨识度的特色水果产品，把壮乡山水孕育的优质百香果带给广大消费者，传递乡土生态果品的天然风味。',
    concept: [
      '包装设计以锦绣山水，出好水果为核心创意，提取靖西壮乡山水地貌作为视觉灵感，用水墨写意的青山山峦，呼应当地“金山银山满壮乡”的生态地域特质。',
      '色彩上采用清新的青绿色搭配写意泼彩色块，融合百香果实物图像，直观展现果品本体，将地域风光、壮乡文化与农产品属性融为一体。整体版式将地域人文介绍、产品品质说明、认证标识组合排布，兼顾礼盒的观赏性与产品信息的可读性。',
      '整体视觉意在表达好山水孕育好果子，凸显产地生态优势，强化靖西百香果的地域品牌记忆，让包装既是产品礼盒，也是地域乡土文化的展示载体。',
    ],
    gallery: [
      { src: '/assets/package-details/package-01-gallery-01.jpg', alt: '靖西百香果大众版礼盒展示' },
      { src: '/assets/package-details/package-01-gallery-02.jpg', alt: '靖西百香果大众版组合包装展示' },
      {
        src: '/assets/package-details/package-01-gallery-03.png',
        alt: '靖西百香果大众版开箱展示',
        className: 'has-gray-background offset-up-one',
      },
    ],
  },
  'package-02': {
    title: '靖西-百香果（送礼版）',
    hero: '/assets/package-details/package-02-hero.jpg',
    background:
      '靖西百香果源自广西靖西壮乡，坐落于北纬 22° 黄金水果种植带，坐拥海拔 800 米高负氧离子的山水生态环境。依托当地乡村特色农业发展，立足得天独厚的山地气候与原生态种植条件，挖掘本土特色果品优势。以地域生态资源为根基，打造具有壮乡辨识度的优质农产，将锦绣山水孕育的地道百香果，作为乡村特色好物推向市场，传递乡土果品天然、地道的品质内核。',
    concept: [
      '本款礼盒包装以地域礼赠、山水壮乡作为核心设计方向。整体选用喜庆大气的橙红作为主色调，搭配烫金质感的线条纹样，塑造高端礼盒的礼赠属性。',
      '视觉提取靖西山水、古亭楼阁等地域人文元素，以金色线描山水插画进行呈现，结合品牌专属“百”字创意图形，把百香果产品意象、壮乡山水文化符号融为一体。徽章式认证标识强化产品品质背书，文字信息规整排布，兼顾礼盒的仪式感与信息可读性。',
      '色彩与纹样的搭配，既契合节日送礼的使用场景，又通过传统国风视觉语言，传递“锦绣山水出好果”的产品内核，强化靖西百香果的地域品牌形象，体现乡土好物的精致礼赠价值。',
    ],
    gallery: [
      { src: '/assets/package-details/package-02-gallery-01.jpg', alt: '靖西百香果送礼版礼盒展示' },
      { src: '/assets/package-details/package-02-gallery-02.jpg', alt: '靖西百香果送礼版俯视展示' },
      { src: '/assets/package-details/package-02-gallery-03.jpg', alt: '靖西百香果送礼版包装结构展示' },
    ],
  },
  'package-03': {
    title: '“粽”头彩端午礼盒',
    hero: '/assets/package-details/package-03-hero.jpg',
    background:
      '本品牌根植于传统端午民俗文化，深耕端午节日礼赠赛道，专注打造兼具传统文化底蕴与现代审美的粽子礼盒。品牌挖掘端午龙舟、食粽祈福的民俗内核，立足本土风味，严选优质食材，兼顾节日馈赠、商务礼尚往来等多元场景。不止传递粽子本身的美味，更希望借礼盒载体，传承端午美好祝愿，让传统节日礼物摆脱陈旧感，适配当代人的审美与送礼需求。',
    concept: [
      '礼盒以端午核心文化符号作为创意原点，主题“‘粽’头彩”一语双关，取中头彩吉祥寓意，寄托拔得头筹、万事顺遂的美好期许。',
      '主视觉选用沉稳的墨绿色搭配烫金工艺，绿色呼应粽叶自然本色，金色烘托节日华贵喜庆的氛围感；画面融入飞龙、祥云、粽子等端午经典元素，将龙舟竞渡的民俗意象以简约国风线条演绎，传统书法字体强化国风气韵。',
      '整体包装摒弃繁复堆砌，将传统民俗与现代高级感相结合，烫金工艺提升礼盒触感与精致度，色彩搭配庄重大气，既保留端午浓厚文化氛围感，又适配商务、亲友馈赠的多元使用场景，实现传统文化与现代礼品包装的融合，强化礼盒的仪式感与记忆点。',
    ],
    galleryGap: 60,
    gallery: [
      { src: '/assets/package-details/package-03-gallery-01.jpg', alt: '粽头彩端午礼盒陈列展示' },
      { src: '/assets/package-details/package-03-gallery-02.jpg', alt: '粽头彩端午礼袋展示' },
      { src: '/assets/package-details/package-03-gallery-03.jpg', alt: '粽头彩端午礼盒实物展示' },
    ],
  },
}

function StoryLabel({ children, english }) {
  return (
    <p className="project-detail-story__label">
      <span>{children}</span>
      <span>{english}</span>
      <span>{english === 'Brand' ? 'background' : 'concept'}</span>
    </p>
  )
}

function MarketingStory({ project }) {
  return (
    <div className="marketing-detail-story">
      <section className="marketing-detail-story__section">
        <p className="marketing-detail-story__label">
          项目背景 <span>Project Introduction</span>
        </p>
        <p className="marketing-detail-story__copy">{project.background}</p>
      </section>

      <section className="marketing-detail-story__section">
        <p className="marketing-detail-story__label">
          设计思路 <span>Design Concept</span>
        </p>
        <p className="marketing-detail-story__copy">{project.concept}</p>
      </section>
    </div>
  )
}

function MarketingDetail({ project }) {
  const detailStyle = {
    '--marketing-gallery-margin': `${project.galleryMargin ?? 40}px`,
    '--marketing-gallery-width': `${project.galleryWidth ?? 900}px`,
    '--marketing-gallery-gap': `${project.galleryGap ?? 20}px`,
    '--marketing-gallery-mobile-gap': `${project.galleryMobileGap ?? 10}px`,
  }

  return (
    <article
      className={project.galleryOnly
        ? 'project-detail-content marketing-detail-content marketing-detail-content--gallery-only'
        : 'project-detail-content marketing-detail-content'}
      style={detailStyle}
    >
      <h1 className="project-detail-title">{project.title}</h1>
      {!project.galleryOnly && <MarketingStory project={project} />}

      <div className="marketing-detail-gallery">
        {project.gallery.map((image) => (
          <figure
            className={image.className ?? (project.threeColumnGallery ? '' : 'is-full')}
            key={image.src}
          >
            <img src={assetUrl(image.src)} alt={image.alt} loading="lazy" decoding="async" />
          </figure>
        ))}
      </div>

      {!project.galleryOnly && (
        <div className="marketing-detail-meta">
          <section>
            <p className="marketing-detail-meta__label">风格关键词</p>
            <p>{project.keywords}</p>
          </section>
          <section>
            <p className="marketing-detail-meta__label">物料应用</p>
            <p>
              {project.applications.map((line) => <span key={line}>{line}</span>)}
            </p>
          </section>
        </div>
      )}
    </article>
  )
}

function ProjectDetailPage({ projectId }) {
  const project = projectDetails[projectId]

  if (!project) {
    return (
      <main className="project-detail-page">
        <div className="project-detail-header"><SiteHeader fromWorks /></div>
        <div className="project-detail-missing">
          <h1>未找到该作品</h1>
          <a href={appUrl({ search: '?view=works&category=package' })}>返回包装设计</a>
        </div>
      </main>
    )
  }

  if (project.type === 'marketing') {
    return (
      <main className="project-detail-page">
        <div className="project-detail-header"><SiteHeader fromWorks /></div>
        <MarketingDetail project={project} />
      </main>
    )
  }

  return (
    <main className="project-detail-page">
      <div className="project-detail-header"><SiteHeader fromWorks /></div>

      <article className="project-detail-content">
        <h1 className="project-detail-title">{project.title}</h1>
        <img className="project-detail-hero" src={assetUrl(project.hero)} alt={`${project.title}主视觉`} />

        <div className="project-detail-story">
          <section className="project-detail-story__row" aria-labelledby="brand-background-title">
            <StoryLabel english="Brand">品牌背景</StoryLabel>
            <p id="brand-background-title" className="project-detail-story__copy">{project.background}</p>
          </section>

          <section className="project-detail-story__row" aria-labelledby="design-concept-title">
            <StoryLabel english="Design">设计理念</StoryLabel>
            <div id="design-concept-title" className="project-detail-story__copy">
              {project.concept.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        </div>

        <div
          className="project-detail-gallery"
          style={{ '--project-gallery-gap': `${project.galleryGap ?? 50}px` }}
        >
          {project.gallery.map((image) => (
            <figure className={image.className ?? ''} key={image.src}>
              <img src={assetUrl(image.src)} alt={image.alt} loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>
      </article>
    </main>
  )
}

export default ProjectDetailPage
