import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SiteHeader from './components/SiteHeader'
import { appUrl, assetUrl } from './utils/paths'
import './works.css'

const categories = [
  { id: 'visual', label: '视觉平面', icon: '/assets/navigation/visual.svg' },
  { id: 'marketing', label: '营销运营', icon: '/assets/navigation/marketing.svg' },
  { id: 'package', label: '包装设计', icon: '/assets/navigation/package.svg' },
  { id: 'aigc', label: 'AIGC', icon: '/assets/navigation/aigc.svg' },
]

const workColumns = [
  [
    { id: 1, height: 590, category: 'visual' },
    { id: 2, height: 370, category: 'marketing' },
    { id: 3, height: 364, category: 'marketing' },
    { id: 4, height: 505, category: 'marketing' },
    { id: 5, height: 512, category: 'marketing' },
    { id: 6, height: 526, category: 'package' },
    { id: 7, height: 542, category: 'marketing' },
    { id: 8, height: 410, category: 'aigc' },
  ],
  [
    { id: 9, height: 375, category: 'visual' },
    { id: 10, height: 373, category: 'visual' },
    { id: 11, height: 601, category: 'marketing' },
    { id: 12, height: 492, category: 'marketing' },
    { id: 13, height: 524, category: 'package' },
    { id: 14, height: 415, category: 'package' },
    { id: 15, height: 410, category: 'aigc' },
    { id: 16, height: 410, category: 'aigc' },
    { id: 17, height: 399, category: 'aigc' },
  ],
  [
    { id: 18, height: 511, category: 'visual' },
    { id: 19, height: 572, category: 'visual' },
    { id: 20, height: 555, category: 'marketing' },
    { id: 21, height: 592, category: 'visual' },
    { id: 22, height: 622, category: 'package' },
    { id: 23, height: 410, category: 'package' },
    { id: 24, height: 410, category: 'aigc' },
  ],
  [
    { id: 25, height: 364, category: 'marketing' },
    { id: 26, height: 366, category: 'marketing' },
    { id: 27, height: 495, category: 'marketing' },
    { id: 28, height: 530, category: 'marketing' },
    { id: 29, height: 434, category: 'marketing' },
    { id: 30, height: 547, category: 'package' },
    { id: 31, height: 530, category: 'package' },
    { id: 32, height: 441, category: 'aigc' },
  ],
]

const otherWorkColumns = [
  [
    { id: 'other-01', height: 576, image: '/assets/other/other-01.png', alt: '高美基因宣传折页与产品资料设计' },
    { id: 'other-02', height: 337, image: '/assets/other/other-02.png', alt: '高美基因泛癌早筛大会展板设计' },
    { id: 'other-03', height: 151, image: '/assets/other/other-03.png', alt: '大宅名品联盟宣传设计' },
    { id: 'other-10', height: 151, image: '/assets/other/other-10.png', alt: '第六空间周年庆全城家装节宣传设计' },
    { id: 'other-11', height: 151, image: '/assets/other/other-11.png', alt: '第六空间首届全城家装节宣传设计' },
  ],
  [
    { id: 'other-04', height: 761, image: '/assets/other/other-04.png', alt: '品牌会员卡与商务物料设计' },
    { id: 'other-05', height: 427, image: '/assets/other/other-05.png', alt: '高美基因展会与品牌宣传设计' },
  ],
  [
    { id: 'other-06', height: 478, image: '/assets/other/other-06.png', alt: '红色品牌手册与宣传物料设计' },
    { id: 'other-07', height: 452, image: '/assets/other/other-07.png', alt: '高美基因数字产品界面设计' },
    { id: 'other-12', height: 682, image: '/assets/other/other-12.png', alt: '高美基因检测产品包装设计' },
  ],
  [
    { id: 'other-08', height: 607, image: '/assets/other/other-08.png', alt: '高美基因产品手册与检测报告设计' },
    { id: 'other-09', height: 668, image: '/assets/other/other-09.png', alt: '高美基因 cfDNA 泛癌早筛展板设计' },
  ],
]

const categoryProjects = {
  marketing: [
    {
      title: '家居建材抖音联动活动',
      image: '/assets/marketing/marketing-card-01.png',
      detailId: 'marketing-01',
    },
    {
      title: '毛铺草本年份酒系列BANNER',
      image: '/assets/marketing/marketing-card-02.jpg',
      detailId: 'marketing-02',
    },
    {
      title: '20大品牌开业+巅峰盛典',
      image: '/assets/marketing/marketing-card-03.png',
      detailId: 'marketing-03',
    },
    {
      title: '左右家居品牌日',
      image: '/assets/marketing/marketing-card-04.jpg',
      detailId: 'marketing-04',
    },
    {
      title: '美宅思享荟・美宅设计师俱乐部',
      image: '/assets/marketing/marketing-card-05.png',
      detailId: 'marketing-05',
    },
  ],
  package: [
    {
      title: '靖西-百香果（大众版）',
      image: '/assets/package/package-card-01.png',
      detailId: 'package-01',
    },
    {
      title: '靖西-百香果（送礼版）',
      image: '/assets/package/package-card-02.png',
      detailId: 'package-02',
    },
    {
      title: '“粽”头彩端午礼盒',
      image: '/assets/package/package-card-03.png',
      detailId: 'package-03',
    },
  ],
  aigc: [
    {
      title: '葱鸡餐饮',
      image: '/assets/aigc/aigc-card-01.png',
      detailId: 'aigc-01',
    },
    {
      title: '年会主视觉AI辅助过程',
      image: '/assets/aigc/aigc-card-yearly.png',
      detailId: 'aigc-02',
    },
  ],
}

function responsiveImageSet(basePath, smallWidth, largeWidth) {
  return `${assetUrl(`${basePath}-${smallWidth}.webp`)} ${smallWidth}w, ${assetUrl(`${basePath}-${largeWidth}.webp`)} ${largeWidth}w`
}

const transparentPixel = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='

function DeferredImage({
  src,
  srcSet,
  mobileSrcSet,
  sizes,
  width,
  height,
  alt,
  eager = false,
}) {
  const imageRef = useRef(null)
  const supportsDeferredLoading = typeof window !== 'undefined' && 'IntersectionObserver' in window
  const [shouldLoad, setShouldLoad] = useState(eager || !supportsDeferredLoading)

  useEffect(() => {
    if (shouldLoad) return undefined

    const image = imageRef.current
    if (!image) return undefined

    const scrollRoot = image.closest('.works-gallery-viewport, .category-project-grid')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShouldLoad(true)
        observer.disconnect()
      },
      {
        root: scrollRoot,
        rootMargin: '480px 0px',
        threshold: 0.01,
      },
    )

    observer.observe(image)
    return () => observer.disconnect()
  }, [shouldLoad])

  return (
    <picture>
      {mobileSrcSet ? (
        <source
          media="(max-width: 760px)"
          srcSet={shouldLoad ? mobileSrcSet : undefined}
          sizes={sizes}
        />
      ) : null}
      <img
        ref={imageRef}
        src={shouldLoad ? src : transparentPixel}
        srcSet={shouldLoad ? srcSet : undefined}
        sizes={sizes}
        width={width}
        height={height}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
      />
    </picture>
  )
}

function imageName(path) {
  return path.split('/').pop().replace(/\.[^.]+$/, '')
}

function getInitialFilter() {
  const category = new URLSearchParams(window.location.search).get('category')
  const filters = ['all', 'other', ...Object.keys(categoryProjects)]

  if (category === 'visual') return 'all'
  return filters.includes(category) ? category : 'all'
}

function WorksPage() {
  const [activeFilter, setActiveFilter] = useState(getInitialFilter)
  const [sidebarExpanded, setSidebarExpanded] = useState(true)
  const featuredProjects = categoryProjects[activeFilter]
  const activeWorkColumns = activeFilter === 'other' ? otherWorkColumns : workColumns

  return (
    <main className="works-page">
      <div className="works-header">
        <SiteHeader fromWorks />
      </div>

      <div className={sidebarExpanded ? 'works-shell' : 'works-shell is-sidebar-collapsed'}>
        <nav
          className={sidebarExpanded ? 'works-sidebar' : 'works-sidebar is-collapsed'}
          aria-label="作品分类"
        >
          <button
            className="works-sidebar-toggle"
            type="button"
            aria-label={sidebarExpanded ? '收起作品分类' : '展开作品分类'}
            aria-expanded={sidebarExpanded}
            title={sidebarExpanded ? '收起作品分类' : '展开作品分类'}
            onClick={() => setSidebarExpanded((expanded) => !expanded)}
          >
            {sidebarExpanded ? <ChevronLeft aria-hidden="true" /> : <ChevronRight aria-hidden="true" />}
          </button>

          {categories.map((category) => {
            const isActive = category.id === 'visual'
              ? ['all', 'other'].includes(activeFilter)
              : activeFilter === category.id

            return (
              <button
                className={isActive ? 'works-category-button is-active' : 'works-category-button'}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(category.id === 'visual' ? 'all' : category.id)}
                key={category.id}
              >
                <img
                  className="works-category-icon"
                  src={assetUrl(category.icon)}
                  width={25}
                  height={25}
                  alt=""
                  aria-hidden="true"
                />
                <span className="works-category-label">{category.label}</span>
                <span className="works-category-tooltip" aria-hidden="true">{category.label}</span>
              </button>
            )
          })}
        </nav>

        <section
          className={featuredProjects ? 'works-main works-main--projects' : 'works-main'}
          aria-label="作品展示"
        >
          {featuredProjects ? (
            <div className="category-project-grid">
              {featuredProjects.map((project) => {
                const optimizedBase = `/assets/optimized/categories/${imageName(project.image)}`
                const card = (
                  <figure className="category-project-card">
                    <div className="category-project-card__image">
                      <DeferredImage
                        src={assetUrl(`${optimizedBase}-340.webp`)}
                        srcSet={responsiveImageSet(optimizedBase, 340, 680)}
                        mobileSrcSet={responsiveImageSet(optimizedBase, 340, 680)}
                        sizes="(max-width: 760px) calc(100vw - 60px), 340px"
                        width={340}
                        height={288}
                        alt={project.title}
                      />
                    </div>
                    <figcaption>{project.title}</figcaption>
                  </figure>
                )

                return project.detailId ? (
                  <a
                    className="category-project-link"
                    href={appUrl({ search: `?view=project&project=${project.detailId}` })}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`在新标签页查看${project.title}`}
                    key={project.detailId}
                  >
                    {card}
                  </a>
                ) : (
                  <div className="category-project-static" key={`${project.title}-${project.image}`}>
                    {card}
                  </div>
                )
              })}
            </div>
          ) : (
            <>
              <div className="works-tabs" role="tablist" aria-label="作品范围">
                <button
                  className={activeFilter === 'all' ? 'is-active' : ''}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === 'all'}
                  onClick={() => setActiveFilter('all')}
                >
                  全部
                </button>
                <button
                  className={activeFilter === 'other' ? 'is-active' : ''}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === 'other'}
                  onClick={() => setActiveFilter('other')}
                >
                  其他
                </button>
              </div>

              <div className="works-gallery-viewport">
                <div className={activeFilter === 'other' ? 'works-gallery works-gallery--other' : 'works-gallery'}>
                  {activeWorkColumns.map((column, columnIndex) => (
                    <div className="work-column" key={`column-${columnIndex + 1}`}>
                      {column.map((item) => {
                        const isOtherWork = Boolean(item.image)
                        const id = isOtherWork ? item.id : `work-${String(item.id).padStart(2, '0')}`
                        const optimizedBase = `/assets/optimized/${isOtherWork ? 'other' : 'works'}/${id}`
                        const smallWidth = isOtherWork ? 180 : 360
                        const largeWidth = isOtherWork ? 275 : 640
                        const isPrimaryWork = !isOtherWork && item.id === 1
                        const mobileSrcSet = isOtherWork
                          ? responsiveImageSet(optimizedBase, smallWidth, largeWidth)
                          : `${assetUrl(`${optimizedBase}-${smallWidth}.webp`)} ${smallWidth}w`

                        return (
                          <figure
                            className="work-card"
                            style={{ aspectRatio: `275 / ${item.height}` }}
                            key={item.id}
                          >
                            <DeferredImage
                              src={assetUrl(`${optimizedBase}-${smallWidth}.webp`)}
                              srcSet={responsiveImageSet(optimizedBase, smallWidth, largeWidth)}
                              mobileSrcSet={mobileSrcSet}
                              sizes="(max-width: 760px) calc((100vw - 40px) / 2), 275px"
                              width={275}
                              height={item.height}
                              alt={item.alt || `刘航视觉设计作品 ${String(item.id).padStart(2, '0')}`}
                              eager={isPrimaryWork}
                            />
                          </figure>
                        )
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  )
}

export default WorksPage
