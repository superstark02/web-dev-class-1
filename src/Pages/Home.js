import './Home.css';
import React from 'react'
import axios from 'axios'
import MyAppBar from '../Components/MyAppBar';
import MyTable from '../Components/MyTable'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FetchData from '../Database/FetchData';

function Home() {

  const [data, setData] = React.useState("");
  const [pin, setPin] = React.useState("");
  const [date, setDate] = React.useState("");

  React.useEffect(() => {

  }, [])

  function Fetch() {
    axios('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=' + pin + '&date=' + date)
      .then(response => {
        setData(response.data)
      })
  }

  return (
    <div>
      <MyAppBar />
      <FetchData/>
      <div>
        <div className="input-cont" >
          <TextField id="standard-basic" label="Pincode" />
        </div>

        <div className="input-cont" >
          <TextField id="outlined-basic" label="Date" variant="outlined" />
        </div>

        <div className="input-cont" >
          <Button style={{
            backgorundColor:"black",
            fontSize:"15px",
            width:"20%"
            }} className="btn" variant="contained" color="primary">
            Primary
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
