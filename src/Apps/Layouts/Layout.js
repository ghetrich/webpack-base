import React, { useContext, useState, useCallback, useEffect } from "react";
import Default from "./components/Default";
import {  Row, Col, Image } from "react-bootstrap";
import { ThemeContext } from "../Apptheme/ThemeProvider";
import darkLogo from '../assets/brand/brand-dark-1.png'
import lightLogo from "../assets/brand/brand-light-1.png";
import {
	Content,
	Container,
	FlexboxGrid,
	Footer,
	Panel,
	Form,
	ButtonToolbar,
	Button,
	Sidenav,
	Header,
	Sidebar,
	Toggle,
	Dropdown,
	Navbar,
	Nav,
} from "rsuite";
import { Gear, AddOutline,  } from "@rsuite/icons";

function AsyncToggle(props) {
	const [checked, setChecked] = useState(false);
	const [loading, setLoading] = useState(false);

	const { dispatchTheme } = useContext(ThemeContext);

useEffect(() => {
	checked === true
		? dispatchTheme({ type: "DARK" })
		: dispatchTheme({ type: "LIGHT" });
}, [checked]);

	const toggle = useCallback(() => {
		setLoading(true);
		
	

		setTimeout(() => {
			setChecked(checked => !checked);
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<Toggle
			loading={loading}
			checked={checked}
			onChange={toggle}
			{...props}
		/>
	);
}

const headerStyles = {
	padding: 18,
	fontSize: 16,
	height: 56,
	background: "#34c3ff",
	color: " #fff",
	whiteSpace: "nowrap",
	overflow: "hidden",
};

const iconStyles = {
	width: 56,
	height: 56,
	padding: 18,
	lineHeight: "56px",
	textAlign: "center",
};


const NavToggle = ({ expand, onChange }) => {
	return (
		<Navbar
			appearance='subtle'
			className='nav-toggle'
			style={{
				marginTop: "auto",
				
			}}
		>
			<Navbar.Body>
				<Nav>
					<Dropdown
						placement='topStart'
						trigger='click'
						renderTitle={children => {
							return <Gear style={iconStyles} />;
						}}
					>
						<Dropdown.Item>Help</Dropdown.Item>
						<Dropdown.Item>Settings</Dropdown.Item>
						<Dropdown.Item>Sign out</Dropdown.Item>
					</Dropdown>
				</Nav>

				<Nav pullRight>
					<Nav.Item
						onClick={onChange}
						style={{ width: 56, textAlign: "center" }}
					>
						{expand ? <AddOutline /> : <AddOutline />}
					</Nav.Item>
				</Nav>
			</Navbar.Body>
		</Navbar>
	);
};
const Layout = props => {
	const { theme } = useContext(ThemeContext);
	const [expand, setExpand] = useState(true);
	return (
		<div
			className='show-fake-browser sidebar-page'
			style={{ height: "100vh" }}
		>
			<Container>
				<Sidebar
					style={{
						display: "flex",
						flexDirection: "column",
						maxHeight: "100vh",
					}}
					width={expand ? 260 : 56}
					collapsible
				>
					<Sidenav.Header>
						<div style={headerStyles}>
							{/* <LogoAnalytics style={{ fontSize: 20 }} /> */}
							<span style={{ marginLeft: 12 }}> BRAND</span>
						</div>
					</Sidenav.Header>
					<Sidenav
						expanded={expand}
						defaultOpenKeys={["3"]}
						appearance='subtle'
					>
						<Sidenav.Body>
							<Nav>
								<Nav.Item eventKey='1' active icon={<Gear />}>
									Dashboard
								</Nav.Item>
								<Nav.Item eventKey='2' icon={<Gear />}>
									User Group
								</Nav.Item>
								<Dropdown
									eventKey='3'
									trigger='hover'
									title='Advanced'
									icon={<Gear />}
									placement='rightStart'
								>
									<Dropdown.Item eventKey='3-1'>Geo</Dropdown.Item>
									<Dropdown.Item eventKey='3-2'>Devices</Dropdown.Item>
									<Dropdown.Item eventKey='3-3'>Brand</Dropdown.Item>
									<Dropdown.Item eventKey='3-4'>Loyalty</Dropdown.Item>
									<Dropdown.Item eventKey='3-5'>
										Visit Depth
									</Dropdown.Item>
								</Dropdown>
								<Dropdown
									eventKey='4'
									trigger='hover'
									title='Settings'
									icon={<Gear />}
									placement='rightStart'
								>
									<Dropdown.Item eventKey='4-1'>
										Applications
									</Dropdown.Item>
									<Dropdown.Item eventKey='4-2'>
										Websites
									</Dropdown.Item>
									<Dropdown.Item eventKey='4-3'>
										Channels
									</Dropdown.Item>
									<Dropdown.Item eventKey='4-4'>Tags</Dropdown.Item>
									<Dropdown.Item eventKey='4-5'>
										Versions
									</Dropdown.Item>
								</Dropdown>
								<Dropdown
									eventKey='4'
									trigger='hover'
									title='Settings'
									icon={<Gear />}
									placement='rightStart'
								>
									<Dropdown.Item eventKey='4-1'>
										Applications
									</Dropdown.Item>
									<Dropdown.Item eventKey='4-2'>
										Websites
									</Dropdown.Item>
									<Dropdown.Item eventKey='4-3'>
										Channels
									</Dropdown.Item>
									<Dropdown.Item eventKey='4-4'>Tags</Dropdown.Item>
									<Dropdown.Item eventKey='4-5'>
										Versions
									</Dropdown.Item>
								</Dropdown>
							</Nav>
						</Sidenav.Body>
					</Sidenav>
					<NavToggle expand={expand} onChange={() => setExpand(!expand)} />
				</Sidebar>

				<Container style={{ padding: "40px" }}>
					<Header>
						<h2>Page Title</h2>
					</Header>
					<Content>Content</Content>
				</Container>
			</Container>
		</div>
	);
};
export default Layout;
export { Default };
