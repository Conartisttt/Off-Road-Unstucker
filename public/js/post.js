// Update DB to add helperId to post
async function acceptMissionHandler() {
  try {
    const postId = document.getElementById('post_id').value;
    await fetch(`/api/posts/${postId}/accept`, {
      method: 'PATCH',
    });
  } catch (error) {
    console.error(error);
  }
}

const acceptMission = document.getElementById('acceptMissionBtn');

if (acceptMission) {
  acceptMission.addEventListener('click', acceptMissionHandler);
}

//Google Maps Integration

async function initMap(lat, lng) {
  const { Map } = await google.maps.importLibrary('maps');
  const location = {
    lat,
    lng
  };

  const map = new Map(document.getElementById('map'), {
    zoom: 17,
    center: location
  });

  new google.maps.Marker({
    position: location,
    map,
    title: 'SOS',
  });

}

//Unhide google maps div
const unhideDiv = () => {
  const mapDiv = document.getElementById('mapDiv');
  mapDiv.classList.remove('hide');
};

//Get coordinates using fetch request to API (could have been grabbed from HTML but wanted to practice a get request)
const getCoords = async () => {
  try {
    const postId = document.getElementById('post_id').value;
    const postData = await fetch(`/api/posts/${postId}/location`, {
      method: 'GET',
      headers: { 'Content-Type': 'text/html' },
    });
    if (postData.ok) {
      const jsonResponse = await postData.json();
      const latitude = Number(jsonResponse.latitude);
      const longitude = Number(jsonResponse.longitude);
      unhideDiv();
      initMap(latitude, longitude);
    }
  } catch (error) {
    console.error(error);
  }
};

const seeLocation = document.getElementById('seeLocationBtn');

if (seeLocation) {
  seeLocation.addEventListener('click', getCoords);
}
