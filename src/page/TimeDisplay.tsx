import moment from "moment-timezone";
import { DataTable, Text, TextInput } from "grommet";
import { SelectTimeZone } from "./SelectTimeZone";
import { ArrayParam, useQueryParam, withDefault } from "use-query-params";

interface TimeDisplayProps {
  time: string | null;
}

export const TimeDisplay = ({ time }: TimeDisplayProps) => {
  let displayList = ["UTC", moment.tz.guess()];
  const [tzs, setTZs] = useQueryParam("z", withDefault(ArrayParam, []));

  return (
    <>
      <SelectTimeZone
        tzs={tzs as string[]}
        addTZ={(tz) => setTZs([...tzs, tz])}
      ></SelectTimeZone>
      <DataTable
        columns={[
          {
            property: "name",
            header: <Text>Name</Text>,
            primary: true,
            render: (d) => d,
          },
          {
            property: "offset",
            header: "Offset",
            render: (d) =>
              time == null
                ? "???"
                : moment(parseInt(time, 10)).tz(d).format("z"),
          },
          {
            property: "time",
            header: "Time",
            render: (d) => (
              <span style={{ fontFamily: "'Roboto Mono', monospace" }}>
                {time
                  ? moment(parseInt(time, 10))
                      .tz(d)
                      .format("YYYY-MM-DD HH:mm:ss")
                  : "0000-00-00 00:00:00"}
              </span>
            ),
          },
        ]}
        data={displayList.concat(tzs as string[])}
      />
    </>
  );
};
