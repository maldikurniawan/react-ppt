export default function App() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center text-center h-screen bg-gradient-to-b from-[#133E87] via-[#608BC1] to-[#CBDCEB] overflow-hidden">
      <div class="x1">
        <div class="cloud"></div>
      </div>

      <div class="x2">
        <div class="cloud"></div>
      </div>

      <div class="x3">
        <div class="cloud"></div>
      </div>

      <div class="x4">
        <div class="cloud"></div>
      </div>

      <div class="x5">
        <div class="cloud"></div>
      </div>
      <div className="absolute">
        <div className="block sm:hidden">
          {/* Display on smaller screens */}
          <iframe
            src="https://drive.google.com/file/d/1E14V9nDoBpfCWi17TVtQ2jBSoYW19R6p/preview"
            width="320"
            height="640"
            allow="autoplay"
          />
        </div>
        <div className="hidden sm:block lg:hidden">
          {/* Display on medium screens */}
          <iframe
            src="https://drive.google.com/file/d/1E14V9nDoBpfCWi17TVtQ2jBSoYW19R6p/preview"
            width="640"
            height="480"
            allow="autoplay"
          />
        </div>
        <div className="hidden lg:block">
          {/* Display on larger screens */}
          <iframe
            src="https://drive.google.com/file/d/1E14V9nDoBpfCWi17TVtQ2jBSoYW19R6p/preview"
            width="800"
            height="600"
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  );
}
