import { createBoard } from '@wixc3/react-board';
import Features from '../../../components/features/Features';

export default createBoard({
    name: 'Features',
    Board: () => <Features />,
    isSnippet: true,
    environmentProps: {
windowWidth: 300,
canvasWidth: 454.27734374999994
}
});