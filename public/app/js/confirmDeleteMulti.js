const confirmDeleteMulti = Vue.component("confirm-multi-delete", {
  props: ["jobs"],
  methods: {
    deleteMulti(ids) {
      const url = `api/jobs/delete`;
      let body = { jobIds: ids };
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
  render: function () {with(this){return _c('div',{staticClass:"modal fade",attrs:{"id":"modalDeleteSureMulti","tabindex":"-1","role":"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[_c('h1',[_v("MULTI")]),_c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content"},[_m(0),_c('div',{staticClass:"modal-body"},_l((jobs),function(job){return _c('div',{staticClass:"row px-3"},[_c('div',{staticClass:"col"},[_c('p',[_v("Job Id: "+_s(job))])])])}),0),_c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn btn-danger",attrs:{"type":"button","data-dismiss":"modal"},on:{"click":function($event){return deleteMulti(jobs)}}},[_v("Delete")]),_c('button',{staticClass:"btn btn-secondary",attrs:{"type":"button","data-dismiss":"modal"}},[_v("Cancel")])])])])])}},
  staticRenderFns: [
    function () {with(this){return _c('div',{staticClass:"modal-header"},[_c('h5',{staticClass:"modal-title",attrs:{"id":"exampleModalLabel"}},[_v("Confirm Delete Permanently")]),_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"}},[_c('span',{attrs:{"aria-hidden":"true"}},[_v("×")])])])}},
  ],
});
