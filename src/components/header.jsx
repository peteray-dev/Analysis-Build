import React, { PropTypes } from 'react';
import './header.css';

class Header extends React.Component {
  state = {
    template: {},
    templateCat: '',
  };

  componentDidMount() {
    const templateList = this.props.templates;
    this.setState({
      template: this.props.templates,
    });
  }

  handleChangeTemplate = (event) => {
    this.setState({
      templateCat: event.target.value,
    });
  };

  // const filterDropdown = this.props.templates.filter(result=>{
  //   return result.category === templateCat
  // })
  render() {
    const { category } = this.props.templates;

    console.log(this.props.templates);
    console.log(this.state.template);
    console.log(this.state.templateCat);
    const templateCategory = this.state.templateCat

    const filterDropdown = this.props.templates.filter(function (result) {
      return result.category === templateCategory;
    });

    console.log(filterDropdown)
    return (
      <>
        <div className="header">
          <div className="search-bar">
            <input type="text" placeholder="Search Templates" />
          </div>

          <div className="right-side-bars">
            <h4>Sort by:</h4>
            <div className="category sort-bar">
              <label>Category</label>
              <br />
              <select
                name="category"
                id="category"
                value={this.state.templateCat}
                onChange={this.handleChangeTemplate}
              >
                {this.props.templates.slice(0, 1).map((item) => {
                  return (
                    <>
                      <option value={item.category}>All</option>
                      <option value={item.category[0]}>
                        {item.category[0]}
                      </option>
                      <option value={item.category[1]}>
                        {item.category[1]}
                      </option>
                      <option value={item.category[2]}>
                        {item.category[2]}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>

            <div className="order sort-bar">
              <label>Order</label>
              <br />
              <select name="order" id="order">
                <option value="default">Default</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
            <div className="date sort-bar">
              <label>Date</label>
              <br />
              <select name="date" id="date">
                <option value="default">Default</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
