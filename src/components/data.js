import React, { useState }  from 'react';
import firebase from 'firebase/app'
import "firebase/database";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode
} from "@react-firebase/database";
import { config } from "../config/config";


function Data() {
    //SETUP ALL STATES
    const [tempPec,setTempPec] = useState([])
    const [tempSolar,setTempSolar] = useState([])
    const [tempBojlerGore,setTempBojlerGore] = useState([])
    const [tempBojlerSredina,setTempBojlerSredina] = useState([])
    const [tempBojlerDolje,setTempBojlerDolje] = useState([])
    
    
    let toShowPec;
    let toShowSolar;
    let toShowBojlerGore;
    let toShowBojlerSredina;
    let toShowBojlerDolje;

    let tempPecData = {tempPec}.tempPec
    let tempSolarData = {tempSolar}.tempSolar
    let tempBojlerGoreData = {tempBojlerGore}.tempBojlerGore
    let tempBojlerSredinaData = {tempBojlerSredina}.tempBojlerSredina
    let tempBojlerDoljeData = {tempBojlerDolje}.tempBojlerDolje
   
    
    if(tempPec) {
        if(tempPecData) {
            let last = tempPecData.slice(-1)[0]
            toShowPec = <p>{last}</p>
        }   
    } else {
        toShowPec = <p>N/A</p>
    }

    if(tempSolar) {
        if(tempSolarData) {
            let last = tempSolarData.slice(-1)[0]
            toShowSolar = <p>{last}</p>
        }
    } else {
        toShowSolar = <p>N/A</p>
    }

    if(tempBojlerGore) {
        if(tempBojlerGoreData) {
            let last = tempBojlerGoreData.slice(-1)[0]
            toShowBojlerGore = <p>{last}</p>
        }
    } else {
        toShowBojlerGore = <p>N/A</p>
    }

    if(tempBojlerSredina) {
        if(tempBojlerSredinaData) {
            let last = tempBojlerSredinaData.slice(-1)[0]
            toShowBojlerSredina = <p>{last}</p>
        }
    } else {
        toShowBojlerSredina = <p>N/A</p>
    }

    if(tempBojlerDolje) {
        if(tempBojlerDoljeData) {
            let last = tempBojlerDoljeData.slice(-1)[0]
            toShowBojlerDolje = <p>{last}</p>
        }
    } else {
        toShowBojlerDolje = <p>N/A</p>
    }

    

    return (
        <div>
        <FirebaseDatabaseProvider firebase={firebase} {...config}>
          <FirebaseDatabaseNode
            path="tempPec/"
            orderByValue={"created_on"}
          >
            {d => {
                let array = d.value
                setTempPec(array)
              return null
            }}
          </FirebaseDatabaseNode>
          <FirebaseDatabaseNode
            path="tempSolar/"
            orderByValue={"created_on"}
          >
            {d => {
                let array = d.value
                setTempSolar(array)
              return null
            }}
          </FirebaseDatabaseNode>
          <FirebaseDatabaseNode
            path="tempBojlerGore/"
            orderByValue={"created_on"}
          >
            {d => {
                let array = d.value
                setTempBojlerGore(array)
              return null
            }}
          </FirebaseDatabaseNode>
          <FirebaseDatabaseNode
            path="tempBojlerSredina/"
            orderByValue={"created_on"}
          >
            {d => {
                let array = d.value
                setTempBojlerSredina(array)
              return null
            }}
          </FirebaseDatabaseNode>
          <FirebaseDatabaseNode
            path="tempBojlerDolje/"
            orderByValue={"created_on"}
          >
            {d => {
                let array = d.value
                setTempBojlerDolje(array)
              return null
            }}
          </FirebaseDatabaseNode>
        </FirebaseDatabaseProvider>
        
        <p>Pec:</p>{toShowPec}
        <p>Solar:</p>{toShowSolar}
        <p>Bojler Gore:</p>{toShowBojlerGore}
        <p>Bojler Sredina:</p>{toShowBojlerSredina}
        <p>Bojler Dolje:</p>{toShowBojlerDolje}
      </div>
    );
}

export default Data;