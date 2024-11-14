import { useState } from "react";
import "./App.css";
import { useAddPostMutation, useGetPostsQuery } from "./store/apiSlice";
import CookieExample from "./components/CookieExample";

function App() {
  const [formData, setFormData] = useState({ title: "", message: "" });
  const { data, isLoading, isError, error, refetch } = useGetPostsQuery();

  const [addPost] = useAddPostMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ ...formData, id: crypto.randomUUID() });
    refetch();
  };

  return (
    <>
      {/* <ul>
        {isLoading ? (
          "Loading..."
        ) : isError ? (
          <h1>{error.error || "Something went wrong"}</h1>
        ) : (
          data.map((post) => (
            <li key={post.id}>
              <h1>{post.title}</h1>
            </li>
          ))
        )}
      </ul> */}
      <form onSubmit={handleSubmit} action="">
        <input
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Title"
          value={formData.title}
        />
        <input
          onChange={handleChange}
          name="message"
          type="text"
          placeholder="message"
          value={formData.message}
        />
        <button>submit</button>
      </form>
      <CookieExample />
    </>
  );
}

export default App;
