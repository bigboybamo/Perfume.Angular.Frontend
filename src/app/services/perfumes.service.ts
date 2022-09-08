import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Perfume } from 'src/modules/perfume.model';

@Injectable({
  providedIn: 'root'
})
export class PerfumesService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }
  getAllPerfumes(): Observable<Perfume[]>{
   return this.http.get<Perfume[]>(this.baseApiUrl + 'api/Perfume');
  }
  addPerfume(addPerfumeRequest: Perfume): Observable<Perfume>
  {
   return this.http.post<Perfume>(this.baseApiUrl + 'api/Perfume', addPerfumeRequest )
  }
}
