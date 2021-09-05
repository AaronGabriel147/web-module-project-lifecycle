const Following = ({following}) => {
    console.log('Following component props', following)
    return (
        <div>
            <h1>Following:</h1>
            { (following.length >= 1) && following.map(item => {
                console.log(item)
                return(
                    <div>
                        <img width="230px" src={item.avatar_url} alt="user-img" />
                        <p>User name: {item.login}</p>
                        <a href={`https://github.com/${item.login}`}>Link to my Github page</a>
                    </div>
                )
            }) }
        </div>
    );
}
 
export default Following;