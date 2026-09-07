const sidebar = Vue.component("sidebar", {
  props: ["overview", "pagesize", "loading"],
  computed: {
    sortedArray() {
      function compare(a, b) {
        let displayNameA = a.displayName.toLowerCase();
        let displayNameB = b.displayName.toLowerCase();
        if (displayNameA === "all jobs" || displayNameB === "all jobs") return;
        if (displayNameA < displayNameB) return -1;
        if (displayNameA > displayNameB) return 1;
        return 0;
      }

      return this.overview.sort(compare);
    },
  },
  methods: {
    flexgrow(number) {
      return Math.log2(1 + number);
    },
    searchSpecificJob(job, type) {
      if (job === "All Jobs") {
        if (type) {
          this.$emit(
            "search-sidebar",
            "",
            "",
            "",
            this.pagesize,
            "",
            "",
            type,
            ""
          );
        } else {
          this.$emit(
            "search-sidebar",
            "",
            "",
            "",
            this.pagesize,
            "",
            "",
            "",
            ""
          );
        }
      } else if (type) {
        this.$emit(
          "search-sidebar",
          job,
          "",
          "",
          this.pagesize,
          "",
          "",
          type,
          ""
        );
      } else {
        this.$emit("search-sidebar", job, "", "", this.pagesize, "", "", "");
      }
    },
  },
  render: function () {with(this){return _c('div',{staticClass:"col sidebar"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col"},[_c('button',{staticClass:"btn btn-block btn-outline-success",attrs:{"data-toggle":"modal","data-target":"#modalNewJob","data-placement":"top","title":"Add a new job"},on:{"click":function($event){return $emit('new-job')}}},[_c('i',{staticClass:"oi oi-plus IcoInButton"}),_v(" New Job")])])]),_c('div',{staticClass:"row p-0"},[(loading)?_c('div',{staticClass:"col-12 my-5 ml-auto text-center"},[_m(0)]):_c('div',{staticClass:"col"},_l((sortedArray),function(type){return _c('div',{staticClass:"row rows-ow"},[_c('div',{staticClass:"col-12 d-flex mt-4 mybtn",on:{"click":function($event){return searchSpecificJob(type.displayName,'')}}},[_c('div',{staticClass:"mr-auto"},[_v(_s(type.displayName))]),_c('div',{staticClass:"text-rigth pill-big-own bg-secondary right"},[_v(_s(type.total))])]),_c('div',{staticClass:"col-12 p-1"},[_c('div',{staticClass:"progress"},[_c('div',{staticClass:"progress-bar progress-bar-striped progress-bar-info bg-info",style:({'flex-grow': flexgrow(type.scheduled)}),attrs:{"role":"progressbar"}}),_c('div',{staticClass:"progress-bar progress-bar-striped progress-bar-primary bg-primary",style:({'flex-grow': flexgrow(type.queued)}),attrs:{"role":"progressbar"}}),_c('div',{staticClass:"progress-bar progress-bar-striped progress-bar-warning bg-warning",style:({'flex-grow': flexgrow(type.running)}),attrs:{"role":"progressbar"}}),_c('div',{staticClass:"progress-bar progress-bar-striped progress-bar-success bg-success",style:({'flex-grow': flexgrow(type.completed)}),attrs:{"role":"progressbar"}}),_c('div',{staticClass:"progress-bar progress-bar-striped progress-bar-danger bg-danger",style:({'flex-grow': flexgrow(type.failed)}),attrs:{"role":"progressbar"}})])]),_c('div',{staticClass:"col-12 d-flex px-3 mb-2 mybtn",on:{"click":function($event){return searchSpecificJob(type.displayName,'scheduled')}}},[_c('div',{staticClass:"mr-auto"},[_v("Scheduled: ")]),_c('div',{staticClass:"text-rigth"},[_v(_s(type.scheduled))])]),_c('div',{staticClass:"col-12 d-flex px-3 mb-2 text-primary mybtn",on:{"click":function($event){return searchSpecificJob(type.displayName,'queued')}}},[_c('div',{staticClass:"mr-auto"},[_v("Queued: ")]),_c('div',{staticClass:"text-rigth"},[_v(_s(type.queued))])]),_c('div',{staticClass:"col-12 d-flex px-3 mb-2 text-warning mybtn",on:{"click":function($event){return searchSpecificJob(type.displayName,'running')}}},[_c('div',{staticClass:"mr-auto"},[_v("Running: ")]),_c('div',{staticClass:"text-rigth"},[_v(_s(type.running))])]),_c('div',{staticClass:"col-12 d-flex px-3 mb-2 text-success mybtn",on:{"click":function($event){return searchSpecificJob(type.displayName,'completed')}}},[_c('div',{staticClass:"mr-auto"},[_v("Completed: ")]),_c('div',{staticClass:"text-rigth"},[_v(_s(type.completed))])]),_c('div',{staticClass:"col-12 d-flex px-3 mb-2 text-danger mybtn",on:{"click":function($event){return searchSpecificJob(type.displayName,'failed')}}},[_c('div',{staticClass:"mr-auto"},[_v("Failed: ")]),_c('div',{staticClass:"text-rigth"},[_v(_s(type.failed))])]),_c('div',{staticClass:"col-12 d-flex px-3 mb-2 text-info mybtn",on:{"click":function($event){return searchSpecificJob(type.displayName,'repeating')}}},[_c('div',{staticClass:"mr-auto"},[_v("Repeating: ")]),_c('div',{staticClass:"text-rigth"},[_v(_s(type.repeating))])])])}),0)])])}},
  staticRenderFns: [
    function () {with(this){return _c('div',{staticClass:"text-center my-5 py-5"},[_c('div',{staticClass:"spinner-border",attrs:{"role":"status"}}),_c('div',[_c('span',{},[_v("Loading Jobs...")])])])}},
  ],
});
