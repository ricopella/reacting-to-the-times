import React, {Component} from "react";
import {Link} from "react-router-dom";
import API from "../../utils/helpers";
import CommentBox from "./CommentBox";
import moment from "moment";

class Saved extends Component {

  state = {
    articles: [],
    title: "",
    term: "",
    commentName: "",
    commentId: ""
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  componentDidMount() {
    this.loadSaved();
  }

  loadSaved = () => {
    API
      .getSavedArticles()
      .then(res => {
        console.log(res.data);
        this.setState({articles: res.data, title: ""})
      })
      .catch(err => console.log(err));
  }

  handleFormSubmit = event => {}

  submitComment = data => {

    console.log("Ok lets try this", data);
  }

  deleteSaved = data => {
    let articleId = data.id
    API
      .deleteArticle(articleId)
      .then(res => {
        this.loadSaved();
      })
      .catch(err => console.log(err));
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <br/>

            <div className="panel panel-primary">

              <div className="panel-heading">
                <h3 className="panel-title">
                  <strong>
                    <i className="fa fa-table"></i>
                    Saved Articles</strong>
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
                        <a href={article.url}>{article.title}</a>
                        <button
                          className="btn btn-danger"
                          data-id={article._id}
                          style={{
                          float: "right"
                        }}
                          onClick={() => this.deleteSaved({id: article._id})}>Delete</button>
                        <p>Date Saved: {moment
                            .utc(article.date)
                            .format('MMMM Qo YYYY hh:MM A')}
                          <em>(UTC)</em>
                        </p>
                        <form>
                          <CommentBox
                            data-id={article._id}
                            onClick={() => this.submitComment({id: article._id})}/>

                        </form>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Saved;