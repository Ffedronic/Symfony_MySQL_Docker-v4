import React, { useRef } from "react";
function SecondForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();

  function onSubmitHandler(event) {
    event.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(numberRef.current.value);
  }

  return (
    <article className="">
      <h3 className="text-center">
        Fill your name, your email and your phone number to validate your
        reservation.
      </h3>
      <form onSubmit={onSubmitHandler}>
        <div className="row mb-md-3">
          <div className="col-12 col-md-6">
            <div className="form-group mb-md-2">
              <label htmlFor="namePicker" className=" mb-md-1">
                Name
              </label>
              <input
                ref={nameRef}
                required
                type="text"
                name="namePicker"
                id="namePicker"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group mb-md-2">
              <label htmlFor="emailPicker" className=" mb-md-1">
                Email
              </label>
              <input
                ref={emailRef}
                required
                className=" form-control"
                type="email"
                name="emailPicker"
                id="emailPicker"
              />
            </div>
          </div>
        </div>
        <div className="row mb-md-3">
          <div className="col-12 col-md-6">
            <div className="form-group mb-md-2">
              <label htmlFor="telPicker" className=" mb-md-1">
                Phone number
              </label>
              <input
                ref={numberRef}
                required
                placeholder="ex:07788545"
                pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
                className=" form-control"
                type="tel"
                name="telPicker"
                id="telPicker"
                maxLength={10}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </article>
  );
}

export default SecondForm;
