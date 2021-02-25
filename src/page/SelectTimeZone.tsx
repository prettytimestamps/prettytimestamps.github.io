import { TextInput } from "grommet";
import { AddCircle } from "grommet-icons";

import moment from "moment-timezone";
import { useMemo, useState } from "react";

const allNames = moment.tz.names();
const allAbbr = Array.from(
  new Set(moment.tz.names().map((x) => moment.tz(x).zoneAbbr()))
);

const suggestions = allAbbr.concat(allNames);

interface SelectTimeZoneParams {
  tzs: Array<String>;
  addTZ: (tz: string) => void;
}

export const SelectTimeZone: React.FunctionComponent<SelectTimeZoneParams> = ({
  tzs,
  addTZ,
}) => {
  const [currentInput, setCurrentInput] = useState("");
  const suggestionSet = useMemo(
    () => suggestions.filter((x) => x.indexOf(currentInput) >= 0),
    [currentInput]
  );

  return (
    <div style={{ width: "100%" }}>
      <TextInput
        icon={<AddCircle />}
        dropHeight="small"
        focusIndicator={false}
        key={`select_${tzs.length}`}
        suggestions={suggestionSet}
        onChange={(e) => setCurrentInput(e.currentTarget.value)}
        onSuggestionSelect={(e) => {
          addTZ(e.suggestion);
        }}
      />
    </div>
  );
};
