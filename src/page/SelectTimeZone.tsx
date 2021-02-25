import Select from "react-select";

import moment from "moment-timezone";
import { useState } from "react";

const allNames = moment.tz.names();
const allAbbr = Array.from(
  new Set(moment.tz.names().map((x) => moment.tz(x).zoneAbbr()))
);

const suggestions = allNames.concat(allAbbr).map((x) => ({
  value: x,
  label: x,
}));

interface SelectTimeZoneParams {
  tzs: Array<String>;
  addTZ: (tz: string) => void;
}

export const SelectTimeZone: React.FunctionComponent<SelectTimeZoneParams> = ({
  tzs,
  addTZ,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <Select
        key={`select_${tzs.length}`}
        options={suggestions}
        onChange={(e) => {
          addTZ(e?.value!);
        }}
      />
    </div>
  );
};
