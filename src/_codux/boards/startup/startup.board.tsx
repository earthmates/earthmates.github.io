import { createBoard } from '@wixc3/react-board';
import { Startups } from '../../../components/startups/startups';

export default createBoard({
    name: 'Startup',
    Board: () => <Startups />,
    isSnippet: true,
    environmentProps: {
windowWidth: 1813,
windowHeight: 1509
}
});
