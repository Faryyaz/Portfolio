<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorkExperiencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('work_experiences', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->date('period_from');
            $table->date('period_to');
            $table->string('position');
            $table->string('company');
            $table->string('short_description');
            $table->text('description');
        });

        // Insert data
        DB::table('work_experiences')->insert([
            [
                'period_from' => '01-02-2013',
                'period_to' => '01-04-2015',
                'position' => 'Performance Management Admin/Developer',
                'company' => 'Emtel Ltd',
                'short_description' => 'Development of automated software (e.g. Dashboards, ETL process, etc...)',
                'description' => 'test'
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
        Schema::dropIfExists('work_experiences');
    }
}
