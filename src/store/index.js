import {createStore} from "vuex";
import getters from "@/store/getters";
import app from "@/store/modules/app"
import settings from "@/store/modules/settings";

export default createStore({
    getters,
    modules: {
        app,
        settings
    }
})