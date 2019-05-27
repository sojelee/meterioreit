import React from 'react';
import '../../App.css';

const Header = ()=>{
 return(
      <div className="bg-white">
      <div className="container flex items-center py-4">
           <div className="w-2/3 ml-6">
             <span className="flex items-center flex-no-shrink text-teal mr-6">
             Meteoreit Explorer App
             </span>
           </div>    
        </div> {/*  end of container */}

        <div className="hero bg-teal-light h-1">
        </div>
       </div>
    );
}

export default Header;