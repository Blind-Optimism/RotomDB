import {
  IconButton,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { capitalCase, formatPokeId, mapPokeTypeName } from "../../util";
import {
  Background,
  SpriteIdBg,
  SpriteAndIdContainer,
  Sprite,
  NameAndIconsContainer,
  PokemonTypeIcon,
  TypeIconsContainer,
  NameIconsAndButtonContainer,
  IdentificationPlateTypography,
} from ".";

const IdentifactionPlate = ({ id, name, types }) => {
  const defaultTheme = useTheme();
  const matches = useMediaQuery(defaultTheme.breakpoints.up("sm"));
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const animatedSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
  const displayId = formatPokeId(id);
  const capitilizedName = capitalCase(name);
  const pokemonTypes = types ? mapPokeTypeName(types) : [];
  const typographyVariant = "h5";

  const PokemonTypeIcons = () => {
    return (
      <TypeIconsContainer>
        {pokemonTypes.map((pokemonType) => {
          return (
            <PokemonTypeIcon
              key={pokemonType}
              pokemontype={pokemonType}
              src={`/icons/${pokemonType}.svg`}
              aria-label={pokemonType}
              alt="Type Icon"
            />
          );
        })}
      </TypeIconsContainer>
    );
  };

  return (
    <Background>
      <SpriteIdBg pokemontypes={pokemonTypes} />
      <SpriteAndIdContainer id={id}>
        <Sprite id={id} src={id < 650 ? animatedSrc : src} alt="pokemon" />
        <IdentificationPlateTypography variant={typographyVariant}>
          No. {displayId}
        </IdentificationPlateTypography>
      </SpriteAndIdContainer>
      <NameIconsAndButtonContainer>
        <NameAndIconsContainer>
          <IdentificationPlateTypography variant={typographyVariant}>
            {capitilizedName}
          </IdentificationPlateTypography>
          {matches && <PokemonTypeIcons />}
        </NameAndIconsContainer>
        <IconButton size="large" color="inherit" aria-label="Add to team">
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </NameIconsAndButtonContainer>
    </Background>
  );
};

export default IdentifactionPlate;
