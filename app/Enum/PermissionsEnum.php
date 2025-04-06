<?php

namespace App\Enum;

enum PermissionsEnum: string
{
    case ManageFeatures = 'manage_feattures';
    case MangeUsers = 'manage_users';
    case ManageComments = 'manage_comments';
    case UpvoteDownVote = 'upvote_downvote';
}
