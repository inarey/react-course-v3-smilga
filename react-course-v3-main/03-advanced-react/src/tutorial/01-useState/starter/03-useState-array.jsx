
import { useState } from 'react';
import {data, people} from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const handleRemove = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
const clearItems = () => {
  setPeople([])
}

  return (
    <div>
      {people.map((person) => {
        const {id, name} = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type='button' onClick={() =>handleRemove(id)}>Remove</button>
          </div>
        )
      })}

      <button
      type='button'
      style={{marginTop: '2rem'}}
      className='btn'
      onClick={clearItems}
      >Clear Items</button>
      
    </div>
  )
};

export default UseStateArray;
