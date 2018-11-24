import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import './todo.css';

class Todo extends Component {
	state = {
		database: [],
		input: '',
		buttonView: false,
		id: 0
	};

	handleChange = (e) => {
		this.setState({
			input: e.target.value
		});
		console.log(this.state.input);
	};

	addData = () => {
		const database = this.state.database;
		const dataInput = this.state.input;
		database.push(dataInput);
		localStorage.setItem('todos', JSON.stringify(database));
		// console.log(database);
		this.setState({
			input: ''
		});
	};

	getData = () => {
		let getItem = JSON.parse(localStorage.getItem('todos'));
		if (getItem !== null) {
			return this.setState({
				database: getItem
			});
		}
		console.log(getItem);
	};

	getDataId = (index) => {
		const database = this.state.database;
		const getData = database[index];
		this.setState({
			input: getData,
			buttonView: true,
			id: index
		});
	};

	editData = (id) => {
		const database = this.state.database;
		database.splice(id, 1, this.state.input);
		localStorage.setItem('todos', JSON.stringify(database));
		this.getData();
		this.setState({
			input: '',
			buttonView: false
		});
	};

	buttonCancel = () => {
		this.setState({
			buttonView: false,
			input: ''
		});
	};

	deleteData = (index) => {
		const database = this.state.database;
		database.splice(index, 1);
		localStorage.setItem('todos', JSON.stringify(database));
		// console.log(database);
		this.getData();
	};
	componentDidMount() {
		this.getData();
	}

	render() {
		return (
			<div className="backgroundtodo">
				<h1 align="center">Todo</h1>
				<Input type="text" onChange={this.handleChange} value={this.state.input} />
				<br />

				{this.state.buttonView ? (
					<div>
						<Button onClick={() => this.editData(this.state.id)}>Edit</Button>
						<Button onClick={() => this.buttonCancel()}>Batal</Button>
					</div>
				) : (
					<Button onClick={() => this.addData()}>Simpan</Button>
				)}

				<ul>
					{this.state.database.map((datum, index) => {
						return (
							<div>
								<li>{datum}</li>
								<Button onClick={() => this.deleteData(index)}>Hapus</Button>
								<Button onClick={() => this.getDataId(index)}>Edit</Button>
							</div>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default Todo;
