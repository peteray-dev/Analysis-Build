import React, { PropTypes } from 'react';
import './header.css';
import axios from 'axios';
import Notification from './notification';
import Templates from './TemplateLists';

class Header extends React.Component {
  state = {
    template: [],
    originTemplate: [],
    err: null,
    templateCat: '',
    filterDropdown: [],
    sortOrder: '',
    sortDate: '',
    search: '',
  };

  componentDidMount() {
    axios
      .get(
        'https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates'
      )
      .then((res) => {
        this.setState({
          template: res.data,
          originTemplate: res.data
        });
        // console.log(res.data)
      })
      .catch((err) =>
        this.setState({
          err: { ...err.response },
        })
      );
  }

  handleChangeTemplate = (event) => {
    const templateCategory = event.target.value;
    console.log(templateCategory);

    if(templateCategory === 'All'){
      return this.state.originTemplate
    }

    const filterDropdownRes = this.state.template
      .slice(0, 100)
      .filter((item)=>{
        // return item.name.indexOf(templateCategory) !== -1
  
        if( item.category === ''){
          return this.state.originTemplate
        } 
        if(item.category === templateCategory){
          return item
        }
      });

    this.setState({
      templateCat: templateCategory,
      template: filterDropdownRes,
    });
  };

  handleSortingOrder = (e) => {
    const sorting = e.target.value;

    const sortingOrderRes = this.state.template.sort((a, b) => {
      if (sorting === 'Default') {
        return a.link > b.link ? 1 : -1;
      }
      if (sorting === 'ascending') {
        return a.name > b.name ? 1 : -1;
      }
      if (sorting === 'descending') {
        return a.name < b.name ? 1 : -1;
      }
    });

    this.setState({
      sortOrder: sorting,
      template: sortingOrderRes,
    });
  };

  handleSortingDate = (e) => {
    const sorting = e.target.value;
    console.log(sorting);
    const sortingDateRes = this.state.template.sort((a, b) => {
      if (sorting === 'Default') {
        return this.state.template;
      }
      if (sorting === 'ascending') {
        return a.created > b.created ? 1 : -1;
      }
      if (sorting === 'descending') {
        return a.created < b.created ? 1 : -1;
      }
    });

    this.setState({
      sortDate: sorting,
      template: sortingDateRes,
    });
  };

  handleSearch = (e) => {
    const searchVal = e.target.value;

    // const searchInput = this.state.search

    const searchWord = this.state.template.filter((item) => {
      if (searchVal === '') {
        return item;
      } else if (item.name.toLowerCase().includes(searchVal.toLowerCase())) {
        return item;
      }
    });
    console.log(searchVal);
    this.setState({
      search: searchVal,
      template: searchWord,
    });
  };
  render() {
    // console.log(this.state.originTemplate)
    

    return (
      <>
        <div className="header">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search Templates"
              value={this.state.search}
              onChange={this.handleSearch}
            />
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
                <option value='All'>All</option>
                <option value='Education'>Education</option>
                <option value='E-commerce'>E-commerce</option>
                <option value='Health'>Health</option>

                {/* {this.state.template.slice(0, 1).map((item, key) => {
                  return (
                    <div key={key}>
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
                    </div>
                  );
                })} */}
              </select>
            </div>

            <div className="order sort-bar">
              <label>Order</label>
              <br />
              <select
                name="order"
                id="order"
                value={this.state.sortOrder}
                onChange={this.handleSortingOrder}
              >
                <option value="default">Default</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
            <div className="date sort-bar">
              <label>Date</label>
              <br />
              <select
                name="date"
                id="date"
                value={this.state.sortDate}
                onChange={this.handleSortingDate}
              >
                <option value="default">Default</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </div>
        </div>

       

        <Notification />
        <div className="filterDetails">
          <div className="filterName">
            {`${this.state.templateCat} Templates`}
          </div>

          <div className="filterNumber">
            {`${this.state.template.length} Templates Found`}
          </div>
        </div>

        <Templates templateList={this.state.template} search={this.state.search} />
      </>
    );
  }
}

export default Header;
