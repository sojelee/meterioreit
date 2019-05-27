import React from 'react';

const MeteoreitsGrid = (props) =>{
    const { name, id,nametype,recclass,mass,fall,
        year,latitude,longitude
     } = props;
    return(
<div   className="flex justify-center py-6">

<div className="flex-wrap">
<div className="flex items-center justify-center bg-teal h-24 w-128">
     <div className="w-64 text-grey-light font-bold">
         <div>Name</div>
         <div className="pt-3 text-white font-bold">{name}</div>
     </div>
         <div className="w-32 text-grey-light font-bold">
         <div>Name Type</div>
         <div className="pt-3 font-bold text-white font-bold">{nametype}</div>
         </div>
         <div className="w-24 text-grey-light font-bold">
         <div>Id</div>
         <div className="pt-3 text-white font-bold">{id}</div>
         </div>
         
  </div>

  <div className="flex items-center justify-center bg-teal h-16 w-128">
     <div className="w-64 text-grey-light font-bold">
         
           <div>RecClass</div>
           <div className="pt-3 text-white font-bold">{recclass}</div>
         </div>
         <div className="w-32 text-grey-light font-bold"><div>
             Mass
         </div>
         <div className="pt-3 text-white font-bold">{mass}</div>
         </div>
         <div className="w-24 text-grey-light font-bold"> 
           <div>Fall</div>
           <div className="pt-3 text-white font-bold">{fall}</div>
         </div>
         
  </div>
  <div className="flex items-center justify-center bg-teal h-24 w-128">
     <div className="w-64 text-grey-light font-bold">
           <div>Year</div>
           <div className="pt-3 text-white font-bold">{year}</div>
         </div>
         <div className="w-32 text-grey-light font-bold">
             <div>Latitude</div>
             <div className="pt-3 text-white font-bold">{latitude}</div>
         </div>
         <div className="w-24 text-grey-light font-bold">
             <div>
             Longitude
             </div>
             <div className="pt-3 text-white font-bold">{longitude}</div>
             
         </div>
         
  </div>
 
</div>

 </div>
 );
}
export default MeteoreitsGrid;