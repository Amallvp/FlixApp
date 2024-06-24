import axios from "axios";
import {BASE_URL}from './constants/constants'

const instance = axios.create({
    
    BASE_URL:BASE_URL
    
  });

  export default instance