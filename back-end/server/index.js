const express = require('express');
const app = express();
const straightroadsRoutes = require('../routes/straightroadsRoutes'); 
const driftroute=require('../routes/driftroute')
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use('/api', straightroadsRoutes);
app.use('/drift',driftroute )
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
