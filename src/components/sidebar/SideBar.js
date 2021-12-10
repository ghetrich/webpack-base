import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faBriefcase,
//   faPaperPlane,
//   faQuestion,
//   faImage,
//   faCopy,
//   faTimes
// } from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./SubMenu";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";
import { Gear, AddOutline } from "@rsuite/icons";
class SideBar extends React.Component {
  render() {
    return (
			<div
				className={classNames("sidebar", { "is-open": this.props.isOpen })}
			>
				<div className='sidebar-header'>
					<Button
						variant='link'
						onClick={this.props.toggle}
						style={{ color: "#fff" }}
						className='mt-4'
					>
						<AddOutline  />
					</Button>
					<h3>react-bootstrap sidebar</h3>
				</div>

				<Nav className='flex-column pt-2'>
					<p className='ml-3'>Heading</p>

					<Nav.Item className='active'>
						<Nav.Link href='/'>
							<AddOutline  />
							Home
						</Nav.Link>
					</Nav.Item>

					<SubMenu
						title='Pages'
						icon={<AddOutline />}
						items={["Link", "Link2", "Active"]}
					/>

					<Nav.Item>
						<Nav.Link href='/'>
							<AddOutline  />
							About
						</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link href='/'>
							<AddOutline  />
							Portfolio
						</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link href='/'>
							<AddOutline  />
							FAQ
						</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link href='/'>
							<AddOutline  />
							Contact
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</div>
		);
  }
}

export default SideBar;
