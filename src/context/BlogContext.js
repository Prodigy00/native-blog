import createDataContext from "./createDataContext";

const ADD_BLOG_POST = "add_blog_post";

const blogReducer = (state, action) => {
  switch (action.type) {
    case ADD_BLOG_POST:
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlogPost = dispatch => () => dispatch({ type: ADD_BLOG_POST });

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
