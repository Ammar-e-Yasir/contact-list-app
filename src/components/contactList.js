import React, { useRef } from "react";
import dummyImg from "../image/dummy-img.png";

export default function ContactList(props) {



let inputEl = useRef('');

const inputFeild = ()=>{
  props.searchTerm(inputEl.current.value)
  // console.log(inputEl)
   
  }
  // console.log(a);

  const data = props.contact.map(({ name, email, number }, index) => {
    return (
      <div className="d-flex justify-content-between align-items-center shadow p-3 mt-3" key={index} >
        <div className="d-flex justify-content-between ">
          <img
            src={dummyImg}
            alt="Card image cap"
            style={{ height: "80px", width: "70px" }}
          />
          <div className="px-2">
            <span className="h5 d-block">{name}</span>
            <span className="d-block">{email}</span>
            <span>{number}</span>
          </div>
        </div>
        {/* <div>
          <i className="fas fa-trash"></i>
        </div> */}
      </div>
    );
  });

  // console.log(data)
  return (
    <div className="overflow-auto shadow p-4 border border-secondary" style={{ width: "450px",height:'520px' }}>
      <input
        ref={inputEl}
        type="search"
        className="form-control shadow-none border border-secondary"
        id="formGroupExampleInput"
        placeholder="Enter your name"
        onChange={inputFeild}
        autoComplete="off"
        value={props.term}
        
      />

      {data.length > 0 ? data : 'No data found.. !'}
    </div>
  );
}
