import { call, put, takeEvery } from "redux-saga/effects";
import {LOAD_DATA, putData  } from "./actions";  

const fetchData = ()=>{
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    
}

function* workerLoadData(){
  const data = yield call(fetchData)
  yield put(putData(data))
}

export function* watchLoadData(){

yield takeEvery(LOAD_DATA, workerLoadData )
}