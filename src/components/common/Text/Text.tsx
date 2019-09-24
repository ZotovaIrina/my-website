import React, {useContext} from 'react';
import getConfig, {AppConfigs} from '../../../configs/getConfig';
import {MyContext} from '../../../store/language/languageContext';

export interface IText {
  textId?: string,
  className?: string
}

const TextComponent: React.FunctionComponent<IText> = props => {

  const language = useContext(MyContext);
  const text = getConfig(AppConfigs[language.language], props.textId);

  return (
    <>
        {typeof text === 'string' ? text : props.textId}
        {props.children ? props.children : ''}
    </>
  )

};

export default TextComponent;