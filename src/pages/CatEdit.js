import React from 'react'
import { useState } from 'react'
import { Form, FormGroup, Label, Input, Col } from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom'

const CatEdit = ({ cats, updateCat }) => {

    const { id } = useParams()
    let currentCat = cats?.find((cat) => cat.id === +id)

    const [editCat, setEditCat] = useState({
        name: currentCat?.name,
        age: currentCat?.age,
        enjoys: currentCat?.enjoys,
        image: currentCat?.image
    })
    const handleChange = (e) => {
        setEditCat({ ...editCat, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate()

    const handleSubmit = () => {
        updateCat(editCat, currentCat.id)
        navigate(`/catshow/${currentCat.id}`)
      }

    return (
        <>
            <div className="CatNew">
                <div className="CatNew1">
                    <h2>Edit Profile</h2>
                </div>
                <div className="CatNew2">
                    <Form>
                        <FormGroup>
                            <Label for="name">
                                Name
                            </Label>
                            <Input
                                name="name"
                                value={editCat.name}
                                type="text"
                                onChange={handleChange}
                            />
                            <Label for="age">
                                        Age
                            </Label>
                            <Input
                                name="age"
                                value={editCat.age}
                                type="number"
                                onChange={handleChange}
                            />
                            <Label for="enjoys">
                                Enjoyment
                            </Label>
                            <Col sm={15}>
                                <Input
                                    name="enjoys"
                                    value={editCat.enjoys}
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
                                value={editCat.image}
                                type="textarea"
                                onChange={handleChange}
                            />
                            </Col>
                        </FormGroup>
                            <button onClick={handleSubmit}>
                                Update
                            </button>
                    </Form>
                </div>
            </div>
        </>
    )
}
export default CatEdit