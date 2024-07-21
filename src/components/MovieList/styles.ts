import styled from "styled-components";

interface MovieInfoProps {
    score?: number;
}

const AppButton = styled.button`
    background-color: blue;
    color: white;
    font-size: 16px;
    border: none;
`;

const MovieSection = styled.section`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    box-sizing: border-box;
`

const MovieElement = styled.article`
    background: ${props => props.theme.colors.background};
    border-radius:0px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    overflow: hidden;
    padding: 15px;
    box-sizing: border-box;
    transition: all .25s linear;

    &:hover {
        transform: scale(1.03);
    }
`;

const MovieImage = styled.img`
    width: 100%; 
    height: auto;
`;

const MovieTitle = styled.h3`
    margin: 10px 0;
    font-size: 19px;
    text-align: center;
    font-weight: 600;
`;

const MovieInfo = styled.p<MovieInfoProps>`
    margin: 5px 0;
    text-align: center;
    font-weight: 600;
    color: ${props => {
        const score = props.score ?? 0
        if(score >= 8) return 'green';
        if(score >= 5) return 'goldenrod';
        return 'red';
    }};

    span {
        font-weight: 400;
    }
`;

const MovieListTitle = styled.h1`
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 6rem 0 1rem 0;
   font-size: 2.55rem;
   font-weight: ${props => props.theme.fonts.weight.bold};
   letter-spacing: ${props => props.theme.fonts.spacing.small};
   text-transform: capitalize;

`;

export {
    AppButton,
    MovieSection,
    MovieElement,
    MovieImage,
    MovieTitle,
    MovieInfo,
    MovieListTitle,
}