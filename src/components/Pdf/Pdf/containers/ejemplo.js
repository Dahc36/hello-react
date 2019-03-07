import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  setFile,
  setPageButton
} from '@/redux/actionCreators/pdfViewer';
import PdfViewer from '@/components/Pdf/containers';

class EjemploPdfViewer extends Component {
  handleClickFile1 = () => {
    this.props.setFile('http://localhost:8001/storage/documents/2019/03/04/F236D36A-C4A6-49F9-BD8A-F71760FB9A5D.pdf');
  }

  handleClickFile2 = () => {
    this.props.setFile('http://localhost:8001/storage/documents/2019/02/20/387B44D4-C4EA-4F51-90CE-92D8996BAD57.pdf');
  }

  handleClickPage = (page) => () => {
    this.props.setPage(page);
  }

  handleChange = (fileEvent) => {
    let reader = new FileReader();
    reader.readAsDataURL(fileEvent.target.files[0]);
    reader.onload = (urlEvent) => {
      this.props.setFile(urlEvent.target.result);
    }
  }

  render() {
    const { pageCurrent, pagesTotal } = this.props;
    const tags = [
      { id: 1, name: 'Página 3', page: 3 },
      { id: 2, name: 'Página 5', page: 5 },
      { id: 3, name: 'Página 1', page: 1 },
      { id: 4, name: 'Página 7', page: 7 },
      { id: 5, name: 'Página 2', page: 2 },
      { id: 6, name: 'Página 4', page: 4 },
      { id: 7, name: 'Página 10', page: 10 }
    ];
    return (
      <div>
        <div style={{ border: '2px solid red' }} >
          <h2>Fuera del componente PDF</h2>
          <input
            type="file"
            onChange={this.handleChange} />
          <p>Página {pageCurrent} de {pagesTotal}</p>
          <button onClick={this.handleClickFile1} >Cambiar archvio 1</button>
          <button onClick={this.handleClickFile2} >Cambiar archvio 2</button>
          <button onClick={this.handleClickPage(3)} >Cambiar página desde afuera (5)</button>
        </div>
        <PdfViewer tags={tags} />
      </div>
    );
  }
};

const mapStateToProps = ({ pdfViewer }) => ({
  pageCurrent: pdfViewer.page,
  pagesTotal: pdfViewer.pagesTotal
});

const mapDispatchToProps = (dispatch) => ({
  setFile: (value) => { dispatch(setFile(value)) },
  setPage: (value) => { dispatch(setPageButton(value)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(EjemploPdfViewer);