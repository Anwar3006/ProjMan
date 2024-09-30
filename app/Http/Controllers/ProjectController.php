<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        $allProjects = Project::all();
        // return Inertia::render('Projects/Index', [
        //     'projects' => $allProjects
        // ]);
        return $allProjects;
    }

    public function create() {}

    public function store() {}

    public function show($id) {}

    public function edit($id) {}

    public function update($id) {}

    public function destroy($id) {}
}
