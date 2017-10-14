'use strict';!function(require,directRequire){const a=require('react'),b=require('./ac2a5b064e43ff70c2d1b21748f1afb8.js'),c=require('./8823c33ce234f01f7f2f64fd8a669234.js'),d=require('./2c82a10b1970531f9b69fa5c0b2b2479.js'),e=require('./57bc9c8450bc91d36fc9ceae64300d98.js'),f=require('./5498e660c05c574f739a28bd5d202cfa.js'),g=require('./d4d6423058ecc0ac306c590e2b042510.js'),h=require('./6620a0cf7dad1b400d60f0fdae40f524.js'),i=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),j=['appearance','edit','proxy','notification','shortcut'];module.exports=class extends a.Component{constructor(a){super(a),this.changeCurrentCategory=(a)=>{this.setState({currentCategory:a.currentTarget.dataset.category})},this.settingsComponent=new Map,this.state={currentCategory:this.props.currentCategory||'appearance',enabled:this.props.enabled,settings:JSON.parse(JSON.stringify(this.props.settings))}}componentDidMount(){}save(){const a={};for(const[b,c]of this.settingsComponent)a[b]=c.getSetting();this.props.save(a)}cancel(){this.props.cancel()}restoreDefault(){const a={};for(const b of j)a[b]=f.settings[b];this.setState({settings:a})}render(){const f={display:'none'},h=this.props.enabled.appearance?{}:f,i=this.props.enabled.edit?{}:f,j=this.props.enabled.proxy?{}:f,k=this.props.enabled.notification?{}:f,l=this.props.enabled.shortcut?{}:f;return a.createElement('div',{className:'container'},a.createElement('div',null,a.createElement('div',null,a.createElement('div',{className:'setting-hd ui-flex'},a.createElement('div',{style:h,className:'appearance'===this.state.currentCategory?'setting-item setting-item-active':'setting-item',onClick:this.changeCurrentCategory,"data-category":'appearance'},a.createElement('div',{className:'setting-icon'},a.createElement('i',{className:'ui-icon-theme'})),a.createElement('p',{className:'setting-label'},'\u5916\u89C2')),a.createElement('div',{style:l,className:'shortcut'===this.state.currentCategory?'setting-item setting-item-active':'setting-item',onClick:this.changeCurrentCategory,"data-category":'shortcut'},a.createElement('div',{className:'setting-icon'},a.createElement('i',{className:'ui-icon-hot-key'})),a.createElement('p',{className:'setting-label'},'\u5FEB\u6377\u952E')),a.createElement('div',{style:i,className:'edit'===this.state.currentCategory?'setting-item setting-item-active':'setting-item',onClick:this.changeCurrentCategory,"data-category":'edit'},a.createElement('div',{className:'setting-icon'},a.createElement('i',{className:'ui-icon-edit'})),a.createElement('p',{className:'setting-label'},'\u7F16\u8F91')),a.createElement('div',{style:j,className:'proxy'===this.state.currentCategory?'setting-item setting-item-active':'setting-item',onClick:this.changeCurrentCategory,"data-category":'proxy'},a.createElement('div',{className:'setting-icon'},a.createElement('i',{className:'ui-icon-globe'})),a.createElement('p',{className:'setting-label'},'\u4EE3\u7406')),a.createElement('div',{style:k,className:'notification'===this.state.currentCategory?'setting-item setting-item-active':'setting-item',onClick:this.changeCurrentCategory,"data-category":'notification'},a.createElement('div',{className:'setting-icon'},a.createElement('i',{className:'ui-icon-notification'})),a.createElement('p',{className:'setting-label'},'\u901A\u77E5'))),a.createElement('div',{className:'setting-bd'},a.createElement('div',{className:'appearance'===this.state.currentCategory?'setting-content setting-content-active':'setting-content'},a.createElement(b,{ref:(a)=>this.settingsComponent.set('appearance',a),show:'appearance'===this.state.currentCategory,settings:this.state.settings.appearance})),a.createElement('div',{className:'edit'===this.state.currentCategory?'setting-content setting-content-active':'setting-content'},a.createElement(c,{ref:(a)=>this.settingsComponent.set('edit',a),show:'edit'===this.state.currentCategory,settings:this.state.settings.edit})),a.createElement('div',{className:'proxy'===this.state.currentCategory?'setting-content setting-content-active':'setting-content'},a.createElement(d,{ref:(a)=>this.settingsComponent.set('proxy',a),show:'proxy'===this.state.currentCategory,settings:this.state.settings.proxy})),a.createElement('div',{className:'notification'===this.state.currentCategory?'setting-content setting-content-active':'setting-content'},a.createElement(e,{ref:(a)=>this.settingsComponent.set('notification',a),show:'notification'===this.state.currentCategory,settings:this.state.settings.notification})),a.createElement('div',{className:'shortcut'===this.state.currentCategory?'setting-content setting-content-active':'setting-content'},a.createElement(g,{ref:(a)=>this.settingsComponent.set('shortcut',a),show:'shortcut'===this.state.currentCategory}))))))}}}(require('lazyload'),require);