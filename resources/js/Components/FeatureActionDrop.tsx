import { Feature } from "@/types";
import Dropdown from "./Dropdown";
import { usePage } from "@inertiajs/react";
import { can } from "@/helpers";

export default function FeatureActionsDropdown({
  feature,
}: {
  feature: Feature;
}) {
  const user = usePage().props.auth.user;
  if (!can(user, "manage_feattures")) {
    return;
  }
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <span className="inline-flex rounded-md">
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </Dropdown.Trigger>

      <Dropdown.Content>
        <Dropdown.Link href={route("feature.edit", feature.id)}>
          Edit Feature
        </Dropdown.Link>
        <Dropdown.Link
          href={route("feature.destroy", feature.id)}
          method="delete"
          as="button"
        >
          Delete Feature
        </Dropdown.Link>
      </Dropdown.Content>
    </Dropdown>
  );
}
