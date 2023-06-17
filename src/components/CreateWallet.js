import React from 'react'
import Form from '@rjsf/mui';
import validator from '@rjsf/validator-ajv8';
import axios from "axios";
import {useState} from 'react'

const CreateWallet = () => {
    const [response, setResponse] = useState({})

    const options = {
        url : "https://hq-chain.onrender.com/api/wallet",
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        data : {
            "name":""
        }
    }
    const onSubmit = async ({formData}) =>{
        options.data.name = formData.name
        const res = await axios(options)
        setResponse(res);

    }
    const schema = {
        title: 'My Ogas at Qoinpal 🙇🏼, Food is ready 🧆🍗🍲🍜',
        type: 'object',
        required: ['name'],
        properties: {
          name :{type: "string", title:"Name", default:"Enter thy name chief 😎"}
        },
      };
      const formData = {
        'ui:submitButtonOptions': {
          submitText: 'Generate Wallet',
        }
      };
  return (
    <>
     <Form
        schema={schema}
        validator={validator}
        uiSchema={formData}
        onSubmit= {onSubmit}
   />

   <h1>Wallet Address:</h1>
   <h3>{response.data?.wallet_address}</h3>
    </>
   
  )
}

export default CreateWallet