import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes }) {

  const blockProps = useBlockProps.save(
    { className: 'woodoo-tech-switcher' }
  );

	return (
		<div { ...blockProps }>
      <div className="wp-block-columns alignwide is-layout-flex">
      { attributes.technologies.map( ( technology, index ) => {
        return (
          <div className="wp-block-column is-layout-flow">
            <a className={`woodoo-tech-switcher-button`} href={`/${technology.link}`}>
              <svg className="tech-circles" width="60" height="30" viewBox="0 0 60 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3828 29.0742C22.1568 29.0742 28.4589 22.7721 28.4589 14.998C28.4589 7.22398 22.1568 0.921875 14.3828 0.921875C6.60875 0.921875 0.306641 7.22398 0.306641 14.998C0.306641 22.7721 6.60875 29.0742 14.3828 29.0742Z" fill="currentColor"/>
                <path d="M45.8379 29.0742C53.6119 29.0742 59.914 22.7721 59.914 14.998C59.914 7.22398 53.6119 0.921875 45.8379 0.921875C38.0638 0.921875 31.7617 7.22398 31.7617 14.998C31.7617 22.7721 38.0638 29.0742 45.8379 29.0742Z" fill="currentColor"/>
              </svg>
              {technology.name}
            </a>
            <div className='woodoo-tech-switcher-description' dangerouslySetInnerHTML={{__html: technology.description}}>
            </div>
          </div>
        )
      })}
      </div>
		</div>
	);
}
