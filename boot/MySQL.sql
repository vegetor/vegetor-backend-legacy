CREATE TABLE user (
    id BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT '사용자 ID 필드/Internal',
    file_id BIGINT COMMENT '사용자 프로파일 이미지 ID',
    user_id VARCHAR(100) NOT NULL UNIQUE COMMENT '노출 사용자 ID',   
    name VARCHAR(100) NOT NULL COMMENT '노출 사용자명',
    password VARCHAR(200) NOT NULL COMMENT '암호화한 비밀번호 문자열',
    password_salt VARCHAR(200) NOT NULL COMMENT '소금친 비밀번호', 
    provider_key VARCHAR(200) COMMENT 'SNS 키',
    provider_type VARCHAR(200) COMMENT 'SNS 경로',
    provider_version VARCHAR(45) COMMENT 'SNS 버전',
    create_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '등록일자',
    update_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '수정일자',
    lastLogin_at DATETIME COMMENT '마지막 로그인 일자', -- 최초에 가입이후에 바로 로그인이 되는 프로세스가 아니라면 NULL 일 수 있음 
    status VARCHAR(20) DEFAULT 'N' COMMENT '(N)ormal, (S)ecede, (R)est'
);

CREATE TABLE file (
    id BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT '내부적으로 부여되는 파일 인덱스',
    file_name VARCHAR(255) NOT NULL COMMENT '서버 파일명 / 경로 포함 (X)',
    file_path VARCHAR(500) NOT NULL COMMENT '서버 물리 파일경로/ 파일명 포함 (X)',
    url VARCHAR(500) NOT NULL COMMENT '외부에서 접근 가능한 파일 URL',
    create_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '등록일자',
    update_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '수정일자'
);
