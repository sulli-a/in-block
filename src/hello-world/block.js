const { createElement } = wp.element
const { registerBlockType } = wp.blocks

registerBlockType('in-block/hello-world', {
  title: 'Hello World',
  description: 'Hello World example block!',
  icon: 'admin-site',
  category: 'common',

  edit: () => {
    return(
      <p>Hello World from backend</p>
    )
  },

  save: () => {
    return(
      <p>Hello World from frontend</p>
    )
  }
})
