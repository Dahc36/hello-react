import React, { Component } from 'react';
import PDF from 'react-pdf-js';

import file from './Guía de estilo React.js.pdf'

class MyPdfViewer extends Component {
	state = {};

	onDocumentComplete = (pages) => {
		this.setState({ page: 1, pages });
	}

	movePage = (movement) => (e) => {
		e.preventDefault();
		this.setState({ page: this.state.page + movement });
	}

	setPage = (page) => (e) => {
		e.preventDefault();
		this.setState({ page: page });
	}


	render() {
		return (
			<div>
				<PDF
					file={file}
					onDocumentComplete={this.onDocumentComplete}
					page={this.state.page}
				/>
				<p>{this.state.page}</p>
				<button onClick={this.movePage(-1)} >Prev</button>
				<button onClick={this.movePage(+1)} >Next</button>
				<button onClick={this.setPage(4)} >Go to 4</button>
			</div>
		)
	}
}

export default MyPdfViewer;