import React from 'react';
import Filter from './Filter';
import Items from './Items';

export default function Products() {
  return (
    <>
        <div class="container">
			<div class="row">
				<Filter/>
				<Items/>
			</div>
		</div>
    </>
  )
}
