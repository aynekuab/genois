export const Actions = Object.freeze({
  LoadVideos: "LoadVideos",
  LoadMusics: "LoadMusic",
  LoadNotes: "LoadNotes",
  LoadArticels: "LoadArticels",
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

export function loadNotes(notes) {
  return {
    type: Actions.LoadNotes,
    payload: notes,
  };
}

export function loadArticels(articels) {
  return {
    type: Actions.LoadArticels,
    payload: articels,
  };
}
const host = "http://localhost:3443/videos";

export function fetchVideos() {
  return (dispatch) => {
    fetch(host)
      .then(checkForErrors)
      .then((response) => response.json())
      .then((data) => {
        if(data.ok){
          dispatch(loadVideos(data.videos))
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
