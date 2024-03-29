/**
 * This interface represents the api
 * response when a researcher search is performed.
 */
export interface AuthorsSearchResult {
  /**
   * Authors info
   */
  authors: CvInvestigators[]
  /**
   * Current page
   */
  page: number
  /**
   * Number of authors showing per page
   */
  showing: number
  /**
   * Total number of authors gotten from the query result
   */
  total_number: number
}


export class CvInvestigators {
    Nombre!:string;
    id_cv!:string;
    Nacionalidad!: string;
    job_info!: string[]
    constructor(full_name:string, id:string, nationality:string, job_info:[]){
        this.Nombre = full_name
        this.id_cv = id
        this.Nacionalidad = nationality
        this.job_info = job_info
    }
}
