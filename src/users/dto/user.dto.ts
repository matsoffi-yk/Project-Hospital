export class UsersDTO {
    username: string;
    password: string;
    confirmPassword: string;
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
        country: string;
    }

    constructor() {
        this.username = "";
        this.password = "";
        this.confirmPassword = "";
        this.name = "";
        this.surname = "";
        this.nickname = "";
        this.age = "";
        this.phoneNumber = "";
        this.line = "";
        this.email = "";
        this.address = {
            village: "",
            subDistrict: "",
            district: "",
            province: "",
            postalCode: "",
            country: ""
        }
    }
}
