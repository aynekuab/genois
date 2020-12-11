import { Actions } from "./actions";

const InitialState = {
  videos: [],
  links: [],
  articles: [],
  musics: [],
};

export default function reducer(state = InitialState, action) {
  switch (action.type) {
    case Actions.LoadVideos:
      return {
        ...state,
        notes: {},
        articles: {},
        musics: {},
        videos: action.payload,
        isLoadingvideo: false,
      };
    case Actions.UpdateDeletedVideo:
      
      return {
        
        ...state,
        videos: state.videos.filter((video) => video.data_id !== action.payload.id)
      };
     
    default:
      return state;
  }
}
