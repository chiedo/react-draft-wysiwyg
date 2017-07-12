import React from 'react';
import { storiesOf } from '@storybook/react';
import Basic from './Basic';
import ReadOnly from './ReadOnly';
import SpellCheck from './SpellCheck';
import HashTag from './HashTag';
import Mention from './Mention';
import I18n from './I18n';
import ToolbarHidden from './ToolbarHidden';
import ImageUpload from './ImageUpload';
import SelectedOptions from './SelectedOptions';
import FloatingToolbar from './FloatingToolbar';
import CustomToolbar from './CustomToolbar';
import ConvertToHTML from './ConvertToHTML';
import ConvertFromHTML from './ConvertFromHTML';
import ConvertToMarkdown from './ConvertToMarkdown';
import FocusBlurCallbacks from './FocusBlurCallbacks';
import ConvertToRawDraftContent from './ConvertToRawDraftContent';

import './styles.css';

storiesOf('Basic', module).add('story', () => <Basic />);
storiesOf('ReadOnly', module).add('story', () => <ReadOnly />);
storiesOf('SpellCheck', module).add('story', () => <SpellCheck />);
storiesOf('I18n', module).add('story', () => <I18n />);
storiesOf('ToolbarHidden', module).add('story', () => <ToolbarHidden />);
storiesOf('FocusBlurCallbacks', module).add('story', () => <FocusBlurCallbacks />);
storiesOf('HashTag', module).add('story', () => <HashTag />);
storiesOf('Mention', module).add('story', () => <Mention />);
storiesOf('SelectedOptions', module).add('story', () => <SelectedOptions />);
storiesOf('CustomToolbar', module).add('story', () => <CustomToolbar />);
storiesOf('FloatingToolbar', module).add('story', () => <FloatingToolbar />);
storiesOf('ImageUpload', module).add('story', () => <ImageUpload />);
storiesOf('ConvertToRawDraftContent', module).add('story', () => <ConvertToRawDraftContent />);
storiesOf('ConvertToHTML', module).add('story', () => <ConvertToHTML />);
storiesOf('ConvertFromHTML', module).add('story', () => <ConvertFromHTML />);
storiesOf('ConvertToMarkdown', module).add('story', () => <ConvertToMarkdown />);

/**
- cosutom decorators
- custom block renderer
*/
