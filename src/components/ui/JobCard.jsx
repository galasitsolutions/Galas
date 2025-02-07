import React from 'react'

const JobCard = () => {
  return (
    <div className="container mx-auto gap-4 p-2">
          <div className="contact p-2 rounded-xl w-1/3">
            <div className=" p-2 rounded-xl gap-4 flex flex-col">
            <p className="bg-white p-3 font-semibold rounded-xl text-sm h-8 w-28 flex items-center text-center">20 May,2023</p>
            <div>
            <p className="text-sm font-semibold">Unpaid Internship</p>
           <p className="text-lg font-semibold"> Mern Stack Developer</p>
            </div>
            <div className="flex flex-row gap-2">
              <div className="bg-white p-2 rounded-xl text-xs h-6 w-16 flex items-center text-center">React Js</div>
              <div className="bg-white p-2 rounded-xl text-xs h-6 w-16 flex items-center text-center">ExpressJs</div>
              <div className="bg-white p-2 rounded-xl text-xs h-6 w-16 flex items-center text-center">Node Js</div>
              <div className="bg-white p-2 rounded-xl text-xs h-6 w-16 flex items-center text-center">MongoDB</div>
            </div>
            </div>
            <div  className=" p-2 rounded-xl flex flex-row justify-between">
            <div> 
              <p className="text-sm font-semibold"> Internship includes:</p>
              <div className="p-3"><p className="text-sm"> - Hand on Experience </p>
               <p className="text-sm">- Internship Experience Certificate</p></div>
            </div>
            <p className="text-sm font-semibold">Duration: 6 Months</p>
            </div>
          </div>
        </div>
  )
}

export default JobCard
