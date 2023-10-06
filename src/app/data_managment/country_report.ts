export class Country_Report{
    country_name !:string
    list_international_id!:any

    constructor(country_name:string,list_international_id:any){
        this.country_name = country_name
        this.list_international_id = list_international_id
    }

    get_list_internationa_id():any{
        return this.list_international_id;
    }

    get_country_name():string{
        return this.country_name;
    }
}
