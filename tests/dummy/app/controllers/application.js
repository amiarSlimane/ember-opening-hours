import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {

  openingHours = [
    {"day":"tuesday","hours":[{"id":"1","from":"09:00","to":"12:00"},{"id":"2","from":"13:00","to":"16:00"}]},
    {"day":"wednesday","hours":[{"id":"1","from":"09:00","to":"12:00"},{"id":"2","from":"13:00","to":"16:00"}]}]
  @action
  save(hours){
    console.log('saving hours ', hours)
  }
}
