const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors());


// models
const { User } = require('./models/user');
const { Brand } = require('./models/brand');
const { Wood } = require('./models/wood');
const { Product } = require('./models/product');

// middleware
const { auth } = require('./middleware/auth');
const { admin } = require('./middleware/admin');


// by arrival
// /articles?sortBy=createdAt&order=desc&limit=4

// by sell
app.get('/api/product/articles', (req, res)=>{
	let order = req.query.order ?  req.query.order : 'asc';
	let sortBy = req.query.sortBy ? req.query.sortby : '_id';
	let limit = req.query.limit ? parseInt(req.query.limit) : 100;
	
	Product
	.find()
	.populate('brand')
	.populate('wood')
	.sort([[sortBy, order]])
	.limit(limit)
	.exec((err, articles)=>{
		if(err) return res.status(400).send(err);
		res.send(articles)
	})
	
})

// product
// api/product/article?id=sdfdsf || dsdfd, wae,sdf&type=dskfa || []
app.get('/api/product/articles_by_id', (req, res)=>{
	let type = req.query.type;
	let items = req.query.id;
	if(type === "array"){
		let ids = req.query.id.split(',');
		items = [];
		items = ids.map(item=>{
			return mongoose.Types.ObjectId(item)
		})
	}	
	Product.
	find({ '_id': { $in: items }}).
	populate('brand').
	populate('wood').
	exec((err, docs)=>{
		return res.status(200).send(docs)
	})
});


app.post('/api/product/article', auth, admin, (req, res) => {
  const product = new Product(req.body);

  product.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      article: doc
    });
  });
});

// wood

app.post('/api/product/wood', auth, admin, (req, res) => {
  const wood = new Wood(req.body);

  wood.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      wood: doc
    });
  });
});

app.get('/api/product/woods', (req, res) => {
  Wood.find({}, (err, woods) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(woods);
  });
});

// brand



app.post('/api/product/brand', auth, admin, (req, res) => {
  const brand = new Brand(req.body);

  brand.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      brand: doc
    });
  });
});
app.get('/api/product/brands', (req, res) => {
  Brand.find({}, (err, brands) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      brands
    });
  });
});

// user
app.post('/api/product/wood', auth, admin, (req, res) => {});

app.get('/api/users/auth', auth, (req, res) => {
  res.status(200).json({
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    cart: req.user.cart,
    history: req.user.history
  });
});

app.get('/api/user/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true
    });
  });
});

app.post('/api/users/register', (req, res) => {
  // res.status(200);
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ success: true });
  });
});

// 로그인할 때 3가지 해줘야 하는 부분..
app.post('/api/users/login', (req, res) => {
  // 이메일 찾아줘야 하는 부분..
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        loginSucess: false,
        message: '이메일을 찾을 수 없습니다.'
      });
    // 패스워드 체크하는 부분..
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSucess: false,
          message: '패스워드가 일치하지 않습니다.'
        });
    });

    // 토큰을 생성해줘야 하는 부분..
    user.generateToken((err, user) => {
      if (err) return res.status(400).send(err);
      res.cookie('w_auth', user.token).status(200).json({
        loginSuccess: true
      });
    });
  });
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
