const axios = require('axios');

const checkMobileLegends = async (req, res) => {
  try {
    const { id, server } = req.query;
    
    // Validasi parameter
    if (!id || !server) {
      return res.status(400).json({
        success: false,
        message: 'Parameter id dan server diperlukan',
        example: '/api/ml?id=1114917746&server=13486'
      });
    }

    const apiUrl = `https://api.isan.eu.org/nickname/ml?id=${id}&server=${server}`;
    console.log('Fetching from:', apiUrl);
    
    const response = await axios.get(apiUrl, {
      timeout: 10000
    });
    
    res.json({
      success: true,
      game: "Mobile Legends",
      id: id,
      server: server,
      data: response.data
    });
    
  } catch (error) {
    console.error('Error:', error.message);
    
    if (error.response) {
      // API external merespon dengan error
      res.status(error.response.status).json({
        success: false,
        message: 'Error dari API external',
        error: error.response.data
      });
    } else if (error.request) {
      // Tidak ada response dari API external
      res.status(503).json({
        success: false,
        message: 'Tidak dapat terhubung ke API external'
      });
    } else {
      // Error lainnya
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: error.message
      });
    }
  }
};

const checkFreeFire = async (req, res) => {
  try {
    const { id } = req.query;
    
    // Validasi parameter
    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Parameter id diperlukan',
        example: '/api/ff?id=123456789'
      });
    }

    const apiUrl = `https://api.isan.eu.org/nickname/ff?id=${id}`;
    console.log('Fetching from:', apiUrl);
    
    const response = await axios.get(apiUrl, {
      timeout: 10000
    });
    
    res.json({
      success: true,
      game: "Free Fire", 
      id: id,
      data: response.data
    });
    
  } catch (error) {
    console.error('Error:', error.message);
    
    if (error.response) {
      res.status(error.response.status).json({
        success: false,
        message: 'Error dari API external',
        error: error.response.data
      });
    } else if (error.request) {
      res.status(503).json({
        success: false,
        message: 'Tidak dapat terhubung ke API external'
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: error.message
      });
    }
  }
};

module.exports = {
  checkMobileLegends,
  checkFreeFire
};