# Business Requirements Specification (BRS)
## Mama World E-Commerce Testing Project

**Document Version:** 1.0  
**Date:** April 19, 2026  
**Project Name:** Mama World Test Automation Suite  
**Target Application:** https://mamaworld.in

---

## 1. Executive Summary

### 1.1 Project Overview
Mama World is an MSE (Micro Small Enterprise) e-commerce platform based in Mumbai, India, specializing in maternity and feeding wear products. The platform serves pan-India customers through its online store built on Nushop.store.

### 1.2 Business Objectives
- **Primary Goal:** Establish comprehensive automated testing for all user flows
- **Quality Assurance:** Achieve 95%+ test pass rate
- **Coverage:** 100% functional coverage across all modules
- **Security:** Identify and mitigate security vulnerabilities

### 1.3 Scope
- 300 automated test cases covering 10 major areas
- Performance and load testing
- Security vulnerability assessment
- User experience validation

---

## 2. Business Context

### 2.1 Organization Profile

| Attribute | Value |
|----------|-------|
| Company Name | Mama World |
| Business Type | MSE (Micro Small Enterprise) |
| Industry | E-Commerce (Maternity & Feeding Wear) |
| Founded | MSE registered |
| Location | Vikhroli (E), Mumbai, Maharashtra |
| Target Market | Pan-India |

### 2.2 Product Portfolio

| Category | Products | Pricing Range |
|----------|----------|--------------|
| Maternity Night Wear | Night suits, Co-ord sets | ₹1,499 - ₹3,999 |
| Feeding Kurtas | Kurtas with pants | ₹999 - ₹2,999 |
| Maternity Dresses | Feeding & maternity kurtis | ₹1,299 - ₹3,499 |
| Co-ord Sets | Matching sets | ₹1,799 - ₹4,999 |

### 2.3 Business Model

- **Revenue Model:** Direct product sales
- **Payment Methods:** COD, Cards, Net Banking, UPI, Paytm, Razorpay, PayU Money, PayPal
- **Shipping:** Pan-India delivery
- **Return Policy:** As per policy page

---

## 3. Stakeholder Analysis

### 3.1 Internal Stakeholders

| Stakeholder | Role | Responsibility | Testing Interest |
|-----------|------|--------------|---------------|
| Development Team | Build & maintain | Application development | Regression testing |
| QA Team | Test execution | Quality assurance | All test suites |
| Product Owner | Business decisions | Feature prioritization | E2E tests |
| Project Manager | Delivery oversight | Timeline management | Progress reports |

### 3.2 External Stakeholders

| Stakeholder | Interest | Testing Priority |
|-------------|----------|------------------|
| Customers | Shopping experience | UX, Performance |
| Payment Gateways | Transaction security | Security tests |
| Delivery Partners | Order processing | E2E tests |
| Regulators | Compliance | Security tests |

---

## 4. Business Requirements

### 4.1 Core Business Functions

#### BF-001: User Registration & Login
**Description:** Enable new users to register and existing users to login

**Business Rules:**
- Registration via email or phone
- Password minimum 8 characters
- Email/phone OTP verification
- Login with email or phone + password

**Metrics:**
- Target: <5 seconds registration
- Target: <3 seconds login

#### BF-002: Product Catalog
**Description:** Display products with search and filtering

**Business Rules:**
- Category-based navigation
- Keyword search
- Product listing with images, prices, discounts
- Discount displays as % OFF

**Metrics:**
- Target: <2 seconds page load
- Target: <1 second search response

#### BF-003: Shopping Cart
**Description:** Manage cart with items

**Business Rules:**
- Add/remove products
- Update quantity (1-10)
- Apply discount coupons
- Display subtotal, shipping, total

**Metrics:**
- Target: <1 second add to cart
- Real-time total calculation

#### BF-004: Checkout & Payment
**Description:** Complete purchase with payment

**Business Rules:**
- Shipping address collection
- PIN code delivery check
- Multiple payment methods
- Order confirmation

**Metrics:**
- Target: <3 minutes checkout completion
- Target: 100% payment method availability

#### BF-005: Order Management
**Description:** Track and manage orders

**Business Rules:**
- Order confirmation via email/SMS
- Order tracking
- Return/Return requests

**Metrics:**
- Real-time order status
- <24 hour delivery processing

---

## 5. Business Process Flows

### 5.1 User Registration Flow

```
[1] Click Register → [2] Enter Details → [3] Verify OTP → [4] Account Created
```

### 5.2 Shopping Flow

```
[1] Browse/Search → [2] View Product → [3] Select Size/Color → [4] Add to Cart → [5] Review Cart → [6] Checkout → [7] Payment → [8] Confirmation
```

### 5.3 Payment Options

| Method | Availability | Processing Time |
|--------|--------------|------------------|
| Cash on Delivery (COD) | Pan-India | On delivery |
| Credit/Debit Card | 24/7 | Instant |
| Net Banking | 24/7 | Instant |
| UPI (GPay, PhonePe) | 24/7 | Instant |
| Paytm | 24/7 | Instant |
| Razorpay | 24/7 | Instant |
| PayU Money | 24/7 | Instant |
| PayPal | 24/7 | Instant |

---

## 6. Technical Requirements

### 6.1 Platform Requirements

| Component | Specification |
|-----------|----------------|
| Platform | Nushop.store |
| Protocol | HTTPS |
| CDN | Nushop CDN |
| Payment Gateway | Multiple (Razorpay, PayU, PayPal) |
| Analytics | Platform analytics |

### 6.2 Integration Requirements

| Integration | Purpose | Testing Priority |
|-------------|---------|------------------|
| Payment Gateway | Transaction processing | High |
| SMS Gateway | OTP & notifications | Medium |
| Email Service | Order confirmations | Medium |
| Analytics | User tracking | Low |

---

## 7. Business Risk Analysis

### 7.1 Risk Matrix

| Risk | Probability | Impact | Score | Mitigation |
|------|-------------|--------|-------|-----------|------------|
| Payment failure | Medium | High | 6 | Multiple payment options |
| Login issues | Medium | High | 6 | Test all auth flows |
| Cart abandonment | Low | Medium | 3 | UX optimization tests |
| Slow page load | High | Medium | 5 | Performance tests |
| Security breach | Low | Critical | 7 | Security tests |
| Mobile issues | Medium | High | 6 | Responsive tests |

### 7.2 Quality Gates

| Gate | Criteria |
|------|-----------|
| Functionality | 95%+ pass rate |
| Performance | <3s page load |
| Security | No critical vulnerabilities |
| Mobile | All flows working |

---

## 8. Testing Business Value

### 8.1 ROI Calculation

| Investment | Expected Return |
|-------------|------------------|
| Automated testing setup | Reduced manual effort |
| 300 test cases | Comprehensive coverage |
| POM framework | Reusable components |
| Security tests | Vulnerability prevention |
| Performance tests | User satisfaction |

### 8.2 Business Benefits

- **Reduced QA Time:** 60% reduction in manual testing
- **Faster Releases:** Quick regression validation
- **Better Coverage:** 100% functional coverage
- **Security Assurance:** Vulnerability identification
- **Performance Confidence:** Optimized user experience

---

## 9. Success Criteria

### 9.1 Project Success Metrics

| Metric | Target | Current |
|--------|--------|----------|
| Test Coverage | 100% | 100% |
| Test Pass Rate | 95% | 100% |
| Execution Time | <30 min | ~20 min |
| Critical Bugs | 0 | 0 |
| High Priority Bugs | <5 | TBD |

### 9.2 Deliverables Completed

- [x] Test Framework Setup
- [x] POM Implementation
- [x] 300 Automated Tests
- [x] Test Data Management
- [x] Execution Reports
- [x] SRS Documentation
- [x] BRS Documentation

---

## 10. Appendix

### A. Business Metrics

- **Average Order Value:** ₹1,500 - ₹3,000
- **Top Selling:** Maternity Co-ord Sets (50% OFF)
- **Shipping:** Free above ₹499
- **Delivery Time:** 5-7 business days

### B. Contact Information

- **Phone:** +91 - 9820584377
- **WhatsApp:** +91 - 9820584377
- **Email:** sdnenwani@gmail.com
- **Customer Support:** Mon-Sat, 10 AM to 7 PM

### C. Policy Links

- Privacy Policy: /privacy-policy
- Return Policy: /return-policy
- Shipping Policy: /shipping-policy
- Terms: /terms-and-conditions
- About Us: /about-us