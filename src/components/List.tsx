import React from "react";

type Props = {
  title?: string;
  description?: string;
  buttonTitle?: string;
  buttonOnClick?: any;
};

export default function List({
  title,
  description,
  buttonTitle,
  buttonOnClick,
}: Props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                {title}
              </h1>
              <p className="leading-relaxed mb-3">{description}</p>
              <a
                onClick={buttonOnClick}
                className="text-indigo-500 inline-flex items-center"
              >
                {buttonTitle}
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
