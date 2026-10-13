import React, { useState } from 'react';
 function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [formValues, setFormValues] = useState({ taskName: '' });
  const [showOnlyCompleted, setShowOnlyCompleted] = useState(false);
  const [theme, setTheme] = useState('light');
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, taskId: null });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formValues.taskName.trim()) return;
    const newTask = {
      id: Date.now(),
      name: formValues.taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setFormValues({ taskName: '' });
  };

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const openDeleteModal = (id) => {
    setModal({ isOpen: true, taskId: id });
  };

  const confirmDelete = () => {
    setTasks(tasks.filter(task => task.id !== modal.taskId));
    setModal({ isOpen: false, taskId: null });
  };

  const closeDeleteModal = () => {
    setModal({ isOpen: false, taskId: null });
  };

  const displayedTasks = showOnlyCompleted ? tasks.filter(task => task.completed) : tasks;

  return (
    <div style={{
      background: theme === 'light' ? '#c2d78b' : '#bc7b7b',
      color: theme === 'light' ? '#1a1515' : '#ffffff',
      padding: '20px',
      minHeight: '100vh',
      fontFamily: 'sans-serif'
    }}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        mode({theme === 'light' ? 'Dark' : 'Light '})
      </button>

      <div style={{ marginTop: '15px', border: '1px solid #ccc', borderRadius: '4px' }}>
        <button 
          onClick={() => setIsAccordionOpen(!isAccordionOpen)} 
          style={{ width: '100%', padding: '10px', textAlign: 'left', background: '#eee', color: '#000', border: 'none', cursor: 'pointer' }}
        >
          {isAccordionOpen ? 'Hide' : 'Show'} “How to use this app”
        </button>
        {isAccordionOpen && (
          <div style={{ padding: '10px', background: theme === 'light' ? '#f9f9f9' : '#2d2d2d' }}>
            <p>paraaa1</p>
            <p>paraa2</p>
            <p>paraaa3</p>
          </div>
        )}
      </div>

      <h3>Total Tasks Counter: {tasks.length}</h3>

      <form onSubmit={handleFormSubmit} style={{ margin: '20px 0' }}>
        <input
          type="text"
          name="taskName"
          value={formValues.taskName}
          onChange={handleInputChange}
          placeholder="Enter new task..."
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button type="submit">Add Task</button>
      </form>

      <div style={{ marginBottom: '15px' }}>
        <button onClick={() => setShowOnlyCompleted(!showOnlyCompleted)}>
          {showOnlyCompleted ? 'Show All Tasks' : 'Filter: Show Only Completed Tasks'}
        </button>
      </div>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {displayedTasks.map((task) => (
          <li key={task.id} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            padding: '8px', 
            borderBottom: '1px solid #eee',
            textDecoration: task.completed ? 'line-through' : 'none' 
          }}>
            <span>{task.name}</span>
            <button onClick={() => toggleTaskStatus(task.id)}>
              {task.completed ? 'Mark Pending' : 'Mark Completed'}
            </button>
            <button onClick={() => openDeleteModal(task.id)} style={{ color: 'red' }}>Delete</button>
          </li>
        ))}
      </ul>

      {modal.isOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <div style={{ background: '#fff', color: '#000', padding: '20px', borderRadius: '5px', textAlign: 'center' }}>
            <p>Are you sure you want to delete this task?</p>
            <button onClick={confirmDelete} style={{ marginRight: '10px', background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Yes, Delete</button>
            <button onClick={closeDeleteModal} style={{ background: '#ccc', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default TodoApp
