import React from 'react';
import { Document, Page } from 'react-pdf';
import PDF from 'react-pdf-js';

class PdfOutPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pdf: null
        };
        this.onDocumentComplete = this.onDocumentComplete.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.renderPagination = this.renderPagination.bind(this);
        this.handleData = this.handleData.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        state = ({
            pdf: props.filePdf
        })
        return state;
    }

    onDocumentComplete(pages) {
        this.setState({ page: 1, pages });
    }

    handlePrevious() {
        let newPage = this.state.page - 1;
        this.setState({ page: newPage });
        this.handleData(newPage);
    }

    handleData(newPage) {
        let _number = {
            target: {
                name: 'page',
                value: newPage
            }
        };
        this.props.onChangeInputPageTag(_number);
    }

    handleNext() {
        let newPage = this.state.page + 1;
        this.setState({ page: newPage });
        this.handleData(newPage);
    }

    renderPagination(page, pages) {
        let previousButton = <li className="previous" onClick={this.handlePrevious}><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
        if (page === 1) {
            previousButton = <li className="previous disabled"><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
        }
        let nextButton = <li className="next" onClick={this.handleNext}><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
        if (page === pages) {
            nextButton = <li className="next disabled"><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
        }
        return (
            <nav>
                <ul className="pager">
                    {previousButton}
                    {nextButton}
                </ul>
            </nav>
        );
    }

    render() {
        let pagination = null;
        if (this.state.pages) {
            pagination = this.renderPagination(this.state.page, this.state.pages);
        }
        return (
            this.state.pdf !== null ?
                <div>
                    <PDF
                        file={this.state.pdf}
                        onDocumentComplete={this.onDocumentComplete}
                        page={this.state.page}
                        scale={0.6} />
                    {pagination}
                </div>
                : <div></div>
        )
    }

    /*constructor(props) {
        super(props);
        this.state = {
            pageNumber: 1,
            numPages: 1,
            pdf: 'http://localhost:8001/storage/documents/2019/02/26/FF93276B-42A9-4C3C-8A43-7C341698C6AA.pdf'
        };
        this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
    }
    onDocumentLoadSuccess(data) {
        console.log(data);
        console.log(data);
        console.log(data);
        this.setState({ numPages: data.numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div>
                <Document
                    file={this.state.pdf}
                    onLoadSuccess={this.onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
        );
    }*/
}


export default PdfOutPage;