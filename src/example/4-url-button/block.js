import { PLUGIN_NAME } from '../../constants'

const { wp } = window
const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { PlainText, URLInputButton } = wp.blockEditor

const BLOCK_NAME = `${PLUGIN_NAME}/url-button`

registerBlockType(BLOCK_NAME, {
  title: __('Example url'),
  description: __('Example url block!'),
  icon: 'nametag',
  category: 'common',
  attributes: {
    text: {
      type: 'string'
    },
    link: {
      type: 'string'
    }
  },

  edit: props => {
    const { attributes: { link, text }, setAttributes, className } = props
    return (
      <>
        <PlainText
          keepplaceholderonfocus='true'
          placeholder={__('Text')}
          className={className}
          value={text}
          onChange={text => setAttributes({ text })}
        />
        <URLInputButton
          className={__('link')}
          url={link}
          onChange={link => setAttributes({ link })}
        />
      </>
    )
  },

  save: ({ attributes: { link, text } }) => <p><a href={link}>{text}</a></p>
})
