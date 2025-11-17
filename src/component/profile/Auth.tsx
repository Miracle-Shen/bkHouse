import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function Auth() {
  // State to manage loading status
  const [loading, setLoading] = useState(false)
  // State to store the user's email input
  const [email, setEmail] = useState('')

  // Function to handle login via magic link
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault() 

    setLoading(true) // Set loading state to true
    const { error } = await supabase.auth.signInWithOtp({ email }) // Call Supabase to send magic link

    if (error) {
      // Show error message if login fails
      alert(error.error_description || error.message)
    } else {
      // Show success message if login succeeds
      alert('Check your email for the login link!')
    }
    setLoading(false) // Reset loading state
  }

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">注册</h1>
        <p className="description">Sign in via magic link with your email below</p>
        <form className="form-widget" onSubmit={handleLogin}>
          <div>
            {/* Input field for email */}
            <input
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)} // Update email state on input change
            />
          </div>
          <div>
            {/* Button to trigger magic link login */}
            <button className={'button block'} disabled={loading}>
              {loading ? <span>Loading</span> : <span>Send magic link</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}