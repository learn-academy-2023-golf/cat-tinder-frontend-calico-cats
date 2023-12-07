import React from 'react'
import { useState } from 'react'
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const CatNew = ({createCat}) => {

    const navigate = useNavigate()

    const [newCat, setNewCat] = useState({
        name: "",
        age: "",
        enjoys: "",
        image: ""
    })

    const handleChange = (e) => {
        setNewCat({...newCat, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        createCat(newCat)
        navigate("/catindex")
    }

    return (
        <>  <div className="CatNew">
                <div className="CatNew1">
                    <h2>Create A New Cat Profile</h2>
                </div>
                <div className="CatNew2">
                    <Form>
                        <FormGroup>
                            <Label for="name">
                                Name
                            </Label>
                            <Input
                                name="name"
                                placeholder="What is your name?"
                                type="text"
                                onChange={handleChange}
                                />
                            <Label for="age">
                                Age
                            </Label>
                            <Input
                                name="age"
                                placeholder="What is your age?"
                                type="number"
                                onChange={handleChange}
                                />
                            <Label for="enjoys">
                                Enjoyment
                            </Label>
                            <Col sm={15}>
                                <Input
                                    name="enjoys"
                                    placeholder="What do you enjoy?"
                                    type="textarea"
                                    onChange={handleChange}
                                />
                            </Col>
                            <Label for="image">
                                Profile Picture
                            </Label>
                            <Col sm={15}>
                                <Input
                                    name="image"
                                    placeholder="Provide URL for your profile picture."
                                    type="textarea"
                                    onChange={handleChange}
                                />
                            </Col>
                        </FormGroup>
                        <Button onClick={handleSubmit}>
                            Submit Profile
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}
export default CatNew