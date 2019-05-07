import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  workTimeLine = [
    {
      positionTitle: 'Performance Management Admin/Developer',
      description: [
        'Development of automated software (e.g. Dashboards, ETL process, etc...) using html/php/javascript/Jquery/mysql/oracle for processing of large amount of data related to performance measurement',
        'Management of servers (Linux and Windows servers) locally or remotely using secure shell clients or remote software',
        'Ensure smoothness of services provided to internal users',
        'Monitor servers at both software and hardware level. Report and troubleshoot of faulty servers',
        'Liaise with suppliers for the reparation process'
      ],
      startingYear: '2013',
      company: 'Emtel Ltd',
      period: {
        from: 'Feb 2013',
        to: 'Apr 2015'
      }
    },
    {
      positionTitle: 'Web Engineer (Research & Development)',
      description: [
        'Development of web projects using web technologies (Jquery/Javascript/Object-oriented PHP) and framework such as Enlight, Antitired (i.e Internally developed frameworks), Zend, Laravel, Bootstrap and VueJs',
        'Development of test modules to ensure smoothness and bug free codes using phpunit testing framework before going into production phase',
        'Maintain, update and develop plug-ins for Wordpress',
        'Lead and guide new recruits/juniors. Codes developed are regularly checked for quality using SonarQube and Gitlab'
      ],
      startingYear: '2015',
      company: 'Stella Telecom Ltd',
      period: {
        from: 'May 2015',
        to: 'Apr 2018'
      }
    },
    {
      positionTitle: 'Senior Software Engineer - ServiceNow',
      description: [
        'Lorem',
        'Ipsum',
        'Whatever'
      ],
      startingYear: '2018',
      company: 'Orange Business Services',
      period: {
        from: 'May 2018',
        to: 'Present'
      }
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
