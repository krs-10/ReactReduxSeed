import Navbar from 'components/Navbar';

console.log("Page - Navbar :", Navbar);
class Page extends Component {
	render(){
		console.log("Page - this.props :", this.props);
		return (
			<Navbar>Hi</Navbar>
		)
	}
}

export default Page; 