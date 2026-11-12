export type Bus = {
  id: string; name: string; from: string; to: string; via: string[];
  duration: number; fare: number; transfers: number; eta: number;
  status: 'On time' | 'Delayed' | 'Departed'; lat: number; lng: number;
}
export const initialBuses: Bus[] = [
  { id:'ST-101', name:'Perambalur Express (Demo)', from:'Perambalur Bus Stand', to:'SRM TRP Engineering College', via:['Samayapuram','No.1 Tollgate'], duration:95, fare:65, transfers:0, eta:10, status:'On time', lat:11.235, lng:78.879 },
  { id:'ST-202', name:'City Connect (Demo)', from:'Perambalur Bus Stand', to:'SRM TRP Engineering College', via:['Thuraiyur','Chatram Bus Stand'], duration:115, fare:55, transfers:1, eta:18, status:'On time', lat:11.20, lng:78.83 },
  { id:'ST-303', name:'Green Line (Demo)', from:'Perambalur New Bus Stand', to:'SRM TRP Engineering College', via:['Lalgudi','No.1 Tollgate'], duration:105, fare:70, transfers:0, eta:25, status:'Delayed', lat:11.27, lng:78.91 }
]
export const stops = [
  { name:'Perambalur Bus Stand', lat:11.2342, lng:78.8800 },
  { name:'Perambalur New Bus Stand', lat:11.2310, lng:78.8750 },
  { name:'Samayapuram', lat:10.9450, lng:78.7400 },
  { name:'No.1 Tollgate', lat:10.8500, lng:78.6900 },
  { name:'Chatram Bus Stand', lat:10.8290, lng:78.6940 },
  { name:'SRM TRP Engineering College', lat:10.7650, lng:78.6940 }
]