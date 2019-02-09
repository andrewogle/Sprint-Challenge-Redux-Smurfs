/*
  Be sure to import in all of the action types from `../actions`
*/
import {FETCH_SMURFS, FETCHING_SMURFS, ADD_SMURF, DELETE_SMURF, DELETING_SMURF, ERROR, ADDING_SMURF} from '../actions/index';
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this*/
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const smurfReducer =(state = initialState,action) =>{
  switch(action.type){
    case FETCH_SMURFS:
      return{
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false
      }
      case FETCHING_SMURFS:
        return{
          ...state,
          fetchingSmurfs: true
        }
      case ADD_SMURF:
      return{
        ...state,
        smurfs: action.payload,
        addingSmurf: true
      }
      case ADDING_SMURF:
      return{
        ...state,
        addingSmurf: true
      }
      case DELETE_SMURF:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.id)
      }
      case DELETING_SMURF:
      return{
        ...state,
        deletingSmurf: true
      }
      case ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        error: action.payload
      }
      default:
      return state;
  }
}