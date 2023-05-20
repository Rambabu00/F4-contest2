import React from 'react'

export default function loading () {
  setTimeout(() => {
    document.getElementById('loading').style.display='none';
    document.getElementById('table').style.display='block'
  }, 2000);
  return (
    <div class="ring" id='loading'>Loading
    <span></span>
  </div>
  )
}
