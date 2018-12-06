import React, { PureComponent } from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody } from 'reactstrap';
import PropTypes from "prop-types";
import { TopicCard, TopicCardSelect } from "../CategoriesInitPage/Styled";
import FragmentCard from "./FragmentCard";
import Loading from "../../common/Loading/Loading"


import axios from 'axios';

export default class FragmentsView extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            fragments: null
        };
    }

    componentDidMount(){
      let id = this.props.match.params.topic_id
      axios({
        method: "get",
        url:
          "https://luckyread-backend.herokuapp.com/api/fragments/by_topic/"+ id,
      }).then(response => {
          console.log('FRAGMENTOS');
          console.log(response)
          this.setState({
              fragments: response.data.fragments
          });
        })
        .catch(function(error) {

        });
    }

    renderFragmentCard(){
      const domFragments = this.state.fragments.map(fragment => {
        return (
          <FragmentCard
            key={fragment.id}
            title={fragment.title}
            introduction={fragment.introduction}
            image={fragment.base64_image}
            id={fragment.id}
          />
        );
      });
      return domFragments;
    }

    render() {

      const cards = this.state.fragments ? (
        <CardColumns id="TopicsFragments">
         {this.renderFragmentCard()}
       </CardColumns>
     ): (<Loading/>)


        return (
          <div>
            <br/>
            {cards}
          </div>
        )
    }
}
