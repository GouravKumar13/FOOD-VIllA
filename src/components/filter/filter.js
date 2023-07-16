import { red } from '@mui/material/colors'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Filter = ({ filter,setFilterActive ,filterActive}) => {
  const [Cuisines, setcuisines] = React.useState(filter[0])
  const [restauranWithCuisines, setrestauranWithCuisines] = React.useState(filter[1])


  return (
    <div className='fixed overflow-x-scroll h-fit bg-white top-0 w-1/2 p-2'>
    <div className='flex justify-between'>
      <h1 className='text-lg'>FILTER</h1>
      <CloseIcon className='cursor-pointer' onClick={()=>setFilterActive(!filterActive)} />
      </div>

      {
        Object.values(filter).map((item) => {
          return (
            <Filterlist key={ item.id } item={ item } />


          )
        })
      }
      <div className='flex justify-between mx-52'>
        <button className='border rounded-sm hover:bg-orange-700 hover:text-white px-2 '>Clear</button>
        <button className='border bg-orange-700 text-white px-2 rounded-sm hover:bg-white hover:text-black'>SHOW RESTAURANTS</button>
      </div>
    </div>
  )
}


const Filterlist = ({ item }) => {

  return (
    <div className='w-full '>
      <h1 className=' font-semibold we'>{ item.title }</h1>
      <div className='w-full max-h-96 flex flex-col justify-between flex-wrap   '>
        {

          Object.values(item.options).map((option) => {
            return (
              <span className='inline  text-sm'>
                <label for={ option.option } >  <input type={ item.configType } id={ option.option } />{ option.option }</label>
              </span>)
          })
        }
      </div>

    </div>
  )
}




export default Filter
