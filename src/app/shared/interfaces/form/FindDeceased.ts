export interface FindDeceased {
  uid: string;
  name: string;
  birthDate: Date;
  dateOfDeath: Date;
  sex: string;
  burialInDifferentRegion: boolean;
  region: string;
  burialAddressInOtherRegion: string;
}
