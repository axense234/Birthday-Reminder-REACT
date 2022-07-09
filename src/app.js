import React from "react";
// Import People
import { people } from "./people";

export const People = () => {
  const [friends, setFriends] = React.useState(people);

  const handleClearAll = () => {
    setFriends([]);
  };
  return (
    <div className='main-content'>
      <h2>
        <span>{friends.length === 0 ? "0" : friends.length}</span> birthdays
        today
      </h2>
      {friends.map((person) => {
        const { img, name, age } = person;
        return (
          <div className='person'>
            <img src={img} alt='' />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </div>
        );
      })}
      {friends.length === 0 ? null : (
        <button onClick={() => handleClearAll()}>Clear All</button>
      )}
    </div>
  );
};
