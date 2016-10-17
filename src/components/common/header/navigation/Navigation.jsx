import React from 'react';
import {Link, IndexLink} from 'react-router';

class Navigation extends React.Component {
	render() {
		return (
			<div className="navigation navigation--main col-md-9">
				<div className="navigation__header"></div>
				<div className="navigation__container">

					<ul className="primary-navigation">
					<li className="primary-navigation__item">
						<a className="primary-navigation__link" href="">Designers</a>
					</li>
						<li className="primary-navigation__item">
							<a className="primary-navigation__link" href="">Clothing</a>
						</li>
						<li className="primary-navigation__item">
							<a className="primary-navigation__link" href="">Shoes</a>
						</li>
						<li className="primary-navigation__item">
							<a className="primary-navigation__link" href="">Accessories</a>
						</li>
						<li className="primary-navigation__item">
							<a className="primary-navigation__link" href="">Watches</a>
						</li>
						<li className="primary-navigation__item">
							<a className="primary-navigation__link" href="">Grooming</a>
						</li>
						<li className="primary-navigation__item">
							<a className="primary-navigation__link" href="">Lifestyle</a>
						</li>
					</ul>
				</div>


			</div>
		);
	}
}

export default Navigation;
{/*<li>*/}
	{/*<IndexLink to="/" activeClassName="active">Home</IndexLink>*/}
{/*</li>*/}
{/*<li>*/}
	{/*<IndexLink to="/products" activeClassName="active">Products</IndexLink>*/}
{/*</li>*/}
