import classNames from 'classnames';
import styles from './button.module.scss';
import React from 'react';

export interface ButtonProps {
    className?: string;
    buttonText: string;
    onClick?: () => void;
    color?: string;
}

const defaultClick = () => {
    window.location.href = 'http://192.168.0.125:5174';
};

export const Button: React.FC<ButtonProps> = ({
    className,
    buttonText,
    onClick,
    color = '#ff8516', // Default color if not provided
}: ButtonProps) => {
    const handleClick = onClick || defaultClick;

    return (
        <div
            className={classNames(styles.root, className)}
            onClick={handleClick}
            style={{ backgroundColor: color }}
        >
            {buttonText}
        </div>
    );
};
