import React from 'react'

function Section(props) {
  return (
    <section className="mx-2 mb-4 p-3 border border-light rounded shadow-lg">
        {props.children}
  </section>
  )
}

export default Section