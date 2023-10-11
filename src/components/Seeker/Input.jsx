import { Input,Button ,Title} from '@mantine/core';
import './Input.css'

function InputSeeker() {
    return (
    <div className="input-seeker">
        <Title order={1}>What do you want</Title>
            <Input placeholder="Input component" />
        <div className='seeker-button'>
            <Button variant="filled" color="indigo">Button</Button>;
        </div>
    </div>
    );
}

export default InputSeeker;
