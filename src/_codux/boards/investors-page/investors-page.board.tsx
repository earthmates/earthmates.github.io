import { createBoard } from '@wixc3/react-board';
import { InvestorsPage } from '../../../components/investors-page/investors-page';

export default createBoard({
    name: 'InvestorsPage',
    Board: () => <InvestorsPage />,
    isSnippet: true,
});