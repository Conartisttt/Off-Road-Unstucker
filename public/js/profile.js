const newFormHandler = async (event) => {
  try {
    event.preventDefault();

    //Collect values from post form
    const name = document.getElementById('post-name').value.trim();
    const description = document.getElementById('post-desc').value.trim();
    const vehicle_make = document.getElementById('vehicle_make').value.trim();
    const vehicle_model = document.getElementById('vehicle_model').value.trim();
    const contact_method = document.getElementById('contact_method').value;

    const postRequest = async (latitude, longitude) => {
      try {
        if (name && description && vehicle_make && vehicle_model && contact_method) {
          //Send POST request to API endpoint
          const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ name, description, vehicle_make, vehicle_model, contact_method, latitude, longitude }),
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
      } catch (error) {
        console.error(error);
      }
    };

    navigator.geolocation.getCurrentPosition(function (location) {
      const lat = location.coords.latitude;
      const lon = location.coords.longitude;
      // console.log(location.coords.accuracy);
      postRequest(lat, lon);
    });
  } catch (error) {
    console.error(error);
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
const updateButtonHandler = () => {
  const currrentPost = document.getElementById('post');
  currrentPost.classList.add('hide');
  const updatePost = document.getElementById('update-post');
  if (updatePost) {
    updatePost.classList.remove('hide');
  }
};

const cancelButtonHandler = (event) => {
  event.preventDefault();
  const currrentPost = document.getElementById('post');
  currrentPost.classList.remove('hide');
  const updatePost = document.getElementById('update-post');
  if (updatePost) {
    updatePost.classList.add('hide');
  }
};

const updateDatabaseHandler = async (event) => {
  event.preventDefault();
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
      alert('Post Not Updated! Something is missing..');
    }
  }
};

const createPostBtn = document.getElementById('create-post');

if (createPostBtn) {
  createPostBtn.addEventListener('click', newFormHandler);
}

const deletePostBtn = document.getElementById('delete');

if (deletePostBtn) {
  deletePostBtn.addEventListener('click', delButtonHandler);
}

const updatePostBtn = document.getElementById('update');

if (updatePostBtn) {
  updatePostBtn.addEventListener('click', updateButtonHandler);
}

const cancelUpdateBtn = document.getElementById('cancel-btn');

if(cancelUpdateBtn ) {
  cancelUpdateBtn.addEventListener('click', cancelButtonHandler);
}

const updateDatabaseBtn = document.getElementById('update-btn');

if (updateDatabaseBtn) {
  updateDatabaseBtn.addEventListener('click', updateDatabaseHandler);
}