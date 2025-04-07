import { Feature, PaginatedData } from "@/types";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function ({ feature }: { feature: Feature }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
      <div className="flex gap-8 p-6 text-gray-900 dark:text-gray-100">
        <div className="flex flex-col items-center">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
          <span>12</span>
          <button className="text-2xl font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <h1 className="mb-2 text-2xl">
            <Link
              href={route("feature.show", feature)}
              className="inline-flex gap-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Comments
            </Link>
          </h1>
          <p>
            {isExpanded
              ? feature.description
              : `${feature.description.slice(0, 200)}...`}
          </p>
          <button
            onClick={toggleReadMore}
            className="text-amber-500 hover:underline"
          >
            {isExpanded ? "Show less" : "Show more"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
