import { Box, Grommet, TextInput, Text } from "grommet";
import { Clock } from "grommet-icons";
import moment from "moment";
import { useMemo } from "react";
import { useCallback } from "react";
import {
  useQueryParam,
  StringParam,
  withDefault,
  ArrayParam,
} from "use-query-params";
import { guessTimeStampForm } from "../services/guessTimestampForm";
import { SelectTimeZone } from "./SelectTimeZone";
import { TimeDisplay } from "./TimeDisplay";

const AppBar = (props: any) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
    colors: {
      focus: "#0CA7D3",
    },
  },
};

function App() {
  const [stamp, setStamp] = useQueryParam("t", StringParam);
  const [tzs, setTZs] = useQueryParam(
    "z",
    withDefault(ArrayParam, ["UTC", moment.tz.guess()])
  );

  const guessedTime = useMemo(
    () => (stamp ? guessTimeStampForm(stamp) : null),
    [stamp]
  );

  const onChange = useCallback(
    (e) => {
      setStamp(e.target.value);
    },
    [setStamp]
  );

  return (
    <Grommet theme={theme}>
      <AppBar>Pretty Timestamp</AppBar>
      <Box pad="small" direction="row" flex overflow={{ horizontal: "hidden" }}>
        <Box flex align="center" justify="center">
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
                addTZ={(tz) => setTZs([...tzs, tz])}
              ></SelectTimeZone>
            </Box>
          </Box>
          <TimeDisplay guessedTime={guessedTime} tzs={tzs as string[]} />
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
