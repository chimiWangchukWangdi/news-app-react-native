import { Heading } from "native-base";
import styled from 'styled-components/native';
import { customTheme } from "../../styles/theme";

const StyledHomeScreen = styled(Heading)`
 color: ${() => `${customTheme.colors.yellow}fc`}
`
export default StyledHomeScreen;

