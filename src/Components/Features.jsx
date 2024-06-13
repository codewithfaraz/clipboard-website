import ComputerImage from "../images/image-computer.png";
export default function Features() {
  return (
    <>
      <section id="features">
        <div className="flex flex-col md:flex-row my-40">
          <div className="md:w-1/2">
            <img src={ComputerImage} alt="" />
          </div>
          <div className="md:w-1/2 p-3 flex flex-col items-center m-3">
            {/* item1 */}
            <div>
              <h1 className="text-2xl font-bold text-darkGrayishBlue mb-2 md:text-left">
                Quick Search
              </h1>
              <p className="max-w-sm text-xl mt-5 text-grayishBllue mb-6 md:text-left">
                Easily search your snippets bt content, category, web address,
                application and more
              </p>
            </div>
            {/* item2 */}
            <div>
              <h1 className="text-2xl font-bold text-darkGrayishBlue mb-2 md:text-left">
                ICloud Sync
              </h1>
              <p className="max-w-sm text-xl mt-5 text-grayishBllue mb-6 md:text-left">
                Instantly saves and syncs snippets accross all your devices
              </p>
            </div>
            {/* item3 */}
            <div>
              <h1 className="text-2xl font-bold text-darkGrayishBlue mb-2 md:text-left">
                Complete History
              </h1>
              <p className="max-w-sm text-xl mt-5 text-grayishBllue mb-6 md:text-left">
                Retrieve any snippets from the first moment you started uing the
                app
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
