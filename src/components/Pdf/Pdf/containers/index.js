import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fileLoaded,
  pageLoaded,
  setPageButton,
  setPageButtonSuccess,
  setPageScroll,
  setScale
} from '@/redux/actionCreators/pdfViewer';
import PdfViewer from '@/components/Pdf';

const mapStateToProps = ({ pdfViewer }, ownProps) => ({
  documentLoading: pdfViewer.documentLoading,
  file: pdfViewer.file,
  pageCurrent: pdfViewer.page,
  shouldScroll: pdfViewer.shouldScroll,
  tags: ownProps.tags,
  pagesLoaded: pdfViewer.pagesLoaded,
  pagesTotal: pdfViewer.pagesTotal,
  scale: pdfViewer.scale
});

const mapDispatchToProps = (dispatch) => ({
  onDocumentLoadSuccess: (pagesTotal) => { dispatch(fileLoaded(pagesTotal)) },
  onPageChange: () => { dispatch(setPageButtonSuccess()) },
  onPageLoadSuccess: () => { dispatch(pageLoaded()) },
  onPageMovement: (value) => { dispatch(setPageButton(value)) },
  onScaleMovement: (value) => { dispatch(setScale(value)) },
  onScroll: (value) => { dispatch(setPageScroll(value)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(PdfViewer);