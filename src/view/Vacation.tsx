interface Props {
  available: boolean;
}

export function Vacation({ available }: Props) {
  if (available === true) {
    return <h1> Going on vacation </h1>;
  } else {
    return <h1> Too busy for Vacation </h1>;
  }

}
  // return (
  //   <h1>
  //     {available === true ? "Going on vacation" : "Too busy for Vacation"}
  //     {available === true && "Going on vacation" }
  //   </h1>
  // );

    // const msg =
    //   available === true ? "Going on vacation" : "Too busy for Vacation";

    // return <h1>{msg}</h1>;