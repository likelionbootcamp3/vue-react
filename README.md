## Giới thiệu

- React và VueJS là những công nghệ dùng để hỗ trợ xây dựng UI cho ứng dụng
- Là thư viện và framework phổ biến nhất hiện nay
- Tối ưu thời gian xây dựng ứng dụng

## ReactJS là gì?

- là một thư viện Javascript
- Được phát triển bởi Facebook (2013)
- Hỗ trợ xây dựng giao diện người dùng cho cả web và mobile
- Xây dựng UI bằng việc kêt hợp các "component" độc lập và có khả năng tái sử dụng
- Là thư viện JavaScript phổ biến nhất hiện nay
- Là mã nguồn mở

## Đặc điểm của ReactJS

- JSX: Nó là một cú pháp mở rộng của Javascript, viết HTML trong React
- Component: được tạo nên từ nhiều thành phần có cấu trúc, đặc biêt là có thể tái sử dụng khi cần thiết
- One-way data binding: Dữ liệu trong React sẽ truyền theo 1 chiều, từ component cha đến component con
- DOM: Dùng để truy xuất và thao tác trên các tài liệu có cấu trúc dạng HTML bằng ngôn ngữ Javascript
- Virtual DOM: Nó là một phiên bản sao chép của Real DOM. Khi có sự thay đổi trên ứng dụng, toàn bộ UI sẽ được **re-render** trên Virtual DOM.
- Performance: Hiệu suất của ứng dụng tốt hơn nhờ chính đặc trưng Virtual DOM
- Extensions: React thường phải kết hợp với các thư viện bên ngoài để tạo ra một ứng dụng hoàn chỉnh
- Debugging: React Dev Tools
- Simplicity: React rất dễ tiếp cận để học hỏi và sử dụng

## VueJS là gì?

- là một Javascript framework
- Được phát triển bởi Evan You
- Hỗ trợ xây dựng giao diện người dùng cho cả web và mobile
- Xây dựng UI bằng việc kêt hợp các "component" độc lập và có khả năng tái sử dụng
- Là thư viện JavaScript đang dần được sử dụng hiện nay
- Là mã nguồn mở

## Đặc điểm của VueJS

- Template: cho phép bạn ràng buộc (bind) một cách minh bạch cấu trúc DOM được render với dữ liệu của đối tượng Vue bên dưới
- Virtual DOM: Nó là một phiên bản sao chép của Real DOM. Khi có sự thay đổi trên ứng dụng, toàn bộ UI sẽ được **re-render** trên Virtual DOM.
- Two way data binding: đồng bộ hóa đầu vào của người dùng và state của modal, tương tác qua lại giữa view và modal. Như vậy state sẽ được cập nhật bất cứ khi nào template thay đổi và ngược lại. (v-bind)
- Component: được tạo nên từ nhiều thành phần có cấu trúc, đặc biêt là có thể tái sử dụng khi cần thiết
- Event handling: Để lắng nghe sự kiện sử dụng v-on
- Directives: một đoạn lệnh nhỏ mà các bạn có thể chèn chúng vào các phần tử DOM (v-model, v-for, v-if)
- Routing: Cho phép bạn điều hướng đến các trang khác

## Tại sao React tốt hơn Vue?

- React đưa ra nhiều sự lựa chọn hơn khi xây dựng một ứng dụng lớn và phức tạp
- Testing cũng sẽ đơn giản hơn ở React

## Tại sao Vue tốt hơn React?

- Xây dựng một ứng dụng nhanh chóng với VueJS, thường dành cho những ứng dụng cho startup
- Docs dễ hiểu và tốt hơn
- Dễ tiếp cận hơn đối với những bạn mới bắt đầu khi đã có kiến thức về HTML, CSS và JS

## React vs Vue - Approach

- React: Sau khi có kiến thức về React, bạn sẽ dễ dàng xây dựng ứng dụng mobile app sử dụng React Native
- Vue: Kết hợp logic và UI trong một file. Component code của Vue nằm trong template HTML

## React vs Vue JS

![](https://i.imgur.com/dUTCDXz.jpg)

## Những website nào đang sử dụng Vue và React?

React: Facebook, Instagram, Pinterest, Netflix, Twitter
Vue: Trivago, Behance, Gitlab, 9Gag

## Khi nào sử dụng React hoặc Vue?

React:

- Khi dự án lớn và phức tạp
- Nhiều tính năng

Vue:

- Dự án vừa và nhỏ
- Outsourcing
