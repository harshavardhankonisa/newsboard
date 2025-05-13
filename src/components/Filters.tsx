'use client'
import { useAppContext } from '@/context/AppContext'

export default function Filters() {
  const { dispatch } = useAppContext()

  return (
    <div className='flex flex-wrap gap-4 items-end'>
      <input
        placeholder='Author'
        className='input'
        onChange={e => dispatch({ type: 'SET_FILTER_AUTHOR', payload: e.target.value })}
      />
      <select onChange={e => dispatch({ type: 'SET_FILTER_TYPE', payload: e.target.value })} className='select'>
        <option value=''>All Types</option>
        <option value='news'>News</option>
        <option value='blog'>Blog</option>
      </select>
    </div>
  )
}
