const confirmDelete = Vue.component("confirm-delete", {
  props: ["job"],
  methods: {
    deleteOne(id) {
      const url = `api/jobs/delete`;
      let body = { jobIds: [id] };
      return axios
        .post(url, body)
        .then((result) => result.data)
        .then((data) => {
          this.$emit("popup-message", "delete");
          this.$emit("refresh-data");
        })
        .catch(console.log);
    },
  },
  render: function () {with(this){return _c('div',{staticClass:"modal fade",attrs:{"id":"modalDeleteSure","tabindex":"-1","role":"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content"},[_m(0),_c('div',{staticClass:"modal-body"},[_c('p',[_v("ID: "+_s(job.job._id))]),_c('p',[_v("Name: "+_s(job.job.name))])]),_c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn btn-danger",attrs:{"type":"button","data-dismiss":"modal"},on:{"click":function($event){return deleteOne(job.job._id)}}},[_v("Delete")]),_c('button',{staticClass:"btn btn-secondary",attrs:{"type":"button","data-dismiss":"modal"}},[_v("Cancel")])])])])])}},
  staticRenderFns: [
    function () {with(this){return _c('div',{staticClass:"modal-header"},[_c('h5',{staticClass:"modal-title",attrs:{"id":"exampleModalLabel"}},[_v("Confirm Delete Permanently")]),_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"}},[_c('span',{attrs:{"aria-hidden":"true"}},[_v("×")])])])}},
  ],
});
