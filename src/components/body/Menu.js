import React, { Component, useState } from 'react';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { CardColumns, Modal, ModalFooter, Button } from 'reactstrap';
import DISHES from '../../data/dishes';
import COMMENTS from '../../data/Comments';

class Menu extends Component {
  state = {
    dishes: DISHES,
    comments: null,
    selectedDish: null,
    modalOpen: false,
  };

  onSelectDish = (dish) => {
    this.setState({
      selectedDish: dish,
      modalOpen: true,
      comments: this.commentFilter(dish.id, COMMENTS),
    });
  };

  commentFilter = (dishID, comments) => {
    return comments.filter((comment) => {
      if (dishID === comment.dishId) {
        return comment.comment;
      }
    });
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };
  render() {
    document.title = 'Menu';
    const menu = this.state.dishes.map((dish) => {
      return (
        <MenuItem dish={dish} onSelectDish={this.onSelectDish} key={dish.id} />
      );
    });

    return (
      <div className='container'>
        <div className='row'>
          <CardColumns>{menu}</CardColumns>
          <Modal isOpen={this.state.modalOpen}>
            <DishDetail
              selectedDish={this.state.selectedDish}
              comments={this.state.comments}
            />
            <ModalFooter>
              <Button color='primary' onClick={this.toggleModal}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Menu;
