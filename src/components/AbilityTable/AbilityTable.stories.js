import React from "react";

import AbilityTable from "./AbilityTable";
import { mockPokeResult } from "../../stories";

export default {
  title: "Features/AbilityTable",
  component: AbilityTable,
  argTypes: {
    abilities: { controls: "object" },
  },
};

const AbilityTableStory = (args) => <AbilityTable {...args} />;

export const Primary = AbilityTableStory.bind({});
Primary.args = {
  abilities: mockPokeResult.abilities,
};
