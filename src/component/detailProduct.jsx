import './detailProduct.scss'
import gambar1 from '../gambar/product_1.png';
import ButtonCommerce from './buttonCommerce.jsx';
import DescNav from './descNav'
import GridCards from './gridCards'



function DetailProduct(){
    return(
        <div class="container">
		<div class="card" id='card2'>
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src={gambar1} /></div>
						  <div class="tab-pane" id="pic-2"><img src={gambar1} /></div>
						  <div class="tab-pane" id="pic-3"><img src={gambar1} /></div>
						  <div class="tab-pane" id="pic-4"><img src={gambar1} /></div>
						  <div class="tab-pane" id="pic-5"><img src={gambar1} /></div>
						</div>
						<ul class="preview-thumbnail nav nav-tabs">
						  <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src={gambar1} /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"><img src={gambar1} /></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src={gambar1} /></a></li>
						  <li><a data-target="#pic-4" data-toggle="tab"><img src={gambar1} /></a></li>
						  <li><a data-target="#pic-5" data-toggle="tab"><img src={gambar1} /></a></li>
						</ul>
						
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">Box Kado - Motif Batik</h3>
						<h4>Rp.1.000.000 - Rp.2.000.000</h4>
						<div class="rating">
							<div class="stars">
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<span class="review-no">Stock : 425 </span>
                            <ButtonCommerce/>
                            
						</div>
						<DescNav/>
						{/* <p class="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p> */}
						<h4 class="price">Rekomendasi Produk</h4>
						<div className='rekomendasi'><GridCards/></div>
						{/* <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<h5 class="sizes">sizes:
							<span class="size" data-toggle="tooltip" title="small">s</span>
							<span class="size" data-toggle="tooltip" title="medium">m</span>
							<span class="size" data-toggle="tooltip" title="large">l</span>
							<span class="size" data-toggle="tooltip" title="xtra large">xl</span>
						</h5>
						<h5 class="colors">colors:
							<span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
							<span class="color green"></span>
							<span class="color blue"></span>
						</h5>
						<div class="action">
							<button class="add-to-cart btn btn-default" type="button">add to cart</button>
							<button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	</div>

    );
}

export default DetailProduct;