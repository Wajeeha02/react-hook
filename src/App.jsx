import React from 'react'
import Demo from './Demo.tsx'
import MemoComponent from './MemoComponent.tsx'

function App() {
  return (
    <div>
      <h1>How to Use Memo in React?</h1>
      <p>Use Memo is used when we are facing any performance issues or we don't want to re-render the component when nothing changes and we just want it to change when something is changed in the component it should only re-render at that point.</p>
     <MemoComponent/>
     <h1>When to use CallBack in React?</h1>
     <Demo/>
    </div>
  )
}

export default App