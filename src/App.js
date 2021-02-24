import { Box, Grommet, TextInput } from "grommet";
import { Clock } from "grommet-icons";
import { useCallback } from "react";
import { useQueryParam, StringParam } from "use-query-params";
import { TimeDisplay } from "./TimeDisplay";

const AppBar = (props) => (
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

  const onChange = useCallback(
    (e) => {
      setStamp(e.target.value, "replace");
    },
    [setStamp]
  );

  return (
    <Grommet theme={theme}>
      <AppBar>Pretty Timestamp</AppBar>
      <Box pad="small" direction="row" flex overflow={{ horizontal: "hidden" }}>
        <Box flex align="center" justify="center">
          <Box width={{ max: "medium" }}>
            <TextInput
              icon={<Clock />}
              defaultValue={stamp}
              onChange={onChange}
              placeholder="timestamp..."
            />
          </Box>
          <TimeDisplay time={stamp} />
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
