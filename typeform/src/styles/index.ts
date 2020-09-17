import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled.main`
    .first {
        background: red;
        overflow: hidden;

        .offset {
            height: 100%;
            width: 100%;
        }

        .a {
            background: #f5f1ea;
            height: 100%;
            display: flex;
            align-items: flex-end;

            .left-side {
                background: #7dbb91;
                height: 100%;
                width: 50% 
            }
            .right-side {
                height: 100%;
                width: 50%;

                .right-image{ 
                    background: #7dbb91;
                    height: 100%;
                    width: 100%;
                }
            }
        }

        .b {
            background: #582534;
            height: 100%;
            width: 100%;
        }

        .c {
            background: #0a7397;
            height: 100%;
            width: 100%;
        }
    }

    .second {
        background: green;
    }

    .thirt {
        background: yellow;
    }

    .fourth {
        background: blue;
    }
`;

export const Section = styled.div`
    position: relative;
`;
export const Sticky = styled(motion.div)`
    height: 100vh;
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
`;