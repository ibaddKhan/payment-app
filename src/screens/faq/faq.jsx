const Faq = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-5xl cursor-default font-semibold my-10">Frequently Asked Questions</h1>
      </div>
      <div className="flex justify-center">
        <div className="w-8/12">
          <details
            open
            tabIndex="0"
            className="collapse collapse-arrow my-2 bg-base-200"
          >
            <summary className="collapse-title text-xl font-medium">
              Click to open/close
            </summary>
            <div className="collapse-content">
              <p>content</p>
            </div>
          </details>

          <details open className="collapse collapse-arrow my-2 bg-base-200">
            <summary className="collapse-title text-xl font-medium">
              Click to open/close
            </summary>
            <div className="collapse-content">
              <p>content</p>
            </div>
          </details>
          <details open className="collapse collapse-arrow my-2 bg-base-200">
            <summary className="collapse-title text-xl font-medium">
              Click to open/close
            </summary>
            <div className="collapse-content">
              <p>content</p>
            </div>
          </details>
          <details open className="collapse collapse-arrow my-2 bg-base-200">
            <summary className="collapse-title text-xl font-medium">
              Click to open/close
            </summary>
            <div className="collapse-content">
              <p>content</p>
            </div>
          </details>
          <details open className="collapse collapse-arrow my-2 bg-base-200">
            <summary className="collapse-title text-xl font-medium">
              Click to open/close
            </summary>
            <div className="collapse-content">
              <p>content</p>
            </div>
          </details>
        </div>
      </div>
    </>
  );
};

export default Faq;
