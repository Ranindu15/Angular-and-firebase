import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
import { FirebaseModue } '@angular/firebase2';        //new import

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
        this.items = items;

    });
  }

}
