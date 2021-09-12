import Card from './Cart'
function Profile(){
    const cardList=[
        {
            id:0,
            name:'Nadim',
            profession:'instructor',
            skills:['React','Java','Javascript','C++','PHP']
        },
        {
            id:1,
            name:'Majd',
            profession:'student',
            skills:['React','CSS3','Javascript','Python']
        },
        {
            id:2,
            name:'Nadim',
            profession:'instructor',
            skills:['HTML5','CSS3','Javascript']
        },
    ]
    return(
            
            <Card cardList={cardList} title="Hello"/>
    )
}

export default Profile;
