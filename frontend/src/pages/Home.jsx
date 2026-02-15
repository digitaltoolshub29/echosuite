import { Link } from 'react-router-dom'
import { FaYoutube, FaPenNib, FaTwitter, FaArrowRight, FaCheckCircle } from 'react-icons/fa'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '80px 20px', backgroundColor: '#fff', borderRadius: '20px', marginBottom: '60px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: '#2c3e50', lineHeight: '1.2', fontWeight: '800' }}>
          Stop Wasting Your Content <br />
          <span style={{ color: '#4a90e2' }}>Recycle It with AI ♻️</span>
        </h1>
        <p style={{ fontSize: '1.3rem', color: '#666', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
          Turn one YouTube video into unlimited Blog Posts, Tweets, and LinkedIn articles in seconds. Built for Creators, by Creators.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <Link to='/register' className='btn btn-block' style={{ padding: '15px 40px', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px', borderRadius: '50px' }}>
            Get Started Free <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', padding: '40px 0', marginBottom: '60px' }}>
        <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }}>
          <FaYoutube size={50} color='#FF0000' style={{ marginBottom: '20px' }} />
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Video to Text</h3>
          <p style={{ color: '#666' }}>Extract accurate transcripts instantly from any YouTube video URL.</p>
        </div>
        <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }}>
          <FaPenNib size={50} color='#4a90e2' style={{ marginBottom: '20px' }} />
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>AI Blog Writer</h3>
          <p style={{ color: '#666' }}>Generate SEO-optimized blog posts ready to publish on your site.</p>
        </div>
        <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }}>
          <FaTwitter size={50} color='#1da1f2' style={{ marginBottom: '20px' }} />
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Viral Tweets</h3>
          <p style={{ color: '#666' }}>Create engaging Twitter threads automatically to grow your audience.</p>
        </div>
      </section>

      {/* How It Works Section (New!) */}
      <section style={{ padding: '60px 20px', backgroundColor: '#f8f9fa', borderRadius: '20px', marginBottom: '60px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#333' }}>How It Works ⚙️</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px', textAlign: 'left' }}>
          
          <div style={{ flex: '1', minWidth: '250px', padding: '20px' }}>
            <h1 style={{ fontSize: '4rem', color: '#e0e0e0', margin: '0' }}>01</h1>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Copy URL</h3>
            <p style={{ color: '#666' }}>Grab the link of any YouTube video you want to repurpose.</p>
          </div>

          <div style={{ flex: '1', minWidth: '250px', padding: '20px' }}>
            <h1 style={{ fontSize: '4rem', color: '#e0e0e0', margin: '0' }}>02</h1>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Paste & Click</h3>
            <p style={{ color: '#666' }}>Paste it into EchoSuite and hit the magic Generate button.</p>
          </div>

          <div style={{ flex: '1', minWidth: '250px', padding: '20px' }}>
            <h1 style={{ fontSize: '4rem', color: '#e0e0e0', margin: '0' }}>03</h1>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Publish</h3>
            <p style={{ color: '#666' }}>Copy your new Blog Post and Tweets and share them everywhere!</p>
          </div>

        </div>
      </section>

      {/* CTA Section (New!) */}
      <section style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#2c3e50', borderRadius: '20px', color: '#fff', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready to Scale Your Content?</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#ccc' }}>Join creators who are saving 10+ hours a week.</p>
        <Link to='/register' className='btn' style={{ backgroundColor: '#4a90e2', border: 'none', padding: '15px 40px', fontSize: '1.2rem', borderRadius: '50px', color: '#fff' }}>
          Get Started Now
        </Link>
      </section>

      {/* Simple Footer (New!) */}
      <footer style={{ textAlign: 'center', padding: '20px', color: '#888', borderTop: '1px solid #eee', marginTop: '40px' }}>
        <p>&copy; 2026 EchoSuite. All rights reserved.</p>
        <p style={{ fontSize: '0.9rem', marginTop: '5px' }}>Made with ❤️ for Creators.</p>
      </footer>
    </>
  )
}

export default Home
