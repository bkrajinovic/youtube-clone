import React from "react"
import "./Header.css"
import MenuSharpIcon from "@material-ui/icons/MenuSharp"
import SearchSharpIcon from "@material-ui/icons/SearchSharp"
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp"
import AppsSharpIcon from "@material-ui/icons/AppsSharp"
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp"
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp"

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<MenuSharpIcon />
				<img
					className="header__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/512px-YouTube_Logo.svg.png"
				/>
			</div>

			<div className="header__input">
				<input placeholder="Search" type="text" />
				<SearchSharpIcon className="header__inputButton" />
			</div>

			<div className="header__icons">
				<VideoCallSharpIcon className="header__icon" />
				<AppsSharpIcon className="header__icon" />
				<NotificationsSharpIcon className="header__icon" />
				<AccountCircleSharpIcon className="header__icon" />
			</div>
		</div>
	)
}

export default Header
