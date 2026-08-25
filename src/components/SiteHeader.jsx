import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { appUrl } from '../utils/paths'

const navItems = [
  { label: '首页', hash: 'home' },
  { label: '关于我', hash: 'about' },
  { label: '作品集', hash: 'portfolio' },
  { label: '联系方式', hash: 'contact' },
]

function SiteHeader({ fromWorks = false }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const hrefFor = (hash) => (fromWorks ? appUrl({ hash: `#${hash}` }) : `#${hash}`)

  return (
    <header className="site-header">
      <a className="brand" href={hrefFor('home')} onClick={closeMenu}>Liu Hang</a>
      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? '关闭导航' : '打开导航'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="主导航">
        {navItems.map((item) => (
          <a href={hrefFor(item.hash)} onClick={closeMenu} key={item.hash}>{item.label}</a>
        ))}
      </nav>
    </header>
  )
}

export default SiteHeader
