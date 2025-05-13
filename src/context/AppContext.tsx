'use client'

import { createContext, useContext, useReducer, ReactNode } from 'react'

interface Filters {
  author: string
  type: string
  dateRange: [Date | null, Date | null]
}

interface Article {
  id: string
  title: string
  author: string
  type: 'news' | 'blog'
  date: string
}

interface State {
  payoutRate: number
  articles: Article[]
  filters: Filters
}

type Action =
  | { type: 'SET_ARTICLES'; payload: Article[] }
  | { type: 'SET_PAYOUT'; payload: number }
  | { type: 'SET_FILTERS'; payload: Filters }

const initialState: State = {
  payoutRate: 10,
  articles: [],
  filters: {
    author: '',
    type: '',
    dateRange: [null, null]
  }
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_ARTICLES':
      return { ...state, articles: action.payload }
    case 'SET_PAYOUT':
      return { ...state, payoutRate: action.payload }
    case 'SET_FILTERS':
      return { ...state, filters: action.payload }
    default:
      return state
  }
}

interface AppContextType {
  state: State
  dispatch: React.Dispatch<Action>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useAppContext must be used within AppProvider')
  return context
}
