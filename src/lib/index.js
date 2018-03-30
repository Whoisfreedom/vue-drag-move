import vueDragMove from './vue-drag-move'
const dragmove = {
    install (Vue, option) {
        Vue.component(vueDragMove.name, vueDragMove)
    }
}
export default dragmove;