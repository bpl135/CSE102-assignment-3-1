import Link from 'next/link'

export default function FirstPage() {
	return (
		<>
			<h5>Task-3-Own Message</h5>
			<h2>My name: Ha Eun, Jung</h2>
			<h2>My class: 21</h2>
			<h2>My department: Information System</h2>
			<h2>My hobby: Sleeping</h2>
			<h1> </h1>
			<h4>
				<Link href="/">
					<a>Back to home</a>
				</Link>
			</h4>
		</>
	);
}

