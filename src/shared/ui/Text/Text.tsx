import {HTMLProps, ReactNode, memo} from "react";
import styles from './Text.module.scss';
import { classNames } from "~/shared/lib/classNames";

export type TextVariant = 'normal' | 'bold' | 'italic';
export type TextSize = 's' | 'm' | 'l';
export type TextColor = 'main' | 'secondary' | 'accent' | 'background';

interface TextProps {
    className?: string;
    variant?:   TextVariant;
    size?:      TextSize;
    color?:     TextColor;
    children?:  ReactNode;
    style?: any
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        variant = 'normal',
        size = 'm',
        color = 'main',
        children,
        style
    } = props;

    return (
        <div {...props}>{children}</div>
    )
})
