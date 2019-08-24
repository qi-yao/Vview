import CollapseComponent from './collapse'
import CollapseItemComponent from './collapse-item'

const Collapse = {
    install:function(Vue){
        Vue.component('Collapse', CollapseComponent)
        Vue.component('CollapseItem', CollapseItemComponent)
    }
}

export default Collapse