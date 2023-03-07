import React from 'react';

const UserCard = ({ user }) => {
const fullName = ` ${user.name.title} ${user.name.first} ${user.name.last} `;
return (
<div>
    <div className='border-cyan-600 border-4'>
        <div className='flex flex-row justify-center items-center'>
          <img src={user.picture.large} alt="User Profile" />
        </div>
        <div className='text-white text-center mt-5'>
          <h2>{fullName}</h2>
          <p>{user.email}</p>
          <p>{user.gender}</p>
        </div>
      </div>
 </div>
  );
};

export default UserCard;
