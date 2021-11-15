import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ToolsService} from './tools.service';
import {Api, Status} from '../configuration';
import {Category} from '../interfaces/categories';
import {map} from 'rxjs/operators';
import {User} from '../interfaces/user';
import {Balance} from '../interfaces/Balance';
import {Product} from '../interfaces/Products';
import {ChatObject} from '../interfaces/Chat';
import {OrderObject} from '../interfaces/Order';
import {ProdPostavka} from '../interfaces/ProdPostavka';
import {Role} from '../interfaces/Role';
import {OrderById} from '../interfaces/OrderById';
import {OrderType} from '../interfaces/form/OrderType';
import {Morgue} from '../interfaces/form/Morgue';
import {Subdisivion} from '../interfaces/form/Subdivisions';
import {Oszn} from '../interfaces/form/Oszn';
import {FamilyRelationship} from '../interfaces/form/FamilyRelationship';
import {PreferentialCat} from '../interfaces/form/PreferentialCat';
import {DocType} from '../interfaces/form/DocType';
import {Courier} from '../interfaces/form/Courier';
import {BurialType} from '../interfaces/form/BurialType';
import {TypeCert} from '../interfaces/form/TypeCert';
import {FormCert} from '../interfaces/form/FormCert';
import {FindDeceased} from '../interfaces/form/FindDeceased';
import {AgentObject} from '../interfaces/form/Agent';
import {Driver} from '../interfaces/form/drivers';
import {Auto} from '../interfaces/form/auto';
import {Implementer} from '../interfaces/form/Implementer';
import {CustomOrder} from '../interfaces/form/customOrder';
import {AllTransport, TransportList} from '../interfaces/transport/transportList';
import {TransportById} from '../interfaces/transport/TransportById';
import {CremationTable} from '../interfaces/transport/cremationTable';
import * as _ from 'lodash';
import {CurrentColumbar} from '../interfaces/columbar/columbarData';
import {ColPass} from "../interfaces/columbar/ColumbarPassport";
import {FileObj, LinkFile} from "../interfaces/columbar/LinkFile";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private tool: ToolsService) { }
  logIn(data): Observable<any> {
    return this.http.post<any>(`${Api.API_LINK}auth/login`, data);
  }
  getSelf(): Observable<User> {
    return this.http.get<User>(`${Api.API_LINK}api/user/0`);
  }
  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${Api.API_LINK}auth/roles`);
  }
  createUser(data): Observable<any> {
    return this.http.post<any>(`${Api.API_LINK}api/user/add`, data);
  }
  updateUser(data): Observable<any> {
    return this.http.put<any>(`${Api.API_LINK}api/users`, data);
  }
  getUserById(id): Observable<User> {
    return this.http.get<User>(`${Api.API_LINK}api/user/${id}`);
  }
  deleteUser(id): Observable<any> {
    return this.http.delete<any>(`${Api.API_LINK}api/users?id=${id}`);
  }
  syncOrder(id): Observable<any> {
    return this.http.get(`${Api.API_LINK}api/orders/sync/${id}`);
  }
  getFile(id): Observable<any> {
    return this.http.get(`${Api.API_LINK}api/safeFiles/link/${id}`);
  }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${Api.API_LINK}api/categories`);
  }
  getCategoryById(id): Observable<Category> {
    return this.http.get<Category[]>(`${Api.API_LINK}api/categories`).pipe(
      // tslint:disable-next-line:radix
      map(e => e.find(e2 => e2.id === parseInt(id)))
    );
  }
  updateCategories(data): Observable<Category[]> {
    return this.http.put<any>(`${Api.API_LINK}api/categories`, data);
  }
  uploadFile(data): Observable<FileObj[]> {
    return this.http.post<any>(`${Api.API_LINK}api/appfiles`, data);
  }
  deleteCategory(id): Observable<Category[]> {
    return this.http.delete<any>(`${Api.API_LINK}api/categories&id=${id}`);
  }
  getBalance(id = null): Observable<Balance[]> {
    return this.http.get<Balance[]>(`${Api.API_LINK}api/RequestsBalance`).pipe(
      map(e => e.filter((e2) => id == null ? true : e2.orderId === id))
    );
  }
  getMyBalance(id = null): Observable<Balance[]> {
    if (id !== null) {
      return this.http.get<Balance[]>(`${Api.API_LINK}api/RequestsBalance/my`).pipe(
        map(e => e.filter(e2 => e2.id === id))
      );
    }
    return this.http.get<Balance[]>(`${Api.API_LINK}api/RequestsBalance/my`);
  }
  createBalance(data): Observable<any> {
    return this.http.post<any>(`${Api.API_LINK}api/RequestsBalance`, data);
  }
  getZags(): Observable<any> {
    return this.http.get<any>(`${Api.API_LINK}api/zagsCertificates`);
  }
  setBalance(data): Observable<any> {
    return this.http.put<any>(`${Api.API_LINK}api/RequestsBalance`, data);
  }
  setPush(userId): Observable<any> {
    return this.http.get<any>(`${Api.API_LINK}api/users/pushChanel?pushChanel=${userId}`);
  }
  deleteBalance(id): Observable<any> {
    return this.http.delete<any>(`${Api.API_LINK}api/RequestsBalance?id=${id}`);
  }
  getProducts(products = false, transport = false): Observable<Product[]> {
    return this.http.get<Product[]>(`${Api.API_LINK}api/products`).pipe(
      map(e => e.filter(e2 => transport ? e2.type === 4 : products ? e2.type === 0 : true))
    ).pipe(
      map( e => e.map((e2) => ({...e2, codePrice: e2.codePrice.replace('\u00A0', ' ')})))
    );
  }
  getComposition(id): Observable<any> {
    return this.http.get<any>(`${Api.API_LINK}api/compositionNomenclatures?uid=${id}`);
  }
  syncTransport(id): Observable<any> {
    return this.http.get<any>(`${Api.API_LINK}api/transportOrders/sync1c/${id}`);
  }
  createOrder(data): Observable<any> {
    return this.http.post<any>(`${Api.API_LINK}api/orders`, data);
  }
  setProducts(data): Observable<any> {
    console.log(data.photos)
    console.log(!!data.photos);
    return new Observable(sub => {
      this.getProductById(data.id).toPromise().then((i) => {
        this.http.put<any>(`${Api.API_LINK}api/products`, {
          ...data,
          photos: !!data?.photos ? data.photos === [] ? i.photos : data.photos : i.photos
        }).toPromise().then((res2) => {
          sub.next(res2);
          sub.complete();
        });
      });
    });
  }
  getProductById(id): Observable<Product> {
    return this.http.get<Product>(`${Api.API_LINK}api/products/by-id?id=${id}`);
  }
  deleteProduct(id): Observable<any> {
    return this.http.delete<any>(`${Api.API_LINK}api/products/${id}`);
  }
  getChat(id): Observable<ChatObject> {
    return this.http.get<ChatObject>(`${Api.API_LINK}api/chat/rooms/${id}`);
  }
  getRoomByOrder(id): Observable<ChatObject> {
    return this.http.get<ChatObject>(`${Api.API_LINK}api/chat/findroom?id=${id}&objType=0`);
  }
  sendMsg(data): Observable<any> {
    return this.http.post<any>(`${Api.API_LINK}api/chat/send`, data);
  }
  getOrders(): Observable<OrderObject> {
    return this.http.get<OrderObject>(`${Api.API_LINK}api/orders`).pipe(
      // tslint:disable-next-line:max-line-length
      // map((i) => ({...i, data: i.data.map(i2 => ({...i2, status: Status?.statuses?.find(s => s.value === i2.status)?.label || 'Ожидает обработку'}))}))
    );
  }
  getMyOrders(): Observable<OrderObject> {
    return this.http.get<OrderObject>(`${Api.API_LINK}api/orders/my`).pipe(
      // tslint:disable-next-line:max-line-length
      // map((i) => ({...i, data: i.data.map(i2 => ({...i2, status: Status?.statuses?.find(s => s.value === i2.status)?.label || 'Ожидает обработку'}))}))
    );
  }
  getOrderById(id): Observable<OrderById> {
    return this.http.get<OrderById>(`${Api.API_LINK}api/orders/${id}`).pipe(
      // map(e => ({...e, products: e.products.filter((e2) => e2.product.type === 0)}))
    );
  }
  updateOrder(data): Observable<OrderById> {
    return this.http.put<OrderById>(`${Api.API_LINK}api/orders`, data);
  }
  getTransportOrders(): Observable<TransportList> {
    return this.http.get<TransportList>(`${Api.API_LINK}api/transportOrders`).pipe(
      map((e) => ({...e, data: e.data.map((e2, i) => ({...e2, index: i + 1}))}))
    );
  }
  getAllTransportOrders(): Observable<AllTransport[]> {
    return this.http.get<AllTransport[]>(`${Api.API_LINK}api/transportOrders/all`);
  }
  getTransportOrderByOrderId(id): Observable<AllTransport> {
    return this.http.get<AllTransport[]>(`${Api.API_LINK}api/transportOrders/all`).pipe(
      map(item => item.find((e) => e.orderId === id))
    );
  }
  getMyTransportOrders(): Observable<TransportList> {
    return this.http.get<TransportList>(`${Api.API_LINK}api/transportOrders/my`);
  }
  getTransportOrderById(id): Observable<TransportById> {
    return this.http.get<TransportById>(`${Api.API_LINK}api/transportOrders/${id}`);
  }
  setOrders(data): Observable<OrderObject> {
    return this.http.put<OrderObject>(`${Api.API_LINK}api/orders`, data);
  }
  takeOrder(data): Observable<OrderObject> {
    return this.http.post<OrderObject>(`${Api.API_LINK}api/orders/take`, data);
  }
  deleteOrder(id): Observable<any> {
    return this.http.delete<any>(`${Api.API_LINK}api/orders?id=${id}`);
  }
  getProviderProd(): Observable<ProdPostavka[]> {
    return this.http.get<ProdPostavka[]>(`${Api.API_LINK}api/ProviderProduct`);
  }
  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${Api.API_LINK}api/drivers`);
  }
  getCustomOrders(id = 0): Observable<CustomOrder[]> {
    return this.http.get<CustomOrder[]>(`${Api.API_LINK}api/customerOrder/123`);
  }
  getAuto(): Observable<Auto[]> {
    return this.http.get<Auto[]>(`${Api.API_LINK}api/auto`);
  }
  getImplementers(): Observable<Implementer[]> {
    return this.http.get<Implementer[]>(`${Api.API_LINK}api/Implementer`);
  }
  getMyProviderProd(): Observable<ProdPostavka[]> {
    return this.http.get<ProdPostavka[]>(`${Api.API_LINK}api/ProviderProduct/my`).pipe(
      map(e => e.map(e2 => ({...e2, name: e2.product.fullName})))
    );
  }
  editProviderProd(data): Observable<any> {
    return this.http.put<any>(`${Api.API_LINK}api/ProviderProduct`, data);
  }
  createProviderProd(data): Observable<any> {
    return this.http.post<any>(`${Api.API_LINK}api/ProviderProduct`, data);
  }
  updateTransportOrder(data): Observable<any> {
    return this.http.put<any>(`${Api.API_LINK}api/transportOrders`, data);
  }
  createTransportOrder(data): Observable<any> {
    return this.http.post<any>(`${Api.API_LINK}api/transportOrders`, data);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${Api.API_LINK}api/users/all`);
  }
  getProviders(): Observable<User[]> {
    return this.http.get<User[]>(`${Api.API_LINK}api/users/providers`);
  }
  // FORM FORM FORM FORM FORM FORM
  getOrderTypes(): Observable<OrderType[]> {
    return this.http.get<any>(`${Api.API_LINK}api/orderstype`);
  }
  getMorgues(type = true): Observable<Morgue[]> {
    return this.http.get<any>(`${Api.API_LINK}api/morgues${type ? '' : '/my'}`);
  }
  getSubdivisions(): Observable<Subdisivion[]> {
    return this.http.get<any>(`${Api.API_LINK}api/Subdivisions`);
  }
  getOszn(): Observable<Oszn[]> {
    return this.http.get<any>(`${Api.API_LINK}api/oszn`);
  }
  // TODO: Свид. о смерти
  // getOszn(): Observable<any> {
  //   return this.http.get<any>(`${Api.API_LINK}api/oszn`);
  // }
  getFamilyRelationship(): Observable<FamilyRelationship[]> {
    return this.http.get<any>(`${Api.API_LINK}api/RelatedFamilyRelationships`);
  }
  getPreferential(): Observable<PreferentialCat[]> {
    return this.http.get<any>(`${Api.API_LINK}api/preferentialCategories`);
  }
  getDocTypes(): Observable<DocType[]> {
    return this.http.get<any>(`${Api.API_LINK}api/documentTypes`);
  }
  getCouriers(): Observable<Courier[]> {
    return this.http.get<any>(`${Api.API_LINK}api/couriers`);
  }
  getBurialTypes(): Observable<BurialType[]> {
    return this.http.get<any>(`${Api.API_LINK}api/typesBurials`);
  }
  getTypeCertificate(): Observable<TypeCert[]> {
    return this.http.get<any>(`${Api.API_LINK}api/typesCertificates`);
  }
  getFormCertificate(): Observable<FormCert[]> {
    return this.http.get<any>(`${Api.API_LINK}api/formsCertificates`);
  }
  findDeceased(fio: string, date = null): Observable<FindDeceased[]> {
    return this.http.get<any>(`${Api.API_LINK}api/orders/find-deceased?fio=${fio}&dateOfDeath=${date === null ? new Date().toISOString() : date}`);
  }
  getAgents(): Observable<AgentObject[]> {
    return this.http.get<any>(`${Api.API_LINK}api/agents`);
  }
  getDispatcher(): Observable<AgentObject[]> {
    return this.http.get<any>(`${Api.API_LINK}api/usersDispatcher`);
  }
  getCremationTable(dep = '123', day = new Date()): Observable<CremationTable[][]> {
    return this.http.get<CremationTable[]>(`${Api.API_LINK}api/planningCremations/${dep}/${day.toISOString()}`).pipe(
      map( e => Object.values(_.groupBy(e, 'hall.uid')))
    );
  }
  createCremationTable(data, id): Observable<any> {
    return this.http.post<any>(`${Api.API_LINK}api/planningCremations/id?id=${id}`, data);
  }
  getCurrentSection(id): Observable<CurrentColumbar[][]> {
    return this.http.get<CurrentColumbar[]>(`${Api.API_LINK}api/Sections/id?id=${id}`)
      .pipe(
      map(e => _.sortBy(Object.values(_.groupBy(e, 'rowNumber')), g => g[0].rowNumber))
    );
  }
  getSections(): Observable<any> {
    return this.http.get<any>(`${Api.API_LINK}api/Sections`);
  }
  getColDeps(id): Observable<ColPass[]> {
    return this.http.get<any>(`${Api.API_LINK}api/Sections/department?department=${id}`);
  }
  getColPass(id): Observable<ColPass[]> {
    return this.http.get<any>(`${Api.API_LINK}api/Sections/passport?passport=${id}`);
  }
  saveSection(data, orderId): Observable<any> {
    return this.http.post<any>(`${Api.API_LINK}api/Sections/id?id=${orderId}`, data);
  }
  getLinkFiles(id): Observable<LinkFile[]> {
    return this.http.get<any>(`${Api.API_LINK}api/linkFiles?uid=${id}`);
  }
  createLinkFile(data): Observable<any> {
    return this.http.post<any>(`${Api.API_LINK}api/linkFiles`, data);
  }
  deleteLinkFile(id): Observable<any> {
    return this.http.delete<any>(`${Api.API_LINK}api/linkFiles?id=${id}`);
  }
}
