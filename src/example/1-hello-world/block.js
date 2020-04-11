import { PLUGIN_NAME } from '../../constants'

const { wp } = window
const { registerBlockType } = wp.blocks
const { __ } = wp.i18n

const BLOCK_NAME = `${PLUGIN_NAME}/hello-world`

registerBlockType(BLOCK_NAME, {
  title: __('Hello World'),
  description: __('Hello World example block!'),
  icon: 'visibility',
  category: 'common',

  edit: () => {
    return (
      <p>Hello World from backend</p>
    )
  },

  save: () => {
    return (
      <p>Hello World from frontend</p>
    )
  }
})
