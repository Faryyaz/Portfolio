<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * Generate work experience response
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function workExperience()
    {
        $workExperience = \App\DataFormatter::getWorkExperience();

        return response()->json([
            'workExperience' => $workExperience,
        ], 200);
    }

    /**
     * Generate work timeline response
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function workTimeLine()
    {
        $workTimeLine = \App\DataFormatter::getWorkTimeline();

        return response()->json([
            'workTimeLine' => $workTimeLine,
        ], 200);
    }

    /**
     * Generate project response
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function projects()
    {
        $projects = \App\DataFormatter::getProjects();

        return response()->json([
            'projects' => $projects,
        ], 200);
    }

    /**
     * Generate main skills response
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function mainSkills()
    {
        $skills = \App\DataFormatter::getMainSkills();

        return response()->json([
            'skills' => $skills,
        ], 200);
    }

    /**
     * Generate other skills response
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function otherSkills()
    {
        $others = \App\DataFormatter::getOtherSkills();

        return response()->json([
            'others' => $others,
        ], 200);
    }

    /**
     * Generate testimonials response
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function testimonials()
    {
        $testimonials = \App\DataFormatter::getTestimonials();

        return response()->json([
            'testimonials' => $testimonials,
        ], 200);
    }

    /**
     * Send an email from contact me page
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendEmail(Request $request)
    {

        $this->validate($request, [
            'name'     => 'required|max:255',
            'email'    => 'required|email',
            'company' => 'required',
            'message'  => 'required',
        ]);

        \Mail::send('email', $request->all(), function ($message) {

            $message->subject("Portfolio: Email from company");

            $message->to(env('MY_MAIL_ADDRESS'));

        });

        // send failure response
        if (\Mail::failures()) {
            return response()->json([
                'status'  => 'failed',
                'message' => 'Whooops, an error occured while sending the email. Please try again later.',
            ]);
        }

        // send success response
        return response()->json(
            [
                'status'  => 'sent',
                'message' => 'Thank you. Your request has been sent and I will get back to you soon.'
            ]);

    }
}
