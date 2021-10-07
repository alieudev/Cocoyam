import {Form, Button, Rating} from  'semantic-ui-react'
function ReviewForm({handleReview}){
    return(
        <Form reply type="submit" onSubmit={handleReview}>
            <h2>Please Rate and Review</h2>
            <Rating icon='star' defaultRating={0} maxRating={5} />
            <Form.TextArea />
            <Button content='Review' labelPosition='left' icon='edit' primary />
         </Form>
        )
}

export default ReviewForm;