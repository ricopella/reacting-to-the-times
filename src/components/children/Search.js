import React, {Component} from "react";
import {Link} from "react-router-dom";
import API from "../../utils/helpers";
import moment from "moment";

class Search extends Component {
  state = {
    articles: [],
    title: "",
    term: "",
    startYear: "",
    endYear: ""
  }

  componentDidMount() {
    // this.loadArticles();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    let startYear = parseInt(this.state.startYear);
    let endYear = parseInt(this.state.endYear);
    let term = this.state.term;
    console.log(startYear, endYear);

    if (!this.state.term) {
      // TODO replace with modal <--------------------------
      alert("please input a search")
    } else if (startYear.toString().length < 4 || startYear.toString().length > 4 || endYear.toString().length < 4 || endYear.toString().length > 4 || term.length <= 2 || isNaN(startYear) || isNaN(endYear)) {
      alert("Search Parameters Incorrect")
    } else {
      this.loadArticles(this.state.term, this.state.startYear, this.state.endYear)
      this.setState({term: "", startYear: "", endYear: ""})
    }
  }
  clearForm = event => {
    event.preventDefault();
    this.refs.startYear.value = "";
    this.refs.endYear.value = "";
    this.refs.term.value = "";
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  };

  loadArticles = (search, startYear, endYear) => {
    API
      .runQuery(search, startYear, endYear)
      .then(res => {
        console.log(res);
        if (res.data.response.docs.length === 0) {
          // TODO replace with modal <--------------------------
          alert("No Results Found");
        } else {
          this.setState({articles: res.data.response.docs, title: ""})
        }
      })
      .catch(err => console.log(err));
  }

  saveArticle = (article) => {
    API
      .saveArticle({title: article.title, url: article.url})
      .catch(err => console.log(err));
  }

  render() {

    return (
      <section id="searc-results">
        <div className="container">
          <div className="jumbotron">
            <h1 className="text-center">
              <strong>
                <i className="fa fa-newspaper-o"></i>
                New York Times Search</strong>
            </h1>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <br/>
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    <strong>
                      <i className="fa  fa-list-alt"></i>
                      Search Parameters</strong>
                  </h3>
                </div>
                <div className="panel-body">

                  <form role="form">

                    <div className="form-group">
                      <label>Search Term:</label>
                      <input
                        value={this.state.term}
                        onChange={this.handleInputChange}
                        name="term"
                        placeholder="Required"
                        type="text"
                        className="form-control"
                        id="search-term"
                        ref="term"
                        required/>
                    </div>

                    <div className="form-group">
                      <label>Start Year (Optional):</label>
                      <input
                        value={this.state.startYear}
                        onChange={this.handleInputChange}
                        name="startYear"
                        placeholder="Example: 2000"
                        type="text"
                        className="form-control"
                        id="start-year"
                        ref="startYear"/>
                    </div>

                    <div className="form-group">
                      <label>End Year (Optional):</label>
                      <input
                        value={this.state.endYear}
                        onChange={this.handleInputChange}
                        name="endYear"
                        placeholder="Example: 2017"
                        type="text"
                        className="form-control"
                        id="end-year"
                        ref="endYear"/>
                    </div>

                    <button
                      onClick={this.handleFormSubmit}
                      type="submit"
                      className="btn btn-primary"
                      id="run-search">
                      <i className="fa fa-search"></i>
                      Search</button>
                    <button
                      onClick={this.clearForm}
                      type="button"
                      className="btn btn-secondary"
                      id="clear-all">
                      <i className="fa fa-trash"></i>
                      Clear Results</button>

                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <br/>

              <div className="panel panel-primary">

                <div className="panel-heading">
                  <h3 className="panel-title">
                    <strong>
                      <i className="fa fa-table"></i>
                      Results</strong>
                  </h3>
                </div>

                <div className="panel-body" id="well-section"></div>
                <div className="list-overflow-container">
                  <ul className="list-group">
                    {this
                      .state
                      .articles
                      .map(article => (
                        <li className="list-group-item" key={article._id}>
                          <a target="_blank" href={article.web_url}>{article.headline.main}</a>
                          <button
                            data-id={article}
                            style={{
                            float: "right"
                          }}
                            className="btn btn-primary"
                            onClick={() => this.saveArticle({title: article.headline.main, url: article.web_url})}>Save</button>
                          <p>Published Date: {moment
                              .utc(article.pub_date)
                              .format('MMMM Qo YYYY hh:MM A')}</p>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Search;