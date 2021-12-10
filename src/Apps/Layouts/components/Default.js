import React from 'react'
import {
	Container,
	Content,
	FlexboxGrid,
	Footer,
	Panel,
	Form,
	ButtonToolbar,
	Button,
} from "rsuite";
const DefaultLayout = ({children}) => {
	return (
		<div className='show-fake-browser login-page'>
			<Container>
				<Content>
					<FlexboxGrid justify='center' align='middle'>
						<FlexboxGrid.Item colspan={6}>
							<Panel header={<h3>Login</h3>} bordered>
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
											<Button appearance='primary'>Sign in</Button>
											<Button appearance='link'>
												Forgot password?
											</Button>
										</ButtonToolbar>
									</Form.Group>
								</Form>
							</Panel>
						</FlexboxGrid.Item>
					</FlexboxGrid>
				</Content>
				<Footer>Footer</Footer>
			</Container>
		</div>
	);
};

export default DefaultLayout;
