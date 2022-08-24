import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { v1, v4 } from "ember-uuid";

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

   padTo2Digits(num) {
    return String(num).padStart(2, '0');
  }
  @action
  addDay(evt) {
    const day = this.selectedDay;
    console.log('add day ', day);
    if (day != '') {
      let dayObject = {}
      dayObject.day = this.selectedDay;

      const date = new Date('December 14, 2026 08:09:00');
      const hoursAndMinutes =
        this.padTo2Digits(date.getHours()) + ':' + this.padTo2Digits(date.getMinutes());

      dayObject.hours = [{ id: v4(), from: hoursAndMinutes, to: hoursAndMinutes}];
      this.openingHours = [...this.openingHours, dayObject];
      this.days = [...this.days.filter(day => day != dayObject.day)]
    }
    this.selectedDay = '';

    console.log('this.days ', this.days);
    console.log('this.openingHours ', this.openingHours);

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
  timeFromChanged(indexDay,indexHour, evt){
    console.log('evt ', evt.target.value);
    this.openingHours[indexDay].hours[indexHour].from = evt.target.value
    console.log('this.openingHours ', this.openingHours);

  }

  @action
  timeToChanged(indexDay,indexHour, evt){
    console.log('evt ', evt.target.value);
    this.openingHours[indexDay].hours[indexHour].to = evt.target.value

    console.log('this.openingHours ', this.openingHours);

  }

  @action
  removeHour(indexDay, indexHour, evt) {
    console.log('remove indexDay ', indexDay, 'indexHour',indexHour);
    console.log('this.openingHours ', this.openingHours);

    // let tab = [];
     this.openingHours[indexDay].hours.splice(indexHour);
     this.openingHours[indexDay].hours = [...this.openingHours[indexDay].hours]
     this.openingHours[indexDay] = {...this.openingHours[indexDay]}
     this.openingHours = [...this.openingHours]

    console.log('this.openingHours ', this.openingHours);

    // this.openingHours.forEach(function (day) {
    //   let d = {};
    //   d.day = day.day;
    //   d.hours = day.hours.filter(hour => hour.id != evt.target.value)
    //   tab.push(d);
    // });

    // this.openingHours = [...tab];

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
        let hours = { id: v4(), from: Date.now(), to: Date.now() };
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
