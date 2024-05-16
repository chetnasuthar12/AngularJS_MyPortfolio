import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-proficiency',
  templateUrl: './proficiency.component.html',
  styleUrls: ['./proficiency.component.css']
})
export class ProficiencyComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle('Klaus Michaelson - Proficiency');
  }
}
