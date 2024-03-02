{modal && (
    <div className="container" style={{ zIndex: "998" }}>
      <div className="modal-wrapper" style={{ zIndex: "998" }}></div>

      <div
        className="flex relative flex-col modal-container min-w-full md:min-w-fit md:w-[20vw] xl:w-[30vw] !h-auto !top-auto !bottom-0 md:!bottom-auto md:!top-1/2"
        style={{ zIndex: "998" }}
      >
        <div className="flex justify-between items-center px-5 py-4 xsm:py-6 md:px-6 border-b-[1px]">
          <div className="www flex items-center  gap-x-3.5">
            <HiCheckCircle />
            <p className="text-lg md:text-xl text-black tracking-normal font-medium">
              Confirmation
            </p>
            {/* {props.showSpan && (
            <span className=" text-yellow-400 text-xl md:text-2xl" style={{ padding: '0' }}>
            <RiVipCrownFill />
          </span>
        )} */}
          </div>
          <span
            onClick={() => setModel(false)}
            className="text-2xl text-black hover:scale-110 logo-fill"
            style={{ cursor: "pointer", padding: "0" }}
          >
            <HiOutlineX />
          </span>
        </div>

        <div className="mx-5 my-2 md:mx-6 overflow-auto">
          Are you sure want to continue without-
        </div>
        <div>
          {customization.name === "Your Name" && (
            <li className="mx-5 my-1 md:mx-6 overflow-auto ">Your Name</li>
          )}
        </div>
        <div>
          {customization.designation === "Your Designation" && (
            <li className="mx-5 my-1 md:mx-6 overflow-auto ">
              Your Designation
            </li>
          )}
        </div>
        <div>
          {!logo && (
            <li className="mx-5 my-1 md:mx-6 overflow-auto ">Your Logo</li>
          )}
        </div>
        <div className="flex px-8 py-4 gap-4">
          <button
            className="rounded-full border-2 border-black hover:border-gray-500"
            onClick={() => setModel(false)}
            style={{
              background: "#fafafa",
              width: "60%",
              color: "black",
              transform: "scale(1)",
            }}
          >
            <div className="flex justify-center items-center gap-2 ">
              <div>Cancel</div>
              <HiOutlineX />
            </div>
          </button>
          <button
            className="rounded-full border-2 border-black py-2  hover:border-gray-500"
            onClick={async () => {
              await convertToPng();
              addToCart(product, color);
            }}
            style={{
              background: "#fafafa",
              width: "60%",
              color: "black",
              transform: "scale(1)",
            }}
          >
            <div className="flex justify-center items-center gap-2 ">
              <div>Continue</div>
              <HiArrowRight />
            </div>
          </button>
        </div>
      </div>
    </div>
  )}