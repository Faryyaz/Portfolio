<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/work-experience', 'Controller@workExperience');
Route::get('/projects', 'Controller@projects');
Route::get('/work-timeline', 'Controller@workTimeLine');
Route::get('/main-skills', 'Controller@mainSkills');
Route::get('/other-skills', 'Controller@otherSkills');
Route::get('/testimonials', 'Controller@testimonials');