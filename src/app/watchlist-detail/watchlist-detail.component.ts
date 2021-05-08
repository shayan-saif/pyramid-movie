import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMovie } from '../models/movie.model';
import { IWatchlist } from '../models/watchlist.model';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-watchlist-detail',
  templateUrl: './watchlist-detail.component.html',
  styleUrls: ['./watchlist-detail.component.scss']
})
export class WatchlistDetailComponent implements OnInit {
  watchlist: IWatchlist;
  watchlistSubscription: Subscription;

  toWatchMovies: IMovie[];
  bookmarkedMovies: IMovie[];
  watchedMovies: IMovie[];


  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    this.toWatchMovies = this.watchlist.movies.filter(movie => !movie.club.watched && !movie.club.bookmarked);
    this.bookmarkedMovies = this.watchlist.movies.filter(movie => !movie.club.watched && movie.club.bookmarked);
    this.watchedMovies = this.watchlist.movies.filter(movie => movie.club.watched);
    
    
    this.watchlistSubscription = this.watchlistService.getSelectedWatchlist().subscribe((watchlist) => {
      this.watchlist = watchlist;
      console.log(watchlist);
    });
  }

}