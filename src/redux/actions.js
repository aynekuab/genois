export const Actions = Object.freeze({
  LoadVideos: "LoadVideos",
  LoadMusics: "LoadMusic",
  LoadArticels: "LoadArticels",
  LoadLink: "LoadLink",
  UpdateDeletedVideo: "UpdateDeletedVideo",
  UpdateAddingVideo:"UpdateAddingVideo",
  UpdateLikeingVideo: "UpdateLikeingVideo"
});

function checkForErrors(response) {
  console.log(response)
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
    type: Actions.UpdateDeletedVideo,
    payload: id,
  };
}
export function UpdateAddingVideo(video){
  return {
    type:Actions.UpdateAddingVideo,
    payload: video
  }
}
export function UpdateLikeingVideo(id){
  return {
    type:Actions.UpdateLikeingVideo,
    payload: id
  }
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

export function deleteVideo(data_id) {
  
  const option = {
    method: "DELETE"
  };
  return (dispatch) => {
    fetch(`${hostvideo}/${data_id}`, option)
      .then(checkForErrors)
      .then((response) => response.json)
      .then((data) => {
          console.log(data_id)
          dispatch(updateDeletedVideo(data_id));
      }).catch(error =>{
        console.log(error)
      });
  };
}

export function addVideo(video){
  const options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(video)
  };
    
    return (dispatch) =>{
      fetch(hostvideo,options)
      .then(checkForErrors)
      .then(response => response.json)
      .then((data) =>{
        dispatch(UpdateAddingVideo(video))
      })
    }
}

export function likeVideo(id){
  const options = {
    method: "PATCH"
  }
  return(dispatch)=>{
    fetch(`${hostvideo}/${id}`,options)
    .then(checkForErrors)
    .then(response => response.json)
    .then((data)=>{
      if(data.ok){
        
        dispatch(UpdateLikeingVideo(id))
      }
      
    })
  }
}
const hostImages = "http://localhost:3443/images";

export function sendEmail(emailInfo){
  const options = {
    method:"POST"
  }
  fetch(`${hostImages}/email`)
  .then(checkForErrors)
  .then(response => response.json)
  .then(data=>{
    if(data.ok){
      //email was sent
    }

  })
}