import styled from 'styled-components';

export const A = styled.a`
  text-decoration: none;
`;

export const Nav = styled.nav`
  padding: 20px 10px;
  border-radius: 3px;
  border: 1px solid grey;
  max-width: 100px;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
  cursor: pointer;
`;

export const Text = styled.p`
  letter-spacing: 1;
  font-weight: bold;
  font-size: 20px;
  margin: 7px;
`;

export const CommentText = styled.p`
  letter-spacing: 1;
  font-size: 20px;
  margin-left: 17px;
`;

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 1rem;
  margin: 0 auto;
  box-shadow: -1px 4px 10px 0px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  border: 1px solid grey;
  max-width: 40%;
`;
