import {Actions} from './actions';

const InitialState = {
    
    videos: [],
    notes: [],
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
        default:
        return  state;
    }
}



