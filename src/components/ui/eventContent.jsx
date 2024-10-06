import React from 'react'
import Button from './Button'
function eventContent() {
  return (
    <div className="event-info">
              <div className="event-content flex flex-col flex-1">
                <h2 className='content-heading text-center font-heading font-semibold'>Event Title</h2>
                <p className="event-content sm:text-justify hyphens-auto">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Animi minima quibusdam placeat. Dolorem a, aspernatur tenetur
                  sequi eligendi nisi quam obcaecati. Doloribus dolorum
                  dignissimos numquam aperiam exercitationem cumque voluptatum
                  sit.
                </p>
                <Button text='LearnMore' />
              </div>
            </div>
  )
}

export default eventContent