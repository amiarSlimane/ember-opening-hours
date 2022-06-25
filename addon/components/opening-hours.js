import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class OpeningHoursComponent extends Component {


  @tracked
  openingHours = []

  @tracked
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  selectedDay = '';

  @action
  setSelectedDay(evt) {
    this.selectedDay = evt.target.value;
    console.log('selected day ', this.selectedDay)
  }

  dayId=0;
  hourId=0;

  @action
  addDay(evt) {
    evt.preventDefault();
    const day = this.selectedDay;
    console.log('add day ', day);
    if (day != '') {
      let d = {}
      d.day = this.selectedDay;
      d.hours = [{ id: this.dayId, from: Date.now(), to: Date.now() }];
      this.dayId = this.dayId + 1;
      this.openingHours = [...this.openingHours, d];
      this.days = [...this.days.filter(day => day != d.day)]
    }
    this.selectedDay = '';
  }

  @action
  removeDay(evt) {
    evt.preventDefault();
    console.log('remove day', evt.target.value);

    let tab = [];
    this.openingHours.forEach(function (day) {
      let d = {}
      d.day = day.day;
      d.hours = day.hours;
      if (day.day !== evt.target.value) {
        tab.push(d);
      }

    });
    this.openingHours = [...tab];
    this.days = [...this.days, evt.target.value]
  }


  @action
  removeHour(evt) {
    evt.preventDefault();
    console.log('remove ', evt.target.value);

    let tab = [];
    this.openingHours.forEach(function (day) {
      let d = {};
      d.day = day.day;
      d.hours = day.hours.filter(hour => hour.id != evt.target.value)
      tab.push(d);
    });

    this.openingHours = [...tab];

  }

  @action
  addHour(evt) {
    evt.preventDefault();
    console.log('add ', evt.target.value);

    let tab = [];
    this.openingHours.forEach(function (day) {
      let d = {}
      d.day = day.day;
      d.hours = day.hours;
      if (day.day == evt.target.value) {
        let hours = { id: this.hourId, from: Date.now(), to: Date.now() };
        this.hourId = this.hourId + 1;
        d.hours.push(hours)
      }
      tab.push(d);
    });

    this.openingHours = [...tab];
    console.log('this.openingHours ', JSON.stringify(this.openingHours));

  }



  @action
  save() {
    this.args.setOpeningHours(this.openingHours)
  }

  @tracked
  locale = 'en';

}
