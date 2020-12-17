import http from "../http-commons";

class UploadFilesService {
    upload(form, onUploadProgress) {
        let formData = new FormData();

        formData.append("uploaded_file", form.uploaded_file);
        let iddoc = form.iddoc;
        let fecvencimientodoc = form.fecvencimientodoc;
        let nomdoc = form.nomdoc;
        let idusuario = form.idusuario;

        return http.post("/upload-file", formData, {
                params: {
                    iddoc,
                    fecvencimientodoc,
                    nomdoc,
                    idusuario
                }
            },

            {
                headers: {
                    "Content-Type": "multipart/form-data"
                },

                onUploadProgress

            });
    }

    getFiles() {
        return http.get("/listfiles");
    }
}

export default new UploadFilesService();