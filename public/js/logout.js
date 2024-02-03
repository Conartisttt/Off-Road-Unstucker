const logout = async () => {
  try {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
};

document.querySelector('#logout').addEventListener('click', logout);
