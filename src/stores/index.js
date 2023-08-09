import { defineStore } from "pinia";
import { questionsA } from '../assets/dataA'
import { questionsB } from '../assets/dataB'

export const questionStateA = defineStore('statesListA', {
    state: () => {
        let stateA =[]
        for(let i=0; i<questionsA.length; i++){
            stateA.push(false)
        }
        return stateA
    },
    actions: {

    }
})

export const questionStateB = defineStore('statesListB', {
    state: () => {
        let stateB =[]
        for(let i=0; i<questionsB.length; i++){
            stateB.push(false)
        }
        return stateB
    }
})