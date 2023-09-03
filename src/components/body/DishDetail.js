import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComments';
const DishDetail = (props) => {
  const { image, title, price, description } = props.selectedDish;
  return (
    <div>
      <Card className='my-2'>
        <CardImg
          alt='Card image cap'
          src={image}
          style={{
            height: '100%',
          }}
          top
          width='100%'
        />
        <CardBody style={{ textAlign: 'left' }}>
          <CardTitle tag='h5'>{title}</CardTitle>
          <CardText>{description}</CardText>
          <CardText>{price}/-</CardText>

          <hr />
          <LoadComments comments={props.comments} />
        </CardBody>
      </Card>
    </div>
  );
};

export default DishDetail;
