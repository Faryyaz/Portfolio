<?php

namespace  App;

class DataFormatter {

    public static function getWorkExperience()
    {
        $workExperiences = \App\Work_experience::all();

        $result = [];
        foreach($workExperiences as $workExperience) {

            array_push($result,
                array(
                    'postion' => $workExperience->position,
                    'company' => $workExperience->company,
                    'duration' => $workExperience->period_from . ' - ' . $workExperience->period_to,
                    'short_description' => $workExperience->short_description
                )
            );

        }

        return $result;
    }

    public static function getWorkTimeline()
    {
        $workExperiences = \App\Work_experience::all();

        $result = [];
        foreach($workExperiences as $workExperience) {

            array_push($result,
                array(
                    'postion' => $workExperience->position,
                    'company' => $workExperience->company,
                    'period' => [
                        'from' => $workExperience->period_from,
                        'to' => $workExperience->period_to
                    ],
                    'description' => $workExperience->description,
                    'endingYear' => $workExperience->period_to
                )
            );

        }

        return $result;
    }

    public static function getProjects()
    {
        $projects = \App\Projects::all();

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
                    'company' => $project->company
                )
            );
        }

        return $result;
    }

    public static function getMainSkills()
    {
        $skills  = \App\Skills::where('type', 'main')
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
        $skills  = \App\Skills::where('type', 'other')
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

    }

}