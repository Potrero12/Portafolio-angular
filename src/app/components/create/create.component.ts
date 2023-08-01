import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../services/project.service';
import { UploadService } from 'src/app/services/upload.service';

import { Project } from '../../model/Project.model';
import { global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  public title:string;
  public project:Project;
  public status:string;
	public filesToUpload: Array<File>;


  constructor(
    private _projectService:ProjectService,
    private _uploadService:UploadService
  ){
    this.title = 'Create Your Project';
    this.status = '';
    this.project = new Project('','','','', 2023,'','');
  }

  ngOnInit(): void {
    
  }

  // guardamos los datos
  onSubmit(form:any){
    this._projectService.saveProject(this.project).subscribe((response) => {
      if(response){
        // subir la imagen
        this._uploadService.makeFileRequest(global.url+"upload-image/"+response.projectDB._id, [], this.filesToUpload, 'image').then((result:any) => {
          console.log(result);
          this.status = 'success';
          this.project = response.projectDB;
          form.reset();
        });

      } else {
        this.status = 'failed';
      }
    })
  }

	fileChangeEvent(fileInput: any){
		this.filesToUpload = <Array<File>>fileInput.target.files;
	}

}
