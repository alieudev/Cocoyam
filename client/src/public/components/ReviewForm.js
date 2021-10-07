import {Form, Button, Rating} from  'semantic-ui-react'
function ReviewForm({handleReview, setRating, rating, remarks, setRemarks}){
    return(
        <Form reply type="submit" onSubmit={handleReview}>
        <h2>Please Rate and Review</h2>
        <div>Rating: {rating}</div>
        <input
          type='range'
          min={0}
          max={5}
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <br />
        <Rating rating={rating} maxRating={5} />
            <Form.TextArea value={remarks} type='text' onChange={(e) => setRemarks(e.target.value)}/>
            <Button content='Review' labelPosition='left' icon='edit' primary />
         </Form>
        )
}

export default ReviewForm;