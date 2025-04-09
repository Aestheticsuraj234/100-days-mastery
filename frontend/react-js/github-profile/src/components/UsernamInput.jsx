import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { GlobalContext } from "../context/GlobalContext";
const UsernamInput = () => {
  const [username, setUsername] = useState(null);
  const { githubData, setGithubData, loading, setLoading } =
    useContext(GlobalContext);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setGithubData(data);
      toast.success("Data Fetched Successfully");
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("Error Fetching Data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-row justify-center items-center gap-3"
    >
      <input
        type="text"
        disabled={loading}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Github Username🐈‍⬛"
        className="px-4 py-2 border-2  border-indigo-500 rounded-md bg-black/90 text-indigo-300 font-semibold 
        inline-block
        focus:outline-none
        "
      />

      {/* input */}
      {/* button */}
      <button
        disabled={loading}
        type="submit"
        className="px-4 py-2 border-2  border-pink-500 rounded-md bg-pink-700 text-white font-semibold"
      >
        {
          loading ? "Loading..." : "Search"
        }
      </button>
    </form>
  );
};

export default UsernamInput;
