import * as PostApi from '../api/PostRequest'

export const getTimeLinePosts = (id) => async (dispatch) => {
  dispatch({ type: 'RETRIEVING_START' })
  try {
    const { data } = await PostApi.getTimeLinePosts(id)
    dispatch({ type: 'RETRIEVING_SUCCESS', data: data })
  } catch (error) {
    dispatch({ type: 'RETRIEVING_FAIL' })
    console.log(error)
  }
}

export const getAllPosts = () => async (dispatch) => {
  console.log('Received request for all posts')
  dispatch({ type: 'LOADING' })
  try {
    const { data } = await PostApi.getAllPosts()
    dispatch({ type: 'FETCH_ALL_POSTS', data: data })
  } catch (error) {
    dispatch({ type: 'FETCHING_FAIL' })
    console.log(error)
  }
}
