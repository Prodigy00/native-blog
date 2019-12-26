import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const ADD_BLOG_POST = "add_blog_post";
const DELETE_BLOG_POST = "delete_blog_post";
const EDIT_BLOG_POST = "edit_blog_post";
const GET_BLOG_POSTS = "get_blog_posts";

// reducer
const blogReducer = (state, action) => {
  switch (action.type) {
    case GET_BLOG_POSTS:
      return action.payload;
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
const getBlogPosts = dispatch => async () => {
  const response = await jsonServer.get("/blogposts");
  dispatch({ type: GET_BLOG_POSTS, payload: response.data });
};
const addBlogPost = dispatch => async (title, content, callback) => {
  await jsonServer.post("/blogposts", { title, content });
  callback ? callback() : null;
};

const editBlogPost = dispatch => async (id, title, content, callback) => {
  await jsonServer.put(`/blogposts/${id}`, { title, content });
  dispatch({ type: EDIT_BLOG_POST, payload: { id, title, content } });
  callback ? callback() : null;
};

const deleteBlogPost = dispatch => async id => {
  await jsonServer.delete(`blogposts/${id}`);
  dispatch({ type: DELETE_BLOG_POST, payload: id });
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
