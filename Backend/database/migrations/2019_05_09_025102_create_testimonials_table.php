<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTestimonialsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('testimonials', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamp('created_at');
            $table->timestamp('updated_at')->nullable();
            $table->string('position');
            $table->string('full_name');
            $table->string('image')->nullable();
            $table->text('description');
        });

        //insert
        DB::table('testimonials')->insert([
            [
                'position' => 'Senior Full Stack Developer',
                'full_name' => 'Hyder Abbas',
                'image' => './assets/img/hyder.jpg',
                'description' => 'Faryyaz was a real pleasure to work with and we look forward to work with him again. He’s the kind of developer you can trust with a project from start to finish'
            ],
            [
                'position' => 'Team Leader DevOps',
                'full_name' => 'Prashant Ramhit',
                'image' => './assets/img/prashant.jpg',
                'description' => 'Faryyaz was a real pleasure to work with and we look forward to work with him again. He’s the kind of developer you can trust with a project from start to finish'
            ]
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('testimonials');
    }
}
