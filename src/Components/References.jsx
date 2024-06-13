import Google from "../images/logo-google.png";
import HP from "../images/logo-hp.png";
import IBM from "../images/logo-ibm.png";
import Microsoft from "../images/logo-microsoft.png";
export default function References() {
  return (
    <section id="references">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row my-40 items-center justify-between space-y-24 md:space-y-0">
        <img src={Google} alt="" />
        <img src={HP} alt="" />
        <img src={IBM} alt="" />
        <img src={Microsoft} alt="" />
      </div>
    </section>
  );
}
