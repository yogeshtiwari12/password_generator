import React, { useState } from 'react';
import swal from 'sweetalert';
import fileSaver from 'file-saver';

function Password({ password, length, setlength, numbers, setNumbers, SetCharcter, passwordref, copytoclipboard }) {
  const [savepass, setSavedPassword] = useState('');

  const clickevent = () => {
    copytoclipboard();
    swal("Copied!", "Password has been copied to clipboard.", "success");
  };

  const clickevent2 = () => {
    if (savepass === "") {
      swal("Error", "Please enter a file name.", "error");
      return;
    }

    fileSaver.saveAs(new Blob([password]), savepass);
    swal("Saved!", "Password has been saved.", "success");
    setSavedPassword("");
  };

  const userdegapath = (e) => {
    setSavedPassword(e.target.value);
  };

  return (
    <>
      {/* Title */}
      <div className="d-flex justify-content-center mt-4 mb-4">
        <h3 className="text-primary">Password Generator</h3>
      </div>

      {/* Password Input and Controls */}
      <div className="bg-light mx-auto p-4 rounded shadow-lg" style={{ width: '90%', maxWidth: '500px',height:"300px" }}>
        <div className="d-flex">
          <input
            className="form-control form-control-lg w-75"
            type="text"
            readOnly
            placeholder="Generated password"
            value={password}
            ref={passwordref}
            style={{ outline: 'none' }}
          />
          <button
            className="btn btn-success btn-lg ms-2"
            onClick={clickevent}
          >
            Copy
          </button>
        </div>

        {/* Length Slider and Checkbox Options */}
        <div className="mt-4">
          <div className="d-flex align-items-center">
            <input
              type="range"
              className="form-range text-yellow-"
              min={10}
              max={100}
              value={length}
              onChange={(e) => setlength(e.target.value)}
            />
            <span className="ms-3 text-primary">Length: {length}</span>
          </div>

          <div className="form-check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="numbersCheck"
              checked={numbers}
              onChange={() => setNumbers((prev) => !prev)}
            />
            <label className="form-check-label ms-2 text-primary" htmlFor="numbersCheck">Include Numbers</label>
          </div>

          <div className="form-check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="charCheck"
              onChange={() => SetCharcter((prev) => !prev)}
            />
            <label className="form-check-label ms-2 text-primary" htmlFor="charCheck">Include Characters</label>
          </div>
        </div>
      </div>

      {/* Save Input and Button */}
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-5 w-100 px-2">
        <input
          className="form-control w-100 mb-3 mb-md-0"
          value={savepass}
          onChange={userdegapath}
          placeholder="Enter file name to save"
          style={{ maxWidth: '380px' }}
        />
        <button
          className="btn btn-primary btn-md ms-md-2"
          onClick={clickevent2}
          style={{ width: '100%', maxWidth: '100px' }}
        >
          Save
        </button>
      </div>
    </>
  );
}

export default Password;
