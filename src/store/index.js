import {createStore} from "vuex";
import getters from "@/store/getters";
import app from "@/store/modules/app"

export default createStore({
    getters,
    modules:{
        app
    }
})