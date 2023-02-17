// React
import { useState } from "react";
// Import People
import { people } from "./data";

const People = () => {
  const [friends, setFriends] = useState(people);

  return (
    <main className='people-container'>
      <h1>Birthdays Today: {friends.length}</h1>
      <div className='people-container__content'>
        {friends.map((friend) => {
          return <Person {...friend} key={friend.id} />;
        })}
      </div>
      {friends.length === 0 ? (
        <button type='button' onClick={() => setFriends(people)}>
          Refresh
        </button>
      ) : (
        <button type='button' onClick={() => setFriends([])}>
          Clear
        </button>
      )}
    </main>
  );
};

const Person = ({ img, name, age }) => {
  return (
    <div className='person-container'>
      <img src={img} alt={name} />
      <div className='person-container__info'>
        <h2>{name}</h2>
        <p>{age}</p>
      </div>
    </div>
  );
};

export default People;
