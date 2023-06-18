export class CvInvestigators {
    Nombre!:string;
    id_cv!:string
    constructor(full_name:string, id:string){
        this.Nombre = full_name
        this.id_cv = id
    }
}
