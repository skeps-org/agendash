const jobList = Vue.component("job-list", {
  data: () => ({
    multijobs: [],
    currentSort: "name",
    currentSortDir: "asc",
  }),
  props: ["jobs", "pagesize", "pagenumber", "sendClean", "loading"],
  computed: {
    sortedJobs: function () {
      return this.jobs.sort((a, b) => {
        let displayA, displayB;
        if (this.currentSort === "name") {
          displayA = a.job[this.currentSort]
            ? a.job[this.currentSort].toLowerCase()
            : "";
          displayB = a.job[this.currentSort]
            ? b.job[this.currentSort].toLowerCase()
            : "";
        } else {
          displayA = moment(a.job[this.currentSort]);
          displayB = moment(b.job[this.currentSort]);
        }
        let modifier = 1;
        if (this.currentSortDir === "desc") modifier = -1;
        if (displayA < displayB) return -1 * modifier;
        if (displayA > displayB) return 1 * modifier;
        return 0;
      });
    },
  },
  watch: {
    jobs() {
      // reset multijobs when jobs have changed
      this.multijobs = [];
    },
  },
  methods: {
    sort(s) {
      //if s == current sort, reverse
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
    },
    sendQueued() {
      this.$emit("confirm-multi-requeue", this.multijobs);
      // this.multijobs = []
    },
    sendDelete() {
      this.$emit("confirm-multi-delete", this.multijobs);
      // this.multijobs = []
    },
    cleanMulti() {
      return console.log("received Clean Multi");
    },
    formatTitle(date) {
      if (!date) return;
      return moment(date).format();
    },
    formatDate(date) {
      if (!date) return;
      return moment(date).fromNow();
    },
    checkAllCheckboxes() {
      const checkboxes = document.querySelectorAll(".checkbox-triggerable");
      for (const checkbox of checkboxes) {
        checkbox.click();
      }
    },
    toggleList(job) {
      if (this.multijobs.includes(job.job._id)) {
        this.multijobs.splice(this.multijobs.indexOf(job.job._id), 1);
      } else {
        this.multijobs.push(job.job._id);
      }
    },
  },
  render: function () {with(this){return _c('div',{on:{"sendClean":cleanMulti}},[_c('div',[_c('div',{staticClass:"d-flex justify-content-end mb-2"},[_c('span',{staticClass:"mr-2"},[_v(_s(multijobs.length)+" jobs selected")]),_c('button',{staticClass:"btn btn-primary mr-2",attrs:{"disabled":!multijobs.length,"data-toggle":"modal","data-target":"#modalRequeueSureMulti","data-placement":"top","title":"Requeue list of selecteds Jobs"},on:{"click":sendQueued}},[_v(" Multiple Requeue ")]),_c('button',{staticClass:"btn btn-danger",attrs:{"disabled":!multijobs.length,"data-toggle":"modal","data-target":"#modalDeleteSureMulti","data-placement":"top","title":"Delete list of selecteds Jobs"},on:{"click":sendDelete}},[_v(" Multiple Delete ")])])]),_c('table',{staticClass:"table table-striped d-none d-xl-table"},[_c('thead',{staticClass:"thead-dark"},[_c('tr',[_c('th',{attrs:{"scope":"col"},on:{"click":function($event){return checkAllCheckboxes()}}},[_v(" Multi ")]),_c('th',{attrs:{"scope":"col"},on:{"click":function($event){return sort('status')}}},[_v(" Status ")]),_c('th',{attrs:{"scope":"col"},on:{"click":function($event){return sort('name')}}},[_v(" Name "),(currentSort === 'name' && currentSortDir === 'asc')?_c('i',{staticClass:"material-icons sortable",attrs:{"title":"Sort Z to A"}},[_v("arrow_drop_down")]):(currentSort === 'name' && currentSortDir === 'desc')?_c('i',{staticClass:"material-icons sortable",attrs:{"title":"Sort A to Z"}},[_v("arrow_drop_up")]):_c('i',{staticClass:"material-icons sortableinactive",attrs:{"title":"Sort A to Z"}},[_v("arrow_drop_down")])]),_c('th',{attrs:{"scope":"col"},on:{"click":function($event){return sort('lastRunAt')}}},[_v(" Last run started "),(currentSort === 'lastRunAt' && currentSortDir === 'asc')?_c('i',{staticClass:"material-icons sortable",attrs:{"title":"Sort Z to A"}},[_v("arrow_drop_up")]):(currentSort === 'lastRunAt' && currentSortDir === 'desc')?_c('i',{staticClass:"material-icons sortable",attrs:{"title":"Sort A to Z"}},[_v("arrow_drop_down")]):_c('i',{staticClass:"material-icons sortableinactive",attrs:{"title":"Sort A to Z"}},[_v("arrow_drop_down")])]),_c('th',{attrs:{"scope":"col"},on:{"click":function($event){return sort('nextRunAt')}}},[_v(" Next run starts\n                  "),(currentSort === 'nextRunAt' && currentSortDir === 'asc')?_c('i',{staticClass:"material-icons sortable",attrs:{"title":"Sort Z to A"}},[_v("arrow_drop_up")]):(currentSort === 'nextRunAt' && currentSortDir === 'desc')?_c('i',{staticClass:"material-icons sortable",attrs:{"title":"Sort A to Z"}},[_v("arrow_drop_down")]):_c('i',{staticClass:"material-icons sortableinactive",attrs:{"title":"Sort A to Z"}},[_v("arrow_drop_down")])]),_c('th',{attrs:{"scope":"col"},on:{"click":function($event){return sort('lastFinishedAt')}}},[_v(" Last finished\n                  "),(currentSort === 'lastFinishedAt' && currentSortDir === 'asc')?_c('i',{staticClass:"material-icons sortable",attrs:{"title":"Sort Z to A"}},[_v("arrow_drop_up")]):(currentSort === 'lastFinishedAt' && currentSortDir === 'desc')?_c('i',{staticClass:"material-icons sortable",attrs:{"title":"Sort A to Z"}},[_v("arrow_drop_down")]):_c('i',{staticClass:"material-icons sortableinactive",attrs:{"title":"Sort A to Z"}},[_v("arrow_drop_down")])]),_c('th',{attrs:{"scope":"col"}},[_v(" Locked ")]),_c('th',{attrs:{"scope":"col"}},[_v(" Actions ")])])]),(loading)?_c('tbody',[_m(0)]):_c('tbody',_l((sortedJobs),function(job){return _c('tr',[_c('td',{staticClass:"mult-select",attrs:{"width":"10"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(multijobs),expression:"multijobs"}],staticClass:"checkbox-triggerable",attrs:{"id":job.job._id,"type":"checkbox"},domProps:{"value":job.job._id,"checked":Array.isArray(multijobs)?_i(multijobs,job.job._id)>-1:(multijobs)},on:{"change":function($event){var $a=multijobs,$el=$event.target,$c=$el.checked?(true):(false);if(Array.isArray($a)){var $v=job.job._id,$i=_i($a,$v);if($el.checked){$i<0&&(multijobs=$a.concat([$v]))}else{$i>-1&&(multijobs=$a.slice(0,$i).concat($a.slice($i+1)))}}else{multijobs=$c}}}})]),_c('td',{staticClass:"job-name",attrs:{"th":"","scope":"row"}},[(job.repeating)?_c('i',{staticClass:"oi oi-timer pill-own bg-info"},[_c('span',[_v(_s(job.job.repeatInterval))])]):_e(),(job.scheduled)?_c('i',{staticClass:"pill-own bg-info pill-withoutIcon"},[_c('span',[_v("Scheduled")])]):_e(),(job.completed)?_c('i',{staticClass:"pill-own bg-success pill-withoutIcon"},[_c('span',[_v("Completed")])]):_e(),(job.queued)?_c('i',{staticClass:"pill-own bg-primary pill-withoutIcon"},[_c('span',[_v("Queued")])]):_e(),(job.failed)?_c('i',{staticClass:"pill-own bg-danger pill-withoutIcon"},[_c('span',[_v("Failed")])]):_e(),(job.running)?_c('i',{staticClass:"pill-own bg-warning pill-withoutIcon"},[_c('span',[_v("Running")])]):_e()]),_c('td',{staticClass:"job-name",on:{"click":function($event){return toggleList(job)}}},[_v(" "+_s(job.job.name)+" ")]),_c('td',{staticClass:"job-lastRunAt",attrs:{"title":formatTitle(job.job.lastRunAt)},on:{"click":function($event){return toggleList(job)}}},[_v(" "+_s(formatDate(job.job.lastRunAt))+" ")]),_c('td',{staticClass:"job-nextRunAt",attrs:{"title":formatTitle(job.job.nextRunAt)},on:{"click":function($event){return toggleList(job)}}},[_v(" "+_s(formatDate(job.job.nextRunAt))+" ")]),_c('td',{staticClass:"job-finishedAt",attrs:{"title":formatTitle(job.job.lastFinishedAt)},on:{"click":function($event){return toggleList(job)}}},[_v(" "+_s(formatDate(job.job.lastFinishedAt))+" ")]),_c('td',{staticClass:"job-lockedAt",attrs:{"title":formatTitle(job.job.lockedAt)},on:{"click":function($event){return toggleList(job)}}},[_v(" "+_s(formatDate(job.job.lockedAt))+" ")]),_c('td',{staticClass:"job-actions"},[_c('i',{staticClass:"material-icons md-dark md-custom action-btn viewData text-primary",attrs:{"data-toggle":"modal","data-target":"#modalRequeueSure","data-placement":"left","title":"Requeue"},on:{"click":function($event){return $emit('confirm-requeue', job)}}},[_v("update")]),_c('i',{staticClass:"material-icons md-dark md-custom action-btn viewData text-success",attrs:{"data-toggle":"modal","data-target":"#modalData","data-placement":"top","title":"Job Data"},on:{"click":function($event){return $emit('show-job-detail', job)}}},[_v("visibility")]),_c('i',{staticClass:"material-icons md-dark md-custom action-btn viewData text-danger",attrs:{"data-toggle":"modal","data-target":"#modalDeleteSure","data-placement":"top","title":"Delete permanently"},on:{"click":function($event){return $emit('confirm-delete', job)}}},[_v("delete_forever")])])])}),0)]),_c('div',{staticClass:"d-xl-none"},[_c('div',{staticClass:"row"},_l((sortedJobs),function(job){return _c('div',{staticClass:"col col-xs-6 order-1 p-1"},[_c('div',{staticClass:"card bg-light"},[_c('div',{staticClass:"card-header card-responsive-title-container"},[_c('div',{staticClass:"card-responsive-name",on:{"click":function($event){return toggleList(job)}}},[_v("\n                    "+_s(job.job.name)+"\n                  ")]),_c('div',{staticClass:"d-flex align-items-center"},[_c('div',{staticClass:"card-responsive-status-title mr-2",staticStyle:{"font-size":"18px","display":"flex","align-items":"center"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(multijobs),expression:"multijobs"}],staticClass:"card-responsive-checkbox",attrs:{"id":job.job._id,"type":"checkbox"},domProps:{"value":job.job._id,"checked":Array.isArray(multijobs)?_i(multijobs,job.job._id)>-1:(multijobs)},on:{"change":function($event){var $a=multijobs,$el=$event.target,$c=$el.checked?(true):(false);if(Array.isArray($a)){var $v=job.job._id,$i=_i($a,$v);if($el.checked){$i<0&&(multijobs=$a.concat([$v]))}else{$i>-1&&(multijobs=$a.slice(0,$i).concat($a.slice($i+1)))}}else{multijobs=$c}}}})]),_c('i',{staticClass:"material-icons md-dark md-custom action-btn viewData text-primary material-icons-size mr-1",attrs:{"data-toggle":"modal","data-target":"#modalRequeueSure","data-placement":"left","title":"Requeue"},on:{"click":function($event){return $emit('confirm-requeue', job)}}},[_v("update")]),_c('i',{staticClass:"material-icons md-dark md-custom action-btn viewData text-success material-icons-size mr-1",attrs:{"data-toggle":"modal","data-target":"#modalData","data-placement":"top","title":"Job Data"},on:{"click":function($event){return $emit('show-job-detail', job)}}},[_v("visibility")]),_c('i',{staticClass:"material-icons md-dark md-custom action-btn viewData text-danger material-icons-size",attrs:{"data-toggle":"modal","data-target":"#modalDeleteSure","data-placement":"top","title":"Delete permanently"},on:{"click":function($event){return $emit('confirm-delete', job)}}},[_v("delete_forever")])])]),_c('div',{staticClass:"card-body"},[_c('div',{staticClass:"d-flex justify-content-center mb-2"},[(job.repeating)?_c('i',{staticClass:"oi oi-timer pill-own mr-2 bg-info pill-own-card"},[_c('span',{staticClass:"pill-own-card-info"},[_v(_s(job.job.repeatInterval))])]):_e(),(job.scheduled)?_c('i',{staticClass:"pill-own mr-2 bg-info pill-withoutIcon pill-own-card"},[_c('span',{staticClass:"pill-own-card-info"},[_v("Scheduled")])]):_e(),(job.completed)?_c('i',{staticClass:"pill-own mr-2 bg-success pill-withoutIcon pill-own-card"},[_c('span',{staticClass:"pill-own-card-info"},[_v("Completed")])]):_e(),(job.queued)?_c('i',{staticClass:"pill-own mr-2 bg-primary pill-withoutIcon pill-own-card"},[_c('span',{staticClass:"pill-own-card-info"},[_v("Queued")])]):_e(),(job.failed)?_c('i',{staticClass:"pill-own mr-2 bg-danger pill-withoutIcon pill-own-card"},[_c('span',{staticClass:"pill-own-card-info"},[_v("Failed")])]):_e(),(job.running)?_c('i',{staticClass:"pill-own mr-2 bg-warning pill-withoutIcon pill-own-card"},[_c('span',{staticClass:"pill-own-card-info"},[_v("Running")])]):_e()]),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col col-md-6 text-center"},[_c('div',{staticClass:"card-responsive-status-title"},[_v("\n                        Last run started\n                      ")]),_c('div',{staticClass:"mb-3",attrs:{"title":formatTitle(job.job.lastRunAt)}},[_v("\n                        "+_s(formatDate(job.job.lastRunAt))+"\n                      ")]),_c('div',{staticClass:"card-responsive-status-title"},[_v("\n                        Last finished\n                      ")]),_c('div',{attrs:{"title":formatTitle(job.job.lastFinishedAt)}},[_v("\n                        "+_s(formatDate(job.job.lastFinishedAt))+"\n                      ")])]),_c('div',{staticClass:"col col-md-6 text-center"},[_c('div',{staticClass:"card-responsive-status-title"},[_v("\n                        Next run starts\n                      ")]),_c('div',{staticClass:"mb-3",attrs:{"title":formatTitle(job.job.nextRunAt)}},[_v("\n                        "+_s(formatDate(job.job.nextRunAt))+"\n                      ")]),_c('div',{staticClass:"card-responsive-status-title"},[_v("\n                        Locked\n                      ")]),_c('div',{attrs:{"title":formatTitle(job.job.lockedAt)}},[_v("\n                        "+_s(formatDate(job.job.lockedAt) || "-")+"\n                      ")])])]),_c('div')])])])}),0)]),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col d-flex justify-content-center"},[_c('nav',{attrs:{"aria-label":"Page navigation example"}},[_c('ul',{staticClass:"pagination"},[_c('li',{staticClass:"page-item",class:pagenumber === 1 ? 'disabled': ''},[_c('a',{staticClass:"page-link",on:{"click":function($event){return $emit('pagechange', 'prev')}}},[_v("Previous")])]),_c('li',{staticClass:"page-item"},[_c('a',{staticClass:"page-link",staticStyle:{"cursor":"pointer"},on:{"click":function($event){return $emit('pagechange', 'next')}}},[_v("Next")])])])])])])])}},
  staticRenderFns: [
    function () {with(this){return _c('tr',[_c('td',{attrs:{"colspan":"10","scope":"row"}},[_c('div',{staticClass:"col-12 my-5 ml-auto text-center"},[_c('div',{staticClass:"text-center my-5 py-5"},[_c('div',{staticClass:"spinner-border",attrs:{"role":"status"}}),_c('div',[_c('span',{},[_v("Loading Jobs...")])])])])])])}},
  ],
});
