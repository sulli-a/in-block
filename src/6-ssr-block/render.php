<?php

function ssr_block_render($attrs) {
  $context = array(
    'title' => $attrs['title'],
    'subtitle' => $attrs['subtitle']
  );

  return Timber::compile('render.twig', $context);
}
