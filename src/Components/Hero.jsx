import Logo from "../images/logo.svg";
export default function Hero() {
  return (
    <section className=" flex items-center justify-center flex-col mt-12">
      <img src={Logo} alt="" className="mb-10" />
      <h1 className="text-3xl font-bold text-darkGrayishBlue mb-2">
        A History of Everything you copy
      </h1>
      <p className="max-w-xl text-xl mt-5 text-grayishBllue mb-6">
        Clipboard allows you to track and organize everything you copy.
        Instantky access your clipboard on all your devices
      </p>
      <div className="mt-6 w-screen md:space-y-0 md:space-x-1 space-y-5 flex items-center justify-center flex-col md:flex-row">
        <a
          href=""
          className="bg-stringCyan text-white p-4 rounded-full px-14 hover:opacity-80 duration-100"
        >
          Downoad for IOS
        </a>
        <a
          href=""
          className="bg-lightblue text-white p-4 rounded-full px-14 hover:opacity-80 duration-100"
        >
          Downoad for MAC
        </a>
      </div>
    </section>
  );
}
