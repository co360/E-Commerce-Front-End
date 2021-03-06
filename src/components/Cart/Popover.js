import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CartList from "./CartList";
import { CartContext } from "./CartContext";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import CartIcon from "./Cart";

const useStyles = makeStyles((theme) => ({
	typography: {
		padding: theme.spacing(2),
	},
}));

export default function CartPopover() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	const [cart, dispatchCart] = React.useContext(CartContext);
	return (
		<div>
			
			<CartIcon count={cart.cartCount} onClick={handleClick} />

			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center",
				}}>
				{/* <Typography className={classes.typography}>The content of the Popover.</Typography> */}
				<CartList />
			</Popover>
		</div>
	);
}
