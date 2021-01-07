import styled from "styled-components";

export const Styles = styled.div`
h1 {
    text-align: center;
    color: #777;
}

form {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 100px auto;
    
    label {
        margin-top: 20px;
    }

    input, select{
        font-size: 1.2em;
    }

    .error {
        color: red,
        font-size: .6em;
    }
}

button {
    background: #1997BF;
    padding: 10px;
    color: white;
    margin-top: 20px;
    border-radius: 5px;
    font-size: 1.2em
    }

div, input{
    margin-top: 20px;
}

#my-radio-subgroup {
    margin-top: 0px;
    padding-bottom: 20px;
}

#right-radio {
    padding-left: 10px;
}

#fileDiv {
    margin-top: 0px;
    padding-bottom: 10px;
}
`;
