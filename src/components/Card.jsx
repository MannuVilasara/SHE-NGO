import React from 'react'

const Card = ({member}) => {
  return (
    <div>
      <div  className='w-[100%] h-[80%] bg-[#5e0000] flex flex-col brightness-150 items-center justify-center gap-6 p-6 mt-10'>
                <div className='h-20 w-20 rounded-full bg-white'>
                  <img src={member.image} className='h-full w-full rounded-full object-cover' />
                </div>
                <h4>{member.name}</h4>
                <h5>{member.title}</h5>
          </div>
    </div>
  )
}

export default Card
