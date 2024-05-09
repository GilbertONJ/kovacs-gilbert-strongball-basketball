import { Component } from '@angular/core';
import { TeamObject } from '../../shared/team-data/teams';
import { Sort } from '@angular/material/sort';

export interface Teams {
  teamName: String;
  wins: number;
  loses: number;
  bestPlayer: string;
  points: number;
  standing: number;
}

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {
  teamobject = TeamObject;

  teams: Teams [] = [
    {teamName: 'The Bears', wins: 13, loses: 7, bestPlayer: 'Jackson Bryan', points: 110, standing: 6},
    {teamName: 'The Eagles', wins: 5, loses: 15, bestPlayer: 'Harper Ray', points: 94, standing: 8},
    {teamName: 'The Elephants', wins: 10, loses: 10, bestPlayer: 'Thomas Müller', points: 115, standing: 7},
    {teamName: 'The Foxes', wins: 15, loses: 5, bestPlayer: 'Harvey Spector', points: 326, standing: 5},
    {teamName: 'The Griffins', wins: 19, loses: 1, bestPlayer: 'David Spurse', points: 665, standing: 2},
    {teamName: 'The Hawks', wins: 17, loses: 3, bestPlayer: 'Arthor Macmiller', points: 217, standing: 3},
    {teamName: 'The Lions', wins: 20, loses: 0, bestPlayer: 'Jason Bourne', points: 725, standing: 1},
    {teamName: 'The Sharks', wins: 16, loses: 4, bestPlayer: 'Louis Fernandes', points: 354, standing: 4},
  ];

  sortedData: Teams[];

  constructor(){
    this.sortedData = this.teams.slice();
  }

  sortData(sort: Sort){
    const data = this.teams.slice();
    if(!sort.active || sort.direction == ''){
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isASC = sort.direction == 'asc';
      switch(sort.active){
        case 'teamName':
          return compare(a.teamName as string, b.teamName as string, isASC);
        case 'wins':
          return compare(a.wins, b.wins, isASC);
        case 'loses':
          return compare(a.loses, b.loses, isASC);
        case 'bestPlayer':
          return compare(a.bestPlayer, b.bestPlayer, isASC);
        case 'points':
          return compare(a.points, b.points, isASC);
        case 'standing':
          return compare(a.standing, b.standing, isASC);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}