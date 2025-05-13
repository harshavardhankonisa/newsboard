'use client'
import { useSession } from 'next-auth/react'
// import PayoutTable from '../../../components/PayoutTable'

export default function PayoutPage() {
  const { data: session } = useSession()

  if (session?.user?.role !== 'admin') {
    return <div className='text-red-500 p-6'>Access Denied: Admins only</div>
  }

  return (
    <div className='p-6 space-y-6'>
      <h1 className='text-xl font-semibold'>Payout Manager</h1>
      {/* <PayoutTable /> */}
    </div>
  )
}
