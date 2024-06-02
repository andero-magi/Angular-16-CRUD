import { Component, ViewChild } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort';

const TABLE_DATA: CreditCard[] = [
  {
    "id": 2,
    "name": "SBI Bank",
    "description": "SBI Bank offers customers with various options",
    "bankName": "SBI Bank",
    "maxCredit": 3000,
    "interestRate": 10,
    "active": true,
    "recommendedScore": "700-900",
    "annualFee": 4,
    "termsAndConditions": "Following are the terms and conditions",
    "createdDate": "2023-31-08",
    "updatedDate": "2023-31-08"
  },
  {
    "id": 4,
    "name": "Mastercard",
    "description": "Mastercard offers customers with various options",
    "bankName": "Mastercard",
    "maxCredit": 3000,
    "interestRate": 10,
    "active": true,
    "recommendedScore": "700-900",
    "annualFee": 4,
    "termsAndConditions": "Following are the terms and conditions",
    "createdDate": "2023-31-08",
    "updatedDate": "2023-31-08"
  },
  {
    "id": 5,
    "name": "Visa",
    "description": "Visa offers customers with various options",
    "bankName": "Visa",
    "maxCredit": 3000,
    "interestRate": 10,
    "active": true,
    "recommendedScore": "700-900",
    "annualFee": 4,
    "termsAndConditions": "Following are the terms and conditions",
    "createdDate": "2023-31-08",
    "updatedDate": "2023-31-08"
  },
  {
    "id": 3,
    "name": "Bank of America",
    "description": "Bank of America offers customers with various options",
    "bankName": "Bank of America",
    "maxCredit": 3000,
    "interestRate": 10,
    "active": true,
    "recommendedScore": "700-900",
    "annualFee": 4,
    "termsAndConditions": "Following are the terms and conditions",
    "createdDate": "2023-31-08",
    "updatedDate": "2023-31-08"
  },
  {
    "id": 3,
    "name": "Bank of America",
    "description": "Bank of America offers customers with various options",
    "bankName": "Bank of America",
    "maxCredit": 3000,
    "interestRate": 10,
    "active": true,
    "recommendedScore": "700-900",
    "annualFee": 4,
    "termsAndConditions": "Following are the terms and conditions",
    "createdDate": "2023-31-08",
    "updatedDate": "2023-31-08"
  },
  {
    "id": 3,
    "name": "Bank of America",
    "description": "Bank of America offers customers with various options",
    "bankName": "Bank of America",
    "maxCredit": 3000,
    "interestRate": 10,
    "active": true,
    "recommendedScore": "700-900",
    "annualFee": 4,
    "termsAndConditions": "Following are the terms and conditions",
    "createdDate": "2023-31-08",
    "updatedDate": "2023-31-08"
  },
  {
    "id": 3,
    "name": "Bank of America",
    "description": "Bank of America offers customers with various options",
    "bankName": "Bank of America",
    "maxCredit": 3000,
    "interestRate": 10,
    "active": true,
    "recommendedScore": "700-900",
    "annualFee": 4,
    "termsAndConditions": "Following are the terms and conditions",
    "createdDate": "2023-31-08",
    "updatedDate": "2023-31-08"
  },
  {
    "id": 3,
    "name": "Bank of America",
    "description": "Bank of America offers customers with various options",
    "bankName": "Bank of America",
    "maxCredit": 3000,
    "interestRate": 10,
    "active": true,
    "recommendedScore": "700-900",
    "annualFee": 4,
    "termsAndConditions": "Following are the terms and conditions",
    "createdDate": "2023-31-08",
    "updatedDate": "2023-31-08"
  },
  {
    "id": 3,
    "name": "Bank of America",
    "description": "Bank of America offers customers with various options",
    "bankName": "Bank of America",
    "maxCredit": 3000,
    "interestRate": 10,
    "active": true,
    "recommendedScore": "700-900",
    "annualFee": 4,
    "termsAndConditions": "Following are the terms and conditions",
    "createdDate": "2023-31-08",
    "updatedDate": "2023-31-08"
  },
  {
    "id": 3,
    "name": "Bank of America",
    "description": "Bank of America offers customers with various options",
    "bankName": "Bank of America",
    "maxCredit": 3000,
    "interestRate": 10,
    "active": true,
    "recommendedScore": "700-900",
    "annualFee": 4,
    "termsAndConditions": "Following are the terms and conditions",
    "createdDate": "2023-31-08",
    "updatedDate": "2023-31-08"
  },
  {
    "id": 3,
    "name": "Bank of America",
    "description": "Bank of America offers customers with various options",
    "bankName": "Bank of America",
    "maxCredit": 3000,
    "interestRate": 10,
    "active": true,
    "recommendedScore": "700-900",
    "annualFee": 4,
    "termsAndConditions": "Following are the terms and conditions",
    "createdDate": "2023-31-08",
    "updatedDate": "2023-31-08"
  },
  {
    "id": 3,
    "name": "Bank of America",
    "description": "Bank of America offers customers with various options",
    "bankName": "Bank of America",
    "maxCredit": 3000,
    "interestRate": 10,
    "active": true,
    "recommendedScore": "700-900",
    "annualFee": 4,
    "termsAndConditions": "Following are the terms and conditions",
    "createdDate": "2023-31-08",
    "updatedDate": "2023-31-08"
  },
  {
    "id": 3,
    "name": "Bank of America",
    "description": "Bank of America offers customers with various options",
    "bankName": "Bank of America",
    "maxCredit": 3000,
    "interestRate": 10,
    "active": true,
    "recommendedScore": "700-900",
    "annualFee": 4,
    "termsAndConditions": "Following are the terms and conditions",
    "createdDate": "2023-31-08",
    "updatedDate": "2023-31-08"
  },
  {
    "id": -1,
    "name": "Test1",
    "description": "Some bank",
    "bankName": "Bank1",
    "maxCredit": 10000,
    "interestRate": 12,
    "active": true,
    "recommendedScore": "100-500",
    "annualFee": 12,
    "termsAndConditions": "Terms and Conditions of the card",
    "createdDate": "2023-10-17T04:00:00.000Z",
    "updatedDate": "2024-12-10T05:00:00.000Z"
  },
  {
    "name": "some1",
    "description": "some description",
    "bankName": "some2",
    "maxCredit": 12000,
    "interestRate": 10,
    "active": true,
    "recommendedScore": "100-500",
    "annualFee": 12,
    "termsAndConditions": "Terms and Conditions of the card",
    "createdDate": "2023-10-19T04:00:00.000Z",
    "updatedDate": "2024-12-10T05:00:00.000Z",
    "id": 6
  },
  {
    "name": "Platinum Card",
    "description": "This is a test credit card",
    "bankName": "ARC Bank",
    "maxCredit": "10000",
    "interestRate": "153",
    "active": true,
    "recommendedScore": "300-500",
    "annualFee": "203",
    "termsAndConditions": "Terms and conditions for the credit card",
    "createdDate": "2023-10-18T04:00:00.000Z",
    "updatedDate": "2023-10-19T04:00:00.000Z",
    "id": 7
  }
]

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.scss']
})
export class CreditcardsComponent {

  displayColumns = ["select", "id", "name", "description", "bankName", "interestRate", "active", "creditScore", "recommendedScore"]
  dataSource = new MatTableDataSource(TABLE_DATA)
  selection = window.getSelection()

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null
  @ViewChild(MatSort) sort: MatSort | null = null

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
