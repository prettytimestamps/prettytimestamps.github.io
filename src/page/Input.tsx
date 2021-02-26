import { Box, TextInput, Text } from "grommet";
import { useCallback } from "react";
import { Guess } from "../services/guessTimestampForm";
import { SelectTimeZone } from "./SelectTimeZone";
import { Clock } from "grommet-icons";

interface InputsProps {
  guessedTime: Guess | null;
  stamp: string | null;
  setStamp: (newStamp: string) => void;
  tzs: string[];
  setTZs: (newTzs: string[]) => void;
}

export const Inputs: React.FunctionComponent<InputsProps> = ({
  guessedTime,
  stamp,
  setStamp,
  tzs,
  setTZs,
}) => {
  const onChange = useCallback(
    (e) => {
      setStamp(e.target.value);
    },
    [setStamp]
  );

  return (
    <Box flex direction="row">
      <Box width={{ max: "medium" }} pad="small">
        <TextInput
          icon={guessedTime ? <Text>{guessedTime.type}</Text> : <Clock />}
          defaultValue={stamp ?? undefined}
          onChange={onChange}
          placeholder="timestamp..."
        />
      </Box>
      <Box width={{ max: "medium" }} pad="small">
        <SelectTimeZone
          tzs={tzs as string[]}
          addTZ={(tz) => {
            setTZs(Array.from(new Set([...tzs, tz])));
          }}
        ></SelectTimeZone>
      </Box>
    </Box>
  );
};
