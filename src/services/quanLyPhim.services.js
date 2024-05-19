import axios from "axios";

export const quanLyPhimServices = {
    getPhimList: () =>
        axios.get('https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim', {
            headers: {
                TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MyIsIkhldEhhblN0cmluZyI6IjA5LzA5LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyNTg0MDAwMDAwMCIsIm5iZiI6MTY5Njg3MDgwMCwiZXhwIjoxNzI1OTg3NjAwfQ.eka9nnrY4RvjgyAAdJH7uruVGj0DfXCfIM8V8HRpIMI'
            }
        }).then(response => {
            return response;
        }).catch(error => {
            console.error('Error fetching phim list:', error);
            
        })

}