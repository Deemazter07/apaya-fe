import moment from "moment";

export function reformatArticleContent(content) {
  // const cleanText = content.replace(/<\/?[^>]+(>|$)/g, "");
  const cleanText = content.replace(/<\/?[^>]+(>|$)|&nbsp;/g, " ");
  return cleanText;
}

export function reformatArticleUploadDate(date) {
  date = moment(date).locale("en").format("DD MMM YYYY");

  return date;
}
