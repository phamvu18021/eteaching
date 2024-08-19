export const getSrcFromIframe = (htmlString: string) => {
  // Tạo một phần tử div để chứa nội dung HTML
  var tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;

  // Lấy thẻ iframe từ phần tử div
  var iframe = tempDiv.querySelector("iframe");

  // Trả về giá trị của thuộc tính src
  if (iframe) {
    return iframe.getAttribute("src");
  } else {
    return null; // Trả về null nếu không tìm thấy thẻ iframe
  }
};
