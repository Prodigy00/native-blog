import React from "react";

const BlogContext = React.createContext();

const BlogProvider = ({ children }) => {
  return <BlogContext.Provider>{children}</BlogContext.Provider>;
};
