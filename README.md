# Visual Captioning

## Overview

Visual Captioning là một dự án tạo chú thích cho hình ảnh món ăn bằng cách sử dụng các kỹ thuật học sâu. Hệ thống này kết hợp các mô hình học sâu hiện đại để phân tích hình ảnh món ăn, nhận diện các thành phần và đặc điểm nổi bật, từ đó tạo ra mô tả chính xác và tự nhiên bằng ngôn ngữ, đưa ra nguyên liệu và hướng dẫn giúp người dùng hiểu rõ hơn về món ăn trong ảnh.

## Cấu trúc thư mục
 ```
visual_captioning/
│ 
├── backend/
│   ├── app/                    # Mã nguồn backend
│   ├── models/                 # Các mô hình deep learning
│   ├── .env                    # Biến môi trường cho backend
│   ├── .gitignore
│   ├── Dockerfile              # Dockerfile cho backend
│   └── requirements.txt        # Danh sách thư viện Python
│
├── frontend/
│   ├── public/                 # Tài nguyên tĩnh
│   ├── src/                    # Mã nguồn React
│   ├── .env                    # Biến môi trường cho frontend
│   ├── .gitignore
│   ├── Dockerfile              # Dockerfile cho frontend
│   ├── eslint.config.js        # Cấu hình ESLint
│   ├── index.html              # File HTML chính
│   ├── package.json            # Cấu hình npm
│   ├── package-lock.json       # Khóa phiên bản gói npm
│   └── vite.config.js          # Cấu hình Vite
│
├── images/                     # Ảnh minh họa
│
├── docker-compose.yml          # Cấu hình Docker
│
├── README.md                   # Tài liệu hướng dẫn
│
└── REPORT.pdf                  # Báo cáo đồ án
```

## Tính năng chính

- Phân tích và mô tả hình ảnh đầu vào.
- Suy luận nguyên liệu và đề xuất công thức nấu ăn.
- Giao diện website thân thiện cho người dùng.
- Lưu trữ đám mây để quản lý hình ảnh và mô tả.
- API RESTful cho tích hợp với các ứng dụng khác.

## Thiết kế hệ thống

### Kiến trúc hệ thống

<p align="center">
  <img src="./images/Image Captioning Architecture.png" alt="Image Captioning Architecture">
</p>

Hệ thống Visual Captioning được thiết kế với kiến trúc đơn giản và dễ dàng triển khai:

* **Môi trường huấn luyện**: Kaggle Notebooks.
* **Cơ sở dữ liệu metadata**: MongoDB Cloud.
* **Hệ thống lưu trữ NoSQL**: AWS S3.
* **Máy chủ triển khai**: AWS EC2.



### Lược đồ dữ liệu

<p align="center">
  <img src="./images/Entity RelationShip Database.png" alt="Image Captioning Architecture">
</p>

## Yêu cầu hệ thống

- Python 3.10+
- Node.js 16+
- Docker
- MongoDB
- AWS S3

## Hướng dẫn cài đặt

### 1. Chuẩn bị cơ sở dữ liệu

#### MongoDB Cloud

1. Tạo tài khoản và cluster trên [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Tạo database và user có quyền truy cập
3. Lấy **MongoDB URI** có dạng:
   ```
   mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
   ```

#### AWS S3 Storage

1. Đăng ký tài khoản [AWS](https://aws.amazon.com/) nếu chưa có
2. Tạo S3 bucket mới cho lưu trữ hình ảnh
3. Tạo IAM user với quyền truy cập S3
4. Tạo và lưu **Access Key ID** và **Secret Access Key**

### 2. Clone và cấu hình dự án

```bash
git clone git@github.com:anh7777/visual_captioning_website.git

cd backend
```

Tạo file `.env` với nội dung sau:

```env
ACCESS_TOKEN_EXPIRE_MINUTES="30"
REFRESH_TOKEN_EXPIRE_DAYS="7"
JWT_SECRET_KEY="your-secret-key"
JWT_ALGORITHM="HS256"
MONGO_URI="mongodb+srv://your_mongo_user:your_mongo_password@cluster0.mongodb.net/your_db_name?retryWrites=true&w=majority"
MONGO_DB_NAME="your_db_name"
AWS_ACCESS_KEY="YOUR_AWS_ACCESS_KEY_ID"
AWS_SECRET_KEY="YOUR_AWS_SECRET_ACCESS_KEY"
BUCKET_NAME="your_s3_bucket_name"
```

> **Lưu ý**: Thay thế các giá trị mẫu bằng thông tin thực của bạn.

### 3. Triển khai với Docker

```bash
cd ../

docker-compose build

docker-compose up
```

Sau khi triển khai thành công:
- Backend API: http://localhost:8000
- Frontend: http://localhost:3000

### 4. Triển khai thủ công

#### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Triển khai từ Docker Hub

Nếu bạn muốn sử dụng Docker image có sẵn:

```bash
docker pull marknguyenn02/visual-captioning-backend
docker pull marknguyenn02/visual-captioning-frontend

docker run -d -p 8000:8000 --env-file .env --name backend marknguyen02/visual-captioning-backend
docker run -d -p 3000:3000 --name frontend marknguyen02/visual-captioning-frontend
```

## Demo
Chi tiết về giao diện website và hướng dẫn sử dụng hệ thống có thể xem đầy đủ [**tại đây.**](https://drive.google.com/file/d/1OaFNeauY_yB5Tw9ItD_2tiuk_8JeoVlm/view?usp=sharing)
