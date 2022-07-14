import React , {useEffect, useState}from "react";
import ContactList from "./contactList";

export default function MainDiv() {
const [name , setName] = useState('');
const [email , setEmail] = useState('');
const [number , setNumber] = useState('');
const [searchTerm , setSearchTerm] = useState("")
const [searchResult , setSearchResult] = useState([])
 const [contact , setContact] = useState([
  
  {
    id:new Date().getTime().toLocaleString(),
    name : 'Muhammad',
    email:'muhammad@gmail.com',
    number : '03451288244', 
  },
  {
    id:new Date().getTime().toLocaleString(),
    name : 'Asad',
    email:'asad@hotmail.com',
    number : '03451288244', 
  },
  {
    id:new Date().getTime().toLocaleString(),
    name : 'Uzaifa',
    email:'uzaifa@yahoo.com',
    number : '03451288244', 
  },
  {
    id:new Date().getTime().toLocaleString(),
    name : 'Ismail',
    email:'ism@gmail.com',
    number : '03451288244', 
  },
  {
    id:new Date().getTime().toLocaleString(),
    name : 'Alee',
    email:'alee123@gmail.com',
    number : 12457896685 
  },
  {
    id:new Date().getTime().toLocaleString(),
    name : 'Sheraz',
    email:'sheraxmmad@gmail.com',
    number : '03451288244', 
  },
  {
    id:new Date().getTime().toLocaleString(),
    name : 'Hasnain',
    email:'alihas@drop.com',
    number : '03451288244', 
  },
 ])




 const getSearchTerm = (searchTerm)=>{
   
   console.log(searchTerm)
   setSearchTerm(searchTerm)

  if(searchTerm != ""){
   const filterContact = contact.filter((data)=>{
         console.log(Object.values(data.name))
        return Object.values(data)
        .join()
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    })
    // console.log(filterContact)

    setSearchResult(filterContact)
  }

  

  else{
    setSearchResult(contact)
  }


 }









const addContact = (e)=>{
  let data = {id:new Date().getTime().toLocaleString(),name,email,number}
  // console.log(data)
  if( name !='' && email !='' && number != ''){
    setContact([data,...contact]);
    setName('');
    setEmail('');
    setNumber('');
    // alert('data add successfully !')
  }
  else{
    e.preventDefault();
    alert('Fill the form correctly ...!');
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  }
}

// useEffect(()=>{

//   console.log(contact)
// },[contact])







  
  return (
    <div className="container border d-flex justify-content-around align-items-center flex-wrap" style={{height:'700px'}}>
      <div className="shadow p-4 border border-secondary" style={{ width: "400px",height:'520px' }}>
        <h1 className="border text-center  p-3 mb-3">
          Contact Manager
        </h1>

        <div className="mb-3">
          <h2>Add Contact</h2>
          <hr />
          <label
            // for="formGroupExampleInput"
            className="form-label h6 cursor-pointer"
          >
            Name
          </label>
          <input
            type="text"
            className="form-control shadow-none border border-secondary"
            id="formGroupExampleInput"
            placeholder="Enter your name"
            onChange={(e)=>{setName(e.target.value)}}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label
          //  for="formGroupExampleInput2"
           className="form-label h6">
            Email
          </label>
          <input
            type="email"
            className="form-control shadow-none border border-secondary"
            id="formGroupExampleInput2"
            placeholder="Enter your email"
            onChange={(e)=>{setEmail(e.target.value)}}
            value={email}

          />
        </div>
        <div className="mb-3">
          <label
          //  for="formGroupExampleInput2"
            className="form-label h6">
            Number
          </label>
          <input
            type="number"
            className=" form-control shadow-none border border-secondary"
            id="formGroupExampleInput2"
            placeholder="Enter your number"
            onChange={(e)=>{setNumber(e.target.value)}}
            value={number}

          />
        </div>

        <button
         type="submit"
          className="w-25 mt-4 btn btn-success"
          onClick={(e)=>{addContact(e)}}>
          Add
        </button>
      </div>



       <ContactList
         contact={searchTerm.length < 1 ? contact : searchResult}
         searchTerm={getSearchTerm}
         term={searchTerm}

         />



</div>
  );
}
