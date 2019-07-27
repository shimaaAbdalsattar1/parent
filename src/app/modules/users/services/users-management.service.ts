import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { QueryService } from '../../../shared/services/query.service';

@Injectable({
  providedIn: 'root'
})
export class UsersManagementService {

  constructor(
    private queryService: QueryService
  ) { }

  getUsers(offset: number): Observable<any> {
    const endPoint = `api/users?page=${offset}`;
    this.queryService.setUrl(endPoint);
    return this.queryService.get();
  }

  getSingleuser(userID: number): Observable<any> {
    const endPoint = `api/users/${userID}`;
    this.queryService.setUrl(endPoint);
    return this.queryService.get();
  }

  updateUser(userID: number, updatedUser: object): Observable<any> {
    const endPoint = `api/users/${userID}`;
    this.queryService.setUrl(endPoint);
    this.queryService.setParamsObj(updatedUser);
    return this.queryService.put('object');
  }

  createNewUser(createdUser: object): Observable<any> {
    const endPoint = `api/users`;
    this.queryService.setUrl(endPoint);
    this.queryService.setParamsObj(createdUser);
    return this.queryService.post('object');
  }

  deleteUser(userID: number) {
    const endPoint = `api/users/${userID}`;
    this.queryService.setUrl(endPoint);
    return this.queryService.delete();
  }
}
