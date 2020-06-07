export class Users {
    id: number;
    name: string;
    surname: string;
    nickname: string;
    age: string;
    phoneNumber: string;
    line: string;
    email: string;
    address: {
        village: string;
        subDistrict: string;
        district: string;
        province: string;
        postalCode: string;
        country:string;
    }
}