import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CreditcardsService {

  private apiUrl = "http://localhost:3000/creditcards";

  constructor(private httpClient: HttpClient) {

  }

  createCreditCard(card: CreditCard): Observable<CreditCard> {
    return this.httpClient.post<CreditCard>(this.apiUrl, card)
  }

  getCreditCards(): Observable<CreditCard[]> {
    return this.httpClient.get<CreditCard[]>(this.apiUrl)
  }

  getCreditCardById(id: number): Observable<CreditCard> {
    let url = this.apiUrl + "/" + id
    return this.httpClient.get<CreditCard>(url)
  }

  updateCreditCard(card: CreditCard): Observable<CreditCard> {
    let url = `${this.apiUrl}/${card.id}`
    return this.httpClient.put<CreditCard>(url, card)
  }

  deleteCreditCard(id: number): Observable<void> {
    let url = this.apiUrl + "/" + id
    return this.httpClient.delete<void>(url)
  }
}
