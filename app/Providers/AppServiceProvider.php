<?php

namespace App\Providers;

use App\Models\Project;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        Model::unguard();

        //Load Projects and make it available in all views
        Inertia::share([
            "latestProjects" => function () {
                return Cache::remember("latestProjects", 60, function () {
                    return Project::select(
                        'id',
                        'title',
                        'created_at'
                    )->latest()->limit(10)->get();
                });
            },
        ]);
    }
}
