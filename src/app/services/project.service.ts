import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

import { Project } from "../model/Project.model";
import { global } from "./global";

@Injectable()
export class ProjectService {

    public url:string;

    constructor(
        private _http:HttpClient
    ){
        this.url = global.url;
    }

    getProject(){
        
    }

    getProjects():Observable<any>{
        return this._http.get(this.url);
    }

}
