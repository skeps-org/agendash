const topbar = Vue.component("topbar", {
  props: ["name", "state", "search", "property"],
  data: () => ({
    // search: '',
    // property: 'data.id',
    // name: '',
    limit: 50,
    skip: 0,
    refresh: 30,
    // state: '',
    object: false,
    stateobject: [
      { text: "All", value: "", class: "" },
      { text: "Scheduled", value: "scheduled", class: "" },
      { text: "Queued", value: "queued", class: "text-primary" },
      { text: "Running", value: "running", class: "text-warning" },
      { text: "Completed", value: "completed", class: "text-success" },
      { text: "Failed", value: "failed", class: "text-danger" },
      { text: "Repeating", value: "repeating", class: "text-info" },
    ],
  }),
  methods: {
    submit() {
      this.$emit(
        "search-form",
        this.name,
        this.search,
        this.property,
        this.limit,
        this.skip,
        this.refresh,
        this.state,
        this.object
      );
    },
  },
  render: function () {with(this){return _c('form',{on:{"submit":function($event){$event.preventDefault();return submit.apply(null, arguments)}}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-xs-12 col-md-6"},[_c('div',{staticClass:"input-group mt-2 mb-2"},[_m(0),_c('input',{directives:[{name:"model",rawName:"v-model",value:(name),expression:"name"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"job name"},domProps:{"value":(name)},on:{"input":function($event){if($event.target.composing)return;name=$event.target.value}}})]),_c('div',{staticClass:"input-group mt-2 mb-2"},[_m(1),_c('input',{directives:[{name:"model",rawName:"v-model",value:(property),expression:"property"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"data.color"},domProps:{"value":(property)},on:{"input":function($event){if($event.target.composing)return;property=$event.target.value}}})]),_c('div',{staticClass:"input-group mt-2 mb-2"},[_m(2),_c('input',{directives:[{name:"model",rawName:"v-model",value:(search),expression:"search"}],staticClass:"form-control",attrs:{"placeholder":"green"},domProps:{"value":(search)},on:{"input":function($event){if($event.target.composing)return;search=$event.target.value}}}),_c('div',{staticClass:"form-check mx-2 pt-2"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(object),expression:"object"}],staticClass:"form-check-input",attrs:{"type":"checkbox","id":"isObjectId"},domProps:{"checked":Array.isArray(object)?_i(object,null)>-1:(object)},on:{"change":function($event){var $a=object,$el=$event.target,$c=$el.checked?(true):(false);if(Array.isArray($a)){var $v=null,$i=_i($a,$v);if($el.checked){$i<0&&(object=$a.concat([$v]))}else{$i>-1&&(object=$a.slice(0,$i).concat($a.slice($i+1)))}}else{object=$c}}}}),_c('label',{staticClass:"form-check-label",attrs:{"for":"isObjectId"}},[_v(" Is ObjectId?")])])])]),_c('div',{staticClass:"col-xs-12 col-md-6"},[_c('div',{staticClass:"input-group mt-2 mb-2"},[_m(3),_c('input',{directives:[{name:"model",rawName:"v-model",value:(refresh),expression:"refresh"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(refresh)},on:{"input":function($event){if($event.target.composing)return;refresh=$event.target.value}}})]),_c('div',{staticClass:"input-group mt-2 mb-2"},[_m(4),_c('input',{directives:[{name:"model",rawName:"v-model",value:(limit),expression:"limit"}],staticClass:"form-control",attrs:{"type":"number"},domProps:{"value":(limit)},on:{"input":function($event){if($event.target.composing)return;limit=$event.target.value}}})]),_c('div',{staticClass:"input-group mt-2 mb-2"},[_m(5),_c('select',{directives:[{name:"model",rawName:"v-model",value:(state),expression:"state"}],staticClass:"form-control",attrs:{"id":"selectStateInput"},on:{"change":function($event){var $selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); state=$event.target.multiple ? $selectedVal : $selectedVal[0]}}},_l((stateobject),function(option){return _c('option',{class:option.class,domProps:{"value":option.value}},[_v(_s(option.text))])}),0)])])]),_c('div',{staticClass:"row mb-3"},[_c('div',{staticClass:"col-xs-12 col-md-3 ml-auto text-right"},[_c('button',{staticClass:"d-none d-md-inline-block btn btn-success",attrs:{"type":"submit"},on:{"click":function($event){return $emit('search-form', name, search, property, limit, skip, refresh, state, object)}}},[_v(" Apply ")]),_c('button',{staticClass:"d-none d-inline-block d-md-none btn btn-block btn-success",attrs:{"type":"submit"},on:{"click":function($event){return $emit('search-form', name, search, property, limit, skip, refresh, state, object)}}},[_v(" Apply ")])])])])}},
  staticRenderFns: [
    function () {with(this){return _c('div',{staticClass:"input-group-prepend"},[_c('span',{staticClass:"input-group-text"},[_v(" Name ")])])}},
    function () {with(this){return _c('div',{staticClass:"input-group-prepend"},[_c('span',{staticClass:"input-group-text"},[_v(" Property ")])])}},
    function () {with(this){return _c('div',{staticClass:"input-group-prepend"},[_c('span',{staticClass:"input-group-text"},[_v(" Value ")])])}},
    function () {with(this){return _c('div',{staticClass:"input-group-prepend"},[_c('span',{staticClass:"input-group-text"},[_v(" Refresh Interval ")])])}},
    function () {with(this){return _c('div',{staticClass:"input-group-prepend"},[_c('span',{staticClass:"input-group-text"},[_v(" Page Size ")])])}},
    function () {with(this){return _c('div',{staticClass:"input-group-prepend"},[_c('span',{staticClass:"input-group-text"},[_v(" State ")])])}},
  ],
});
