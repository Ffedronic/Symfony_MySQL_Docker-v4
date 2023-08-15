import React, { Fragment, useRef, useState } from "react";
import DatePicker from "react-datepicker";

function FirstForm() {
  const [date, setDate] = useState(new Date());
  const endDisabledDateRanges =  new Date().setDate(new Date().getDate() - 1)

  const timeRef = useRef();
  const guestsRef = useRef();

  const events = [
    {
        start: new Date("1900-01-01"),
        end: endDisabledDateRanges
    },
];  

const disabledDateRanges = events.map(range => ({
    start: new Date(range.start),
    end: new Date(range.end)
}));

  function onSubmitHandler(event) {
    event.preventDefault();
    console.log(timeRef.current.value);
    console.log(date);
    console.log(guestsRef.current.value);
  }

  return (
    <Fragment>
      <article>
        <h3 className="text-center">
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
                  className="form-control .w-fullwidth"
                  selected={date}
                  onChange={(date) => setDate(date)}
                  excludeDateIntervals={disabledDateRanges}
                  required
                  dateFormat={"dd/MM/yyyy"}
                  onCalendarClose={()=>(disabledDateRanges[0].end = endDisabledDateRanges)}
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group mb-md-2">
                <label htmlFor="timePicker" className=" mb-md-1">
                  Time: between 12:00 and 14:00
                </label>
                <input
                type="time"
                  className="form-control"
                  id="timePicker"
                  required
                  ref={timeRef}
                  min={"12:00"}
                  max={"14:00"}
                />
                 
            
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
                  min={1}
                  max={9}
                  className=" form-control"
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Verify
          </button>
        </form>
      </article>
    </Fragment>
  );
}

export default FirstForm;
