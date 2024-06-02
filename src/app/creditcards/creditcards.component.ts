import { Component, ViewChild } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { CreditcardsService } from '../services/creditcards.service';

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

  constructor(private service: CreditcardsService) {
    this.service.getCreditCards().subscribe((data: CreditCard[]) => {
      this.cards = data
      
      this.dataSource = new MatTableDataSource(this.cards)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
