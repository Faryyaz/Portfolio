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
        $workExperience = \App\DataFormatter::getWorkExperience();

        return response()->json([
            'workExperience' => $workExperience,
        ], 200);
    }

    public function workTimeLine()
    {

    }

    public function projects()
    {
        $projects = \App\DataFormatter::getProjects();

        return response()->json([
            'projects' => $projects,
        ], 200);
    }

    public function mainSkills()
    {
        $skills = \App\DataFormatter::getMainSkills();;

        return response()->json([
            'skills' => $skills,
        ], 200);
    }

    public function otherSkills()
    {
        $others = \App\DataFormatter::getOtherSkills();;

        return response()->json([
            'others' => $others,
        ], 200);
    }

    public function testimonials()
    {
        $testimonials = Testimonials::all();

        return response()->json([
            'testimonials' => $testimonials,
        ], 200);
    }
}
