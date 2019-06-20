class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year) {
    return year - `${this.startDate.getFullYear()}`;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  avenueInteger(avenue){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    return eastWest.indexOf(avenue)
  }
  blocksTravelled(){
    let horizontal = this.avenueInteger(this.endingLocation.horizontal) - this.avenueInteger(this.beginningLocation.horizontal)
    let vertical = this.endingLocation.vertical - this.beginningLocation.vertical
    return horizontal + vertical
  }
  estimatedTime(peak){
    if (peak) {
      return this.blocksTravelled() / 2
    }
    else {
      return this.blocksTravelled() / 3
    }
  }
}
