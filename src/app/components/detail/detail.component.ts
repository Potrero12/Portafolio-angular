import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Project } from '../../model/Project.model';
import { global } from '../../services/global';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{

  public project:Project;
  public url:string;
  public confirm:boolean;

  constructor(
    private _projectService: ProjectService,
    private _router:Router,
    private _route: ActivatedRoute
  ){
    this.url = global.url;
    this.project = new Project('', '', '', '', 2019, '', '');
    this.confirm = false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this.getProject(id);
    });
    
  }

  getProject(id:any){
    this._projectService.getProject(id).subscribe(({projectDB}) => {
      this.project = projectDB;
    });
  }

  deleteProject(id:any){
    this._projectService.deleteProject(id).subscribe((response) => {
      console.log(response);
      this._router.navigateByUrl('projects');
    });
  }

  setConfirm(confirm){
    this.confirm = confirm;
  }
}
