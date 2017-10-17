import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor() {
    super();

    this.handleOkBtnClick = this.handleOkBtnClick.bind(this);
    this.handleCloseBtnClick = this.handleCloseBtnClick.bind(this);
  }

  createTitle() {
    const { title } = this.props;

    return (
      <p>{title}</p>
    );
  }

  createOkButton() {
    return (
      <button onClick={this.handleOkBtnClick}>OK</button>
    );
  }

  createCloseButton() {
    return (
      <button onClick={this.handleCloseBtnClick}>Close</button>
    );
  }

  handleOkBtnClick() {
    console.log('You clicked OK!');
  }

  handleCloseBtnClick() {
    console.log('You clicked Close!');
  }

  render() {
    const title = this.createTitle();
    const okBtn = this.createOkButton();
    const closeBtn = this.createCloseButton();

    return (
      <div>
        {title}
        <footer>
          {okBtn}
          {closeBtn}
        </footer>
      </div>
    );
  }
}

class ConfirmModal extends Modal {
  constructor() {
    super();
  }

  createHeader() {
    const title = super.createTitle();

    return (
      <header>
        {title}
      </header>
    );
  }

  createFooter() {
    const confirmBtn = super.createOkButton();
    const cancelBtn = super.createCloseButton();

    return (
      <footer>
        {confirmBtn}
        {cancelBtn}
      </footer>
    );
  }

  render() {
    const header = this.createHeader();
    const footer = this.createFooter();

    return (
      <div>
        {header}
        {footer}
      </div>
    );
  }
}
