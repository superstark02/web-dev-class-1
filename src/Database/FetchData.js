import React, { Component } from 'react'
import axios from 'axios'
import MyTable from '../Components/MyTable'

export class FetchData extends Component {

    state = {
        data: null
    }

    componentDidMount(){
        axios('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=110085&date=25-05-2021')
        .then(response => {
            this.setState({data:response.data})
            console.log(this.state.data.sessions)
        })
      
    }

    render() {
        return (
            <div>
                {
                    this.state.data ? (
                        <div>
                            <MyTable name="react" data_called={this.state.data.sessions} />
                        </div>
                    ):(
                        <div>Please Wait</div>
                    )
                }
                
            </div>
        )
    }
}

export default FetchData

