import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
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
        font-size: 14px;
        text-align: center;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

        &:focus::-webkit-input-placeholder 
        {
            color: transparent;
        }
    }
`;

export const BannerImage = styled.img`
    width: 70vw;
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
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

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


