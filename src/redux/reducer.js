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
        articles: state.articles,
        musics: state.musics,
        videos: action.payload,
        isLoadingVideo: false,
      };
    case Actions.LoadArticels:
      return {
        ...state,
        articles: action.payload,
        isLoadingArticles: false,
      };

    case Actions.UpdateDeletedVideo:
      return {
        ...state,
        videos: state.videos.filter(
          (video) => video.data_id !== action.payload
        ),
      };
    case Actions.UpdateAddingVideo:
      return {
        ...state,
        video: [action.payload, ...state.videos],
      };
    case Actions.UpdateAddingArticle:
      return {
        ...state,
        articles: [action.payload, ...state.articles],
      };
    case Actions.UpdateLikeingVideo:
      return state;
    default:
      return state;
  }
}
