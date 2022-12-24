import React from 'react'

function TaskItem({task}) {
  return (
    <div >
        <div>
            {new Date(task.createdAt).toLocaleDateString('en-US')}
        </div>
        <h2>
            {task.title}
        </h2>
    </div>
  )
}

export default TaskItem