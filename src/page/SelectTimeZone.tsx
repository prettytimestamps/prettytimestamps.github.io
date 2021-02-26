import { TextInput } from "grommet";
import { AddCircle } from "grommet-icons";

import moment from "moment-timezone";
import { useMemo, useState } from "react";
import { fuzzyMatch } from "../services/fuzzyMatch";

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
    () => fuzzyMatch(currentInput, moment.tz.names()),
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
