import React from 'react'
import classes from './signup.module.css'
import { Link } from 'react-router-dom';
function Auth() {
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20250504041148"
          alt=""
        />
      </Link>
      {/* form  */}

      <div className={classes.login_container}>
        <h1> Sign In</h1>
        <form action="">
          <div>
            <label for="email">Email</label>

            <input type="email" id="email" />
          </div>

          <div>
            <label for="password">Password</label>

            <input type="password" id="password" />
          </div>

<button className={classes.login_signinbutton}>Sign In</button>



        </form>
        {/* agreement */}
        <p>
          By signing iny your account the amazon. condition of use of terms .please see our privcy notice,our cookies notice and out interest.
        </p>
        {/* create acount  */}
        <button className={classes.login_registerButton}>Create your Amazone Account</button>

      </div>
    </section>
  );
}

export default Auth
