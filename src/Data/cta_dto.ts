export interface Eta {
  staId: string;
  stpId: string;
  staNm: string;
  stpDe: string;
  rn: string;
  rt: string;
  destSt: string;
  destNm: string;
  trDr: string;
  prdt: Date;
  arrT: Date;
  isApp: string;
  isSch: string;
  isDly: string;
  isFlt: string;
  flags?: any;
  lat: string;
  lon: string;
  heading: string;
}

export interface Ctatt {
  tmst: Date;
  errCd: string;
  errNm?: any;
  eta: Eta[];
}

export interface RootObject {
  ctatt: Ctatt;
}
