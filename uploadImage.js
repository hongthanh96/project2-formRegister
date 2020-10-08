function uploadAvatar(element) {
    console.log(element.files[0]);
    var img = element.files[0];
    var fsize = element.files[0].size;
    var ftype = element.files[0].type;
    var reader = new FileReader();
    // console.log(reader);
    if ((ftype == 'image/png' || ftype == 'image/jpg' || ftype == 'image/jpeg' || ftype == 'image/gif')) {

        if (fsize < 145000) {
            reader.onloadend = function() {
                $("#image").attr("src", reader.result);
            }
            reader.readAsDataURL(img);

        } else {
            alert('Dung lượng ảnh quá lớn. hãy chọn ảnh có kích thước nhỏ hơn!')
        }
    } else {
        alert('Vui lòng chọn đúng định dạng file ảnh có đuôi .jpg hoặc .png hoặc .jpeg hoặc .gif!')
    }
}