import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifSearchResponse } from '../interfaces/gifs.interface';

@Injectable({ providedIn: 'root' })
export class GifsService {
  public gifsList: Gif[] = [];

  private _sheardTags: string[] = [];
  serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  api_key: string = 'c2YdxkM8VxovRu3xJ68OQu0rchHt9StV';

  constructor(private _http: HttpClient) {
    this.getLocalStorage();
  }

  get sheardtags() {
    return [...this._sheardTags];
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._sheardTags));
  }

  private getLocalStorage(): void {
    if (!localStorage.getItem('history')) {
      return;
    }
    const history = localStorage.getItem('history');
    this._sheardTags = JSON.parse(history!);
    this.addHistoryTags(this._sheardTags[0])
  }

  validateHistory(newTag: string) {
    newTag = newTag.toLowerCase();
    if (this._sheardTags.includes(newTag)) {
      this._sheardTags = this._sheardTags.filter((tag) => tag !== newTag);
    }
    this._sheardTags.unshift(newTag);
    this._sheardTags = this.sheardtags.splice(0, 10);
    this.saveLocalStorage();
  }

  addHistoryTags(tag: string): void {
    if (!tag) {
      return;
    }
    this.validateHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.api_key)
      .set('q', tag)
      .set('limit', '10');

    this._http
      .get<GifSearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((data) => {
        this.gifsList = data.data;
      });
  }
}
