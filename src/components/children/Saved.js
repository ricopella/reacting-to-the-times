import React, {Component} from "react";
import {Link} from "react-router-dom";
import API from "../../utils/helpers";

class Saved extends Component {

  state = {
    articles: [],
    title: "",
    term: ""
  }

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
                      {article.title}
                      <a href={article.url}>Article Link</a>
                      <button
                        data-id={article._id}
                        onClick={() => this.deleteSaved({id: article._id})}>Delete</button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Saved;