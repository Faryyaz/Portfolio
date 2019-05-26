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
                'title' => 'Dashboard',
                'description' => 'Graphical representation of KPI data via a web based dashboard developed. An ETL process where data were extracted from XML files present on different network devices.',
                'graphic_type' => 'icon',
                'graphic_data' => 'fas fa-chart-line',
                'link' => '',
                'company' => 'Emtel Ltd',
                'type' => 'professional'
            ],
            [
                'title' => 'GIS',
                'description' => 'Map representation about KPI data using Google Earth/Map API. Raw data were extracted from monitoring system using SOAP API and passed down into an ETL process.',
                'graphic_type' => 'icon',
                'graphic_data' => 'fas fa-map',
                'link' => '',
                'company' => 'Emtel Ltd',
                'type' => 'professional'
            ],
            [
                'title' => 'Analytics',
                'description' => 'Graphical representation of more in-depth KPI. ETL process whereby data are aggregated accordingly using their respective formulas.',
                'graphic_type' => 'icon',
                'graphic_data' => 'fas fa-map',
                'link' => '',
                'company' => 'Emtel Ltd',
                'type' => 'professional'
            ],
            [
                'title' => 'Proxy',
                'description' => 'Graphical representation of domain/sub-domain visited and filtered accordingly. System developed using squid by filtering traffic.',
                'graphic_type' => 'icon',
                'graphic_data' => 'fas fa-map',
                'link' => '',
                'company' => 'Stella Telecom',
                'type' => 'professional'
            ],
            [
                'title' => 'Internet Eligibility Test',
                'description' => 'Web interface whereby user can test if he/she is eligible for internet. API is consumed for every web platform (e.g. Wordpress, etc...)',
                'graphic_type' => 'icon',
                'graphic_data' => 'fas fa-map',
                'link' => '',
                'company' => 'Stella Telecom',
                'type' => 'professional'
            ],

            //personal
            [
                'title' => 'Poke Master',
                'description' => 'Part time development of a mobile phone game based on C#.',
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
