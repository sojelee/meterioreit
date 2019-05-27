import React, { useState } from 'react';
import MeteoreitsGrid from './MeteoreitsGrid'
import Loading from './loading';
import Error from './error';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const GET_LANDINGS = gql`
  query {
  landings {
   id
    mass
    name
    geolocation{
      latitude
      longitude
    }
    fall
    reclat
    reclong
    recclass
    year
    nametype
  }
} 
`;

const Meteoreit = () =>{
  const [filter, setFilter] = useState('');
  const [searching,switchSearch]= useState(false);
  const onChange = e =>{
    if(e.target.value===""){
      switchSearch(false);
    }
    setFilter(e.target.value)
  }
  const executeSearch=()=> {
    switchSearch(true);
    return filter;
  }
return(
  <>
  <>
  <div className="flex justify-center mt-6">
               <div className="mr-4">
                 <input 
                      onChange={onChange}
                      type="text" 
                      className="bg-grey-lighter h-8 px-4 text-xs w-48 rounded-full" placeholder="Search" 
                      />
               </div>
               <div className="mr-4">
                 <button
                    onClick={executeSearch}
                    className="bg-teal hover:bg-teal-dark text-white font-mediaum py-2 px-4 rounded-full"
                    >Search
                    </button>
               </div>
           </div>
  </>
      <Query query={GET_LANDINGS}>
      {({ data, loading, error }) => {
    const { landings } = data;
    if (loading) return <Loading />;
    if (error ) return <Error />;
    if(searching === false){
      return(
        landings.map(item =>{
         return(
        <MeteoreitsGrid key ={item.id}
          name={item.name}
          id={item.id} 
          nametype={item.nametype}
          recclass={item.recclass}
          mass={item.mass}
          fall={item.fall}
          year={item.year}
          latitude={item.reclat}
          longitude={item.reclong}
       />
        )
       })
      )
    }else{
      let filteredLandins = landings.filter(item=> item.name.toLowerCase()===filter.toLowerCase());
          return(
                   
            filteredLandins.map(
              item=>{
                return(
                  <MeteoreitsGrid key ={item.id}
                  name={item.name}
                  id={item.id} 
                  nametype={item.nametype}
                  recclass={item.recclass}
                  mass={item.mass}
                  fall={item.fall}
                  year={item.year}
                  latitude={item.reclat}
                  longitude={item.reclong}
               />
                )
                  
                
              }
            )
           
      )
    }

   }}

</Query>
</>
    );
}
export default Meteoreit;