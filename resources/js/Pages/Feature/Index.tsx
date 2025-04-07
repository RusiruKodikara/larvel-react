import FeatureItem from "@/Components/FeatureItem";
import { can } from "@/helpers";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Feature, PageProps, PaginatedData } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Index({
  auth,
  features,
}: PageProps<{ features: PaginatedData<Feature> }>) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Features
        </h2>
      }
    >
      <Head title="Features list" />
      <div className="mb-8">
        {can(auth.user, "manage_feattures") && (
          <Link
            href={route("feature.create")}
            className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-white dark:focus:bg-white dark:focus:ring-offset-gray-800 dark:active:bg-gray-300"
          >
            Create New Feature
          </Link>
        )}
      </div>
      {features.data.map((feature) => (
        <FeatureItem feature={feature} key={feature.id} />
      ))}
    </AuthenticatedLayout>
  );
}
