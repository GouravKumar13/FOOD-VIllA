import React from "react"

const Filterlist = ({ item }) => {
 const [selectedFilter , setSelectedFilter] = React.useState([])
 console.log(selectedFilter)
    return (
      <div className='w-full '>
        <h1 className=' font-semibold we'>{ item.title }</h1>
        <div className='w-full max-h-96 flex flex-col justify-between flex-wrap   '>
          {
  
            Object.values(item.options).map((option) => {
                
              return (
                <span className='inline  text-sm' key={option}>
                 <input  name={option.option} className=" focus:ring-0 text-orange-600 " type={ item.configType }  id={ option.option } />  
                 <label  for={ option.option } > { option.option }</label>
                </span>)
            })
          }
        </div>
  
      </div>
    )
  }
  export default Filterlist