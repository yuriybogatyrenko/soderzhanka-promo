var doc = $(document);

doc.ready(function () {
    doc.on('click', '.delete-preview__icon', function () {
        var that = $(this),
            image = $('#filepreview'),
            container = that.closest('.photo-drop-area__file-preview');


        container.fadeOut(200, function () {
            image.attr('src', '');
        });
    });

    doc.on('change', '#inp-file2', function () {
        if (this.files && this.files[0] && window.FileReader) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#filepreview').attr('src', e.target.result).show();
                $('.photo-drop-area__file-preview').fadeIn(200);
            };
            reader.readAsDataURL(this.files[0]);
        } /*else {
            var name = this.value;
            reWin = /.*\\(.*)/;
            var fileTitle = name.replace(reWin, "$1");
            reUnix = /.*\/(.*)/;
            fileTitle = fileTitle.replace(reUnix, "$1");
            $('#filename').html(fileTitle).show();
        }*/
    });
});