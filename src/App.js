import React from "react";
import PostsList from "./components/PostsList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      {/* RenPostsder the list of Reddit posts */}
      <PostsList />
    </div>
  );
}

export default App;
