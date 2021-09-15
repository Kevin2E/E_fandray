import React, {useState} from 'react'


interface Iprops {
	pseudo: string
	email: string
}

const users = [
	{
		"email": "Kevin@gmail.com",
		"pseudo": "KEV",
		"password": "0123456789"
	},
	{
		"email": "maitre@gmail.com",
		"pseudo": "master",
		"password": "master"
	},
	{
		"email": "njakarivelo@gmail.com",
		"pseudo": "njaka",
		"password": "0123456789"
	}
]
let tableau:any = [''];


const Message:React.FC<Iprops> = ({email, pseudo}) => {

	const [textMessage, setTextMessage] = useState('')
	const [allMessage, setAllMessage] = useState([' '])
	


	const handleClickSend = (e:any) => {
		e.preventDefault()
		console.log(tableau)
		tableau.push(textMessage)
		setAllMessage(tableau)
		setTextMessage("")
	}

	const handleMessageChange = (e:any) => {
		setTextMessage(e.target.value)
	}



	return(
		<div>
			<div>
				{
					allMessage.map(function(message){
						return <li key={message}>{message}</li> 
						
					})
				}
			</div>

			<div>
				<input type="text" placeholder="Entrer le pseudo du destinataire" />	
			</div>
			<hr/>
			<div>
				<input type="text" placeholder="Entrer votre message"  value={textMessage} onChange={handleMessageChange}  />	
				<button type="submit" className="btn btn-success" onClick={handleClickSend}> Envoyer </button>
			</div>

		</div>		
	)

}

export default Message
