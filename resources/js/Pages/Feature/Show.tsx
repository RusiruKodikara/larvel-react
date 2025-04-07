import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Feature } from "@/types";

export default function Show({ feature }: { feature: Feature }) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Feature <b></b>
        </h2>
      }
    >
      <Head title={"Feature "} />
      <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
        <div className="flex gap-8 p-6 text-gray-900 dark:text-gray-100">
          <p></p>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
