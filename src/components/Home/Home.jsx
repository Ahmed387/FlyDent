import Ourbranches from "../Ourbranches/Ourbranches";
import Ourservice from "../Ourservice/Ourservice";
import Teamslider from "../Sliders/Teamslider/Teamslider";
import Mainslider from "../Sliders/Mainslider/Mainslider";

export default function Home() {
  return (
    <>
      <Mainslider />
      <div className="container mx-auto">
        <Ourservice />
        <Teamslider />
        <Ourbranches />
      </div>
    </>
  );
}
