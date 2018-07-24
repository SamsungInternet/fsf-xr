AFRAME.registerComponent('change-color', {
  schema:{
    color1: {type:'color', default:'#FFC800'},
    color2: {type:'color', default:'#0096FF'},
    steps: {type:'int', default:'0'}

  },
  init:function(){
    console.log('');
  },
  update:function(){
    let par_R = parseInt('0x'+ this.data.color1.substring(1,3));
    let par_G = parseInt('0x'+ this.data.color1.substring(3,5));
    let par_B = parseInt('0x'+ this.data.color1.substring(5,7));
    console.log('color changed to ' + this.data.color1);
    this.object3D.children[0].material.color = new THREE.Vector3(par_R, par_G, par_B);
    console.log('color changed to ' + this.data.color1);
  }
});