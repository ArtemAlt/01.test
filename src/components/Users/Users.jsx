import cl from "./Users.module.css"
import {NavLink} from "react-router-dom";



let Users = (props) =>{
    let pagesCount=Math.ceil(props.totalUsersCount/props.pageSize);
    let pages =[];
    for (let i=1; i <= pagesCount;i++){
        pages.push(i);
    }
    return <div className={cl.usersList}>
        <div>
            {pages.map(p=> {
                return <span className={props.currentPage === p && cl.selectedPage} onClick={(e)=>{props.onPageChange(p) }}>{p}</span>
            })}
        </div>
        {props.usersList.map(u => <div className={cl.userPreview} key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/'+u.id}>
                        <img className={cl.ava} src={u.avaURL}/>
                    </NavLink>

                </div>
                <strong>Name:</strong> <a className={cl.userName} href="#"> {u.name}</a>
                <strong>Status:</strong> <span className={cl.label}>Approved</span>

                <div>{
                    u.followed
                        ? <button  className={cl.followed} onClick={() => {
                            props.followAction(u.id)
                        }}>Follow</button>
                        : <button className={cl.unfollowed} onClick={() => {
                            props.unfollowedAction(u.id)
                        }}>Unfollow</button>
                }
                </div>
            </span>
            <span>
                <span>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)        }



    </div>
}


export default Users;