import React, { useState } from "react";
import Search from "./Search";

const allUsers = ["wajeeha", "areesha", "aqsa", "hira"];

const handleSearch = (
  text: string,
  setUsers: React.Dispatch<React.SetStateAction<string[]>>
) => {
  const filteredUsers = allUsers.filter((user) => user.includes(text));
  setUsers(filteredUsers);
};

const shuffleArray = (array: string[]) => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

interface DemoProps {}

function Demo({}: DemoProps) {
  const [users, setUsers] = useState(allUsers);

  const handleShuffle = () => {
    const shuffledUsers = shuffleArray([...users]);
    setUsers(shuffledUsers);
  };

  return (
    <div className="tutorial">
      <button onClick={handleShuffle}>Shuffle</button>
      <Search onChange={(e) => handleSearch(e.target.value, setUsers)} />

      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default Demo;
