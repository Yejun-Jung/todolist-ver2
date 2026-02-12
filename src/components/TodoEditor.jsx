import React, { useState, useRef } from 'react'
import './TodoEditor.css'

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState('')
  const inputRef = useRef()

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onSubmit = () => {
    if (content === '') {
      inputRef.current.focus()
      return
    }
    onCreate(content) 
    setContent('')
  }

  const onKeyDown=(e)=>{
    if(e.KeyCode===13) {
      onsubmit()
    }
  }

  return (
    <div className='Editor'>
      <input
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onkeydown}
        type="text"
        placeholder='새로운 Todo...'
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default TodoEditor