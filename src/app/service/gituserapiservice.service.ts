import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class GitUserApiService {

  public gituserdata:any;
  public gituserdetails:any;

  constructor(private httpservice : HttpClient) 
  { 
    console.log("service is working");
    
    }

    getGitUsersName(searchbyname)
    { 
    return new Promise(resolve => {
      this.httpservice.get("https://api.github.com/search/users?q=" +searchbyname)
        .map((res: Response)=>res.json())
        .subscribe(data => {
          this.gituserdata = data;
          resolve(this.gituserdata);
        });
    });
  }
  getGithubUserDetails(username) {
    return new Promise(resolve => {
      this.httpservice.get("https://api.github.com/users/" + username + "/repos")
        .map((res: Response)=> res.json())
        .subscribe(data => {
          this.gituserdetails = data;
          resolve(this.gituserdetails);
        })  ;
    });
  }

}