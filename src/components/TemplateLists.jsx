import React, { Component } from 'react';

import './TemplateList.css';

class Templates extends Component {
  state = {
    template: this.props.templateList,
  };

  render() {
    // console.log(this.props.templateList);
    // console.log(this.state.template);
    // console.log(this.state.template[0]);
    let filteredTemplates = this.props.templateList.filter((item)=>{
      return item.name.indexOf(this.props.search) !== -1
    })

    return (
      <>
        <div className="templates-wrapper">
          {this.props.templateList.map((item, key) => {
            return (
              <div className="template-column" key={key}>
                <div className="template-top">
                  <h2>{item.name}</h2>
                  <h4>{item.category}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="template-down">
                  <p>{item.link}</p>

                  <p>{item.created}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="templates-wrapper">
          <div className="template-column">
            <div className="template-content">
              <div className="template-top">
                <h2>Name membership form</h2>
                <h4>Category</h4>
                <p>
                  Description elit. Lorem ipsum, dolor sssumenda ipsam at{' '}
                </p>
              </div>
              <div className="template-down">
                <a href="">link</a>

                <p>Date Created</p>
              </div>
            </div>
          </div>
        </div> */}
      </>
    );
  }
}

export default Templates;
