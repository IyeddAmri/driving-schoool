const express = require('express');
const app = express();
const straightroadsRoutes = require('../routes/straightroadsRoutes'); // Make sure this path is correct
app.use(express.json());
app.use('/api', straightroadsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
