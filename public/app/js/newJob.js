const newJob = Vue.component("new-job", {
  data: () => ({
    jobDataParseError: "",
    jobName: "",
    jobSchedule: "",
    jobRepeatEvery: "",
    jobData: `{ "name": "Your medatada goes here..." }`,
  }),
  props: ["job"],
  methods: {
    clear() {
      (this.jobDataParseError = ""),
        (this.jobName = ""),
        (this.jobSchedule = ""),
        (this.jobRepeatEvery = ""),
        (this.jobData = `{ "name": "Your medatada goes here..." }`);
    },
    create() {
      const url = `api/jobs/create`;

      let jobData = "";
      try {
        jobData = JSON.parse(this.jobData);
      } catch (err) {
        this.jobDataParseError = err.message;
        return;
      }

      let body = {
        jobName: this.jobName,
        jobSchedule: this.jobSchedule,
        jobRepeatEvery: this.jobRepeatEvery,
        jobData: jobData,
      };
      return axios
        .post(url, body)
        .then((result) => result.data)
        .then((data) => {
          this.$emit("popup-message");
          this.$emit("refresh-data");
          this.$refs.Close.click();
          this.clear();
        })
        .catch(console.log);
    },
  },
  render: function () {with(this){return _c('div',{staticClass:"modal fade",attrs:{"id":"modalNewJob","tabindex":"-1","role":"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content"},[_m(0),_c('div',{staticClass:"modal-body"},[_c('form',[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"jobname"}},[_v("Job Name")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(jobName),expression:"jobName"}],staticClass:"form-control",attrs:{"type":"text","id":"jobname","aria-describedby":"jobname"},domProps:{"value":(jobName)},on:{"input":function($event){if($event.target.composing)return;jobName=$event.target.value}}})]),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"jobSchedule"}},[_v("Job Schedule")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(jobSchedule),expression:"jobSchedule"}],staticClass:"form-control",attrs:{"type":"text","id":"jobSchedule","aria-describedby":"jobSchedule"},domProps:{"value":(jobSchedule)},on:{"input":function($event){if($event.target.composing)return;jobSchedule=$event.target.value}}}),_c('small',{staticClass:"form-text text-muted",attrs:{"id":"jobSchedule"}},[_v("Number/Every Unit i.e: \"1 seconds\" or \"3 days\" (check npmjs.com/human-interval)")])]),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"jobRepeatEvery"}},[_v("Job Repeat Every")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(jobRepeatEvery),expression:"jobRepeatEvery"}],staticClass:"form-control",attrs:{"type":"text","id":"jobRepeatEvery","aria-describedby":"jobRepeatEvery"},domProps:{"value":(jobRepeatEvery)},on:{"input":function($event){if($event.target.composing)return;jobRepeatEvery=$event.target.value}}}),_c('small',{staticClass:"form-text text-muted",attrs:{"id":"jobRepeatEvery"}},[_v("Number/Every Unit i.e: \"1 month\" or \"3 hours\"")])]),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"jobData"}},[_v("Job Metadata")]),_c('prism-editor',{staticClass:"json-editor",attrs:{"lineNumbers":true,"language":"json"},model:{value:(jobData),callback:function ($v) {jobData=$v},expression:"jobData"}}),_c('small',{staticClass:"form-text text-muted"},[_v(_s(jobDataParseError))])],1)])]),_c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn btn-info",attrs:{"type":"button"},on:{"click":function($event){return create()}}},[_v("Create Job")]),_c('button',{staticClass:"btn btn-secondary",attrs:{"type":"button","data-dismiss":"modal"}},[_v("Cancel")])])])])])}},
  staticRenderFns: [
    function () {with(this){return _c('div',{staticClass:"modal-header"},[_c('h5',{staticClass:"modal-title",attrs:{"id":"exampleModalLabel"}},[_v("Create Job")]),_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"}},[_c('span',{attrs:{"aria-hidden":"true"}},[_v("×")])])])}},
  ],
});
