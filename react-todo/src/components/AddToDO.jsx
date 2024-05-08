export default function AddToDO({todo}) {

  let input="";
  const[data,setData]=todo;
  const handleClick=()=>{
    if(input.length===0){
      alert("Please Type your todo....")
    }
    else
    {
      setData([...data,{id:data.length+1,details:input}])
    }
  }

  const handleInput=(event)=>{
    input=event.target.value;
  }
  console.log(data.length);
  return (
    <div className="flex justify-center mt-3 pb-2">
      <form className="flex flex-col justify-center items-center" action="" onSubmit={(event)=>event.preventDefault()}>
        <input
          className="placeholder-green-300 px-10 py-1 text-center rounded-lg bg-purple-400 text-white outline-purple-500"
          type="text"
          placeholder="Type Your To-Do"
          onChange={handleInput}
        />
        <button type="submit" onClick={handleClick} className="mt-2  w-1/2 py-1 rounded-full bg-red-500 text-white font-semibold">Add To-Do</button>
      </form>
    </div>
  );
}
