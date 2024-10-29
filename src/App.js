import React, {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Footer from './Components/Footer';
import Propfun from './Components/Propfun';
// import Toggle from './Components/Toggle';
 import Did from './Components/Did';
function App() {
    const [data,setData]= useState('Tehmina')
    const [status,setStatus ] = React.useState(true)
    function updateData(){
     setData("maryam")
    }
  return (
    <>
          <nav>
        <Navbar />
      </nav>
    <div className='flex flex-col justify-center items-center'>
      {
      status?   <h1 className='text-2xl'>Hello world </h1>:null
    }
  
    <button onClick={()=> setStatus(!status)}
    className="border border-gray-400 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-blue-600 hover:border-blue-600">
    Toggle
  </button>
  {/* <button onClick={()=> setStatus(true)}
    className="border border-gray-400 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-blue-600 hover:border-blue-600">
    show
  </button> */}
  </div>


      <div className='flex flex-col justify-center items-center'>
  <h1 className='mb-4'>{data}</h1>
  <button 
   onClick={updateData} 
    className="border border-gray-400 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-blue-600 hover:border-blue-600">
    Update
  </button>
</div>
<div className='bg-green-200 mt-4'>
  <h1 className='text-center text-2xl mb-4'>React Props</h1>
  <Propfun name={"tehmina"} email={"tehmina@mail.com"} />
  <div className='flex justify-center mt-4'>
    <button 
      className="border border-gray-400 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-blue-600 hover:border-blue-600">
      Prop
    </button>
  </div>
</div>
<Did />
      <TextForm />
      <Footer/>
     

    </>
  );
}

export default App;
