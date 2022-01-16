import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs'
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const CoinTable = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    

    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content has-icon-left">
            <Input type='search' placeholder='Search'/>
            <AiOutlineSearch/>
          </div>
          <div className='table-header mt-16'>
            <p className='form-hint'><b>NAME</b></p>
            <div className='form-group'>
              <p className='form-hint mr-32'><b>PRICE</b></p>
              <p className='form-hint'><b>CHANGE</b></p>
            </div>
          </div>
          <div className='table'>
          
            <article className='table-border'>
            
              <div className='table-sub-border'>
                <div className='mr-16'>
                <Image
                      src={require('./../../assets/images/btc-icon.png')}
                      alt="bitcoin-icon"
                      width={30}
                      height={30} />
                </div>
                
                <div className='mr-8'>
                    <div className='text-xxs'><b>BTC</b></div>
                    <div className='text-xxs'>BTC/THB</div>
                </div>
              
              </div>
              
              <div className='test'>
                
                <span>1,400,000</span>
                <div className='mr-8'>1.6%</div>
                <BsThreeDotsVertical/>
              
              </div>
            
            </article>
            <article className='table-border'>test</article>
            <article className='table-border'>test</article>
            <article className='table-border'>test</article>
            <article className='table-border'>test</article>
            <article className='table-border'>test</article>
            <article className='table-border'>test</article>
            <article className='table-border'>test</article>
            <article className='table-border'>test</article>

          </div>
            
          
        </div>
      </div>
      
      
    </section>
  );
}

CoinTable.propTypes = propTypes;
CoinTable.defaultProps = defaultProps;

export default CoinTable;