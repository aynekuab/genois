import {Actions} from './actions';

const InitialState = {
    
    videos: [],
    links: [],
    articles:[],
    musics: []
}

export default function reducer (state=InitialState,action){
    switch (action.type){
        case Actions.LoadVideos:
            return  {...state,
                notes:{},
                articles:{},
                musics:{},
                videos:action.payload,
                isLoading:false
            };
        case Action.DeleteVideo:
            
        default:
        return  state;
    }
}



