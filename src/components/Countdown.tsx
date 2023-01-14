import { FC, useState } from "react";

interface Props {
  eventDate: string;
}

const CustomCountDown: FC<Props> = ({ eventDate }: Props) => {
  const countDownDate = new Date(eventDate).getTime();
  const [day, setDay] = useState<string>("");
  const [hour, setHour] = useState<string>("");
  const [minute, setMinute] = useState<string>("");
  const [second, setSecond] = useState<string>("");

  // Update the count down every 1 second
  const x = setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"

    setDay(days.toString());
    setHour(hours.toString());
    setMinute(minutes.toString());
    setSecond(seconds.toString());

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      setDay(String(0));
      setHour(String(0));
      setMinute(String(0));
      setSecond(String(0));
    }
  }, 1000);

  // semnas
  if (eventDate === "Dec 25, 2023") {
    return (
      <div>
        <p className="text-center font-louisgeorgecafe text-white" style={{ fontSize: "1.5rem" }}>
          Nantikan informasi dari kami ya!
        </p>
      </div>
    );
  }
  return (
    <div>
      <p className="text-center font-louisgeorgecafe text-white" style={{ fontSize: "1.5rem" }}>
        {eventDate}
      </p>
      <div style={{ color: "white", display: "flex" }}>
        <div
          style={{ margin: ".5rem", padding: ".8em", background: "#ffffff26" }}
          className="text-center"
        >
          <p style={{ fontSize: "2rem", marginTop: "2rem", marginBottom: ".5rem" }}>{day}</p>
          <p className="font-louisgeorgecafe">Days</p>
        </div>
        <div
          style={{ margin: ".5rem", padding: ".8em", background: "#ffffff26" }}
          className="text-center"
        >
          <p style={{ fontSize: "2rem", marginTop: "2rem", marginBottom: ".5rem" }}>{hour}</p>
          <p className="font-louisgeorgecafe">Hours</p>
        </div>
        <div
          style={{ margin: ".5rem", padding: ".8em", background: "#ffffff26" }}
          className="text-center"
        >
          <p style={{ fontSize: "2rem", marginTop: "2rem", marginBottom: ".5rem" }}>{minute}</p>
          <p className="font-louisgeorgecafe">Minutes</p>
        </div>
        <div
          style={{ margin: ".5rem", padding: ".8em", background: "#ffffff26" }}
          className="text-center"
        >
          <p style={{ fontSize: "2rem", marginTop: "2rem", marginBottom: ".5rem" }}>{second}</p>
          <p className="font-louisgeorgecafe">Second</p>
        </div>
      </div>
    </div>
  );
};

export default CustomCountDown;
