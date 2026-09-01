provider "aws" {
  region = "us-east-2"
}

resource "aws_s3_bucket" "novatech_portal" {
  bucket = "novatech-pedidos-web-prod"
}

resource "aws_s3_bucket_website_configuration" "novatech_web" {
  bucket = aws_s3_bucket.novatech_portal.id
  index_document {
    suffix = "index.html"
  }
}
