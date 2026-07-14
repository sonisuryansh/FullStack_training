import { useState } from 'react'
import './Dashboard.css'

const articles = [
  { category: 'Design', date: 'Jun 28, 2026', readTime: '6 min read', title: 'Designing interfaces people want to return to', description: 'A practical guide to adding clarity, character, and useful momentum to everyday product screens.', accent: 'coral' },
  { category: 'Development', date: 'Jun 24, 2026', readTime: '8 min read', title: 'The small React patterns that make a big difference', description: 'Simple component decisions that keep a project easier to read, extend, and ship.', accent: 'blue' },
  { category: 'Productivity', date: 'Jun 18, 2026', readTime: '4 min read', title: 'Build a calmer creative workflow', description: 'Use constraints, better notes, and intentional breaks to make room for your best work.', accent: 'yellow' },
  { category: 'Career', date: 'Jun 12, 2026', readTime: '5 min read', title: 'How to show your work while you learn', description: 'A portfolio does not need to be perfect. It needs to tell the story of how you think.', accent: 'purple' },
  { category: 'Development', date: 'Jun 05, 2026', readTime: '7 min read', title: 'A friendly checklist for your next website launch', description: 'The essential details worth checking before you call a project complete.', accent: 'green' },
  { category: 'Design', date: 'May 30, 2026', readTime: '3 min read', title: 'Finding a visual voice for your next project', description: 'Start with feeling, then use type, color, and rhythm to make the experience memorable.', accent: 'pink' },
]

export const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState('All stories')
  const [subscribed, setSubscribed] = useState(false)
  const categories = ['All stories', 'Design', 'Development', 'Productivity', 'Career']
  const visibleArticles = activeCategory === 'All stories' ? articles : articles.filter((article) => article.category === activeCategory)

  return (
    <main className="blog-page">
      <section className="container blog-hero py-5 py-lg-6">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <span className="eyebrow">THE WEEKLY NOTEBOOK</span>
            <h1>A little inspiration for your next <em>big thing.</em></h1>
            <p className="hero-copy">Thoughtful notes on design, development, and building a creative life—made for curious people who like making things.</p>
            <a className="btn btn-dark rounded-pill px-4 py-3 mt-2" href="#latest-stories">Explore the latest stories <span aria-hidden="true">→</span></a>
          </div>
          <div className="col-lg-5">
            <article className="featured-card shadow-lg">
              <div className="featured-art"><span>01</span><div className="sun" /><div className="arch" /></div>
              <div className="p-4 p-lg-5"><span className="article-meta">FEATURED · 8 MIN READ</span><h2>Make space for ideas that feel like you</h2><p>Five gentle ways to turn a scattered idea into a project you are proud to share.</p><a href="#latest-stories" className="article-link">Read the story <span aria-hidden="true">↗</span></a></div>
            </article>
          </div>
        </div>
      </section>
      <section className="container pb-5" id="latest-stories">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-4"><div><span className="eyebrow">FRESH FROM THE JOURNAL</span><h2 className="section-title">Latest stories</h2></div><div className="category-pills" aria-label="Filter articles">{categories.map((category) => <button className={`btn rounded-pill ${activeCategory === category ? 'active' : ''}`} key={category} onClick={() => setActiveCategory(category)} type="button">{category}</button>)}</div></div>
        <div className="row g-4">{visibleArticles.map((article, index) => <div className="col-md-6 col-lg-4" key={article.title}><article className="card h-100 border-0 story-card"><div className={`card-art art-${article.accent}`}><span>{String(index + 2).padStart(2, '0')}</span><i /></div><div className="card-body p-4 d-flex flex-column"><div className="d-flex justify-content-between article-meta mb-3"><span>{article.category}</span><span>{article.readTime}</span></div><h3>{article.title}</h3><p className="mb-4">{article.description}</p><div className="mt-auto d-flex justify-content-between align-items-center"><small>{article.date}</small><a className="round-link" href="#newsletter" aria-label={`Read ${article.title}`}>↗</a></div></div></article></div>)}</div>
      </section>
      <section className="container pb-5"><div className="row g-4 align-items-stretch"><div className="col-lg-7"><div className="about-panel h-100 p-4 p-lg-5"><span className="eyebrow">HELLO, I’M MAYA</span><h2>Notes from a designer who loves the messy middle.</h2><p>I write about thoughtful digital experiences, the craft of making, and the small habits that keep creative work moving forward.</p><a href="/about" className="article-link">More about the blog <span aria-hidden="true">→</span></a></div></div><div className="col-lg-5"><div className="stats-panel h-100 p-4 p-lg-5"><span className="eyebrow">IN NUMBERS</span><div className="row text-center mt-3 g-3"><div className="col-4"><strong>52</strong><span>stories</span></div><div className="col-4"><strong>12k</strong><span>readers</span></div><div className="col-4"><strong>4</strong><span>topics</span></div></div></div></div></div></section>
      <section className="container pb-5" id="newsletter"><div className="newsletter p-4 p-md-5 text-center"><span className="eyebrow">A FRESH NOTE, ONCE A WEEK</span><h2>Good ideas belong in your inbox.</h2><p>Join the newsletter for a thoughtful dose of creative inspiration. No noise, no spam.</p>{subscribed ? <div className="subscription-success">You’re on the list—thank you! ✦</div> : <form className="newsletter-form mx-auto" onSubmit={(event) => { event.preventDefault(); setSubscribed(true) }}><label className="visually-hidden" htmlFor="email">Email address</label><input className="form-control" id="email" type="email" placeholder="Your email address" required /><button className="btn btn-dark" type="submit">Subscribe</button></form>}</div></section>
    </main>
  )
}
