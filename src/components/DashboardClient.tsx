'use client'

import { useEffect } from 'react'
import { useAppContext } from '@/context/AppContext'
import NewsList from './NewsList'

export default function DashboardClient() {
  const { dispatch } = useAppContext()

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
        )
        const data = await res.json()

        const articles = data.articles.map(
          (
            item: {
              title: string
              author: string
              publishedAt: string
            },
            index: number
          ) => ({
            id: `article-${index}`,
            title: item.title,
            author: item.author || 'Unknown',
            type: 'news',
            date: item.publishedAt
          })
        )

        dispatch({ type: 'SET_ARTICLES', payload: articles })
      } catch (error) {
        console.error('Error fetching news:', error)
      }
    }

    fetchArticles()
  }, [dispatch])

  return (
    <div className='space-y-6'>
      <NewsList />
    </div>
  )
}
