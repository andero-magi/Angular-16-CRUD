import { Component, ViewChild } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { CreditcardsService } from '../services/creditcards.service';

export interface CardViewMetrics {
  bigInterest: number
  bigMaxCredit: number
  inactive: number
}

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.scss']
})
export class CreditcardsComponent {

  cards: CreditCard[] = []

  displayColumns = ["select", "id", "name", "description", "bankName", "interestRate", "active", "creditScore", "recommendedScore", "actions"]
  dataSource = new MatTableDataSource(this.cards)
  selection = window.getSelection()

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null
  @ViewChild(MatSort) sort: MatSort | null = null

  metrics: CardViewMetrics = {
    bigInterest: 0,
    bigMaxCredit: 0,
    inactive: 0
  }

  constructor(private service: CreditcardsService) {
    this.service.getCreditCards().subscribe((data: CreditCard[]) => {
      this.cards = data
      
      this.dataSource = new MatTableDataSource(this.cards)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort

      this.calculateMetrics()
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  calculateMetrics() {
    this.metrics.bigMaxCredit = this.cards.filter(c => Number(c.maxCredit) > 3000).length
    this.metrics.bigInterest = this.cards.filter(c => Number(c.interestRate) > 7).length

    this.cards.forEach(card => {
      if (Number(card.maxCredit) >= 3000) {
        this.metrics.bigMaxCredit++
      }

      if (Number(card.interestRate) > 7) {
        this.metrics.bigInterest++
      }

      if (!card.active) {
        this.metrics.inactive++
      }
    })
  }
}
