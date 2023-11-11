import React ,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { Paper,IconButton } from "@mui/material"
import { Search } from "@mui/icons-material";



const SearchBar = () => {

    let [searchTerm, setSearchTerm] = useState("");
    let NavigateTo = useNavigate();

    let handleSearch = (e) => {
        e.preventDefault();

        if (searchTerm) {
            NavigateTo(`/search/${searchTerm}`);
            setSearchTerm("")
        }
    }
  return (
      <Paper
          component="form"
          onSubmit={handleSearch}
          sx={{
              borderRadius: 20,
              border: "1px solid #e3e3e3",
              pl: 2,
              boxShadow: "none",
              mr:{sm:5}
          }}
      >
          <input
              type="text"
              className="search-bar"
              placeholder="Search viewTube...."
              style={{border:"none"}}
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
          />
          <IconButton
              type="submit"
              sx={{
                  p: "10px",
                  color:"red"
          }}>
               <Search/>
            </IconButton>
             
          
         
          
    </Paper>
  )
}

export default SearchBar