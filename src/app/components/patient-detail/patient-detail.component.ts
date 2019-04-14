import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GeneralService } from '../../_services/general.service';
import { Patient } from '../../_models/patient';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  patientId:number;
  result: Patient;
  
  constructor(
  	private generalService: GeneralService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  	this.patientId = +this.route.snapshot.paramMap.get('id');
	this.getResults();
  }

  getResults() {
	  this.generalService.get('patients/' + this.patientId)
	  	.subscribe((response) =>  {
		   this.result = response;
		},
		(error) => {
			console.log(error);
			//this.router.navigate(['/patients']);
		});
  }  

}
