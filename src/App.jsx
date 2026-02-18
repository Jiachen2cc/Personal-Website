import { useEffect, useMemo, useState } from 'react'
import { blogs, projects } from './data'

const tabs = [
  { key: 'home', label: '首页' },
  { key: 'projects', label: '项目' },
  { key: 'blog', label: '博客' }
]

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const cached = localStorage.getItem('theme')
    if (cached) {
      setIsDark(cached === 'dark')
      return
    }
    const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(preferredDark)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const title = useMemo(() => {
    if (activeTab === 'projects') return '项目展示'
    if (activeTab === 'blog') return '博客列表'
    return '你好，我是 Jiachen'
  }, [activeTab])

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-10 md:px-8">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-lg font-semibold tracking-wide">Personal Site</h1>
          <div className="flex items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  activeTab === tab.key
                    ? 'bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900'
                    : 'bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setIsDark((v) => !v)}
              className="rounded-full border border-zinc-300 px-4 py-2 text-sm transition hover:bg-zinc-200 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              {isDark ? '浅色' : '深色'}
            </button>
          </div>
        </header>

        <main className="flex-1">
          <section className="mb-8 rounded-3xl bg-white p-8 shadow-soft transition dark:bg-zinc-900">
            <h2 className="mb-3 text-3xl font-bold tracking-tight">{title}</h2>
            {activeTab === 'home' && (
              <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                <p>
                  我是一名专注于 AI 与 Web 工程的开发者，喜欢把复杂问题拆解成清晰、可维护的产品体验。
                </p>
                <p>
                  这个网站用于沉淀我的项目实践、技术思考与长期写作。欢迎通过 GitHub 与我交流。
                </p>
              </div>
            )}
          </section>

          {activeTab === 'projects' && (
            <section className="grid gap-4 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-2xl bg-white p-6 shadow-soft transition dark:bg-zinc-900"
                >
                  <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                  <p className="mb-4 text-zinc-700 dark:text-zinc-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={`${project.title}-${item}`}
                        className="rounded-full bg-zinc-200 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </section>
          )}

          {activeTab === 'blog' && (
            <section className="space-y-4">
              {blogs.map((post) => (
                <article
                  key={post.title}
                  className="rounded-2xl bg-white p-6 shadow-soft transition dark:bg-zinc-900"
                >
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                    <time className="text-sm text-zinc-500 dark:text-zinc-400">{post.date}</time>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300">{post.summary}</p>
                </article>
              ))}
            </section>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
