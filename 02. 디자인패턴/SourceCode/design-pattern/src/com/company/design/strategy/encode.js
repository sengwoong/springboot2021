// JavaScript에서는 인터페이스를 명시적으로 정의하지 않으므로 해당 부분은 생략합니다.

// 전략 클래스: Base64 인코딩 전략
const Base64Strategy = {
  encoding: function(message) {
    return Buffer.from(message).toString('base64');
  }
};

// 컨텍스트: 전략을 선택하고 실행하는 객체
function EncodingContext() {
  this.strategy = null;

  // 전략을 설정하는 메서드
  this.setStrategy = function(strategy) {
    this.strategy = strategy;
  };

  // 설정된 전략을 실행하는 메서드
  this.encodeMessage = function(message) {
    if (this.strategy) {
      return this.strategy.encoding(message);
    }
  };
}

// 예시 메시지
const message = "Hello, Strategy Pattern!";

// 컨텍스트 생성
const context = new EncodingContext();

// Base64 전략 선택
context.setStrategy(Base64Strategy);
const encodedMessage = context.encodeMessage(message);
console.log("Base64 Encoded Message:", encodedMessage);
