import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal-cat-list',
  templateUrl: './terminal-cat-list.component.html',
  styleUrls: ['./terminal-cat-list.component.scss']
})
export class TerminalCatListComponent implements OnInit {

  constructor() { }
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1]
  ngOnInit(): void {
  }

}
