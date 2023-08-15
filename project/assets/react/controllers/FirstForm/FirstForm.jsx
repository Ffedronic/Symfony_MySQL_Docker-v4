import React, { Fragment, useRef, useState } from "react";
import DatePicker from "react-datepicker";

function FirstForm() {
  const [date, setDate] = useState(new Date());

  const timeRef = useRef();
  const guestsRef = useRef();

  function onSubmitHandler(event) {
    event.preventDefault();
    console.log(timeRef.current.value);
    console.log(date);
    console.log(guestsRef.current.value);
  }

  return (
    <Fragment>
      <article>
        <h3 className="text-center fw">
          Fill your date, the hour and the number of guests you want.
        </h3>
        <form onSubmit={onSubmitHandler}>
          <div className="row mb-md-3">
            <div className="col-12 col-md-6">
              <div className="form-group mb-md-2">
                <label htmlFor="datePciker" className=" mb-md-1">
                  Date
                </label>
                <DatePicker
                  id="datePicker"
                  className="form-control w-100"
                  selected={date}
                  onChange={(date) => setDate(date)}
                  required
                  showIcon
                  isClearable
                  closeOnScroll={true}
                  dateFormat={"dd/MM/yyyy"}
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group mb-md-2">
                <label htmlFor="timePicker" className=" mb-md-1">
                  Time
                </label>
                <select
                  class="form-control"
                  id="timePicker"
                  required
                  ref={timeRef}
                >
                  <option value={"12:00:00"}>12:00</option>
                  <option value={"13:00:00"}>13:00</option>
                  <option value={"14:00:00"}>14:00</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row mb-md-3">
            <div className="col-12 col-md-6">
              <div className="form-group mb-md-2">
                <label htmlFor="guests" className=" mb-md-1">
                  Guests
                </label>
                <input
                  ref={guestsRef}
                  required
                  type="number"
                  name="guests"
                  id="guests"
                  min={0}
                  max={9}
                  className=" form-control"
                />
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Verify
          </button>
        </form>
      </article>
    </Fragment>
  );
}

export default FirstForm;
