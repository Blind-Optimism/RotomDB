import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Table,
  TableBody,
  TableRow,
  Typography,
} from "@material-ui/core";
import {
  TopRow,
  InfoCard,
  // InfoCardBottomRow,
  StatTable,
  LabelCell,
  StatTableCell,
} from "./PokeDetails.styles";
import { capitalCase, massageStats, queryApi } from "../../util";
import NameCard from "../NameCard";
import StatGraph from "../StatGraph";
import AblitiyTable from "../AbilityTable/AbilityTable";
import { ExpandMore } from "@material-ui/icons";
import { useState, useEffect } from "react";
import EvolutionTable from "../EvolutionTable/EvolutionTable";

const PokeDetails = ({ result, addToTeam }) => {
  const { id, name, types, stats, abilities, species } = result;

  const [speciesData, setSpeciesData] = useState({});

  const mapStatTableRows = (stats) => {
    const massagedStats = massageStats(stats);
    const keys = Object.keys(massagedStats);
    const values = Object.values(massagedStats);

    return keys.map((label, baseStat) => {
      return (
        <TableRow className="Row" key={label}>
          <StatTableCell align="left">{values[baseStat]}</StatTableCell>
          <LabelCell align="left">{capitalCase(label)}</LabelCell>
        </TableRow>
      );
    });
  };

  const AboutAccordian = () => {
    return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="about-panel-content"
          id="about-panel-header"
        >
          <Typography>About</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <EvolutionTable speciesData={speciesData} />
        </AccordionDetails>
      </Accordion>
    );
  };

  useEffect(() => {
    const fetchAdditionalData = async () => {
      const speciesEndpoint = species ? species.url : "";
      const speciesRes = await queryApi(speciesEndpoint);
      setSpeciesData(speciesRes);
    };
    fetchAdditionalData();
  }, [species]);

  return id ? (
    <div className="PokeDetails">
      <InfoCard>
        <NameCard id={id} name={name} types={types} />
        <TopRow>
          <StatGraph stats={stats} types={types} />
          <StatTable>
            <Table className="Table" size="small">
              <TableBody className="Body">{mapStatTableRows(stats)}</TableBody>
            </Table>
          </StatTable>
          <AblitiyTable abilities={abilities} />
        </TopRow>
        <AboutAccordian />
      </InfoCard>

      <button
        onClick={() => {
          addToTeam(result);
        }}
      >
        {" "}
        add to team{" "}
      </button>
    </div>
  ) : null;
};

export default PokeDetails;
