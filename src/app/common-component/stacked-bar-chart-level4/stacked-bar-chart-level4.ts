import { Component, Input, ViewChild, ElementRef } from '@angular/core';

export class Coordinates {
  public title: string = "";
  public value: number = 0;
}

@Component({
  selector: 'stacked-bar-chart-level4',
  templateUrl: './stacked-bar-chart-level4.html',
  styleUrls: ['./stacked-bar-chart-level4.scss']
})
export class StackedBarChartlevel4Component {

  @ViewChild("progresscontainer") progresscontainer: ElementRef;

  @Input() values: Coordinates[] = [];

  ngOnInit() {

    const total = this.values.reduce((acc, value) => {
      return acc + value.value;
    }, 0);

    var values = this.values.map((val: Coordinates) => {
        return (val.value / total) * 100;
    });

    var spans = this.progresscontainer.nativeElement.querySelectorAll("span");

    for (var i = 0; i < values.length; i++) {
      spans[i].style.width = values[i] + "%";
    }

  }

}
