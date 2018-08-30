<?php

namespace App\Http\Controllers;

use App\Work_experience;
use Illuminate\Http\Request;

class WorkExperienceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $workExperience = Work_experience::all();

        return response()->json([
            'workExperience' => $workExperience,
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Work_experience  $work_experience
     * @return \Illuminate\Http\Response
     */
    public function show(Work_experience $work_experience)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Work_experience  $work_experience
     * @return \Illuminate\Http\Response
     */
    public function edit(Work_experience $work_experience)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Work_experience  $work_experience
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Work_experience $work_experience)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Work_experience  $work_experience
     * @return \Illuminate\Http\Response
     */
    public function destroy(Work_experience $work_experience)
    {
        //
    }
}
