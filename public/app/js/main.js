const app = Vue.component("app", {
  data: () => ({
    jobs: [],
    overview: [],
    refresh: 30,
    showDetail: false,
    pagenumber: 1,
    totalPages: 0,
    showConfirm: false,
    showConfirmMulti: false,
    showConfirmRequeue: false,
    showConfirmRequeueMulti: false,
    showNewJob: false,
    jobData: {},
    deletec: false,
    requeuec: false,
    pagesize: 50,
    sendClean: false,
    createc: false,
    property: "",
    search: "",
    object: "",
    newLimit: null,
    skip: 0,
    name: "",
    state: "",
    nameprop: "",
    loading: false,
    hideSlide: true,
  }),
  methods: {
    openNav() {
      document.getElementById("mySidebar").style.width = "100%";
      document.getElementById("main").style.marginLeft = "100%";
      this.hideSlide = false;
    },
    closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      this.hideSlide = true;
    },
    showJobDetail(data) {
      this.jobData = data;
      this.showDetail = true;
    },
    readyClean() {
      this.sendClean = true;
    },
    confirmDelete(data) {
      this.jobData = data;
      this.showConfirm = true;
    },
    confirmDeleteMulti(data) {
      this.jobData = data;
      this.showConfirmMulti = true;
    },
    confirmRequeue(data) {
      this.jobData = data;
      this.showConfirmRequeue = true;
    },
    confirmRequeueMulti(data) {
      this.jobData = data;
      this.showConfirmRequeueMulti = true;
    },
    newJob(data) {
      this.jobData = data;
      this.showNewJob = true;
    },
    searchForm(name, search, property, limit, skip, refresh, state, object) {
      this.pagesize = limit ? limit : this.pagesize
        this.name = name
        this.search = search
        this.property = property
        this.skip = skip
        this.refresh = refresh
        this.state = state
        this.object = object ? object : this.object

        // Form changed, reset the pagination state
        this.pagenumber = 1
        this.totalPages = 1

        this.fetchData(
          this.name,
          this.search,
          this.property,
          this.pagesize,
          this.skip,
          this.refresh,
          this.state,
          this.object
        );
    },
    refreshData() {
      this.fetchData(
        this.name,
        this.search,
        this.property,
        this.pagesize,
        this.skip,
        this.refresh,
        this.state,
        this.object
      );
    },
    pagechange(action) {
      if (action === "next") {
        this.pagenumber++;
      }
      if (action === "prev") {
        this.pagenumber--;
      }
      this.skip = (this.pagenumber - 1) * this.pagesize;
      this.fetchData(
        this.name,
        this.search,
        this.property,
        this.pagesize,
        this.skip,
        this.refresh,
        this.state,
        this.object
      );
    },
    fetchData(
      name = "",
      search = "",
      property = "",
      limit = 50,
      skip = 0,
      refresh = 30,
      state = "",
      object
    ) {
      this.loading = true;
      this.pagesize = this.pagesize === 0 ? parseInt(limit) : this.pagesize;
      this.refresh = parseFloat(refresh);
      const url = `api?limit=${limit}&job=${name}&skip=${skip}&property=${property}${
        object ? "&isObjectId=true" : ""
      }${state ? `&state=${state}` : ""}&q=${search}`;
      return axios
        .get(url)
        .then((result) => result.data)
        .then(
          (data) => {
            this.jobs = data.jobs;
            this.search = search;
            this.property = property;
            this.object = object;
            this.overview = data.overview;
            this.loading = false;
            this.totalPages = data.totalPages;
          },
          () => {
            this.loading = false;
            this.jobs = [];
          }
        )
        .catch(console.log);
    },

    popupmessage(data) {
      if (data === "delete") {
        this.deletec = true;
        setTimeout(() => {
          this.deletec = false;
        }, 2000);
      }
      if (data === "multidelete") {
        this.deletec = true;
        setTimeout(() => {
          this.deletec = false;
        }, 2000);
      }
      if (data === "requeue") {
        this.requeuec = true;
        setTimeout(() => {
          this.requeuec = false;
        }, 2000);
      }
      if (data === "multirequeue") {
        this.requeuec = true;
        setTimeout(() => {
          this.requeuec = false;
        }, 2000);
      }
      if (data === "create") {
        this.createc = true;
        setTimeout(() => {
          this.createc = false;
        }, 2000);
      }
    },
  },
  created() {
    return this.fetchData();
  },
  render: function () {with(this){return _c('div',{staticClass:"container-fluid"},[_c('div',{},[_c('div',{staticClass:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},[_c('div',{staticClass:"d-flex"},[_m(0),_c('div',{staticClass:"d-md-none w-50"},[_c('div',{staticClass:"sidebar-collapse",attrs:{"id":"mySidebar"},on:{"click":function($event){return closeNav()}}},[_c('a',{staticClass:"closebtn",attrs:{"href":"javascript:void(0)"},on:{"click":function($event){return closeNav()}}},[_v("×")]),(hideSlide === false)?_c('div',{staticClass:"bg-light overflow-auto"},[_c('sidebar',{attrs:{"overview":overview,"pagesize":pagesize,"loading":loading},on:{"search-sidebar":searchForm,"new-job":newJob}})],1):_e()]),_c('div',{staticClass:"slidebar-container-button",attrs:{"id":"main"}},[_c('button',{staticClass:"openbtn",on:{"click":function($event){return openNav()}}},[_v("☰")])])])])])]),_c('div',{staticClass:"row pt-5"},[(hideSlide === true)?_c('div',{staticClass:"col-md-2 d-none d-md-block bg-light overflow-auto"},[_c('sidebar',{attrs:{"overview":overview,"pagesize":pagesize,"loading":loading},on:{"search-sidebar":searchForm,"new-job":newJob}})],1):_e(),_c('main',{staticClass:"col-md-10 ml-sm-auto col-lg-10 px-4 pt-3 pb-5",attrs:{"role":"main"}},[_c('div',{staticClass:"col-12"},[_c('topbar',{attrs:{"name":name,"state":state,"search":search,"property":property},on:{"search-form":searchForm}})],1),_c('div',{staticClass:"col-12"},[_c('job-list',{attrs:{"pagesize":pagesize,"pagenumber":pagenumber,"totalPages":totalPages,"skip":skip,"jobs":jobs,"sendClean":sendClean,"loading":loading},on:{"confirm-delete":confirmDelete,"confirm-multi-delete":confirmDeleteMulti,"confirm-requeue":confirmRequeue,"confirm-multi-requeue":confirmRequeueMulti,"show-job-detail":showJobDetail,"pagechange":pagechange}})],1)])]),_m(1),(showDetail)?_c('job-detail',{attrs:{"job":jobData}}):_e(),(showConfirm)?_c('confirm-delete',{attrs:{"job":jobData},on:{"popup-message":function($event){return popupmessage('delete')},"refresh-data":refreshData}}):_e(),(showConfirmMulti)?_c('confirm-multi-delete',{attrs:{"jobs":jobData},on:{"ready-clean":readyClean,"popup-message":function($event){return popupmessage('multidelete')},"refresh-data":refreshData}}):_e(),(showConfirmRequeue)?_c('confirm-requeue',{attrs:{"job":jobData},on:{"popup-message":function($event){return popupmessage('requeue')},"refresh-data":refreshData}}):_e(),(showConfirmRequeueMulti)?_c('confirm-multi-requeue',{attrs:{"jobs":jobData},on:{"ready-clean":readyClean,"popup-message":function($event){return popupmessage('multirequeue')},"refresh-data":refreshData}}):_e(),_c('popup-message',{attrs:{"deletec":deletec,"requeuec":requeuec,"createc":createc}}),(showNewJob)?_c('new-job',{on:{"popup-message":function($event){return popupmessage('create')},"refresh-data":fetchData}}):_e()],1)}},
  staticRenderFns: [
    function () {with(this){return _c('div',[_c('a',{staticClass:"navbar-brand col-sm-10 col-md-10 mr-0 tittle"},[_v(" Agendash")])])}},
    function () {with(this){return _c('div',{staticClass:"row bg-dark py-3"},[_c('div',{staticClass:"col-6 m-auto text-light text-center"},[_c('small',[_v("UI written by "),_c('a',{staticClass:"text-light",attrs:{"href":"https://www.softwareontheroad.com/about","target":"_BLANK"}},[_v("Sam Quinn")]),_v(". Backend by Agenda team.")])])])}},
  ],
});
