import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [day, setDay] = useState('');

  useEffect(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    setDay(days[today]);
  }, []);

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>{day ? `Whoop, it's ${day} 🌝 ☕` : 'Loading...'}</h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setTodos([...todos, { id: Date.now(), text: todo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {todos.map((obj) => (
          <div className="todo" key={obj.id}>
            <div className="left">
              <input
                onChange={(e) => {
                  setTodos(
                    todos.map((obj2) => {
                      if (obj2.id === obj.id) {
                        obj2.status = e.target.checked;
                      }
                      return obj2;
                    })
                  );
                }}
                value={obj.status}
                type="checkbox"
                name=""
                id=""
              />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i className="fas fa-times"></i>
            </div>
          </div>
        ))}
      </div>

      <div className="box">
        <h1 className="heading">Completed List::</h1>
        {todos.map((obj) => {
          if (obj.status) {
            return <p className="text" key={obj.id}>{obj.text}</p>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
