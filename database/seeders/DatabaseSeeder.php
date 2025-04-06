<?php

namespace Database\Seeders;

use App\Enum\PermissionsEnum;
use App\Enum\RolesEnum;
use App\Models\Feature;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $userRole = Role::create(['name' => RolesEnum::User->value]);
        $commentorRole = Role::create(['name' => RolesEnum::Commentor->value]);
        $adminRole = Role::create(['name' => RolesEnum::Admin->value]);

        $manageFeaturesPermission = Permission::create(['name' => PermissionsEnum::ManageFeatures->value]);
        $manageUsersPermission = Permission::create(['name' => PermissionsEnum::MangeUsers->value]);
        $manageCommentsPermission = Permission::create(['name' => PermissionsEnum::ManageComments->value]);
        $UpvoteDownVotePermission = Permission::create(['name' => PermissionsEnum::UpvoteDownVote->value]);

        $userRole->syncPermissions([$UpvoteDownVotePermission]);
        $commentorRole->syncPermissions([$UpvoteDownVotePermission, $manageCommentsPermission]);
        $adminRole->syncPermissions([$manageFeaturesPermission, $manageUsersPermission, $manageCommentsPermission, $UpvoteDownVotePermission]);

        User::factory()->create([
            'name' => 'User user',
            'email' => 'user@example.com',
        ])->assignRole(RolesEnum::User);
        
        User::factory()->create([
            'name' => 'Commentor user',
            'email' => 'commentor@example.com',
        ])->assignRole(RolesEnum::Commentor);
        
        User::factory()->create([
            'name' => 'Admin user',
            'email' => 'admin@example.com',
        ])->assignRole(RolesEnum::Admin);

        Feature::factory(100)->create();
    }
}
