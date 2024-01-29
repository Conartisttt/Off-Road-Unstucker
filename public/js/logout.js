const logout = async () => {
  // Send a POST request to the API endpoint
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.replace('/');
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
  }
};

document.querySelector('#logout').addEventListener('click', logout);
