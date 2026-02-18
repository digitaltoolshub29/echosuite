import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaYoutube, FaPenNib, FaTwitter, FaArrowRight, FaCheck } from 'react-icons/fa'
import { toast } from 'react-toastify'
import axios from 'axios'

function Home() {
  const [email, setEmail] = useState('')

  const onSubscribe = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/newsletter', { email })
      toast.success('Thanks for subscribing! 🎉')
      setEmail('')
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      toast.error(message)
    }
  }

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

      {/* How It Works Section */}
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

      {/* Pricing Section */}
      <section style={{ padding: '40px 0', marginBottom: '60px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#333' }}>Simple Pricing</h2>
        <p style={{ color: '#666', marginBottom: '40px' }}>Start for free, upgrade when you go viral.</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          
          {/* Free Plan */}
          <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '20px', width: '300px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', border: '2px solid #4a90e2' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Beta</h3>
            <h1 style={{ fontSize: '3rem', margin: '20px 0', color: '#333' }}>$0<span style={{ fontSize: '1rem', color: '#888' }}>/mo</span></h1>
            <p style={{ color: '#666', marginBottom: '30px' }}>Perfect for getting started.</p>
            <Link to='/register' className='btn btn-block' style={{ marginBottom: '20px', borderRadius: '50px' }}>Join Beta Now</Link>
            <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><FaCheck color='#4a90e2' /> 5 Videos / Month</li>
              <li style={{ marginBottom: '10px' }}><FaCheck color='#4a90e2' /> AI Blog Posts</li>
              <li style={{ marginBottom: '10px' }}><FaCheck color='#4a90e2' /> Viral Tweets</li>
            </ul>
          </div>

          {/* Pro Plan (Waitlist) - THIS IS THE MODIFIED PART */}
          <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '20px', width: '300px', border: '1px solid #eee' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Pro</h3>
            
            {/* PRICE CHANGED TO TEXT */}
            <h1 style={{ fontSize: '2.5rem', margin: '20px 0', color: '#888', lineHeight: '1.2' }}>
                Coming<br />Soon
            </h1>

            <p style={{ color: '#666', marginBottom: '30px' }}>For serious creators.</p>
            
            {/* BUTTON CHANGED */}
            <button 
              className='btn' 
              style={{ marginBottom: '20px', borderRadius: '50px', width: '100%', backgroundColor: '#4a90e2', color: 'white', border: 'none' }}
              onClick={() => toast.info('You will be notified when Pro is available!')}
            >
              Join Waitlist
            </button>

            <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><FaCheck color='#888' /> Unlimited Videos</li>
              <li style={{ marginBottom: '10px' }}><FaCheck color='#888' /> Priority Support</li>
              <li style={{ marginBottom: '10px' }}><FaCheck color='#888' /> Custom Templates</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#fff', borderRadius: '20px', marginBottom: '40px', border: '1px solid #eee' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '15px', color: '#333' }}>Join the AI Content Revolution 📩</h3>
        <p style={{ color: '#666', marginBottom: '30px' }}>Get weekly tips on how to grow your channel using AI.</p>
        
        <form style={{ display: 'flex', justifyContent: 'center', gap: '10px', maxWidth: '500px', margin: '0 auto' }} onSubmit={onSubscribe}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            style={{ padding: '15px', borderRadius: '50px', border: '1px solid #ddd', flex: '1', fontSize: '1rem' }} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <button type="submit" className='btn' style={{ borderRadius: '50px', padding: '15px 30px', backgroundColor: '#333', border: 'none', color: '#fff' }}>
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer (Restored Links!) */}
      <footer style={{ textAlign: 'center', padding: '40px 20px', color: '#888', borderTop: '1px solid #eee', marginTop: '40px', backgroundColor: '#f9f9f9' }}>
        <p>&copy; 2026 EchoSuite. All rights reserved.</p>
        <div style={{ marginTop: '10px', fontSize: '0.9rem' }}>
          <Link to="/privacy" style={{ margin: '0 10px', color: '#666' }}>Privacy Policy</Link>
          |
          <Link to="/terms" style={{ margin: '0 10px', color: '#666' }}>Terms of Service</Link>
        </div>
        <p style={{ fontSize: '0.8rem', marginTop: '20px' }}>Made with ❤️ for Creators.</p>
      </footer>
    </>
  )
}

export default Home
