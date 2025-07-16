import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import HomePage from './pages/HomePage'
import AssessmentPage from './pages/AssessmentPage'
import TherapyPage from './pages/TherapyPage'
import ResourcesPage from './pages/ResourcesPage'
import ProgressPage from './pages/ProgressPage'
import CrisisPage from './pages/CrisisPage'
import CommunityPage from './pages/CommunityPage'
import Header from './components/layout/Header'

function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header user={user} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/assessment" element={<AssessmentPage />} />
            <Route path="/therapy" element={<TherapyPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/crisis" element={<CrisisPage />} />
            <Route path="/community" element={<CommunityPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App