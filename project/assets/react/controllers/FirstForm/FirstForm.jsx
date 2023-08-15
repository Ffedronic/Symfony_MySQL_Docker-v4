import React, { Fragment } from "react";

function FirstForm() {
  return (
    <article>
      <h3 className="text-center fw">
        Fill your date, the hour and the number of guests you want.
      </h3>
      <form>
        <div className="row mb-md-3">
          <div className="col-12 col-md-6">
            <div className="form-group mb-md-2">
              <label htmlFor="datePicker" className=" mb-md-1">Date</label>
              <input
                type="date"
                name="datePicker"
                id="datePicker"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group mb-md-2">
              <label htmlFor="timePicker" className=" mb-md-1">Time</label>
              <select class="form-control" id="timePicker" required>
                <option>12:00</option>
                <option>13:00</option>
                <option>14:00</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mb-md-3">
          <div className="col-12 col-md-6">
            <div className="form-group mb-md-2">
              <label htmlFor="guests" className=" mb-md-1">Guests</label>
              <input
                required
                type="number"
                name="guests"
                id="guests"
                min={0}
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
  );
}

export default FirstForm;
