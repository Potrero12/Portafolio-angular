import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { global } from '../../services/global';

import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Project } from '../../model/Project.model';


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  public title:string;
  public project:Project;
  public status:string;
	public filesToUpload: Array<File>;
  public url:string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute,
  ){
    this.title = 'Update Project';
    this.url = global.url;
    
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this.getProject(id);
    });
    
  }

    // guardamos los datos
    onSubmit(form:any){
      this._projectService.updateProject(this.project).subscribe((response) => {
        if(response.projectUpdated){
          if(this.filesToUpload){
            // subir la imagen
            this._uploadService.makeFileRequest(global.url+"upload-image/"+response.projectUpdated._id, [], this.filesToUpload, 'image').then((result:any) => {
              console.log(result);
              this.status = 'success';
              this.project = response.projectUpdated;
              this._router.navigateByUrl('projects');
            });
          }else{
            this.project = response.projectUpdated;
            this._router.navigateByUrl('projects');
            this.status = 'success';
          }
  
        } else {
          this.status = 'failed';
        }
      })
    }

  getProject(id:any){
    this._projectService.getProject(id).subscribe(({projectDB}) => {
      this.project = projectDB;
    });
  }

  fileChangeEvent(fileInput: any){
		this.filesToUpload = <Array<File>>fileInput.target.files;
	}

}
