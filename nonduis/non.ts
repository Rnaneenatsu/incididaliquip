// Define an interface for Geo data
interface IGeo {
  latitude: number;
  longitude: number;
  // Add other relevant properties and methods
}

// Implement the interface with a class
class Geo implements IGeo {
  latitude: number;
  longitude: number;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  // Method to display the latitude and longitude
  displayCoordinates(): string {
    return `Latitude: ${this.latitude}, Longitude: ${this.longitude}`;
  }

  // Add other relevant methods
}

// Usage
const geoLocation = new Geo(37.7749, -122.4194);
console.log(geoLocation.displayCoordinates());
