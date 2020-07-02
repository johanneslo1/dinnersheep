<?php

namespace App\Providers;

use App\Presenters\UserPresenter;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerInertia();
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }


    /**
     * Registriert alle Dinge für Inertia
     */
    public function registerInertia()
    {
        Inertia::version(function () {
            return md5_file(public_path('mix-manifest.json'));
        });

        // Shared Data
        Inertia::share([
            'auth' => function () {
                return [
                    'user' => auth()->user()
                        ? UserPresenter::make(auth()->user())->all()
                        : null,
                ];
            },
            'flash' => function () {
                return [
                    'success' => Session::get('success'),
                    'error' => Session::get('error'),
                ];
            },
            'errors' => function () {
                return Session::get('errors')
                    ? Session::get('errors')->getbag('default')->getmessages()
                    : null;
            },
        ]);

    }
}
