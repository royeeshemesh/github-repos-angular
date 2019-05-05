import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GithubService} from '../github.service';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {NgbTypeaheadSelectItemEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() selectItem = new EventEmitter<any>();

  constructor(private githubService: GithubService) {
  }

  ngOnInit(): void {
  }

  onSelectItem(e: NgbTypeaheadSelectItemEvent) {
    this.selectItem.emit(e.item);
  }

  search = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(300), // prevent searching while typing
      distinctUntilChanged(), // prevent searching if nothing changed
      switchMap(
        term => this.githubService.search(term)
      )
    );
  }

}
