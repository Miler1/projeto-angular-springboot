import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Pessoa from './../models/Pessoa';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private baseUrl = 'http://localhost:8080/api/v1/pessoas';
  private ufUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
  
  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

  token = this.tokenStorageService.getToken();
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };  

  getPessoa(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPessoa(pessoa: Pessoa): Observable<any> {
    this.httpOptions.headers.append('Authorization ', 'Bearer' + this.token);
    return this.http.post(this.baseUrl, pessoa, { headers: this.httpOptions.headers });
  }

  updatePessoa(id: number, pessoa: Pessoa): Observable<any> {
    this.httpOptions.headers.append('Authorization ', 'Bearer' + this.token);
    return this.http.put(`${this.baseUrl}/${id}`, pessoa, { headers: this.httpOptions.headers });
  }

  deletePessoa(id: number): Observable<any> {
    this.httpOptions.headers.append('Authorization ', 'Bearer ' + this.token);
    return this.http.delete(`${this.baseUrl}/${id}`, { headers: this.httpOptions.headers });
  }

  getPessoasList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getPessoaByid(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  getUf():Observable<any> {
    console.log('uf');
    return this.http.get(this.ufUrl);
  }

}
