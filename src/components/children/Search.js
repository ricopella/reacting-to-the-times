import React, {Component} from "react";
import {Link} from "react-router-dom";
// // Helper Function
import API from "../../utils/helpers";

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      title: ""
    };
  }
  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API
      .runQuery("boston+red+sox")
      .then(res => {
        this.setState({articles: res.data.response.docs, title: ""})
        console.log(this.state.articles)
      })
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
                      <input type="text" className="form-control" id="search-term"/>
                    </div>

                    <div className="form-group">
                      <label >Number of Records to Retrieve:</label>
                      <select className="form-control" id="num-records-select">
                        <option value="1">1</option>

                        <option value="5" selected>5</option>
                        <option value="10">10</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label >Start Year (Optional):</label>
                      <input type="text" className="form-control" id="start-year"/>
                    </div>

                    <div className="form-group">
                      <label >End Year (Optional):</label>
                      <input type="text" className="form-control" id="end-year"/>
                    </div>

                    <button type="submit" className="btn btn-default" id="run-search">
                      <i className="fa fa-search"></i>
                      Search</button>
                    <button type="button" className="btn btn-default" id="clear-all">
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