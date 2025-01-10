import { createContext, useContext, useState, useCallback } from 'react'
import Loading from '../components/Loading'

const RouteTransitionContext = createContext()

export function RouteTransitionProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false)

  const startLoading = useCallback(() => {
    setIsLoading(true)
  }, [])

  const stopLoading = useCallback(() => {
    setIsLoading(false)
  }, [])

  return (
    <RouteTransitionContext.Provider value={{ startLoading, stopLoading }}>
      {isLoading && <Loading />}
      {children}
    </RouteTransitionContext.Provider>
  )
}

export function useRouteTransition() {
  const context = useContext(RouteTransitionContext)
  if (!context) {
    throw new Error('useRouteTransition must be used within a RouteTransitionProvider')
  }
  return context
} 