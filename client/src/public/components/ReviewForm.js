import {Form, Button} from  'semantic-ui-react'
function ReviewForm({handleReview}){
    return(
        <Form reply type="submit" onSubmit={handleReview}>
            <Form.TextArea />
            <Button content='Please leave a review' labelPosition='left' icon='edit' primary />
         </Form>
        )
}

export default ReviewForm;