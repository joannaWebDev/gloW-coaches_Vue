(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6decf1d3"],{"466a":function(e,t,a){},"76a5":function(e,t,a){"use strict";a("466a")},a980:function(e,t,a){"use strict";a.r(t);var s=a("7a23"),i=Object(s["L"])("data-v-2587237c");Object(s["v"])("data-v-2587237c");var c={class:"form-control"},o=Object(s["i"])("label",{for:"email"},"Your E-Mail",-1),r={class:"form-control"},n=Object(s["i"])("label",{for:"message"},"Message",-1),l={key:0,class:"errors"},m={class:"actions"},u=Object(s["h"])("Send Message");Object(s["t"])();var d=i((function(e,t,a,d,b,f){var j=Object(s["A"])("base-button");return Object(s["s"])(),Object(s["f"])("form",{onSubmit:t[3]||(t[3]=Object(s["K"])((function(){return f.submitForm&&f.submitForm.apply(f,arguments)}),["prevent"]))},[Object(s["i"])("div",c,[o,Object(s["J"])(Object(s["i"])("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return b.email=e})},null,512),[[s["G"],b.email,void 0,{trim:!0}]])]),Object(s["i"])("div",r,[n,Object(s["J"])(Object(s["i"])("textarea",{rows:"5",id:"message","onUpdate:modelValue":t[2]||(t[2]=function(e){return b.message=e})},null,512),[[s["G"],b.message,void 0,{trim:!0}]])]),b.formIsValid?Object(s["g"])("",!0):(Object(s["s"])(),Object(s["f"])("p",l,"Please enter a valid email and non-empty message.")),Object(s["i"])("div",m,[Object(s["i"])(j,null,{default:i((function(){return[u]})),_:1})])],32)})),b=(a("caad"),a("2532"),a("ac1f"),a("5319"),{data:function(){return{email:"",message:"",formIsValid:!0}},methods:{submitForm:function(){this.formIsValid=!0,""!==this.email&&this.email.includes("@")&&""!==this.message?(this.$store.dispatch("requests/contactCoach",{email:this.email,message:this.message,coachId:this.$route.params.id}),this.$router.replace("/coaches")):this.formIsValid=!1}}});a("76a5");b.render=d,b.__scopeId="data-v-2587237c";t["default"]=b}}]);
//# sourceMappingURL=chunk-6decf1d3.879a944a.js.map