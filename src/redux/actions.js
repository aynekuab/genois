export const Actions = Object.freeze({
  LoadVideos: "LoadVideos",
  LoadMusics: "LoadMusic",
  LoadArticels: "LoadArticels",
  LoadLink: "LoadLink",
  UpdateDeletedVideo: "UpdateDeletedVideo",
});

function checkForErrors(response) {
  if (!response) {
    throw Error(`${response.status}:${response.statusText}`);
  }
  return response;
}

export function loadVideos(video) {
  return {
    type: Actions.LoadVideos,
    payload: video,
  };
}

export function loadMusics(music) {
  return {
    type: Actions.LoadMusics,
    payload: music,
  };
}

export function loadArticels(articels) {
  return {
    type: Actions.LoadArticels,
    payload: articels,
  };
}

export function updateDeletedVideo(id) {
  return {
    type: Action.UpdateDeletedVideo,
    payload: id,
  };
}
const hostvideo = "http://localhost:3443/videos";

export function fetchVideos() {
  return (dispatch) => {
    fetch(hostvideo)
      .then(checkForErrors)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          dispatch(loadVideos(data.videos));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function deleteVideo(id) {
  const option = {
    method: "DELETE",
  };
  return (dispatch) => {
    fetch(`${hostvideo}/${id}`, option)
      .then(checkForErrors)
      .then((response) => response.json)
      .then((data) => {
        if (data.ok) {
          dispatch(updateUpdatedVideo(data.id));
        }
      }).catch(error =>{
        console.log(error)
      });
  };
}
