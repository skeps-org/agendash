const jobDetail = Vue.component("job-detail", {
  props: ["job"],
  filters: {
    formatJSON(jsonstr) {
      return JSON.stringify(jsonstr, null, 2);
    },
  },
  methods: {
    formatDate(date) {
      return moment(date).format("DD-MM-YYYY HH:mm:ss");
    },
  },
  render: function () {with(this){return _c('div',{staticClass:"modal fade",attrs:{"id":"modalData","tabindex":"-1","role":"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content"},[_c('div',{staticClass:"modal-header"},[_c('h5',{staticClass:"modal-title",attrs:{"id":"exampleModalLabel"}},[_v("Job Data - "+_s(job.job.name))]),_m(0)]),_c('div',{staticClass:"modal-body"},[_c('div',{staticClass:"row my-3"},[_c('div',{staticClass:"col"},[_c('p',[_c('strong',[_v("Next run starts: ")]),_v(_s(formatDate(job.job.nextRunAt)))]),_c('p',[_c('strong',[_v("Last run started: ")]),_v(_s(formatDate(job.job.lastRunAt)))])])]),_m(1),_c('prism-editor',{staticClass:"json-editor",attrs:{"lineNumbers":true,"readonly":true,"code":_f("formatJSON")(job.job.data),"language":"json"}}),(job.failed)?_c('div',{staticClass:"row mt-3"},[_c('div',{staticClass:"col pt-3 bg-danger text-light"},[_c('p',[_c('strong',[_v("Fail Count:")]),_v(" "+_s(job.job.failCount))]),_c('p',[_c('strong',[_v("Failed At:")]),_v(" "+_s(formatDate(job.job.failedAt)))]),_c('p',[_c('strong',[_v("Reason:")]),_v(" "+_s(job.job.failReason))])])]):_e()],1),_m(2)])])])}},
  staticRenderFns: [
    function () {with(this){return _c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"}},[_c('span',{attrs:{"aria-hidden":"true"}},[_v("×")])])}},
    function () {with(this){return _c('p',[_c('strong',[_v("Metadata: ")])])}},
    function () {with(this){return _c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn btn-secondary",attrs:{"type":"button","data-dismiss":"modal"}},[_v("Close")])])}},
  ],
});
