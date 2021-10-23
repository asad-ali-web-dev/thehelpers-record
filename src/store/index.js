import { createStore } from 'vuex'
import { db } from '../utils/firebase'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      recipient_name: "",
      recipient_contact: "",
      recipient_id_card: [],
      loggedIn: false
    }
  },
  getters: {
    GET_RECIPIENT_NAME(state) {
        return state.recipient_name;
    },
    GET_RECIPIENT_CONTACT(state) {
        return state.recipient_contact;
    },
    GET_RECIPIENT_ID_CARD(state) {
        return state.recipient_id_card;
    },
    GET_LOGIN_STATUS(state) {
      return state.loggedIn;
    }
  },
  mutations: {
    SET_RECIPIENT_NAME(state, payload) {
        state.recipient_name = payload;
    },
    SET_RECIPIENT_CONTACT(state, payload) {
        state.recipient_contact = payload;
    },
    SET_RECIPIENT_ID_CARD(state, payload) {
        state.recipient_id_card.push(payload);
    },
    GET_LOGIN_STATUS(state, payload) {
      state.loggedIn = payload;
    }
  },
  actions: {
    CREATE_DONEE_RECORD({ getters }, payload) {

        db.collection("donee_records").add(payload)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

    }
  }
})

export default store