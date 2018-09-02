<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function workExperience()
    {
        // $workExperience = Work_experience::all();

        $workExperience = \App\DataFormatter::getWorkExperience();
        // dd($workExperience);
        return response()->json([
            'workExperience' => $workExperience,
        ], 200);
    }

    public function workTimeLine()
    {

    }

    public function projects()
    {
        $projects = Projects::all();

        return response()->json([
            'projects' => $projects,
        ], 200);
    }

    public function mainSkills()
    {
        $skills = Skills::all();

        return response()->json([
            'skills' => $skills,
        ], 200);
    }

    public function otherSkills()
    {

    }

    public function testimonials()
    {
        $testimonials = Testimonials::all();

        return response()->json([
            'testimonials' => $testimonials,
        ], 200);
    }
}
