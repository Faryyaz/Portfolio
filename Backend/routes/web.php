<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/work-experience', 'Controller@workExperience');
Route::get('/projects', 'Controller@projects');
Route::get('/work-timeline', 'Controller@workTimeLine');
Route::get('/main-skills', 'Controller@mainSkills');
Route::get('/other-skills', 'Controller@otherSkills');
Route::get('/testimonials', 'Controller@testimonials');