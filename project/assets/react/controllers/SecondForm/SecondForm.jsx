import React from "react";
function SecondForm() {
  return (
    <article className="">
      <h3 className="text-center">
        Fill your name, your email and your phone number to validate your
        reservation.
      </h3>
      <form>
        <div className="row mb-md-3">
          <div className="col-12 col-md-6">
            <div className="form-group mb-md-2">
              <label htmlFor="namePicker" className=" mb-md-1">Name</label>
              <input
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
              <label htmlFor="emailPicker" className=" mb-md-1">Email</label>
              <input
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
              <label htmlFor="telPicker" className=" mb-md-1">Phone number</label>
              <input
                required
                placeholder="ex:07788545"
                pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
                className=" form-control"
                type="tel"
                name="telPicker"
                id="telPicker"
              />
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </article>
  );
}

export default SecondForm;
