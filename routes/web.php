<?php

use App\Enum\PermissionsEnum;
use App\Enum\RolesEnum;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FeatureController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UpvoteController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    // Profile Routes
    Route::prefix('profile')->name('profile.')->group(function () {
        Route::get('/edit', [ProfileController::class, 'edit'])->name('edit');
        Route::patch('/', [ProfileController::class, 'update'])->name('update');
        Route::delete('/', [ProfileController::class, 'destroy'])->name('destroy');
    });

    // User Routes (Admin Only)
    Route::middleware(['role:' . RolesEnum::Admin->value])->prefix('user')->name('user.')->group(function () {
        Route::get('/', [UserController::class, 'index'])->name('index');
        Route::get('/{user}/edit', [UserController::class, 'edit'])->name('edit');
        Route::put('/{user}', [UserController::class, 'update'])->name('update');
    });

    // Feature Routes (Specific Roles/Permissions)
    Route::resource('feature', FeatureController::class)
        ->except(['index', 'show'])
        ->middleware('can:' . PermissionsEnum::ManageFeatures->value);

    Route::get('/feature', [FeatureController::class, 'index'])->name('feature.index');
    Route::get('/feature/{feature}', [FeatureController::class, 'show'])->name('feature.show');

    Route::post('/feature/{feature}/upvote', [UpvoteController::class, 'store'])->name('upvote.store');
    Route::delete('/upvote/{feature}', [UpvoteController::class, 'destroy'])->name('upvote.destroy');

    // Comment Routes (Specific Roles/Permissions)
    Route::prefix('feature/{feature}/comments')->name('comment.')->middleware('can:' . PermissionsEnum::ManageComments->value)->group(function () {
        Route::post('/', [CommentController::class, 'store'])->name('store');
    });
    Route::prefix('comment/{comment}')->name('comment.')->middleware('can:' . PermissionsEnum::ManageComments->value)->group(function () {
        Route::delete('/', [CommentController::class, 'destroy'])->name('destroy');
    });

    // Dashboard Route (Accessible to specified roles)
    Route::middleware([
        sprintf(
            'role:%s|%s|%s',
            RolesEnum::User->value,
            RolesEnum::Commentor->value,
            RolesEnum::Admin->value
        )
    ])->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Dashboard');
        })->name('dashboard');
    });
});

require __DIR__ . '/auth.php';
