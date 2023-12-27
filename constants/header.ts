interface NavbarItem {
  title: string
  href?: string
  children?: NavbarItem[]
}

export const navbar: NavbarItem[] = [
  {
    title: '产品',
    children: [
      {
        title: '智能供应链协同平台“跟单猿”',
        href: '/waiting'
      }
    ]
  },
  {
    title: '解决方案',
    children: [
      {
        title: 'MES',
        href: '/waiting'
      }
    ]
  },
  {
    title: '关于我们',
    href: '/about',
    children: [
      { title: '睿朴麟介绍', href: '/about' },
      { title: '资讯动态', href: '/about/news' },
      { title: '雇主品牌', href: '/about/brand' }
    ]
  }
]
