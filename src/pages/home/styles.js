import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: #f1f1f1;
    justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;

    input {
        margin-top: 120px;
        width: 80%;
        height: 50px;
        padding: 0px 25px;
        border-radius: 25px;
        border: 0px;
        outline: none;
        box-sizing: border-box;
        font-size: 16px;
        text-align: center;
    }
`;

export const AnimesContainer = styled.div`
    width: 100%;
    margin-top: 22px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const AnimeCard = styled.div`
    width: 180px;
    margin: 8px;
    border-radius: 8px;
    background-color: #fff;

    img {
        border-radius: 8px 8px 0px 0px;
        width: 180px;
        height: 200px;
    }

    div {
        padding: 8px;

        h3 {
            margin-top: 0px;
            margin-bottom: 0px;
            font-size: 16px;
        }

        p {
            margin-top: 8px;
            font-size: 12px;
        }
    }
`;


