import styled from 'styled-components';

export const Card = styled.div`
  background-color: rgb(var(--card-background));
  border-radius: 16px;
  box-shadow: 0px 0px 32px rgba(var(--primary), .1);

  padding: ${
    props => {
      if (props.small) {
        return '8px;'
      }

      if (props.medium) {
        return '16px;'
      }

      return '32px;';
    }
  }
`;
