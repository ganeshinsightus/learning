import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { NewsDialogComponent } from './news-dialog/news-dialog.component';

@Component({
  selector: 'home-news',
  templateUrl: './news.component.html',
  styleUrls: ['../home.component.scss']
})
export class NewsComponent {

  newsDialogRef: MatDialogRef<NewsDialogComponent>;

  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.newsDialogRef = this.dialog.open(NewsDialogComponent, {
      width: '50%',
      height: '60vh'
    });
    //this.newsDialogRef.componentInstance.title = "odioCras justo odio";
    this.newsDialogRef.disableClose = true;
  }


}