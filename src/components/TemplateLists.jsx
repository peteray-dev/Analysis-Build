import React, { Component } from 'react';
import Header from './header';
import Notification from './notification';
import './TemplateList.css';
import axios from 'axios';

class Templates extends Component {
  state = {
    template: [],
    err: null,
  };

  componentDidMount() {
    axios
      .get(
        'https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates'
      )
      .then((res) => {
        this.setState({
          template: res.data,
        });
        // console.log(res.data)
      })
      .catch((err) =>
        this.setState({
          err: { ...err.response },
        })
      );
  }

  render() {
    console.log(this.state.template);
    console.log(this.state.template[0]);
    return (
      <>

      <Header templates ={this.state.template}/> 
       <Notification />
        <div className="templates-wrapper">
 
            {
              this.state.template.map((item)=>{
                return(
                  <div className="template-column">
                    <div className="template-top">
              <h2>{item.name}</h2>
              <h4>{item.category}</h4>
              <p>{item.description}</p>
            </div>
            <div className="template-down">
 
                <a href="">{item.link}</a>
              
              <p>{item.created}</p>
            </div>
            
                </div>
                )
              })
            }
            
          
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
