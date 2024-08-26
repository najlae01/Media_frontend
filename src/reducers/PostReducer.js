const postReducer = (
  state = {
    posts: [],
    loading: false,
    error: false,
    uploading: false,
  },
  action
) => {
  switch (action.type) {
    case 'UPLOAD_START':
      return { ...state, uploading: true, error: false }
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        posts: [action.data, ...state.posts],
        uploading: false,
        error: false,
      }
    case 'UPLOAD_FAIL':
      return { ...state, uploading: false, error: true }
    case 'FETCH_ALL_POSTS':
      return { ...state, posts: action.data, loading: false }
    default:
      return state
  }
}

export default postReducer
