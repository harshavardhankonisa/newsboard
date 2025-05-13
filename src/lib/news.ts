export async function fetchNews() {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`)
  const data = await res.json()
  return data.articles.map(a => ({
    title: a.title,
    author: a.author || 'Unknown',
    date: a.publishedAt,
    type: 'news'
  }))
}
