const popupmessage = Vue.component("popup-message", {
  props: ["job", "deletec", "requeuec", "createc"],
  render: function () {with(this){return (deletec)?_c('div',{staticClass:"alert alert-success popupmessage"},[_v("Job Deleted successfull")]):(requeuec)?_c('div',{staticClass:"alert alert-success popupmessage"},[_v("Job Requeue successfull")]):(createc)?_c('div',{staticClass:"alert alert-success popupmessage"},[_v("Job Created successfull")]):_e()}},
  staticRenderFns: [],
});
