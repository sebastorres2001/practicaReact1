import React, { useState } from 'react';
import { getRandomNumber as random } from './assets/utils/getRandomNumber';
import UserCard from './components/UserCard';

import users from './assets/users.json';

const App = () => {
  const [userIndex, setUserIndex] = useState(random(0, users.length - 1));
  const user = users[userIndex];
  const changeUser = () => {
    let newUserIndex = random(0, users.length - 1);
    while (newUserIndex === userIndex) {
      newUserIndex = random(0, users.length - 1);
}
  setUserIndex(newUserIndex);
};

  return (
    <div className="h-full flex flex-col justify-center items-center p-10">
      <UserCard user={user} />
      <div>
        <button
        onClick={changeUser}
        className='block bg-amber-400 px-4 py-2 mt-4 hover:bg-amber-500'>
          Cambiar
        </button>
      </div>
    </div>
  );
};

export default App;
