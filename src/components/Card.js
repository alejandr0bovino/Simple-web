import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Cardiologic(props) {
  const [message, setMessage] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [amount, setAmount] = useState(1);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleAmount = (event) => {
    setAmount(Number(event.target.value));
  };

  const editInput = () => {
    setShowInput(true);
  };

  const saveInput = () => {
    setShowInput(false);
  };

  return (
    <>
      <Card>
        <CardMedia
          sx={{ height: 180 }}
          image={props.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="js-card-title mb-1">
            {message ? <span>{message}</span> : <span>{props.title}</span>}
          </Typography>


          <Typography variant="body2" color="text.secondary" className="mb-2">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>

          
          <div className="mb-2">
            {showInput ? (
              <div className="card__edit__title__input">
                <TextField
                  name="message"
                  id="message"
                  variant="standard"
                  onChange={handleChange}
                  value={message}
                  autoFocus
                />

                <span>&nbsp;&nbsp;&nbsp;</span>

                <Button variant="contained" disableElevation onClick={saveInput}>
                  Save
                </Button>
              </div>
            ) : (
              <div className="card__edit__title__action">
                <Button
                  variant="outlined"
                  color="primary"
                  disableElevation
                  onClick={editInput}
                >
                  Edit
                </Button>
              </div>
            )}
          </div> 

          <hr className="mb-2" />

          <div className="card__action">
            <div className="card__data">
              <span className="card__data__price">
                <AttachMoneyIcon/> {parseFloat(props.price).toFixed(2)}
              </span>

              <TextField
                className="card__data__amount"
                min="1"
                max="9"
                step="1"
                defaultValue="1"
                onChange={handleAmount}
                id="outlined-number"
                type="number"
                variant="outlined"
              />
            </div>

            <div>
              <Button
                variant="outlined"
                color="primary"

                onClick={(event) => props.handleClick(amount, props.price)}
              >
                <AddShoppingCartIcon />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>


    </>
  );
}

export default Cardiologic;
