import { useState } from "react";
import { AppBar, Toolbar, Slide, useScrollTrigger } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from ".";

function PokemonSearch({ setUrl }) {
  const [searchTerm, setSearchTerm] = useState("");

  const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(url);
  };

  const HideOnScroll = (props) => {
    const { children } = props;

    const trigger = useScrollTrigger();

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  };

  return (
    <HideOnScroll>
      <AppBar>
        <Toolbar>
          <Search onSubmit={handleSubmit}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for a Pokémon"
              onChange={handleChange}
              value={searchTerm}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default PokemonSearch;
