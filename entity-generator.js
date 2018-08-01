/* entity-generator aframe component by diekus */

AFRAME.registerComponent('entity-generator', {
    schema: {
        entity_name:{type: 'string', default: 'a-entity'}, 
        class:{type:'string', default:'eg-entity'}, 
        number_items:{type:'int', default:2},
    },
    init: function(){
        for (i = 0; i < this.data.number_items; i++){
            let ne = document.createElement(this.data.entity_name);
            for(a = 0; a < this.data.attributes.length; a++){
                ne.setAttribute('class', this.data.class);
            }
            this.el.appendChild(ne);
            
        }
    }
});
