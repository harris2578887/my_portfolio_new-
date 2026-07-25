import React from "react";
import Typewriter from "typewriter-effect";
import { profile } from "../../data/profile";

function Type() {
  return (
    <Typewriter
      options={{
        strings: profile.roles,
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
