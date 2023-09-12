import React from "react";
import { signOut, getAuth } from "firebase/auth";

export function LogoutBtn({ imgUrl }) {
  const auth = getAuth();
  async function handleSignOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <button
        className="my-3 mx-2.5 px-4 py-2 w-36 rounded-md active:bg-white flex focus:shadow-sm items-center"
        onClick={() => {
          handleSignOut();
        }}
      >
        <img
          src={imgUrl}
          className="h-6 w-6 mr-2 focus:bg-black"
          alt="Home Icon"
        />
        <p className="text-left mr-8 font-normal text-xs">Sign Out</p>
      </button>
    </div>
  );
}
