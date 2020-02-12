const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { PlainText } = wp.blockEditor
import { PLUGIN_NAME } from '../constants'

const BLOCK_NAME = `${PLUGIN_NAME}/plain-text`

registerBlockType(BLOCK_NAME, {
  title: __('Example'),
  description: __('Example block!'),
  icon: 'nametag',
  category: 'common',
  attributes: {
    text: {
      type: 'string'
    },
  },

  edit: props => {
    const { attributes: { text }, setAttributes, className } = props
    return(
      <>
        <PlainText 
          keepPlaceholderOnFocus="true"
          placeholder={ __( 'Texte') }
          className={ className }
          value={text}
          onChange={ (text) => {
          setAttributes( { text } )
          } }
        />
      </>
    )
  },

  save: ({ attributes: { text } }) => <p>{text}</p>
})
