import React, { Component } from 'react';
import '../css/UserImage.css';
export default class UserImage extends Component {
	render() {
		return (
			<img
				src={this.props.src}
				alt={this.props.alt}
				width={this.props.width}
				height={this.props.height}
				className={'UserImage-image'}
			/>
		);
	}
}
UserImage.defaultProps = {
	width: '100%',
	height: '100%',
	alt: 'image'
};
