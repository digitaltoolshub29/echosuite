import { Link } from 'react-router-dom'

function Privacy() {
  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px', lineHeight: '1.6' }}>
      <Link to="/" className='btn' style={{ marginBottom: '20px' }}>Back to Home</Link>
      <h1 style={{ marginBottom: '20px' }}>Privacy Policy</h1>
      <p style={{ color: '#666' }}>Last updated: February 2026</p>
      
      <h3 style={{ marginTop: '20px' }}>1. Introduction</h3>
      <p>Welcome to Zenith. We respect your privacy and are committed to protecting your personal data.</p>

      <h3 style={{ marginTop: '20px' }}>2. Data We Collect</h3>
      <p>We may collect personal identification information (Name, email address) when you register or subscribe to our newsletter.</p>

      <h3 style={{ marginTop: '20px' }}>3. How We Use Your Data</h3>
      <p>We use your data to provide and improve our AI content generation services and to communicate with you regarding updates.</p>

      <h3 style={{ marginTop: '20px' }}>4. Data Security</h3>
      <p>We implement security measures to maintain the safety of your personal information. We do not sell your data to third parties.</p>
    </div>
  )
}

export default Privacy
