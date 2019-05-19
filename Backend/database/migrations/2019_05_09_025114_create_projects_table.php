<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamp('created_at');
            $table->timestamp('updated_at')->nullable();
            $table->string('title');
            $table->string('company');
            $table->text('description');
            $table->string('graphic_data');
            $table->enum('graphic_type', ['icon', 'image']);
            $table->string('link')->nullable();
            $table->enum('type', ['professional', 'personal']);
        });

        //insert
        DB::table('projects')->insert([
            //professional
            [
                'title' => 'Alchemetrix - Dashboard',
                'description' => 'Dashboard that provides KPI indications',
                'graphic_type' => 'icon',
                'graphic_data' => 'fas fa-chart-line',
                'link' => '',
                'company' => 'Emtel Ltd',
                'type' => 'professional'
            ],
            [
                'title' => 'Alchemetrix - GIS',
                'description' => 'Map representation about KPI data',
                'graphic_type' => 'icon',
                'graphic_data' => 'fas fa-map',
                'link' => '',
                'company' => 'Emtel Ltd',
                'type' => 'professional'
            ],

            //personal
            [
                'title' => 'Poke Master',
                'description' => 'Part time development of a mobile phone game',
                'graphic_type' => 'image',
                'graphic_data' => '/assets/img/poke_master.png',
                'link' => 'https://play.google.com/store/apps/details?id=com.flatxg.pokemaster',
                'company' => 'Personal | Part time',
                'type' => 'personal'
            ],

        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
