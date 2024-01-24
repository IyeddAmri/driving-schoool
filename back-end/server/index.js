const express = require('express');
const app = express();
const straightroadsRoutes = require('../routes/straightroadsRoutes'); 
const driftroute=require('../routes/driftroute')

app.use(express.json());
app.use('/api', straightroadsRoutes);
app.use('/drift',driftroute )
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
