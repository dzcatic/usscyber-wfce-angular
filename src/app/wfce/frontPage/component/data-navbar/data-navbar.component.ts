import { Component, OnInit, HostBinding } from '@angular/core';
import { AreaSelectedService } from '../../services/area-selected.service';
import { TimelineService } from '../../services/timeline.service';
import { DataNavbarService } from '../../services/data-navbar.service';
import { TeamsSelectedService } from '../../services/teams-selected.service';

@Component({
  selector: 'app-data-navbar',
  templateUrl: './data-navbar.component.html',
  styleUrls: ['./data-navbar.component.scss']
})
export class DataNavbarComponent implements OnInit {

  public isCountrySelected: boolean;
  public isContinentSelected: boolean;
  public selectedContinent;
  public selectedCountry;

  constructor(private areaSelectedService: AreaSelectedService, 
              private timelineService: TimelineService,
              private dataNavbarService: DataNavbarService,
              private teamsSelectedService: TeamsSelectedService) { }

  ngOnInit() {
    this.areaSelectedService.countrySelected$.subscribe((value)=>{
      this.isCountrySelected = value;
    });
    this.areaSelectedService.continentSelected$.subscribe((value)=>{
      this.isContinentSelected = value;
    });
    this.areaSelectedService.currentContinent$.subscribe((value)=>{
      console.log(value);
      this.selectedContinent = value;
    })
    this.areaSelectedService.currentCountry$.subscribe((value)=>{
      this.selectedCountry = value;
    })
  }

  /* @HostBinding('style.opacity') get disabled(): string {
    if(!this.countrySelected)
    { 
      return "0.5";
    }
    return "1";
  } */
  backToContinentView(){
    this.areaSelectedService.setCurrentContinent("");
  }

  toggleCountryListView(){
    this.areaSelectedService.toggleCountriesList(true);
  }

  toggleTimeline(){
    this.dataNavbarService.setToggleData({value: 'timeline',
                                          scroll: true});
  }

  toggleMostValuableTeams(){
    this.areaSelectedService.loadMostValuableTeams().subscribe((value)=>{
      setTimeout(()=>{
        this.dataNavbarService.setToggleData({value: 'most-valuable-teams',
                                          scroll: true});
      }, 0)
      this.teamsSelectedService.setNumberOfPages(value['numberOfPages']);
      this.teamsSelectedService.setMostValuableTeams(value['data']);
      
    })
    
  }

  toggleMostValuableTeamsByCountry(){
    this.dataNavbarService.setToggleData({value: 'most-valuable-teams-country',
                                          scroll: true});
  }

  toggleMostValuableTeamsByContinent(){
    this.dataNavbarService.setToggleData({value: 'most-valuable-teams-continent',
                                          scroll: true});
  }

}
