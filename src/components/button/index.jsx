import './index.css'

/**
 * The Button component.
 * @param { 'button' | 'submit' | 'reset' | 'link' } type - Type of button.
 * @param { function } onClick - Function to handle click event.
 * @param { boolean } disabled - Property the button is disabled.
 * @param { 'color' | 'white' | 'none' } style - Additional CSS class for apply to the button.
 * @param { string } href - URL required only if the type is set to 'link'.
 * @param { ReactNode } children - The content of the button.
 *
 * @returns { JSX.Element } - The rendered Button component.
 */
const Button = ({
  type = 'button',
  onClick,
  disabled = false,
  style = 'none',
  href = '#',
  children
}) => {

	const commonProps = {
    type,
    onClick,
		disabled,
    className: `btn btn__${style}`
  };

	return (type === 'link') ? (
    <a {...commonProps} href={href}>
      {children}
    </a>
  ) : (
    <button {...commonProps}>
      {children}
    </button>
  );
};

export default Button;
