import React from 'react'

const List = ({members}) => {
  return (
    <div>
      <h3>List of members</h3>
      {members && 
        members.map((item, i) => {
          return(
            <div>
              <p>item.name</p>
              <p>item.club</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default List
