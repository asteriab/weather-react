import moment from "moment/moment";

export default function DateTime() {
  return (
    <p className="DateTime">
      <span>{moment(new Date()).format("dddd, MMM D")}</span>
      <br />
      <span>{moment(new Date()).format("HH:mm")}</span>
    </p>
  );
}
