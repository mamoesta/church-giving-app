import {Injectable} from '@angular/core';

@Injectable()
export class GetChurches {
    allChurches;
    allTransactions;


    initializeChurches(){
        this.allChurches =   [
        {
          church: {id:1, name: 'CityLight Church', address: '123 Main Avenue', pastor: 'Tim Smith', city:'Philadelphia',state:'PA',
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtm1gNfspDXYDGM3lXiCQAVRlS3iBt2nuecJYALVgBiYQzZ_HV",
            pastorUrl: "https://static1.squarespace.com/static/53959f2ce4b0d0ce55449ea5/55e47a42e4b04628c9f642e0/560015e7e4b0d0893715381d/1490702123519/OWEN+WILSON.jpg?format=300w"}
         },
         {
          church: {id:2,name:'Christ Presbyterian Church', address: '161 Leverington Avenue', pastor: 'Craig Luekens', city:'New Haven', state:'CT',
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtm1gNfspDXYDGM3lXiCQAVRlS3iBt2nuecJYALVgBiYQzZ_HV",
          pastorUrl: "https://static1.squarespace.com/static/53959f2ce4b0d0ce55449ea5/55e47a42e4b04628c9f642e0/560015e7e4b0d0893715381d/1490702123519/OWEN+WILSON.jpg?format=300w"}
         },
         {
           church: {id:3, name: 'Rock Church', address: '123 Smith Avenue', pastor: 'Tim Smith', city: 'Richmond', state: 'VA',
           imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtm1gNfspDXYDGM3lXiCQAVRlS3iBt2nuecJYALVgBiYQzZ_HV",
           pastorUrl: "https://static1.squarespace.com/static/53959f2ce4b0d0ce55449ea5/55e47a42e4b04628c9f642e0/560015e7e4b0d0893715381d/1490702123519/OWEN+WILSON.jpg?format=300w"}
          },
         {
           church: {id:4,name:'Epic Church On the Lake', address: '161 Leverington Avenue', pastor: 'Craig Luekens',city: 'Nashville', state:'TN',
           imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtm1gNfspDXYDGM3lXiCQAVRlS3iBt2nuecJYALVgBiYQzZ_HV",
           pastorUrl: "https://upload.wikimedia.org/wikipedia/en/d/d8/Michael_J._Fox_as_Marty_McFly_in_Back_to_the_Future%2C_1985.jpg"}
         },
         {
             church: {id:5, name: 'Grace Episcopal Church', address: '123 Main Avenue', pastor: 'Tim Smith', city: 'Little Rock', state: 'AK',
             imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtm1gNfspDXYDGM3lXiCQAVRlS3iBt2nuecJYALVgBiYQzZ_HV",
             pastorUrl: "https://upload.wikimedia.org/wikipedia/en/d/d8/Michael_J._Fox_as_Marty_McFly_in_Back_to_the_Future%2C_1985.jpg"}
         },
         {
             church: {id:6,name:'Church of the Cross', address: '161 Leverington Avenue', pastor: 'Craig Luekens', city: 'Detroit', state: 'MI',
             imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtm1gNfspDXYDGM3lXiCQAVRlS3iBt2nuecJYALVgBiYQzZ_HV",
             pastorUrl: "https://upload.wikimedia.org/wikipedia/en/d/d8/Michael_J._Fox_as_Marty_McFly_in_Back_to_the_Future%2C_1985.jpg"}
         }];
         return this.allChurches;
        }
    initializeTransactions(){
        this.allTransactions = [
            {churchId: 1, tId:1,date: "2012-04-23T18:25:43.511Z",amount: 25.13,userId:1, paymentTypeId: 1,cause:""},
            {churchId: 2, tId:2,date: "2014-11-11T18:25:43.511Z",amount: 100,userId:2, paymentTypeId: 2,cause:"General Donations"},
            {churchId: 3, tId:3,date: "2014-11-11T18:25:43.511Z",amount: 100,userId:7, paymentTypeId: 2,cause:"Mission Trip"},
            {churchId: 4, tId:4,date: "2014-11-11T18:25:43.511Z",amount: 100,userId:4, paymentTypeId: 2,cause:"Other"},
            {churchId: 2, tId:5,date: "2014-11-11T18:25:43.511Z",amount: 100,userId:5, paymentTypeId: 2,cause:""},
            {churchId: 2, tId:6,date: "2014-11-11T18:25:43.511Z",amount: 100,userId:6, paymentTypeId: 2,cause:"General Donations"},
            {churchId: 2, tId:7,date: "2014-11-18T18:25:43.511Z",amount: 4.30,userId:7, paymentTypeId: 2,cause:"Random Act of Kindess"},
            {churchId: 2, tId:8,date: "2014-11-25T18:25:43.511Z",amount: 55.15,userId:7, paymentTypeId: 2,cause:"Thing"},
            {churchId: 2, tId:9,date: "2014-12-02T18:25:43.511Z",amount: 120.45,userId:7, paymentTypeId: 2,cause:"This is a great app"},
            {churchId: 2, tId:10,date: "2014-12-09T18:25:43.511Z",amount: 1000.00,userId:7, paymentTypeId: 2,cause:"I'm Rich"}
        ];
        return this.allTransactions;

    }

}