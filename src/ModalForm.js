import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'



export default (props) => {
    const {
        show,
        onHide,
        onCreateClick,
    } = props

    const [name, setName] = useState('')

    const handleCreateClick = (event) => {
        const newUser = {
            name,
            lastName: 'Pupkin',
            phoneNumber: '2452345235'
        }
        onCreateClick(event, newUser)
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Custom Modal Styling
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                    commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                    ipsam atque a dolores quisquam quisquam adipisci possimus
                    laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                    accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                    reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                    deleniti rem!
                </p>
                <Form>
                    <Form.Group>
                        <Form.Label>User</Form.Label>
                        <Form.Control type="input" placeholder="User name" value={name} onChange={e => setName(e.target.value)} />
                    </Form.Group>
                    <Button onClick={handleCreateClick}>Create User</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}
