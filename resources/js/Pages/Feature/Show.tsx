import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Feature } from "@/types";
import FeatureUpvoteDownvote from "@/Components/FeatureUpvoteDownvote";
import CommentItem from "@/Components/CommentItem";
import NewCommentForm from "@/Components/NewCommentForm";

export default function Show({ feature }: { feature: Feature }) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Feature: <b>{feature.name}</b>
        </h2>
      }
    >
      <Head title={"Feature " + feature.name} />

      <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
        <div className="flex gap-8 p-6 text-gray-900 dark:text-gray-100">
          <FeatureUpvoteDownvote feature={feature} />
          <div className="flex-1">
            <h2 className="mb-2 text-2xl">{feature.name}</h2>
            <p>{feature.description}</p>
            <div className="mt-8">
              <NewCommentForm feature={feature} />
              {feature.comments.map((comment) => (
                <CommentItem comment={comment} key={comment.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
