
import styled from 'styled-components'
import useFormHook from '../helpers/useFormHook'

const ResForm = () => {
    const [firstName, handleFn] = useFormHook('')
    const [lastName, handleLn] = useFormHook('')
    const [email, handleemail] = useFormHook('')
    const [password, handlepass] = useFormHook('')

    return (
        <>
            <form>
                <Field className='active'>
                    <i></i>
                    <input 
                    type='text' 
                    name='firstName'
                    value={firstName}
                    onChange={handleFn}
                    />
                </Field>
                <Field className='innactive'>
                    <i></i>
                    <input 
                    type='text' 
                    name='lastName'
                    value={lastName}
                    onChange={handleLn}
                    />
                </Field>
                <Field className='innactive'>
                    <i></i>
                    <input 
                    type='email' 
                    name='email'
                    value={email}
                    onChange={handleemail}
                    />
                </Field>
                <Field className='innactive'>
                    <i>sd</i>
                    <input 
                    type='password' 
                    name='password'
                    placeholder='enter password'
                    value={password}
                    onChange={handlepass}
                    />
                    <i>sd</i>
                </Field>
            </form>
        </>
    )
}

export default ResForm

const Field = styled.div`

    position: absolute;
    top: 50%;
    left: 65%;
    transform: translate(-50%, -50%);
    background: none;
    height: 4.5rem;
    width: 30rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /*  border-radius: 5px;*/
    transition: all .5s ease;
    /* border-bottom: .2rem solid rgba(224,66,57,.1); */
    animation: 2s border-anim infinite;
    /* #E04239 */
    color: #fefefe;

    


   i,
 i,
    i,
    i,
    i {
    padding: .5rem 1.3rem;
    cursor: pointer; }

    input,
   input,
   input,
   input {
    background: none;
    border: none;
    flex: 1;
    height: 100%;
    outline: none; }
   input::placeholder {
    color: rgba(255, 255, 255, 0.8);
    text-transform: uppercase; }
   input {
    color: #fefefe;
    /* font-family: "Roto", sans-serif; */
 }

   .innactive {
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, 50%); }
   .active {
    opacity: 1;
    pointer-events: all;
    transform: translate(-50%, -50%); }



    @keyframes border-anim{
        0%{
            border-bottom: .15rem solid rgba(224,66,57,.08);
        }
        50%{
            border-bottom: .15rem solid rgba(224,66,57,1);
        }

        100%{
            border-bottom: .15rem solid rgba(224,66,57,.08);
        }
        
    }


`
