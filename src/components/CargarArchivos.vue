<template>
  <div >
    <div v-if="currentFile" class="progress">
      <div
        class="progress-bar progress-bar-info progress-bar-striped"
        role="progressbar"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{ width: progress + '%' }"
      >
        {{ progress }}%
      </div>
    </div>

    <label class="btn btn-default">
      <input type="file" ref="file" @change="selectFile" />
    </label>

    <button class="btn btn-success" :disabled="!selectedFiles" @click="upload">
      Cargar
    </button>

    <div class="alert alert-light" role="alert">{{ message }}</div>

    <div class="card">
      <div class="card-header">Lista de Archivos</div>
      <ul class="list-group list-group-flush">
        <table class="table table-dark">
        <thead>
          <th scope="row">id</th>
          <th scope="row">nombre</th>
          <th scope="row">Link</th>
        </thead>  
                <tr v-for=" dato in fileinfos " :key="dato.id">
                <td>{{ dato.iddoc }}</td>
                <td>{{ dato.nomdoc }}</td>
                <td>{{ dato.pathdoc }}</td>
            </tr>
        </table>
      </ul>
    </div>
  </div>
</template>


<script>
import UploadService from "../services/CargasArchivosService";

export default {
  name: "upload-files",
  data() {
    return {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",
      iddoc: undefined,
      nomdoc: undefined,
      feccarguedoc: undefined,
      fecvencimientodoc: undefined,
      pathdoc: undefined,
      fileinfos: [],   
      fileInfos: []
    };
  },
  methods: {
        selectFile() {
      this.selectedFiles = this.$refs.file.files;
           }, 
          upload() {
      this.progress = 0;

      this.currentFile = this.selectedFiles.item(0);
      UploadService.upload(this.currentFile, event => {
        this.progress = Math.round((100 * event.loaded) / event.total);
      })
        .then(response => {
          this.message = response.data.message;
          return UploadService.getFiles();
        })
        .then(files => {
          this.fileInfos = files.data;
        })
        .catch(() => {
          this.progress = 0;
          this.message = "No se pudo cargar el archivo!";
          this.currentFile = undefined;
        });

      this.selectedFiles = undefined;
    }
  },
      mounted() {
    UploadService.getFiles().then(response => {
      this.fileinfos = response.data;
    });
  }
};
</script>