import React from 'react'

export default function Member(props) {
    const { email, name } = props.data
    console.log(props);
  return (
      <div>
          <p>{email}</p>
          <p>{name}</p>
    </div>
  )
}
