export const Actions = Object.freeze({
  LoadVideos: "LoadVideos",
  LoadArticels: "LoadArticels",
  LoadLinks: "LoadLinks",
  UpdateDeletedVideo: "UpdateDeletedVideo",
  UpdateAddingVideo: "UpdateAddingVideo",
  UpdateLikeingVideo: "UpdateLikeingVideo",
  UpdateAddingArticle: "UpdateAddingArticle",
  UpdateAddingLink: "UpdateAddingLink",
  UpdateDeletedLink: "UpdateDeletedLink",
  UpdateEditingLink: "UpdateEditingVideo",
  updateDeletedArticle: "updateDeletedArticle",
  StartWaiting: "StartWaiting",
  StopWaiting: "StopWaiting",
});

export function StartWaiting() {
  return {
    type: Actions.StartWaiting,
  };
}
export function StopWaiting() {
  return {
    type: Actions.StopWaiting,
  };
}
function checkForErrors(response) {
  console.log(response);
  if (!response) {
   
    throw Error(`${response.status}:${response.statusText}`);
  }
  return response;
}

export function updateDeletedArticle(data_id) {
  return {
    type: Actions.updateDeletedArticle,
    payload: data_id,
  };
}
export function LoadVideos(video) {
  return {
    type: Actions.LoadVideos,
    payload: video,
  };
}
/**
 *
 * @param {*} card
 */
export function UpdateEditingLink(link) {
  return {
    type: Actions.LoadVideos,
    payload: link,
  };
}
export function loadLinks(links) {
  return {
    type: Actions.LoadLinks,
    payload: links,
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
export function UpdateAddingVideo(video) {
  return {
    type: Actions.UpdateAddingVideo,
    payload: video,
  };
}
export function UpdateLikeingVideo(id) {
  return {
    type: Actions.UpdateLikeingVideo,
    payload: id,
  };
}
export function UpdateDeletedLink(id) {
  return {
    type: Actions.UpdateDeletedLink,
    payload: id,
  };
}
export function UpdateAddingArticle(article) {
  return {
    type: Actions.UpdateAddingArticle,
    payload: article,
  };
}

export function UpdateAddingLink(link) {
  return {
    type: Actions.UpdateAddingLink,
    payload: link,
  };
}



const live = 'https://project2.yanettrading.me:8442';

export function fetchVideos() {
  return (dispatch) => {
    fetch(`${live}/videos`)
      .then(checkForErrors)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          dispatch(LoadVideos(data.videos));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}



export function deleteVideo(data_id) {
  const option = {
    method: "DELETE",
  };
  return (dispatch) => {
    fetch(`${live}/videos/${data_id}`, option)
      .then(checkForErrors)
      .then((response) => response.json)
      .then((data) => {
        console.log(data_id);
        dispatch(updateDeletedVideo(data_id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function addVideo(video) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  };

  return (dispatch) => {
    fetch(`${live}/videos`, options)
      .then(checkForErrors)
      .then((response) => response.json)
      .then((data) => {
        dispatch(UpdateAddingVideo(video));
      });
  };
}

export function likeVideo(id) {
  const options = {
    method: "PATCH",
  };
  return (dispatch) => {
    fetch(`${live}/videos/${id}`, options)
      .then(checkForErrors)
      .then((response) => response.json)
      .then((data) => {
        if (data.ok) {
          dispatch(UpdateLikeingVideo(id));
        }
      });
  };
}




export function fetchArticles() {
  const options = {
    method: "GET",
  };
  return (dispatch) => {
    fetch(`${live}/articles`, options)
      .then(checkForErrors)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          dispatch(loadArticels(data.articles));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function sendEmail(emailInfo) {
  const options = {
    method: "POST",
  };
  fetch(
    `${live}/articles/email/${emailInfo.data_id}/${emailInfo.email}`,
    options
  )
    .then(checkForErrors)
    .then((response) => response.json)
    .then((data) => {
      if (data.ok) {
      }
    });
}
export function removeArticle(data_id) {
  const option = {
    method: "DELETE",
  };
  return (dispatch) => {
    fetch(`${live}/videos/${data_id}`, option)
      .then(checkForErrors)
      .then((response) => response.json)
      .then((data) => {
        dispatch(updateDeletedArticle(data_id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function AddArticle(article) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(article),
  };
  return (dispatch) => {
    fetch(`${live}/articles`, options)
      .then(checkForErrors)
      .then((response) => response.json)
      .then((data) => {
        if (data.ok) {
          article.data_id = data.data_id;
          dispatch(UpdateAddingArticle(article));
        }
      });
  };
}



export function fetchLinks() {
  return (dispatch) => {
    fetch(`${live}/links`)
      .then(checkForErrors)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          console.log(data);
          dispatch(loadLinks(data.links));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function AddLink(link) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(link),
  };

  return (dispatch) => {
    fetch(`${live}/links`, options)
      .then(checkForErrors)
      .then((response) => response.json)
      .then((data) => {
        if (data.ok) {
          link.data_id = data.data_id;
          dispatch(UpdateAddingLink(link));
        }
      });
  };
}

export function deleteLink(data_id) {
  const option = {
    method: "DELETE",
  };
  return (dispatch) => {
    fetch(`${live}/videos/${data_id}`, option)
      .then(checkForErrors)
      .then((response) => response.json)
      .then((data) => {
        console.log(data_id);
        dispatch(UpdateDeletedLink(data_id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function editLink(card) {
  console.log(card);
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  };
  return (dispatch) => {
    fetch(`${live}/links/edit`, options)
      .then(checkForErrors)
      .then((response) => response.json)
      .then((data) => {
        console.log(data);
        if (data.ok) {
          dispatch(UpdateEditingLink(card));
        }
      });
  };
}
