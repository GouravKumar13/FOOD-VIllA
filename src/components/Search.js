const Search = ({value , onChange , onClick})=>{
    return(
        <div className="flex justify-center mb-10 ">
        <input
          type="text"
          className=" border border-slate-500 rounded-l-md p-1 w-64 h-10"
          placeholder="Search..."
          value={value}
          onChange={onChange}
        />

        <button
          className="border border-slate-500 rounded-r-md p-1 h-10 w-10 bg-slate-500 text-white"
          onClick={onClick}
        >
          🔍
        </button>
      </div>
    )
}
export default Search