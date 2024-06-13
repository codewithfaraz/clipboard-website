import BlackList from "../images/icon-blacklist.svg";
import Preview from "../images/icon-preview.svg";
import Text from "../images/icon-text.svg";
export default function Supercharge() {
  return (
    <section id="supercharge">
      <div className="max-w-6xl mx-auto my-40">
        <h1 className="text-3xl font-bold text-darkGrayishBlue mb-2 ">
          Supercharge your workflow
        </h1>
        <p className="max-w-xl text-xl mt-5 text-grayishBllue mb-6  mx-auto">
          We've got the tools to boost your productivity
        </p>
        <div className="my-16 flex flex-col md:flex-row items-center justify-center gap-3">
          {/* item 1 */}
          <div className="flex flex-col items-center justify-center ">
            <img src={BlackList} alt="" />
            <h1 className="text-2xl font-bold text-darkGrayishBlue mb-2 ">
              Create blacklist
            </h1>
            <p className="max-w-sm text-xl mt-5 text-grayishBllue mb-6  mx-auto">
              Easily search your snippets by content, category, web address,
              application and more
            </p>
          </div>
          {/* items 2 */}
          <div className="flex flex-col items-center justify-center">
            <img src={Text} alt="" />
            <h1 className="text-2xl font-bold text-darkGrayishBlue mb-2 ">
              Plain text snippets
            </h1>
            <p className="max-w-sm text-xl mt-5 text-grayishBllue mb-6  mx-auto">
              Remove unwanted formating from copies text for a consistent look
            </p>
          </div>
          {/* items 3 */}
          <div className="flex flex-col items-center justify-center">
            <img src={Preview} alt="" />
            <h1 className="text-2xl font-bold text-darkGrayishBlue mb-2 ">
              Sneak preview
            </h1>
            <p className="max-w-sm text-xl mt-5 text-grayishBllue mb-6  mx-auto">
              Quick preview of all snippets on your Clipboard for easy access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
