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

document
  .getElementById('acceptMissionBtn')
  .addEventListener('click', acceptMissionHandler);