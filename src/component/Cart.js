
import '../App.css'
import React from 'react'


export default function Cart(props) {
    const cardList=props.cardList
    const title=props.title
    
    return (
        <div className="card">
            {   
                cardList.map((item)=>(
                    <div key={item.id} className="profileCard">
                        <h3 onClick={()=>(alert(`hi`))} className="hello">{title}</h3>
                        <h3>Name: {item.name}</h3>
                        <h4>Profession: {item.profession}</h4>
                        <ul>
                            <h4>Skills: </h4>
                            {
                                item.skills.map((skill,i)=><li key={i}>{skill}</li>)
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}
