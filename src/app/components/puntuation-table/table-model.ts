export class TableModel {
  title: string
  totalPunctuation: number
  iconName: string
  fieldName: string//Field of the ArticleRating class
  comment_type: string

  constructor(title: string, totalPunctuation: number, iconName: string, fieldName: string, comment_type: string) {
    this.title = title;
    this.totalPunctuation = totalPunctuation;
    this.iconName = iconName;
    this.fieldName = fieldName;
    this.comment_type = comment_type;
  }

  get_html_comment(): string{
    let br = "<br>&nbsp;&nbsp;&nbsp;"//breaker
    let basic = `<b>0:</b> No contiene este campo<br><b>4:</b> Contiene este campo`
    switch (this.comment_type){
      case "basic":
        return basic;
      case "verified":
        return basic + `<br><b>8:</b> Verificado`;
      case "doi":
        return basic + `<br><b>12:</b> Verificado<br><b>20:</b> Verificado y único`;
      case "source":
        return "Revista, Volumen, pág. inicio, pág. final" +
          `<br><b>+3: </b>Por cada campo<br><b>+4: </b>Contiene ISSN<br><b>+8: </b>ISSN verificado`;
      case "total":
        return "<b>0 - 100: </b>Puntuación total obtenida al sumar la puntuación de cada campo"
      default:
        return "<p>unknown field name</p>";
    }
  }
}
