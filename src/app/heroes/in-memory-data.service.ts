import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {
        id: 1,
        name: 'Captain America',
        profile: 'heroes.jpg',
      },
      {
        id: 2,
        name: 'Spider-Man',
        profile: 'heroes.jpg',
      },
      {
        id: 3,
        name: 'Iron Man',
        profile: 'heroes.jpg',
      },
      {
        id: 4,
        name: 'Daredevil',
        profile: 'heroes.jpg',
      },
      {
        id: 5,
        name: 'Deadpool',
        profile: 'heroes.jpg',
      },
      {
        id: 6,
        name: 'Doctor Strange',
        profile: 'heroes.jpg',
      },
      {
        id: 7,
        name: 'Jessica Jones',
        profile: 'heroes.jpg',
      },
      {
        id: 8,
        name: 'Black Widow',
        profile: 'heroes.jpg',
      },
      {
        id: 9,
        name: 'Professor X',
        profile: 'heroes.jpg',
      },
      {
        id: 10,
        name: 'Scarlet Witch',
        profile: 'heroes.jpg',
      },
    ];
    return { heroes };
  }
}
