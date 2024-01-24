const newFormHandler = async (event) => {
  event.preventDefault();

  //Collect values from post form
  const name = document.getElementById('post-name').value.trim();
  const description = document.getElementById('post-desc').value.trim();
  const vehicle_make = document.getElementById('vehicle_make').value.trim();
  const vehicle_model = document.getElementById('vehicle_model').value.trim();
  const contact_method = document.getElementById('contact_method').value;


  if (name && description && vehicle_make && vehicle_model && contact_method) {
    //Send POST request to API endpoint
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ name, description, vehicle_make, vehicle_model, contact_method }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  } else {
    alert('Something is missing... failed to create post');
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    //Collect the post ID from the data- in HTML
    const id = event.target.getAttribute('data-id');

    //Send DELETE request to API endpoint
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

// This event listener hides the post and displays update form on click
const updateButtonHandler = async (event) => {
  const currrentPost = document.getElementById('post');
  currrentPost.classList.add('hide');
  const updatePost = document.getElementById('update-post');
  updatePost.classList.remove('hide');
  const createPost = document.getElementById('create-new');
  createPost.classList.add('hide');
}

const updateDatabaseHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    // Collect data from update form
    const id = event.target.getAttribute('data-id');
    const name = document.getElementById('updated-post-name').value.trim();
    const description = document.getElementById('updated-post-desc').value.trim();
    const vehicle_make = document.getElementById('updated-vehicle_make').value.trim();
    const vehicle_model = document.getElementById('updated-vehicle_model').value.trim();
    const contact_method = document.getElementById('updated-contact_method').value;

    if (name && description && vehicle_make && vehicle_model && contact_method && id) {
      // Send PUT request to API endpoint
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, description, vehicle_make, vehicle_model, contact_method }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert('Failed to update post');
      }
    } else {
      alert('Post Not Updated! Something is missing..')
  }
  } 
}

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .getElementById('delete')
  .addEventListener('click', delButtonHandler);

  document.getElementById('update')
  .addEventListener('click', updateButtonHandler);

  document.getElementById('update-btn')
  .addEventListener('click', updateDatabaseHandler);