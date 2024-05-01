import classNames from 'classnames';
import styles from './startups.module.scss';

export interface StartupsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Startups = ({ className }: StartupsProps) => {
    return <div className={classNames(styles.root, className)}>Startups</div>;
};
