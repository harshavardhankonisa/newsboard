'use client'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'
import { useAppContext } from '@/context/AppContext'

export default function Chart() {
  const { state } = useAppContext()
  const data = state.articles.reduce((acc, item) => {
    const type = item.type
    const found = acc.find(d => d.type === type)
    if (found) found.count++
    else acc.push({ type, count: 1 })
    return acc
  }, [])

  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey='type' />
      <YAxis />
      <Tooltip />
      <Bar dataKey='count' fill='#60a5fa' />
    </BarChart>
  )
}
