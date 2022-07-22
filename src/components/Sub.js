function Sub(props){
    return (
        <div>
            <ul>
                {props.Users.map((Users,index)=>(
                    <li>{Users.fname} - {Users.em} - {Users.phone}</li>
                ))}
            </ul>
        </div>
    );
}
export default Sub;