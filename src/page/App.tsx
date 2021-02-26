import { Box, Grommet, Button } from "grommet";
import { Github } from "grommet-icons";
import moment from "moment";
import { useMemo } from "react";
import {
  useQueryParam,
  StringParam,
  withDefault,
  ArrayParam,
} from "use-query-params";
import { guessTimeStampForm } from "../services/guessTimestampForm";
import { Inputs } from "./Input";
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

  return (
    <Grommet theme={theme}>
      <AppBar>
        <Box>Pretty Timestamp</Box>
        <Box>
          <Button
            secondary
            icon={<Github />}
            target="blank"
            href="https://github.com/prettytimestamps/prettytimestamps.github.io/"
            label="GitHub"
          />
        </Box>
      </AppBar>
      <Box pad="small" direction="row" flex overflow={{ horizontal: "hidden" }}>
        <Box flex align="center" justify="center">
          <Inputs
            guessedTime={guessedTime}
            stamp={stamp || null}
            setStamp={setStamp}
            tzs={tzs as string[]}
            setTZs={setTZs}
          />
          <TimeDisplay
            guessedTime={guessedTime}
            tzs={tzs as string[]}
            setTZs={setTZs}
          />
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
