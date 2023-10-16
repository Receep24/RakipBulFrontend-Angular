import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map, share } from 'rxjs';
import { environment } from '../../../../src/environments/environment';
import { BaseDataResponse } from '../../models/response/base-data-response.model';
import { TokenResponse } from '../../models/response/token-response.model';
import { LoginRequest } from '../../models/request/login-request.model';
import { RegisterRequest } from '../../models/request/register-request.model';
import { User } from '../../models/user.model';



import { BaseResponse } from 'src/core/models/response/base-response.model';
import { Advert } from 'src/core/models/advert.model';
import { Comment } from 'src/core/models/comment.model';
import { Districts } from 'src/core/models/districts.model';
import { Cities } from 'src/core/models/cities.model';



@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private endpoint = environment.api_url;
  //constructor fonksiyonu, HttpClient nesnesini enjekte eder ve HTTP isteklerini yapmak için kullanır.
  constructor(private readonly http: HttpClient) {}
  //login fonksiyonu, kullanıcı giriş isteğini gerçekleştirir.
  // HttpClient.post fonksiyonunu kullanarak API'ye LoginRequest nesnesini ve isteği yapar.
  login(request: LoginRequest): Observable<BaseDataResponse<TokenResponse>> {
    return this.http
      .post<BaseDataResponse<TokenResponse>>(
        this.endpoint + '/Auth/Login',
        request
      )
      .pipe(
        map((result) => {
          return result;
        })
      );
  }
  //register fonksiyonu, kullanıcı kayıt isteğini gerçekleştirir.
  // HttpClient.post fonksiyonunu kullanarak API'ye RegisterRequest nesnesini ve isteği yapar.

  register(
    request: RegisterRequest
  ): Observable<BaseDataResponse<TokenResponse>> {
    return this.http
      .post<BaseDataResponse<TokenResponse>>(
        //ENDPOINT DEĞİŞECEK (/signin olacak)
        this.endpoint + '/Auth/Register',
        request
      )
      .pipe(
        map((result) => {
          return result;
        })
      );
  }

  //refreshToken fonksiyonu, token yenileme isteğini gerçekleştirir.
  //HttpClient.get fonksiyonunu kullanarak API'ye token parametresini içeren bir istek gönderir.

  refreshToken(token: string): Observable<BaseDataResponse<TokenResponse>> {
    return this.http
      .get<BaseDataResponse<TokenResponse>>(
        this.endpoint + '/Auth/RefreshToken',
        { params: new HttpParams().append('token', token) }
      )
      .pipe(
        map((result) => {
          return result;
        })
      );
  }

  //getProfileInfo fonksiyonu, kullanıcının profil bilgilerini almak için bir istek gönderir.
  //HttpClient.get fonksiyonunu kullanarak API'ye istek gönderir

  getProfileInfo(): Observable<BaseDataResponse<User>> {
    return this.http
      .get<BaseDataResponse<User>>(this.endpoint + '/Auth/GetProfileInfo')
      .pipe(
        map((result) => {
          return result;
        })
      );
  }

  getAllEntities<TEntity>(entityType: Type<TEntity>) {
    return this.http.request<BaseDataResponse<TEntity[]>>
      ("get", environment.api_url + "/" + entityType.name + "/GetAll").pipe(share());
  }


  deleteEntity<TEntity>(id: number, entityType: Type<TEntity>) {
    return this.http.delete<BaseResponse>
      (environment.api_url + "/" + entityType.name + "/Delete?id=" + id)
      .pipe(share()).toPromise();
  }


   //Ekleme kodları
   createEntity<TEntity>(entity: TEntity, entityType: string) {
    return this.http.post<BaseDataResponse<TEntity[]>>(environment.api_url + "/" + entityType + "/Create", entity).pipe(share()).toPromise();
  }

  //Silme kodları


  //GetById kodları

  getEntityById<TEntity>(id: number, entityType: Type<TEntity>) {
    return this.http.get<BaseDataResponse<TEntity>>(`${environment.api_url}/${entityType.name}/GetById?id=${id}`).pipe(share()).toPromise();
  }
  //Get by Id kodları
  // getEntityById<TEntity>(id: number, entityType: Type<TEntity>) {
  //   return this.http.get<BaseDataResponse<TEntity[]>>(environment.api_url + "/" + entityType.name + "/GetById?id=" + id).pipe(share()).toPromise();
  // }

  //Güncelleme kodları
  updateEntity<TEntity>(id: number, entity: TEntity, entityType: Type<TEntity>) {
    return this.http.put<BaseDataResponse<TEntity>>(environment.api_url + "/" + entityType.name + "/Update?id=" + id, entity).pipe(share()).toPromise();
  }

  getCity(cityId: number): Observable<BaseDataResponse<Cities>> {
    return this.http
      .get<BaseDataResponse<Cities>>(`${this.endpoint}/Cities/GetById?id=${cityId}`)
      .pipe(
        map((result) => {
          return result;
        })
      );
  }

  // İlçeleri getiren metot
  getDistricts(cityId: number): Observable<BaseDataResponse<Districts[]>> {
    return this.http
      .get<BaseDataResponse<Districts[]>>(
        `${this.endpoint}/Districts/GetByCityId?cityId=${cityId}`
      )
      .pipe(
        map((result) => {
          return result;
        })
      );
  }

  getDistrictsByCityId(cityId: number): Observable<Districts[]> {
    // API çağrısı için gerekli URL oluşturuluyor
    const url = `${environment.api_url}/Districts/GetDistrictsByCityId/bycity/${cityId}`;
    // Oluşturulan URL, veri almak için kullanılacak URL'yi temsil eder.

    // HTTP GET isteği ile ilçe verilerini çeker ve bir Observable döner
    return this.http.get<Districts[]>(url).pipe(share());
    // Bu kısımda, oluşturulan URL'ye bir HTTP GET isteği yapılır ve ilçe verilerini getirir.
    // Veriler bir Observable içinde döner, böylece verileri talep eden diğer yerlerde kullanabiliriz.
    // Ayrıca, 'pipe()' işlevi ile verileri paylaşılabilir yapar, bu da aynı verilere birden fazla abone olunabilmesini sağlar.
}


}
