import ImageDevice from "../images/image-devices.png";
export default function Access() {
  return (
    <>
      <section id="access">
        <div className="max-w-6xl mx-auto my-40">
          <h1 className="text-3xl font-bold text-darkGrayishBlue mb-2 ">
            Access Clipboard anywhere
          </h1>
          <p className="max-w-xl text-xl mt-5 text-grayishBllue mb-6  mx-auto">
            Weather you're on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks
          </p>
          <img src={ImageDevice} alt="" className="my-16 mx-auto " />
        </div>
      </section>
    </>
  );
}
