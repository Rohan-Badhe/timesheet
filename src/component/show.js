import React from 'react'
import Sidebar from './sidebar'
import Navbar from './navbar'
import Footer from './footer'


const show = () => {
  return (
   
       <>
         <div className="dashboard-container d-flex">
                {/* Sidebar */}
                <Sidebar />
                {/* Sidebar end here */}
                {/* Main Content */}
                <div className="main-content flex-grow-1">
                    {/* Header */}
                    <Navbar />
                    {/* Header end  here */}
                    {/* Content */}
                    <div className="content p-4">
                      <h1>Show component data </h1>
                    </div>
                    {/* Content End here */}
                </div>
                <Footer/>
            </div>
    </>
  )
}

export default show
