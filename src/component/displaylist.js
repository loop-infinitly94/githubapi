import React from 'react';
import './list.css';
import UserIcon  from '../assets/images/githubicon.png';

function DisplayList(props) {
    /*
        get the firstKey 
    */
    var gistKey = Object.keys(props.userGistList[0])[0];
    return (
        <div className="MainContainer">
            <div className="grid-item">
                Username
            </div>
            <div className="grid-item">
                FileTypes/List
            </div>
            <div className="grid-item">
                Fork Details
            </div>
            <div className="grid-item userNameLeft">
                <img alt={"userImage"} src={props.userGistList[0][gistKey].profileImg === "" ? UserIcon : props.userGistList[0][gistKey].profileImg} className="userGistImage" />
                <span className="userName">{props.userGistList[0][gistKey].userName}</span>
            </div>
            <div className="grid-item fileNameMiddle">
                {
                    props.userGistList.length > 0 && props.userGistList.map((eachItem, idx) => {
                        var key = Object.keys(eachItem)[0]
                        return (
                            Object.keys(eachItem[key].files).map((eachFile) => {
                                var eachFileType = eachItem[key].files[eachFile].language
                                var eachFileName = eachItem[key].files[eachFile].filename
                                return (
                                    <div className="fileSection">
                                        <span className="eachFileType">{eachFileType}</span>
                                        <span className="eachFileName">{eachFileName}</span>
                                    </div>
                                )
                            })
                        )
                    })
                }
            </div>
            <div className="grid-item forkNameLast">
                {
                    props.perGistsFork.length > 0 && props.perGistsFork.map((eachFork) => {
                        var key = Object.keys(eachFork)[0]
                        var eachGistForDetails = eachFork[key]
                        return (
                            <div className="forList">
                                {eachGistForDetails.length > 0 ? <span className="userName">{key}</span> : null}
                                {
                                    eachGistForDetails.length > 0 && eachGistForDetails.map((data, idx) => {
                                        return <div className="eachFork">

                                            <img alt="userimage" src={data.owner.avatar_url === "" ? UserIcon : data.owner.avatar_url} className="userGistImage" />
                                            <span className="userName">{data.owner.login}</span>
                                        </div>
                                    })
                                }
                            </div>
                        )

                    })
                }
            </div>
        </div >
    )
}

export default DisplayList;