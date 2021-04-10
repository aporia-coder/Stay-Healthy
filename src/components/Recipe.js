import React, { useState } from "react";
import uuid from "react-uuid";

// MUI
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const Recipe = ({
  recipeName,
  calories,
  recipeImage,
  healthLabels,
  ingredients,
  time,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles((theme) => ({
    image: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
  }));

  const classes = useStyles();

  const RecipeDialog = ({ open }) => {
    return (
      <Dialog open={open}>
        <DialogTitle>Ingredients:</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <ul>
              {ingredients.map((ingredient, index) => (
                <p key={uuid()}>{ingredient.text}</p>
              ))}
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogTitle>Health Warnings:</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <ul>
              {healthLabels.map((label, index) => (
                <li key={uuid()}>{label}</li>
              ))}
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <>
      <Card raised={true} className="recipe-card">
        <CardHeader title={recipeName} subheader={calories} />
        <div className="flex m-y-1">
          <Button
            color="primary"
            variant="outlined"
            size="small"
            onClick={handleOpen}
            endIcon={<ExpandMoreIcon />}
          >
            show more
          </Button>
        </div>
        <CardMedia image={recipeImage} className={classes.image} />
      </Card>
      <RecipeDialog open={open} />
    </>
  );
};

export default Recipe;
