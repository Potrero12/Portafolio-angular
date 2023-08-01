import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/Project.model';
import { global } from '../../services/global';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  public projects:Project[];
  public url:string;


  constructor(
    private _projectService:ProjectService
  ){
    this.url = global.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(({projectDB}) => {
      if(projectDB){
        this.projects = projectDB;
      }
    })
  }
}
