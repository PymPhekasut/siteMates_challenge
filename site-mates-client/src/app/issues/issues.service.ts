import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Issues } from './issues';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Issues[]>('http://localhost:3000/issues');
  }

  create(data: Issues) {
    return this.httpClient.post('http://localhost:3000/issues', data);
  }

  edit(id: string) {
    return this.httpClient.get<Issues>(`http://localhost:3000/issues/${id}`);
  }

  update(data: Issues) {
    return this.httpClient.patch<Issues>(
      `http://localhost:3000/issues/${data._id}`,
      data
    );
  }

  delete(id: string) {
    return this.httpClient.delete(`http://localhost:3000/issues/${id}`);
  }
}
