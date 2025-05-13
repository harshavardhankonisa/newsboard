import DashboardClient from '@/components/DashboardClient'
// import Filters from '../../components/Filters'
import { AppProvider } from '@/context/AppContext'

export default async function DashboardPage() {
  return (
    <AppProvider>
      <div className='p-6 space-y-6'>
        <h1 className='text-2xl font-bold'>Dashboard</h1>
        {/* <Filters /> */}
        <DashboardClient />
      </div>
    </AppProvider>
  )
}
