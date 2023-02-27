import { TOKEN_TIME,TOKEN_TIME_VALUE } from "./constant";

export function setTokenTime(){
    localStorage.setItem(TOKEN_TIME,Date.now())
}

export function getTokenTime(){
    return localStorage.getItem(TOKEN_TIME)
}

export function diffTokenTime(){
    let currentTime = Date.now()
    let tokenTime = getTokenTime()

    return currentTime - tokenTime > TOKEN_TIME_VALUE
}