import { PLUGIN_NAME } from '../../constants'

const { wp } = window
const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { PlainText } = wp.blockEditor

const BLOCK_NAME = `${PLUGIN_NAME}/plain-text`

registerBlockType(BLOCK_NAME, {
  title: __('Plain text'),
  description: __('Plain text block!'),
  icon: 'nametag',
  category: 'common',
  attributes: {
    title: {
      type: 'string'
    },
    subtitle: {
      type: 'string'
    }
  },

  edit: props => {
    const { attributes: { title, subtitle }, setAttributes, className } = props
    return (
      <>
        <div className='d-flex'>
          <div className='col-1'>
            <PlainText
              keepplaceholderonfocus='true'
              placeholder={__('Title')}
              className={className}
              value={title}
              onChange={(newTitle) => {
                setAttributes({ title: newTitle })
              }}
            />
            <PlainText
              keepplaceholderonfocus='true'
              placeholder={__('Subtitle')}
              className={className}
              value={subtitle}
              onChange={(newSubtitle) => {
                setAttributes({ subtitle: newSubtitle })
              }}
            />
          </div>
          <div className='col-2'>
            <p>Mon image ici</p>
          </div>
        </div>
      </>
    )
  },

  save: ({ attributes: { title, subtitle } }) => (
    <div className='block-title-subtitle'>
      <h1 className='block-title-subtitle__title'>{title}</h1>
      <p className='block-title-subtitle__subtitle'>{subtitle}</p>
    </div>
  )
})
