import createDataContext from "./createDataContext";

const ADD_BLOG_POST = "add_blog_post";
const DELETE_BLOG_POST = "delete_blog_post";

// reducer
const blogReducer = (state, action) => {
  switch (action.type) {
    case ADD_BLOG_POST:
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 8878788),
          title: `Blog Post #${state.length + 1}`
        }
      ];
    case DELETE_BLOG_POST:
      return state.filter(blogPost => blogPost.id !== action.payload);
    default:
      return state;
  }
};

//actions
const addBlogPost = dispatch => () => dispatch({ type: ADD_BLOG_POST });
const deleteBlogPost = dispatch => id =>
  dispatch({ type: DELETE_BLOG_POST, payload: id });

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
