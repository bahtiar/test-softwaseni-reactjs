import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getGithub} from '../store/actions/githubAction'

 class github extends Component {
    componentDidMount(){
        this.props.getGithub()
        
    }
    render() {
        const {github} = this.props.github
        console.log(this.props.github)

        
        return (
            <div>
                <table class="table" cellspacing="0" cellpadding="0">
                    <thead>
                        <tr>
                            <th>Node ID</th>
                            <th>Name</th>
                            <th>Full Name</th>
                            <th>Owner</th>
                            <th>Description</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                {github.map(d => 
                     <React.Fragment key={d.id}>
                        <tr>
                            <td align="left">{d.node_id}</td>
                            <td align="left">{d.name}</td>
                            <td align="left">{d.full_name}</td>
                            <td align="left">{d.owner.login}</td>
                            <td align="left">{d.description}</td>
                            <td align="left">{d.created_at}</td>
                        </tr>
                     </React.Fragment>
                )}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({github:state.github})

export default connect(mapStateToProps, {getGithub})(github)