import "../Signup/Signup.css";
export default function Signup() {
  return (
    <div class="container ">
       
      <h1>Join Our Freelance Community</h1>
      <form action="/signup" method="POST">
        <label for="fullname">Full Name</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          required
          placeholder="John Doe"
        />

        <label for="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="john@example.com"
        />

        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          minlength="8"
          placeholder="At least 8 characters"
        />

        <label for="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          required
          minlength="8"
          placeholder="Repeat your password"
        />

        <label for="user-type">I am a</label>
        <select id="user-type" name="user-type" required>
          <option value="">Select your role</option>
          <option value="freelancer">Freelancer</option>
          <option value="client">Client</option>
        </select>

        <button type="submit">Create Account</button>
      </form>

      <div class="social-signup">
        <button class="social-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          <span style={{marginLeft: "8px"}}>GitHub</span>
        </button>
        <button class="social-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span style={{marginLeft: "8px"}}>Google</span>
        </button>
      </div>

      <p class="login-link">
        Already have an account? <a href="final.html">Log in</a>
      </p>
    </div>
  );
}
