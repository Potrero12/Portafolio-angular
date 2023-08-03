import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

import { Project } from "../model/Project.model";
import { global } from "./global";

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    public url:string;

    constructor(
        private _http:HttpClient
    ){
        this.url = global.url;
    }

    getProject(id:any):Observable<any>{
        let headers = new HttpHeaders({'Content-Type' : 'application/json'});
        return this._http.get(this.url + 'get-project/'+id, {headers: headers});
    }

    getProjects():Observable<any>{
        let headers = new HttpHeaders({'Content-Type' : 'application/json'});
        return this._http.get(this.url + 'get-projects', {headers: headers});
    }

    saveProject(project:Project):Observable<any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders({'Content-Type' : 'application/json'});
        return this._http.post(this.url + 'save-project', params,  {headers: headers});
    }

}
