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

export const MyLabel = ( { 
  allCaps = false, 
  classColor,
  label = 'No label', 
  size = 'normal', 
  color,
  backgroundColor = 'transparent'
}: MyLabelProps ) => {
  return (
    <span className={ `label ${ size } ${ classColor && `text-${ classColor }` }` } style={{ color, backgroundColor }}>
        { 
          !allCaps ? label : label.toUpperCase()
        }
    </span>
  )
}
