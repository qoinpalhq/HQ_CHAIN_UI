import React from 'react'
import Form from '@rjsf/mui';
import validator from '@rjsf/validator-ajv8';


const SendCoins = () => {
    const schema = {
        title:"Rich man, no forget your boy 🤓 💶 💴 💵",
        type: "object",
        required : ["sender", "receiver", "amount"],
        properties:{
            sender:{
                title:"sender",
                type:"string",
                minLength: 40,
            },
            receiver:{
                title:"receiver",
                type:"string",
                minLength: 40
            },
            amount : {
                title: "amount",
                type:"number",
            }
        }

    }
    const formData = {
        'ui:submitButtonOptions': {
          submitText: 'Send TeamQoin',
        }
      };
  return (
    <>
    <Form
    schema={schema}
    validator={validator}
    uiSchema={formData}
   >
   </Form>
   {/* <h1>Wallet Address:</h1> */}
   <h3 >chief your transaction was successful, 
    kindly wait for the blockchain confirmation, view blockchain<br/>
    <a href="hq-chain.onrender.com">here</a></h3>
</>
   


  )
}

export default SendCoins