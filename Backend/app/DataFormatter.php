<?php

namespace  App;

use Carbon\Carbon;

class DataFormatter {

    public static function getWorkExperience()
    {
        $workExperiences = \App\WorkExperience::all();
        $presentYear = Carbon::now()->format('Y');

        $result = [];
        foreach($workExperiences as $workExperience) {

            $periodTo = $workExperience->period_to->format('Y') > $presentYear ? 'Present' : $workExperience->period_to->format('M Y');

            array_push($result,
                array(
                    'position' => $workExperience->position,
                    'company' => $workExperience->company,
                    'duration' => $workExperience->period_from->format('M Y') . ' - ' . $periodTo,
                    'short_description' => $workExperience->short_description
                )
            );

        }

        return $result;
    }

    public static function getWorkTimeline()
    {
        $workExperiences = \App\WorkExperience::all();
        $presentYear = Carbon::now()->format('Y');

        $result = [];
        foreach($workExperiences as $workExperience) {
            
            $periodTo = $workExperience->period_to->format('Y') > $presentYear ? 'Present' : $workExperience->period_to->format('M Y');
            

            array_push($result,
                array(
                    'position' => $workExperience->position,
                    'company' => $workExperience->company,
                    'period' => [
                        'from' => $workExperience->period_from->format('M Y'),
                        'to' => $periodTo
                    ],
                    'description' => explode(';', $workExperience->description),
                    'startingYear' => $workExperience->period_from->format('Y')
                )
            );

        }

        return $result;
    }

    public static function getProjects()
    {
        $projects = \App\Project::all();

        $result = [
            'professional' => [],
            'personal' => []
        ];
        foreach($projects as $project) {
            array_push($result[$project->type],
                array(
                    'title' => $project->title,
                    'description' => $project->description,
                    'graphic' => [
                        'type'=> $project->graphic_type,
                        'data'=> $project->graphic_data
                    ],
                    'link' => $project->link,
                    'company' => $project->company,
                    'type' => $project->type
                )
            );
        }

        return $result;
    }

    public static function getMainSkills()
    {
        $skills  = \App\Skill::where('type', 'main')
        ->get();

        $result = [];
        foreach($skills as $skill) {

            array_push($result,
                array(
                    'title' => $skill->title,
                    'classes' => $skill->classes
                )
            );

        }

        return $result;
    }

    public static function getOtherSkills()
    {
        $skills  = \App\Skill::where('type', 'other')
        ->get();

        $result = [];
        $batch = [];
        foreach($skills as $skill) {

            array_push($batch,
                $skill->title
            );

            if(count($batch) === 3) {
                array_push($result, $batch);
                $batch = [];
            }

        }

        return $result;
    }

    public static function getTestimonials()
    {
        return \App\Testimonial::all();
    }

}