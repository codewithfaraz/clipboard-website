export default function CTA() {
  return (
    <section id="CTA">
      <div className="max-w-6xl mx-auto flex items-center justify-center flex-col my-20">
        <h1 className="text-2xl font-bold text-darkGrayishBlue mb-2 md:text-left">
          Clipboard for IOS and MAC OS
        </h1>
        <p className="max-w-2xl text-xl mt-5 text-grayishBllue mb-6 md:text-left">
          Available for free on the app store. Download for MAC or IOS, sync
          with iCloud and you're ready to start adding to your clipboard
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
      </div>
    </section>
  );
}
