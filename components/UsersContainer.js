import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUsers } from '../actions/users.action';
import Users from './Users';

const mapDispatchToProps = (dispatch) => {
	return {
		getUsers: () => {
			dispatch(getUsers());
		}
	};
};
const mapStateToProps = (state) => {
	return {
		users: state.users
	};
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
