import React from 'react'

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className='center ma'>
      <div className="absolute mt2">
        <img src={imageUrl} alt='input' width='500px'/>
      </div>
    </div>
  )
}

export default FaceRecognition