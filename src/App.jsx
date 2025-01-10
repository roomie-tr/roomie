import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { LoadingProvider } from './context/LoadingContext'
import { RouteTransitionProvider, useRouteTransition } from './context/RouteTransitionContext'
import { useEffect } from 'react'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import AboutUs from './pages/AboutUs'
import Navbar from './components/Navbar'

function AppContent() {
  const location = useLocation()
  const { startLoading, stopLoading } = useRouteTransition()

  useEffect(() => {
    let mounted = true;

    const handleRouteChange = async () => {
      startLoading();
      await new Promise(resolve => setTimeout(resolve, 1500));
      if (mounted) {
        stopLoading();
      }
    };

    handleRouteChange();

    return () => {
      mounted = false;
      stopLoading();
    };
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<ProductPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <LoadingProvider>
      <RouteTransitionProvider>
        <Router>
          <AppContent />
        </Router>
      </RouteTransitionProvider>
    </LoadingProvider>
  )
}

export default App
