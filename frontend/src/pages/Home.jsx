import { Link } from 'react-router-dom'
import { FaYoutube, FaPenNib, FaTwitter } from 'react-icons/fa'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className='heading' style={{ textAlign: 'center', padding: '50px 20px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#2c3e50' }}>
          Stop Wasting Your Content 🛑
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#555', marginBottom: '40px' }}>
          Turn one YouTube video into unlimited Blog Posts, Tweets, and LinkedIn articles in seconds using AI.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <Link to='/register' className='btn btn-reverse' style={{ padding: '15px 40px', fontSize: '1.2rem' }}>
            Get Started for Free 🚀
          </Link>
          <Link to='/login' className='btn' style={{ padding: '15px 40px', fontSize: '1.2rem', backgroundColor: '#fff', color: '#333', border: '1px solid #ddd' }}>
            Login
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className='features' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', padding: '50px 20px', backgroundColor: '#f9f9f9' }}>
        
        <div className='card' style={{ padding: '30px', textAlign: 'center', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <FaYoutube size={50} color='#FF0000' style={{ marginBottom: '20px' }} />
          <h3>Video to Text</h3>
          <p>Extract transcripts instantly from any YouTube video URL.</p>
        </div>

        <div className='card' style={{ padding: '30px', textAlign: 'center', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <FaPenNib size={50} color='#4a90e2' style={{ marginBottom: '20px' }} />
          <h3>AI Blog Writer</h3>
          <p>Generate SEO-optimized blog posts ready to publish.</p>
        </div>

        <div className='card' style={{ padding: '30px', textAlign: 'center', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <FaTwitter size={50} color='#1da1f2' style={{ marginBottom: '20px' }} />
          <h3>Viral Tweets</h3>
          <p>Create engaging Twitter threads automatically.</p>
        </div>

      </section>
    </>
  )
}

export default Home
