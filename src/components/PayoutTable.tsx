// 'use client'
// import { useAppContext } from '@/context/AppContext'

// export default function PayoutTable() {
//   const { state, dispatch } = useAppContext()

//   const grouped = state.articles.reduce((acc, article) => {
//     if (!acc[article.author]) acc[article.author] = 0
//     acc[article.author] += state.payoutRate
//     return acc
//   }, {})

//   return (
//     <table className='table-auto w-full border'>
//       <thead>
//         <tr>
//           <th className='border p-2'>Author</th>
//           <th className='border p-2'>Total Payout</th>
//         </tr>
//       </thead>
//       <tbody>
//         {Object.entries(grouped).map(([author, payout]) => (
//           <tr key={author}>
//             <td className='border p-2'>{author}</td>
//             <td className='border p-2'>{payout}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   )
// }
