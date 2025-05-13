export function calculatePayouts(articles, rate) {
  const payouts = {}
  articles.forEach(article => {
    if (!payouts[article.author]) payouts[article.author] = 0
    payouts[article.author] += rate
  })
  return payouts
}
