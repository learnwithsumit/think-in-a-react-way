import styled from 'styled-components';
import Title from '../Title';

// eslint-disable-next-line import/prefer-default-export
export const StyledTitle = styled(Title)`
    color: ${(props) => props.color};
`;
