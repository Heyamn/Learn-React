import React from 'react'

const Profile = () => {
  return (
    <>
    <div className='grid grid-cols-2 gap-0'>
      <div>
        <img className=' ml-[500px] mt-56'  src="src/assets/underMaintenance.png" alt="undermaintenance"/>
      </div>
      <div>
        <p className=' ml-16 mt-72'>
          Sorry, Website is under maintenance, Please check back later.
        </p>
      </div>
    </div>
    </>
  )
}

export default Profile