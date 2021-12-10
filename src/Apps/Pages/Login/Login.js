import React, { useContext, useState, useCallback, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { ThemeContext } from "../../Apptheme/ThemeProvider";
import darkLogo from "../../assets/brand/brand-dark-1.png";
import lightLogo from "../../assets/brand/brand-light-1.png";
import {
	Content,
	FlexboxGrid,
	Footer,
	Panel,
	Form,
	ButtonToolbar,
	Button,
	Header,
	Sidebar,
	Toggle,
} from "rsuite";
import { Gear, AddOutline } from "@rsuite/icons";

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

const Login = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<Container>
			<Row className='justify-content-md-center py-1 mb-2'>
				<Col md='3' className='justify-content-md-center'>
					<div className='text-center mt-3' style={{ maxWidth: "500px" }}>
						<Image
							src={theme.isDarkMode ? darkLogo : lightLogo}
							rounded
							fluid
						/>
					</div>
					<div className='text-center mt-3'>
						<h5>Sign in to Simple Pay</h5>
					</div>
				</Col>
			</Row>
			<Row className='justify-content-center'>
				<Col sm='6' md='6' lg='4'>
					<Panel bordered shaded>
						<Form fluid>
							<Form.Group>
								<Form.ControlLabel>
									Username or email address
								</Form.ControlLabel>
								<Form.Control name='name' />
							</Form.Group>

							<Form.Group>
								<Form.ControlLabel>Password</Form.ControlLabel>
								<Form.Control
									name='password'
									type='password'
									autoComplete='off'
								/>
							</Form.Group>
							<Form.Group>
								<ButtonToolbar>
									<Button appearance='primary' block>
										Sign in
									</Button>
									<Button appearance='link'>Forgot password?</Button>
								</ButtonToolbar>
							</Form.Group>
						</Form>
					</Panel>
					<Row>
						<Col md='12' className='mt-4'>
							<Panel bordered>
								<span className=''>
									Having issues?
									<Button appearance='link'>Contact Admin</Button>
								</span>
							</Panel>
						</Col>
						<Col md='12' className='mt-1'>
							<Panel>
								<div>
									<label>Enable Dark Mode </label>
									<span className='mx-2'>
										<AsyncToggle
											checkedChildren='Enable'
											unCheckedChildren='Disabled'
											arial-label='Switch'
										/>
									</span>
								</div>
							</Panel>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;
