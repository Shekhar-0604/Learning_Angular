import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    const url = 'http://localhost:3000/user';
    return this.httpClient.get<User[]>(url);
  }
  saveUsers(user: User): Observable<User> {
    const url = 'http://localhost:3000/user';
    return this.httpClient.post<User>(url, user);
  }
  deleteUser(id: string): Observable<User> {
    const url = 'http://localhost:3000/user';
    return this.httpClient.delete<User>(url + '/' + id);
  }

  getSelectedUsers(id: string): Observable<User> {
    const url = 'http://localhost:3000/user';
    return this.httpClient.get<User>(url + '/' + id);
  }
  updatedUser(user: User): Observable<User> {
    const url = 'http://localhost:3000/user';
    return this.httpClient.put<User>(url + '/' + user.id, user);
  }
}
