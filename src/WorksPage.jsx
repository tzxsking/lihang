import { useState } from 'react'
import SiteHeader from './components/SiteHeader'
import { appUrl, assetUrl } from './utils/paths'
import './works.css'

const categories = [
  { id: 'visual', label: '视觉平面' },
  { id: 'marketing', label: '营销运营' },
  { id: 'package', label: '包装设计' },
  { id: 'aigc', label: 'AIGC' },
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
      title: '毛铺草本年份酒系列BANNER',
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
  ],
}

function matchesFilter(item, filter) {
  if (filter === 'all') return true
  if (filter === 'other') return item.category !== 'visual'
  return item.category === filter
}

function getInitialFilter() {
  const category = new URLSearchParams(window.location.search).get('category')
  const filters = ['all', 'other', ...categories.map((item) => item.id)]

  return filters.includes(category) ? category : 'all'
}

function WorksPage() {
  const [activeFilter, setActiveFilter] = useState(getInitialFilter)
  const featuredProjects = categoryProjects[activeFilter]

  return (
    <main className="works-page">
      <div className="works-header">
        <SiteHeader fromWorks />
      </div>

      <div className="works-shell">
        <nav className="works-sidebar" aria-label="作品分类">
          {categories.map((category) => (
            <button
              className={activeFilter === category.id ? 'is-active' : ''}
              type="button"
              aria-pressed={activeFilter === category.id}
              onClick={() => setActiveFilter(category.id)}
              key={category.id}
            >
              {category.label}
            </button>
          ))}
        </nav>

        <section
          className={featuredProjects ? 'works-main works-main--projects' : 'works-main'}
          aria-label="作品展示"
        >
          {featuredProjects ? (
            <div className="category-project-grid">
              {featuredProjects.map((project) => {
                const card = (
                  <figure className="category-project-card">
                    <div className="category-project-card__image">
                      <img src={assetUrl(project.image)} alt={project.title} decoding="async" />
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

              <div className="works-gallery">
                {workColumns.map((column, columnIndex) => (
                  <div className="work-column" key={`column-${columnIndex + 1}`}>
                    {column.filter((item) => matchesFilter(item, activeFilter)).map((item, itemIndex) => (
                      <figure
                        className="work-card"
                        style={{ aspectRatio: `275 / ${item.height}` }}
                        key={item.id}
                      >
                        <img
                          src={assetUrl(`/assets/works/work-${String(item.id).padStart(2, '0')}.png`)}
                          alt={`刘航视觉设计作品 ${String(item.id).padStart(2, '0')}`}
                          loading={itemIndex < 2 ? 'eager' : 'lazy'}
                          decoding="async"
                        />
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  )
}

export default WorksPage
