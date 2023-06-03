import SearchIcon from '@mui/icons-material/Search';
const Search = ({value , onChange , onClick})=>{
    return(
        <div className="flex justify-center mb-10 ">
        <input
          type="text"
          className=" placeholder:text-black border border-slate-500 bg-slate-200 rounded-l-md p-1 w-64 h-10"
          placeholder="Search..."
          value={value}
          onChange={onChange}
        />

        <button
          className="border border-slate-500 rounded-r-md p-1 h-10 w-10 bg-slate-200 "
          onClick={onClick}
        >
          <SearchIcon  />
        </button>
      </div>
    )
}
export default Search