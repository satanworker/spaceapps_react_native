import { handleActions, createAction } from 'redux-actions'

// ---
// CONSTANTS
// ---

export const POST_FIRE = 'POST_FIRE'
export const FIRE_TOGGLE_LOADING = 'FIRE_TOGGLE_LOADING'

//---
// ACTIONS CREATORS 
//---

export const postFire = createAction(POST_FIRE)
export const fireToggleLoading = createAction(FIRE_TOGGLE_LOADING)

const initialState = {
  loading: false,
  error: '',
  data: {}
}

export default handleActions({
  [FIRE_TOGGLE_LOADING]: (state, action) => ({
    ...state, loading: action.payload
  })
}, initialState)
