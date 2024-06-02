import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  cardId: number = 0

  constructor(
    private service: CreditcardsService, 
    private router: ActivatedRoute,
    private route: Router
  ) {
    this.cardId = parseInt(router.snapshot.paramMap.get("id") || '')

    this.service.deleteCreditCard(this.cardId).subscribe(data => {
      alert("Credit Card Deleted!")
      route.navigate(['/creditcards'])
    })
  }
}
