// React state hook import.
import { useState } from 'react'
// HTTP requests ke liye Axios import.
import axios from 'axios'
// Component specific CSS import.
import './App.css'

// Main React component.
const App = () => {
  // Backend se aane wala data yahan store hoga.
  const [data, setData] = useState(null)
  // API call chal rahi ho to loading true rahega.
  const [loading, setLoading] = useState(false)
  // API fail ho to error message yahan store hoga.
  const [error, setError] = useState('')

  // Button click par backend API call karne wala async function.
  const fetchBackendData = async () => {
    // Request start hote hi loading ON.
    setLoading(true)
    // Naya request start karne se pehle purana error clear.
    setError('')

    try {
      // Agar .env me URL diya hai to use karo, warna localhost:3000 use karo.
      const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'
      // Axios GET request backend endpoint par.
      const response = await axios.get(`${apiBaseUrl}/api/hello`)
      // Response data ko state me save karo.
      setData(response.data)
    } catch (err) {
      // Error handle karke user-friendly message dikhana.
      setError(err?.message || 'Request failed')
    } finally {
      // Success ya failure dono case me loading OFF.
      setLoading(false)
    }
  }

  return (
    // Main container.
    <div className='app'>
      <h1>Axios Backend Connection Demo</h1>

      <p>Button click karke backend se data fetch karo.</p>

      {/* Button: API call trigger karta hai, loading me disabled rahega. */}
      <button onClick={fetchBackendData} disabled={loading}>
        {/* Loading state ke hisab se button text change hota hai. */}
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>

      {/* Error state me red error text show hoga. */}
      {error && <p className='error'>Error: {error}</p>}

      {/* Data milne par card me backend response render hota hai. */}
      {data && (
        <div className='card'>
          <p><strong>Message:</strong> {data.message}</p>
          <p><strong>Success:</strong> {String(data.success)}</p>
          <p><strong>Time:</strong> {data.time}</p>
        </div>
      )}
    </div>
  )
}

export default App
