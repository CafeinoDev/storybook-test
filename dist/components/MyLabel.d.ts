/// <reference types="react" />
import './MyLabel.css';
export interface MyLabelProps {
    /**
    * Default label size
    */
    label: string;
    /**
    * Default button size
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Capitalize label
    */
    allCaps?: boolean;
    /**
    * Default color
    */
    classColor?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Custom color
    */
    color?: string;
    /**
    * Custom color
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, classColor, label, size, color, backgroundColor }: MyLabelProps) => JSX.Element;
