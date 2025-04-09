import React, { useContext } from "react";
import UsernamInput from "./components/UsernamInput";
import { Toaster } from "react-hot-toast";
import ProfileCard from "./components/ProfileCard";
import { GlobalContext } from "./context/GlobalContext";
import EmptyState from "./components/EmptyState";
const App = () => {
  const { githubData } = useContext(GlobalContext);
  console.log(githubData);
  return (
    <section className="h-screen w-screen bg-black/90 flex flex-col justify-start items-center space-y-5 py-10 px-10">
      <Toaster />
      <h1 className="md:text-4xl text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 px-2 py-2 border-2 border-dashed border-indigo-500 rounded-md">
        Welcome to Github Profile Viewer
      </h1>

      <div className="mt-4">
        <UsernamInput />
      </div>

      <div>
        {githubData ? (
          <ProfileCard
            avatar_url={githubData.avatar_url}
            followers={githubData.followers}
            following={githubData.following}
            login={githubData.login}
            name={githubData.name}
            public_repos={githubData.public_repos}
          />
        ) : (
          <EmptyState
            title={"Welcome"}
            description={"Search for a Github User"}
            imageUrl={"/empty-state.svg"}
          />
        )}
      </div>
    </section>
  );
};

export default App;
