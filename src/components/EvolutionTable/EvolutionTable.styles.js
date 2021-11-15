import { styled, Typography, Paper } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export const EvoTableWrapper = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: `${theme.spacing(2)} 0`,
}));

export const EvoStepWrapper = styled("div")({
  display: "flex",
});

export const EvoTablePaper = styled(Paper)({
  width: "4vw",
  display: "flex",
  flexDirection: "column",
  borderRadius: "5px",
  overflow: "hidden",
  cursor: "pointer",
});

export const EvoTableTypogragphy = styled(Typography)({
  color: "white",
  backgroundColor: "black",
});

export const EvoTableArrow = styled(DoubleArrowIcon)(({ theme }) => ({
  margin: "auto 5px",
}));
