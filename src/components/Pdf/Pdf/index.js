import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import 'react-pdf/dist/Page/AnnotationLayer.css'
import PropTypes from 'prop-types';

import './index.css';
import { binarySearchInOrderedRange } from '@/constants/utils/functions';

class Viewer extends Component {
  // state = {
  //   loadingAction: false,
  //   loadingDocument: true,
  //   loadingPages: 0
  // }

  containerRef = null
  pageRefs = {}

  // static getDerivedStateFromProps(props, state) {
  //   let loadingAction = props.shouldScroll ? true : false;
  //   return {
  //     ...state,
  //     loadingAction
  //   };
  // }

  componentDidMount() {
    let scrollingTimer = null;

    this.containerRef.addEventListener('scroll', _ => {
      if(this.props.shouldScroll) {
        this.props.onPageChange();
      } else {
        if(scrollingTimer !== null) {
          clearTimeout(scrollingTimer);
        }

        scrollingTimer = setTimeout(() => {
          this.handleScroll();
        }, 150);
      }
    });
  }

  // componentDidUpdate() {
  //   if(!this.props.documentLoading && 
  //     (this.props.pagesLoaded === this.props.pagesTotal)) {

  //     if(this.props.shouldScroll) {
  //       if(this.props.pageCurrent > 0 && this.props.pageCurrent <= this.props.pagesTotal) {
  //         this.goTo(this.props.pageCurrent);
  //         // setTimeout(() => {  }, 0);
  //         // setTimeout(() => {  }, 0);
  //         // this.setState(_ => ({ loadingAction: false }));
  //         // setTimeout(() => { this.setState(_ => ({ loadingAction: false })); }, 0);
  //       } else {
  //         this.props.onScroll(this.getcurrentPage());
  //       }
  //     }
  //   }
  // }

  componentWillUnmount() {
    this.containerRef.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    console.log('handleScroll');
    this.props.onScroll(this.getcurrentPage());
  }

  getcurrentPage() {
    return binarySearchInOrderedRange(
      this.containerRef.scrollTop,
      [...Array(this.props.pagesTotal)].map((_, index) => (
        this.pageRefs[index].ref.offsetTop - this.pageRefs[0].ref.offsetTop
      ))
    ).minPosition + 1;
  }

  handleDocumentLoadSuccess = (e) => {
    const { numPages } = e;
    this.setState(() => ({ loadingDocument: false }));
    this.props.onDocumentLoadSuccess(numPages);
  }

  handlePageLoadSuccess = () => {
    this.props.onPageLoadSuccess();
    this.setState(() => ({ loadingPages: this.props.pagesLoaded / this.props.pagesTotal * 100 }));
  }

  movePage = (movement) => (e) => {
    e.preventDefault();
    console.log('move');
    // Promise.resolve().then(() =>this.setState(_ => ({ loadingAction: true }));
    // Promise.resolve().then(() => { this.props.onPageMovement(this.props.pageCurrent + movement) });
    this.props.onPageMovement(this.props.pageCurrent + movement)
  }

  bigger = (size) => (e) => {
    e.preventDefault();
    this.props.onScaleMovement(this.props.scale + size);
  }

  setPage = (pageNumber) => (e) => {
    e.preventDefault();
    this.props.onPageMovement(pageNumber);
  }

  goTo = (pageNumber) => {
    console.log('goTo');
    if(!this.props.documentLoading) {
      this.containerRef.scrollTo(
        this.containerRef.scrollLeft,
        this.pageRefs[pageNumber - 1].ref.offsetTop - this.containerRef.offsetTop
      );
    }
  }

  renderError = (dato) => {
    return `Error al cargar ${dato}`;
  }

  renderLoading = (dato) => {
    return `Cargando ${dato}...`;
  }

  renderNoData = (dato) => {
    return `No se especificó ${dato}`;
  }

  renderPages = () => {
    if(!this.props.documentLoading &&
      this.props.pagesTotal > 0 &&
      this.props.tags.length > 0) {
      this.pageRefs = Array(this.props.pagesTotal);
      return (
        [...Array(this.props.pagesTotal)].map((_, index) => {
          return (
            <Page
              key={`page-${index + 1}`}
              name={`page-${index + 1}`}
              pageNumber={index + 1}
              ref={(ref) => this.pageRefs[index] = ref}
              onLoadSuccess={this.handlePageLoadSuccess}
              loading={this.renderLoading('página')}
              error={this.renderError('página')}
              noData={this.renderNoData('página')}
              scale={this.props.scale} />
          );
        })
      );
    } else {
      return null;
    }
  }

  renderTags = () => {
    if(!this.props.documentLoading && this.props.pagesTotal > 0) {
      return this.props.tags.map(tag => (
        <div
          className="pdf-viewer_tag"
          key={tag.id}
          onClick={this.setPage(tag.page)} >
          {tag.name}
        </div>
      ));
    } else {
      return null;
    }
  }

  renderPdfNavBar = () => {
    const { file, pagesTotal, pageCurrent, scale } = this.props;

    return file ? (
      <div className="pdf-viewer_nav-bar" >
        <p>Page {pageCurrent} of {pagesTotal}</p>
        <p>Scale: {Math.round(scale * 100, 0)}%</p>
        <button
          
          onClick={this.movePage(-1)} >Prev</button>
        <button
          
          onClick={this.movePage(1)} >Next</button>
        <button
          
          onClick={this.bigger(-0.1)} >Smaller</button>
        <button
          
          onClick={this.bigger(0.1)} >Bigger</button>
          <h2>Button: {this.props.shouldScroll.toString()}</h2>
          <h2>Document: {this.state.loadingDocument.toString()}</h2>
          <h2>Pages: {this.state.loadingPages.toString()}</h2>
      </div>
    ) : null;
  }

  renderDocument = () => {
    const { file } = this.props;

    return file ? (
      <Document
        file={file}
        loading={this.renderLoading('PDF')}
        onLoadSuccess={this.handleDocumentLoadSuccess}
        error={this.renderError('PDF')}
        noData={this.renderNoData('PDF')} >
        {this.renderPages()}
      </Document>
    ) : (
      <p>Seleccionar PDF</p>
    );
  }

  render() {
    return (
      <div className="pdf-viewer" >
        {this.renderPdfNavBar()}

        <div
          className="pdf-viewer_container"
          ref={(ref) => this.containerRef = ref} >
          {this.renderDocument()}
        </div>

        {this.renderTags()}
      </div>
    )
  }
}

Viewer.propTypes = {
  documentLoading: PropTypes.bool.isRequired,
  file: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  onDocumentLoadSuccess: PropTypes.func.isRequired,
  onPageLoadSuccess: PropTypes.func.isRequired,
  onPageMovement: PropTypes.func.isRequired,
  onScroll: PropTypes.func.isRequired,
  pageCurrent: PropTypes.number.isRequired,
  pagesLoaded: PropTypes.number.isRequired,
  pagesTotal: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired,
  tags: PropTypes.array
};

Viewer.defaultProps = {
  tags: []
}

export default Viewer;