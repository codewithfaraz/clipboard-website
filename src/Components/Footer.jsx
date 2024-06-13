import Logo from "../images/logo.svg";
import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Twitter from "../images/icon-twitter.svg";
export default function Footer() {
  return (
    <footer id="footer">
      <div className="mt-40 flex max-w-6xl mx-auto flex-col md:flex-row items-center justify-between">
        <img src={Logo} alt="" className="w-16 hover:scale-105 duration-100" />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 mt-5 md:space-x-4">
          <a
            href=""
            className="text-grayishBllue hover:opacity-80 duration-200"
          >
            FAQs
          </a>
          <a
            href=""
            className="text-grayishBllue hover:opacity-80 duration-200"
          >
            Privacy Policy
          </a>
          <a
            href=""
            className="text-grayishBllue hover:opacity-80 duration-200"
          >
            Install Guide
          </a>
          <a
            href=""
            className="text-grayishBllue hover:opacity-80 duration-200"
          >
            Contact Us
          </a>
          <a
            href=""
            className="text-grayishBllue hover:opacity-80 duration-200"
          >
            Press Kit
          </a>
        </div>
        <div className="flex space-x-5 mt-10">
          <img src={Facebook} alt="" className="w-8 cursor-pointer" />
          <img src={Twitter} alt="" className="w-8 cursor-pointer" />
          <img src={Instagram} alt="" className="w-8 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
