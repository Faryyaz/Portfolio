<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSkillsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('skills', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamp('created_at');
            $table->timestamp('updated_at')->nullable();
            $table->string('title');
            $table->string('classes')->nullable();
            $table->enum('type', ['main', 'other']);
        });

        //insert
        DB::table('skills')->insert([
            //main
            ['title' => 'Laravel', 'classes' => 'fab fa-laravel', 'type' => 'main'],
            ['title' => 'Angular', 'classes' => 'fab fa-angular', 'type' => 'main'],
            ['title' => 'Vuejs', 'classes' => 'fab fa-vuejs', 'type' => 'main'],
            ['title' => 'HTML 5', 'classes' => 'fab fa-html5', 'type' => 'main'],
            ['title' => 'SASS', 'classes' => 'fab fa-sass', 'type' => 'main'],
            ['title' => 'Gulp', 'classes' => 'fab fa-gulp', 'type' => 'main'],
            ['title' => 'GIT', 'classes' => 'fab fa-git', 'type' => 'main'],
            ['title' => 'PHP', 'classes' => 'fab fa-php', 'type' => 'main'],
            ['title' => 'Wordpress', 'classes' => 'fab fa-wordpress', 'type' => 'main'],
            ['title' => 'CSS3', 'classes' => 'fab fa-css3-alt', 'type' => 'main'],
            ['title' => 'MySQL', 'classes' => 'fas fa-database', 'type' => 'main'],
            ['title' => 'Javascript', 'classes' => 'fab fa-js', 'type' => 'main'],

            //others
            ['title' => 'C# programming (.Net)', 'classes' => '', 'type' => 'other'],
            ['title' => 'Basic Python programming', 'classes' => '', 'type' => 'other'],
            ['title' => 'Basic Java programming', 'classes' => '', 'type' => 'other'],
            ['title' => 'Time Management', 'classes' => '', 'type' => 'other'],
            ['title' => '2D/3D Modelling & animation', 'classes' => '', 'type' => 'other'],
            ['title' => 'French & English communication skills', 'classes' => '', 'type' => 'other'],
            ['title' => 'Server Management', 'classes' => '', 'type' => 'other'],
            ['title' => 'Fast learner', 'classes' => '', 'type' => 'other'],
            ['title' => 'Team player', 'classes' => '', 'type' => 'other']

        ]);

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('skills');
    }
}
