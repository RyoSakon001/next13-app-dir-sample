import React from 'react'

const TodoList = () => {
  return (
    <ul className='space-y-3'>
      <li className='flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow'>
        <span>散歩をする</span>
      <div>
        <button className='text-green-500 mr-3'>edit</button>
        <button className='text-red-500'>delete</button>
      </div>
      </li>
    </ul>
  )
}

export default TodoList