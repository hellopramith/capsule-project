import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chat from '@material-ui/icons/Chat';
import TextField from '@material-ui/core/TextField';

const styles = {
    section : {
        margin: '4em auto',
        width: '100%',
        maxWidth: '500px',
        padding: '50px',
        border: '3px solid #2196f3',
        borderRadius: '30px'
    },
    button : {
        background: '#2196f3',
        color: '#fff'
    },
    logo : {
        fontSize: '50px',
        color: '#2196f3',
        margin: '0 0 60px'
    }
}

class UserInputSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
        }
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.username);
    }

    onChange(e) {
        this.setState({ username: e.target.value });
    }

    render() {
        return (
            <section style={styles.section}>
                <form onSubmit={this.onSubmit.bind(this)} >
                    <Typography variant="title" style={styles.logo} color="inherit">capsule-chat <Chat style={styles.logo}/></Typography>
                    <TextField
                        id="name"
                        label="Enter the User name"
                        onChange={this.onChange.bind(this)}
                        margin="normal"
                        />
                        <Button style={styles.button} onClick={this.onSubmit.bind(this)} variant="outlined" color="primary" >
                            Submit
                        </Button> 
                </form>
            </section>
        )
    }
}

export default UserInputSection;