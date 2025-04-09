import React from "react";

const ProfileCard = ({ avatar_url, login, name, followers, following, public_repos }) => {
  return (
    <div className="max-w-md border-2 border-dashed border-indigo-500 p-6 rounded-xl bg-black/40 shadow-lg flex flex-col items-center space-y-6">
      <img
        src={avatar_url}
        alt={login}
        className="w-32 h-32 rounded-full shadow-2xl object-cover"
      />
      <h1 className="text-2xl font-bold text-pink-500">{name}</h1>
      <p className="text-lg font-semibold italic text-yellow-400 bg-black/60 px-4 py-1 rounded-md">
        @{login}
      </p>

      <div className="grid grid-cols-3 gap-6 w-full">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold text-pink-500">{followers}</h2>
          <p className="text-sm font-semibold italic text-yellow-400 bg-black/60 px-2 py-1 rounded-md">
            Followers
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold text-pink-500">{following}</h2>
          <p className="text-sm font-semibold italic text-yellow-400 bg-black/60 px-2 py-1 rounded-md">
            Following
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold text-pink-500">{public_repos}</h2>
          <p className="text-sm font-semibold italic text-yellow-400 bg-black/60 px-2 py-1 rounded-md">
            Repos
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
