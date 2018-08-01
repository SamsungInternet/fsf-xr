/* entity-generator aframe component by diekus */

AFRAME.registerComponent('entity-generator', {
    schema: {
        entity_name:{type: 'string', default: 'a-entity'}, 
        attributes:{type:'string', default:''}, 
        number_items:{type:'int', default:2},
    },
    init: function(){
        for (i = 0; i < this.data.number_items; i++){
            let ne = document.createElement(this.data.entity_name);
            atts = this.data.attributes.split('$');
            for(a = 0; a < atts.length; a++){
                att = atts[a].split('=');
                att[1] != null?ne.setAttribute(att[0], att[1]):ne.setAttribute(att[0]);
            }
            this.el.appendChild(ne);
            
        }
    }
});
