<?php


namespace App\Http\Controllers\Account;


use App\Http\Controllers\Controller;
use App\Presenters\UserPresenter;
use Inertia\Inertia;

final class ShowAccountSettingsController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Users/Edit', [
            'user' => UserPresenter::make(auth()->user())
        ]);
    }
}
