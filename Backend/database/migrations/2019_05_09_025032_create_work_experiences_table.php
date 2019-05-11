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
            $table->timestamp('created_at');
            $table->timestamp('updated_at')->nullable();
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
                'period_from' => '2013-02-01',
                'period_to' => '2015-04-01',
                'position' => 'Performance Management Admin/Developer',
                'company' => 'Emtel Ltd',
                'short_description' => 'Development of automated software (e.g. Dashboards, ETL process, etc...)',
                'description' => '
                    Development of automated software (e.g. Dashboards, ETL process, etc...) using html/php/javascript/Jquery/mysql/oracle for processing of large amount of data related to performance measurement;
                    Management of servers (Linux and Windows servers) locally or remotely using secure shell clients or remote software;
                    Ensure smoothness of services provided to internal users;
                    Monitor servers at both software and hardware level. Report and troubleshoot of faulty servers;
                    Liaise with suppliers for the reparation process
                '
            ],
            [
                'period_from' => '2015-05-01',
                'period_to' => '2018-04-01',
                'position' => 'Web Developer (Research & Development)',
                'company' => 'Stella Telecom Ltd',
                'short_description' => 'Development of web projects using web technologies/frameworks',
                'description' => '
                    Development of web projects using web technologies (Jquery/Javascript/Object-oriented PHP) and framework such as Enlight, Antitired (i.e Internally developed frameworks), Zend, Laravel, Bootstrap and VueJs;
                    Development of test modules to ensure smoothness and bug free codes using phpunit testing framework before going into production phase;
                    Maintain, update and develop plug-ins for Wordpress;
                    Lead and guide new recruits/juniors. Codes developed are regularly checked for quality using SonarQube and Gitlab
                '
            ],
            [
                'period_from' => '2018-05-01',
                'period_to' => '2018-09-30',
                'position' => 'Senior Software Engineer',
                'company' => 'Orange Business Services',
                'short_description' => 'Development of automated software (e.g. Dashboards, ETL process, etc...)',
                'description' => '
                    Customisation and application development within ServiceNow using Javascript. Design and develop/configure workflows, forms, scripts;
                    Support the development and configuration of a variety of areas including, but not limited to Incident, Problem, Change, Service Catalog, Service Portal, Knowledge, Release, Asset Management, Configuration Management CMDB), and Reporting;
                    Development of reporting tool using Laravel to facilitate daily reporting routine;
                '
            ],
            [
                'period_from' => '2018-10-08',
                'period_to' => '2020-04-01',
                'position' => 'Senior Frontend Developer',
                'company' => 'Extension Interactive Ltd',
                'short_description' => 'Development of interfaces using HTML/CSS/JS',
                'description' => '
                    Development of web interfaces as per design (UX/UI) using HTML, CSS, JS, Twig, SASS and gulp;
                    Development within CMS/framworks such as Symphony, Drupal, Prestashop, Wordpress and Asp.net;
                    Work in close collaboration with backend team and help/support in resolving bugs;
                    Lead and guide new recruits/juniors and give suggestion on how to improve code + workflow;
                '
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
