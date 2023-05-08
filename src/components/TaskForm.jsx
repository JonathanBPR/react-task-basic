import { useState, useContext } from "react";
import { TaskContext } from '../context/TaskContext'

function TaskForm() {
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title,description)
    createTask({
      title,
      description
    });
    settitle('')
    setDescription('')
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="p-4 mb-4 bg-gray-800">
        <h1 className="text-2xl font-bold text-white mb-3">Añadir Tareas</h1>
        <input className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          onChange={(e) => settitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="text-green-500 px-3 py-1 text-center hover:text-green-300">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
