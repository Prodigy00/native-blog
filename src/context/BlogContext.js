import createDataContext from "./createDataContext";

const ADD_BLOG_POST = "add_blog_post";
const DELETE_BLOG_POST = "delete_blog_post";
const EDIT_BLOG_POST = "edit_blog_post";

// reducer
const blogReducer = (state, action) => {
  switch (action.type) {
    case ADD_BLOG_POST:
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 8878788),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case EDIT_BLOG_POST:
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case DELETE_BLOG_POST:
      return state.filter(blogPost => blogPost.id !== action.payload);
    default:
      return state;
  }
};

//actions
const addBlogPost = dispatch => (title, content, callback) => {
  dispatch({ type: ADD_BLOG_POST, payload: { title, content } });
  callback ? callback() : null;
};

const editBlogPost = dispatch => (id, title, content, callback) => {
  dispatch({ type: EDIT_BLOG_POST, payload: { id, title, content } });
  callback ? callback() : null;
};

const deleteBlogPost = dispatch => id =>
  dispatch({ type: DELETE_BLOG_POST, payload: id });

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: "TEST POST", content: "TEST CONTENT", id: 1 }] //initial state to enhance testing
);
