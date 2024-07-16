import React,{useState} from 'react';
import swal from 'sweetalert';
import fileSaver from 'file-saver';

function Password({ password, length, setlength, numbers, setNumbers, SetCharcter, passwordref, copytoclipboard }) {

  // const [alert, setAlert] = useState(false);
  const [savepass, setSavedPassword] = useState('');

  const clickevent = () => {
    copytoclipboard();
  
    swal("Copied!", "Password has been copied to clipboard.", "success");
  };
  const clickevent2 = () => {
    if (savepass==="") {
      swal("Error", "Empty hai ye chutiye", "error");
      return;
    }


    fileSaver.saveAs(new Blob([password]), savepass);
    swal("Saved!", "Password has been Saved ", "success");
    setSavedPassword("")
  };


  const userdegapath =(e) =>{
    
  
    setSavedPassword(e.target.value);
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-4 mb-4">
        <h3>Password Generator</h3>
      </div>

      <div className="bg-dark w-50 mx-auto p-4">
        <div >
          <input
            className="w-50 "
            type="text"
            readOnly
            placeholder="password"
            value={password}
            ref={passwordref}
            style={{outline:'none'}}
          />
          <button className="btn btn-outline-none btn-success btn-sm" onClick={clickevent} >copy</button>
        </div>

        <div className="mt-4">
          <input
            type="range"
            min={10}
            max={100}
            value={length}
            onChange={(e) => setlength(e.target.value)}
          />
          <span className="text-orange mx-4 ">length  : {length}</span>

          <input
            type="checkbox"
            className="slider outline-none"
            defaultChecked={numbers}
            onChange={() => {
              setNumbers((prev) => !prev);
            }}
          />
          <span className="text-orange mx-3 ">Numbers</span>



          <input
            type="checkbox"
            className="slider outline-none"
            onChange={() => SetCharcter((prev) => !prev)}
          />
          <span className="text-orange mx-3 ">Character</span>
        </div>
      </div>

      <div className="container d-flex justify-content-center align-items-center">
        <input className="bg-white my-5 "value={savepass} onChange={userdegapath} style={{ height: '4vh', width: '20vw', outline:'none'}}  placeholder="enter file name to save in notepad"/>
        <button className="btn btn-success btn-sm" onClick={clickevent2}>Save</button>
      </div>
    </>
  );
}

export default Password;
