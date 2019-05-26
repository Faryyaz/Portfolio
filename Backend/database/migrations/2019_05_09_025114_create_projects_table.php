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
                'graphic_data' => 'fas fa-chart-pie',
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
                'graphic_data' => 'fas fa-chart-line',
                'link' => '',
                'company' => 'Emtel Ltd',
                'type' => 'professional'
            ],
            [
                'title' => 'Proxy',
                'description' => 'Graphical representation of domain/sub-domain visited and filtered accordingly. System developed using squid by filtering traffic.',
                'graphic_type' => 'icon',
                'graphic_data' => 'fas fa-sitemap',
                'link' => '',
                'company' => 'Stella Telecom',
                'type' => 'professional'
            ],
            [
                'title' => 'Internet Eligibility Test',
                'description' => 'Web interface whereby user can test if he/she is eligible for internet. API consumption for every web platform (e.g. Wordpress, etc...)',
                'graphic_type' => 'icon',
                'graphic_data' => 'fas fa-cogs',
                'link' => '',
                'company' => 'Stella Telecom',
                'type' => 'professional'
            ],
            [
                'title' => 'Client online platform',
                'description' => 'Web interface whereby client can configure products/services purchased. Developed using zend framework.',
                'graphic_type' => 'icon',
                'graphic_data' => 'fas fa-wrench',
                'link' => '',
                'company' => 'Stella Telecom',
                'type' => 'professional'
            ],
            [
                'title' => 'Online shop',
                'description' => 'Allows customers to buy product online. Frontend development of the project based on prestashop.',
                'graphic_type' => 'icon',
                'graphic_data' => 'fas fa-store',
                'link' => '',
                'company' => 'Stella Telecom',
                'type' => 'professional'
            ],
            [
                'title' => 'Corporate website',
                'description' => 'Use to provide background info about the company. Developed using Wordpress. Development involving API consumption, plugins, pages and web forms.',
                'graphic_type' => 'icon',
                'graphic_data' => 'fas fa-globe',
                'link' => '',
                'company' => 'Stella Telecom',
                'type' => 'professional'
            ],
            [
                'title' => 'IT Service Management tool (ITSM)',
                'description' => 'Tool use to improve business use of information technology. Business development within ITSM tool (ServiceNow) using JS (AngularJS & Prototype)',
                'graphic_type' => 'icon',
                'graphic_data' => 'fas fa-project-diagram',
                'link' => '',
                'company' => 'Orange Business Services',
                'type' => 'professional'
            ],
            [
                'title' => 'Reporting tool',
                'description' => 'Daily reports generated about server status. Developed using Laravel and ServiceNow API.',
                'graphic_type' => 'icon',
                'graphic_data' => 'fas fa-clipboard-list',
                'link' => '',
                'company' => 'Orange Business Services',
                'type' => 'professional'
            ],
            [
                'title' => 'Customer package system',
                'description' => 'Web platform that allows customer to buy package delivery/transport services. Frontend development of web interfaces provided by UI/UX team based on JQuery/HTML5/SASS/MDL framework.',
                'graphic_type' => 'icon',
                'graphic_data' => 'fas fa-truck-loading',
                'link' => '',
                'company' => 'Extension Interactive',
                'type' => 'professional'
            ],
            [
                'title' => 'Customer online shop',
                'description' => 'Web platform allowing customers to subscribed to services/products involving pets. Frontend development within Symphony framework using JQuery/Twig/SASS.',
                'graphic_type' => 'icon',
                'graphic_data' => 'fas fa-store-alt',
                'link' => '',
                'company' => 'Extension Interactive',
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
            //personal
            [
                'title' => 'Portfolio',
                'description' => 'Part time development of portfolio containing a compilation of all projects involved. Project developed using MySQL/SASS/Bootstrap/Angular/TypeScript/Laravel',
                'graphic_type' => 'icon',
                'graphic_data' => 'fas fa-id-badge',
                'link' => 'https://github.com/Faryyaz/Portfolio',
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
