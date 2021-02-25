import moment from "moment-timezone";
import { DataTable, Text } from "grommet";
export const TimeDisplay = ({ time }) => {
  let displayList = ["UTC", moment.tz.guess()];

  return (
    <DataTable
      columns={[
        {
          property: "name",
          header: <Text>Name</Text>,
          primary: true,
          render: (d) => d,
        },
        {
          property: "percent",
          header: "Time",
          render: (d) => (
            <span style={{ fontFamily: "'Roboto Mono', monospace" }}>
              {time
                ? moment(parseInt(time, 10)).tz(d).format("YYYY-MM-DD HH:mm:ss")
                : "0000-00-00 00:00:00"}
            </span>
          ),
        },
      ]}
      data={displayList}
    />
  );
};
