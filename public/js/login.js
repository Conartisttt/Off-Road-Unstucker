const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      // alert(response.statusText);
      <section class="modal hidden">
      <div class="flex">
        <img src="user.png" width="50px" height="50px" alt="user" />
        <button class="btn-close">⨉</button>
      </div>
      <div>
        <h3>Stay in touch</h3>
        <p>
          'Register an account:'
        </p>
      </div>
    <text>'No user found with that information. Please try again!'</text>
      <button class="btn">close</button>
    </section>
      
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  //Collect values from sign up form
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const phone = document.getElementById('phone-number-signup').value.trim();

  if (name && email && password && phone) {
    //Send post request to API endpoint
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, phone }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      <section class="modal hidden">
      <div class="flex">
        <img src="user.png" width="50px" height="50px" alt="user" />
        <button class="btn-close">⨉</button>
      </div>
      <div>
        <h3>Stay in touch</h3>
        <p>
          'Register an account:'
        </p>
      </div>
    <text>(response.statusText)</text>
      <button class="btn">close</button>
    </section>
      
    }
  } else {
    <section class="modal hidden">
      <div class="flex">
        <img src="user.png" width="50px" height="50px" alt="user" />
        <button class="btn-close">⨉</button>
      </div>
      <div>
        <h3>Stay in touch</h3>
        <p>
          'Register an account:'
        </p>
      </div>
    <text>'Something is missing... Please try again'</text>
      <button class="btn">close</button>
    </section>
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
