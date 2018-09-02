<?php

namespace  App;

class DataFormatter {

    public static function getWorkExperience()
    {
        $workExperiences = Work_experience::all();

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

    }

    public static function getProjects()
    {

    }

    public static function getMainSkills()
    {

    }

    public static function getOtherSkills()
    {

    }

    public static function getTestimonials()
    {

    }

}