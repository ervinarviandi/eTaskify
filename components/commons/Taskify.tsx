"use client"
import { useState, useEffect } from 'react';
import { Todo } from '@/components/types/todo';
import { FaRegTrashCan } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { cn } from '@/lib/utils';
import { GridPattern } from '@/components/magicui/grid-pattern';
import { Sora } from 'next/font/google';
import { ChevronRight } from "lucide-react";
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import "@/app/globals.css";
import { toast } from 'sonner';



const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: "300",
});


const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null); 
  const [editText, setEditText] = useState<string>(''); 

  


  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]') as Todo[];
    setTodos(storedTodos);
  }, []);

  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
    toast("✅ Tugas berhasil di tambahkan ")
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    toast("🗑️ Tugas berhasil dihapus")
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (id: number, text: string) => {
    setEditingTodoId(id); 
    setEditText(text);
  };

  const saveEdit = (id: number) => {
    toast("✅ Tugas berhasil diedit")
    if (editText.trim() !== '') {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: editText } : todo
        )
      );
      setEditingTodoId(null); 
      setEditText(''); 
    }
  };

  const cancelEdit = () => {
    toast("❌ Tugas batal diedit ")
    setEditingTodoId(null); 
    setEditText(''); 
  };
 

  return (
    <div className='w-full min-h-screen pb-10 rounded-lg mx-auto p-5 size-full  overflow-hidden  bg-background '>
     
        <AnimatedGradientText className='mt-10 mb-5'>
        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent ${sora.className}`,
          )}
        >
          jumlah Tugas  {todos.length} 
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
        <div className='flex justify-center items-center'>
    

      <input
      className={`${sora.className}   backdrop-blur-md dark:bg-[#171717] bg-[#ffffff] z-50 rounded-l-xl shadow-lg  placeholder:text-green-400  px-3 py-2 w-48 lg:w-80 `}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        placeholder="Buat tugas baru"
        />
      <button onClick={addTodo}  className={` ${sora.className} bg-violet-400 py-2 px-3 rounded-r-xl flex items-center text-sm gap-2 shadow-lg `}>Tambah</button>
        </div>
        <div className='flex justify-center'>
      <ul className='w-full max-w-md mb-10 overflow-hidden z-50  mt-10 '>
        {todos.map((todo) => (
          <li key={todo.id} className={`${sora.className}  my-3 rounded-xl py-2 px-3 flex justify-between border bg-transparent dark:bg-transparent duration-200 hover:dark:bg-[#A78BFA] hover:bg-[#A78BFA] transition-all backdrop-blur-lg bg-[#ffffff] dark:bg-[#171717] shadow-lg  myScrollbar overflow-x-auto overflow-hidden  `}>
            <div className='h-10 w-20 bg-gradient-to-r from-violet-500  to-rose-200 rounded-full absolute left-20 blur-3xl'>ervin</div>
            
            {editingTodoId === todo.id ? (          
              <>
                <input
                className='  border-1 rounded-lg w-full dark:bg-[#27272a]
           bg-[#f4f4f5] border-teal-500  p-2 items-center overflow-x-auto  '
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <div className='flex justify-center gap-2 ml-2 '>
                <button onClick={() => saveEdit(todo.id)}><FaSave size={20} className='text-teal-400' /></button>
                <button onClick={cancelEdit}><MdOutlineCancel size={24} className='text-pink-400'/></button>
                </div>
              </>
            ) : (
              // View mode
              <>
            
            
                <span
                  style={{ textDecoration: todo.completed ? 'line-through' : 'none',
                   
                   }}
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.text}
                </span>
                <div className='flex justify-center gap-2 ml-2 '>
                <button onClick={() => startEditing(todo.id, todo.text)}><MdEdit size={20} className='text-amber-400'/></button>
                <button onClick={() => deleteTodo(todo.id)}><FaRegTrashCan size={20} className='text-pink-400'/></button>
                
                </div>
               
              </>
              
            )}
          </li>
        ))}
      </ul>
      </div>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
};

export default TodoList;