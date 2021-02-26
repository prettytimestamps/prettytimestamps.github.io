import { Box, TextInput, Text, Button, ButtonType } from "grommet";
import { useCallback } from "react";
import { Guess } from "../services/guessTimestampForm";
import { SelectTimeZone } from "./SelectTimeZone";
import { Clock } from "grommet-icons";
import moment from "moment-timezone";
import copy from "copy-to-clipboard";

interface InputsProps {
  guessedTime: Guess | null;
  stamp: string | null;
  setStamp: (newStamp: string) => void;
  tzs: string[];
  setTZs: (newTzs: string[]) => void;
}

const CalculatorButton = (props: ButtonType) => (
  <Button
    size="small"
    style={{ borderRadius: 5, margin: "0 .25em", padding: ".25em .75em" }}
    {...props}
  />
);

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
    <>
      <Box flex direction="row">
        <Box width={{ max: "medium" }} pad="small">
          <TextInput
            key={stamp}
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

      <Box style={{ marginBottom: "1em" }} direction="row">
        <CalculatorButton label="COPY" onClick={() => copy(stamp!)} />
        <CalculatorButton
          label="NOW"
          onClick={() => setStamp(moment().unix().toString())}
        />
        <CalculatorButton
          label="+1H"
          onClick={() =>
            guessedTime &&
            setStamp(guessedTime.time.add(1, "hour").unix().toString())
          }
        />
        <CalculatorButton
          label="-1H"
          onClick={() =>
            guessedTime &&
            setStamp(
              guessedTime.time.subtract(1, "hour").unix().toString().toString()
            )
          }
        />
        <CalculatorButton
          label="+1M"
          onClick={() =>
            guessedTime &&
            setStamp(guessedTime.time.add(1, "minute").unix().toString())
          }
        />
        <CalculatorButton
          label="-1M"
          onClick={() =>
            guessedTime &&
            setStamp(guessedTime.time.subtract(1, "minute").unix().toString())
          }
        />
        <CalculatorButton
          label="+1S"
          onClick={() =>
            guessedTime &&
            setStamp(guessedTime.time.add(1, "second").unix().toString())
          }
        />
        <CalculatorButton
          label="-1S"
          onClick={() =>
            guessedTime &&
            setStamp(guessedTime.time.subtract(1, "second").unix().toString())
          }
        />
      </Box>
    </>
  );
};
