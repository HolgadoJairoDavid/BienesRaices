import {defineStore} from 'pinia'

export const useErrorCodesStore = defineStore('errorCodes', ()=> {
    const errorCodes = {
        'auth/user-not-found' : 'Usuario no encontrado',
        'auth/wrong-password' : 'El password es incorrecto'
    }
    return {
        errorCodes
    }
})