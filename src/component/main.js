import React, { Component } from 'react';
import SearchAndFilterData from './searchandfilterdata';
import DisplayList from './displaylist';
import { GET_UsersGists, GET_UserForks } from "../api/gistsapi";
import Loader from "../assets/images/loader.gif";
/*
    temporary forkData
*/
const forkListttt = [
    {
        "4815cd16092666cf2f360694d116eb6c": [{
            "url": "https://api.github.com/gists/aa5a315d61ae9438b18d",
            "forks_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/forks",
            "commits_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/commits",
            "id": "aa5a315d61ae9438b18d",
            "node_id": "MDQ6R2lzdGFhNWEzMTVkNjFhZTk0MzhiMThk",
            "git_pull_url": "https://gist.github.com/aa5a315d61ae9438b18d.git",
            "git_push_url": "https://gist.github.com/aa5a315d61ae9438b18d.git",
            "html_url": "https://gist.github.com/aa5a315d61ae9438b18d",
            "files": {
                "hello_world.rb": {
                    "filename": "hello_world.rb",
                    "type": "application/x-ruby",
                    "language": "Ruby",
                    "raw_url": "https://gist.githubusercontent.com/octocat/6cad326836d38bd3a7ae/raw/db9c55113504e46fa076e7df3a04ce592e2e86d8/hello_world.rb",
                    "size": 167
                }
            },
            "public": true,
            "created_at": "2010-04-14T02:15:15Z",
            "updated_at": "2011-06-20T11:34:15Z",
            "description": "Hello World Examples",
            "comments": 1,
            "user": null,
            "comments_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/comments/",
            "owner": {
                "login": "shyam",
                "id": 1,
                "node_id": "MDQ6VXNlcjE=",
                "avatar_url": "https://avatars.githubusercontent.com/u/21107?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/octocat",
                "html_url": "https://github.com/octocat",
                "followers_url": "https://api.github.com/users/octocat/followers",
                "following_url": "https://api.github.com/users/octocat/following{/other_user}",
                "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
                "organizations_url": "https://api.github.com/users/octocat/orgs",
                "repos_url": "https://api.github.com/users/octocat/repos",
                "events_url": "https://api.github.com/users/octocat/events{/privacy}",
                "received_events_url": "https://api.github.com/users/octocat/received_events",
                "type": "User",
                "site_admin": false
            }
        },
        {
            "url": "https://api.github.com/gists/aa5a315d61ae9438b18d",
            "forks_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/forks",
            "commits_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/commits",
            "id": "aa5a315d61ae9438b18d",
            "node_id": "MDQ6R2lzdGFhNWEzMTVkNjFhZTk0MzhiMThk",
            "git_pull_url": "https://gist.github.com/aa5a315d61ae9438b18d.git",
            "git_push_url": "https://gist.github.com/aa5a315d61ae9438b18d.git",
            "html_url": "https://gist.github.com/aa5a315d61ae9438b18d",
            "files": {
                "hello_world.rb": {
                    "filename": "hello_world.rb",
                    "type": "application/x-ruby",
                    "language": "Ruby",
                    "raw_url": "https://gist.githubusercontent.com/octocat/6cad326836d38bd3a7ae/raw/db9c55113504e46fa076e7df3a04ce592e2e86d8/hello_world.rb",
                    "size": 167
                }
            },
            "public": true,
            "created_at": "2010-04-14T02:15:15Z",
            "updated_at": "2011-06-20T11:34:15Z",
            "description": "Hello World Examples",
            "comments": 1,
            "user": null,
            "comments_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/comments/",
            "owner": {
                "login": "octocat",
                "id": 1,
                "node_id": "MDQ6VXNlcjE=",
                "avatar_url": "https://avatars.githubusercontent.com/u/21107?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/octocat",
                "html_url": "https://github.com/octocat",
                "followers_url": "https://api.github.com/users/octocat/followers",
                "following_url": "https://api.github.com/users/octocat/following{/other_user}",
                "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
                "organizations_url": "https://api.github.com/users/octocat/orgs",
                "repos_url": "https://api.github.com/users/octocat/repos",
                "events_url": "https://api.github.com/users/octocat/events{/privacy}",
                "received_events_url": "https://api.github.com/users/octocat/received_events",
                "type": "User",
                "site_admin": false
            }
        },
        {
            "url": "https://api.github.com/gists/aa5a315d61ae9438b18d",
            "forks_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/forks",
            "commits_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/commits",
            "id": "aa5a315d61ae9438b18d",
            "node_id": "MDQ6R2lzdGFhNWEzMTVkNjFhZTk0MzhiMThk",
            "git_pull_url": "https://gist.github.com/aa5a315d61ae9438b18d.git",
            "git_push_url": "https://gist.github.com/aa5a315d61ae9438b18d.git",
            "html_url": "https://gist.github.com/aa5a315d61ae9438b18d",
            "files": {
                "hello_world.rb": {
                    "filename": "hello_world.rb",
                    "type": "application/x-ruby",
                    "language": "Ruby",
                    "raw_url": "https://gist.githubusercontent.com/octocat/6cad326836d38bd3a7ae/raw/db9c55113504e46fa076e7df3a04ce592e2e86d8/hello_world.rb",
                    "size": 167
                }
            },
            "public": true,
            "created_at": "2010-04-14T02:15:15Z",
            "updated_at": "2011-06-20T11:34:15Z",
            "description": "Hello World Examples",
            "comments": 1,
            "user": null,
            "comments_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/comments/",
            "owner": {
                "login": "octocat",
                "id": 1,
                "node_id": "MDQ6VXNlcjE=",
                "avatar_url": "https://avatars.githubusercontent.com/u/21107?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/octocat",
                "html_url": "https://github.com/octocat",
                "followers_url": "https://api.github.com/users/octocat/followers",
                "following_url": "https://api.github.com/users/octocat/following{/other_user}",
                "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
                "organizations_url": "https://api.github.com/users/octocat/orgs",
                "repos_url": "https://api.github.com/users/octocat/repos",
                "events_url": "https://api.github.com/users/octocat/events{/privacy}",
                "received_events_url": "https://api.github.com/users/octocat/received_events",
                "type": "User",
                "site_admin": false
            }
        }],

    },
    {
        "918f9bbe2faa32135045407e1c032d94": [{
            "url": "https://api.github.com/gists/aa5a315d61ae9438b18d",
            "forks_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/forks",
            "commits_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/commits",
            "id": "aa5a315d61ae9438b18d",
            "node_id": "MDQ6R2lzdGFhNWEzMTVkNjFhZTk0MzhiMThk",
            "git_pull_url": "https://gist.github.com/aa5a315d61ae9438b18d.git",
            "git_push_url": "https://gist.github.com/aa5a315d61ae9438b18d.git",
            "html_url": "https://gist.github.com/aa5a315d61ae9438b18d",
            "files": {
                "hello_world.rb": {
                    "filename": "hello_world.rb",
                    "type": "application/x-ruby",
                    "language": "Ruby",
                    "raw_url": "https://gist.githubusercontent.com/octocat/6cad326836d38bd3a7ae/raw/db9c55113504e46fa076e7df3a04ce592e2e86d8/hello_world.rb",
                    "size": 167
                }
            },
            "public": true,
            "created_at": "2010-04-14T02:15:15Z",
            "updated_at": "2011-06-20T11:34:15Z",
            "description": "Hello World Examples",
            "comments": 1,
            "user": null,
            "comments_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/comments/",
            "owner": {
                "login": "octocat",
                "id": 1,
                "node_id": "MDQ6VXNlcjE=",
                "avatar_url": "https://avatars.githubusercontent.com/u/21107?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/octocat",
                "html_url": "https://github.com/octocat",
                "followers_url": "https://api.github.com/users/octocat/followers",
                "following_url": "https://api.github.com/users/octocat/following{/other_user}",
                "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
                "organizations_url": "https://api.github.com/users/octocat/orgs",
                "repos_url": "https://api.github.com/users/octocat/repos",
                "events_url": "https://api.github.com/users/octocat/events{/privacy}",
                "received_events_url": "https://api.github.com/users/octocat/received_events",
                "type": "User",
                "site_admin": false
            }
        },
        {
            "url": "https://api.github.com/gists/aa5a315d61ae9438b18d",
            "forks_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/forks",
            "commits_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/commits",
            "id": "aa5a315d61ae9438b18d",
            "node_id": "MDQ6R2lzdGFhNWEzMTVkNjFhZTk0MzhiMThk",
            "git_pull_url": "https://gist.github.com/aa5a315d61ae9438b18d.git",
            "git_push_url": "https://gist.github.com/aa5a315d61ae9438b18d.git",
            "html_url": "https://gist.github.com/aa5a315d61ae9438b18d",
            "files": {
                "hello_world.rb": {
                    "filename": "hello_world.rb",
                    "type": "application/x-ruby",
                    "language": "Ruby",
                    "raw_url": "https://gist.githubusercontent.com/octocat/6cad326836d38bd3a7ae/raw/db9c55113504e46fa076e7df3a04ce592e2e86d8/hello_world.rb",
                    "size": 167
                }
            },
            "public": true,
            "created_at": "2010-04-14T02:15:15Z",
            "updated_at": "2011-06-20T11:34:15Z",
            "description": "Hello World Examples",
            "comments": 1,
            "user": null,
            "comments_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/comments/",
            "owner": {
                "login": "octocat",
                "id": 1,
                "node_id": "MDQ6VXNlcjE=",
                "avatar_url": "https://avatars.githubusercontent.com/u/21107?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/octocat",
                "html_url": "https://github.com/octocat",
                "followers_url": "https://api.github.com/users/octocat/followers",
                "following_url": "https://api.github.com/users/octocat/following{/other_user}",
                "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
                "organizations_url": "https://api.github.com/users/octocat/orgs",
                "repos_url": "https://api.github.com/users/octocat/repos",
                "events_url": "https://api.github.com/users/octocat/events{/privacy}",
                "received_events_url": "https://api.github.com/users/octocat/received_events",
                "type": "User",
                "site_admin": false
            }
        },
        {
            "url": "https://api.github.com/gists/aa5a315d61ae9438b18d",
            "forks_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/forks",
            "commits_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/commits",
            "id": "aa5a315d61ae9438b18d",
            "node_id": "MDQ6R2lzdGFhNWEzMTVkNjFhZTk0MzhiMThk",
            "git_pull_url": "https://gist.github.com/aa5a315d61ae9438b18d.git",
            "git_push_url": "https://gist.github.com/aa5a315d61ae9438b18d.git",
            "html_url": "https://gist.github.com/aa5a315d61ae9438b18d",
            "files": {
                "hello_world.rb": {
                    "filename": "hello_world.rb",
                    "type": "application/x-ruby",
                    "language": "Ruby",
                    "raw_url": "https://gist.githubusercontent.com/octocat/6cad326836d38bd3a7ae/raw/db9c55113504e46fa076e7df3a04ce592e2e86d8/hello_world.rb",
                    "size": 167
                }
            },
            "public": true,
            "created_at": "2010-04-14T02:15:15Z",
            "updated_at": "2011-06-20T11:34:15Z",
            "description": "Hello World Examples",
            "comments": 1,
            "user": null,
            "comments_url": "https://api.github.com/gists/aa5a315d61ae9438b18d/comments/",
            "owner": {
                "login": "octocat",
                "id": 1,
                "node_id": "MDQ6VXNlcjE=",
                "avatar_url": "https://avatars.githubusercontent.com/u/21107?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/octocat",
                "html_url": "https://github.com/octocat",
                "followers_url": "https://api.github.com/users/octocat/followers",
                "following_url": "https://api.github.com/users/octocat/following{/other_user}",
                "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
                "organizations_url": "https://api.github.com/users/octocat/orgs",
                "repos_url": "https://api.github.com/users/octocat/repos",
                "events_url": "https://api.github.com/users/octocat/events{/privacy}",
                "received_events_url": "https://api.github.com/users/octocat/received_events",
                "type": "User",
                "site_admin": false
            }
        }]
    }
]

class Main extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            userGistList: [],
            perGistsFork: [],
            mappedUserGist: {},
            showSpinner: false
        }
    }

    /*
        search for user gists using async await
    */

    async onSearchClicked(userName) {
        this.setState({showSpinner: true, userGistList: [], perGistsFork: [], mappedUserGist: {}})
        const getUSerGists = await GET_UsersGists(userName)
        this.callBackUserGistList(getUSerGists) 
    }

    callBackUserGistList(responseData) {
        console.log(responseData)
        this.setState({showSpinner: false})
        if (responseData.status === 200) {
            this.setState({ userGistList: responseData.data })
            const mappedUserGist = this.mapUserGist()
            this.getUserForks(mappedUserGist)
        }
        else {
            console.warn(responseData.status + responseData.statusText);
        }
    }

    /*
        create an object that maps the gist ids with  forks
    */

    mapUserGist() {
        const { userGistList } = this.state;
        const mappedUserGist = userGistList.map((eachGist) => ({
            [eachGist.id]: {
                profileImg: eachGist.owner.avatar_url,
                userName: eachGist.owner.login,
                userId: eachGist.owner.id,
                files: eachGist.files,
                id: eachGist.id
            }
        }))
        this.setState({
            mappedUserGist
        })
        return mappedUserGist;
    }

    /*
        serialized request for forks for each each gists
        using callback and promise
    */

    async getUserForks(mappedUserGist) {
        this.setState({showSpinner: true})

        const getAllUsersForks = new Promise((resolve, reject) => {
            var forPromiseList = []
            mappedUserGist.forEach(async (eachUserGist, index) => {
                const eachUserForks = new Promise((resolve, reject) => {
                    GET_UserForks(this.callbackGistForks.bind(this, resolve, Object.keys(eachUserGist)[0]), Object.keys(eachUserGist)[0])

                })
                forPromiseList.push(eachUserForks)

            });

            Promise.all(forPromiseList).then((values) => {
                resolve(values)
            })

        })

        const gistForks = await getAllUsersForks;

        this.setState({
            showSpinner: false,
            perGistsFork: gistForks
        })
    }

    callbackGistForks(resolve, gistId, responseData) {
        if (responseData.status === 200) {
            resolve({ [gistId]: responseData.data.slice(0, 3) })
        }
        else {
            resolve(false)
            console.warn(responseData.status + responseData.statusText)
        }
    }


    render() {
        return (
            <div className = "mainOuter">
                {this.state.showSpinner ? <div className = "overlay"><img alt = "loader" className = "loaderImage" src = {Loader}/></div> : null}
                <SearchAndFilterData onSearchClickedProp={this.onSearchClicked.bind(this)} />
                {this.state.mappedUserGist.length > 0 ? <DisplayList userGistList={this.state.mappedUserGist} perGistsFork={this.state.perGistsFork} /> : "No Data Load"}
            </div>
        );
    }
}

export default Main;