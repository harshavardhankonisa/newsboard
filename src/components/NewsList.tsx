'use client'

import { useAppContext } from '@/context/AppContext'

export default function NewsList() {
  const { state } = useAppContext()
  const articles = state.articles

  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {articles.map(
        (
          article: {
            title: string
            author: string
            date: string
            type: string
          },
          i: number
        ) => (
          <div key={i} className='border p-4 rounded-lg shadow'>
            <h3 className='font-bold'>{article.title}</h3>
            <p className='text-sm text-gray-500'>
              {article.author} - {new Date(article.date).toDateString()}
            </p>
            <p className='text-sm italic'>{article.type}</p>
          </div>
        )
      )}
    </div>
  )
}
