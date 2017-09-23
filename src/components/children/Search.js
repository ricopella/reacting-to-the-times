import React, {Component} from "react";
import {Link} from "react-router-dom";
// // Helper Function
import API from "../../utils/helpers";

class Search extends Component {
  state = {
    articles: [],
    title: "",
    term: ""
  }

  componentDidMount() {
    // this.loadArticles();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.term);
    if (this.state.term) {
      // console.log(this.state.term);
      this.loadArticles(this.state.term)
    }
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  loadArticles = (query) => {
    console.log(query);
    API
      .runQuery(query)
      .then(res => {
        this.setState({articles: res.data.response.docs, title: ""})
        console.log(this.state.articles)
      })
      .catch(err => console.log(err));
  }

  saveArticle = (article) => {
    console.log("Title: " + article.title);
    console.log("url: " + article.url);
    API.saveArticle({title: article.title, url: article.url})
    // then load saved books
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
                      <label >Search Term:</label>
                      <input
                        value={this.state.term}
                        onChange={this.handleInputChange}
                        name="term"
                        placeholder="Required"
                        type="text"
                        className="form-control"
                        id="search-term"/>
                    </div>

                    <button
                      onClick={this.handleFormSubmit}
                      type="submit"
                      className="btn btn-default"
                      id="run-search">
                      <i className="fa fa-search"></i>
                      Search</button>
                    {/* <button type="button" className="btn btn-default" id="clear-all">
                      <i className="fa fa-trash"></i>
                      Clear Results</button> */}

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
                      Top Articles</strong>
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
                          {article.headline.main}
                          <a href={article.web_url}>Article Link</a>
                          <button
                            data-id={article}
                            onClick={() => this.saveArticle({title: article.headline.main, url: article.web_url})}>Save</button>
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