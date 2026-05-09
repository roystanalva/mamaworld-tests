# Software Requirements Specification (SRS)
## Mama World E-Commerce Web Application Testing

**Document Version:** 1.0  
**Date:** April 19, 2026  
**Project Name:** Mama World Test Automation Suite  
**Target Application:** https://mamaworld.in

---

## 1. Introduction

### 1.1 Project Overview
Mama World is an MSE (Micro Small Enterprise) based in India that sells maternity and feeding wear products online. The application is built on the Nushop.store e-commerce platform and serves customers across India.

### 1.2 Purpose
This document provides comprehensive software requirements specification for automated testing of the Mama World e-commerce platform, covering functional, non-functional, security, and performance requirements.

### 1.3 Scope
The test automation suite covers:
- Web UI testing across all pages and flows
- User authentication (login/registration)
- Shopping cart and checkout processes
- Payment functionality
- Security vulnerability testing
- Performance and load testing
- Edge case and error handling
- User experience validation

---

## 2. Test Environment

### 2.1 Hardware Requirements
| Component | Minimum | Recommended |
|-----------|---------|-------------|
| Processor | Intel Core i5 | Intel Core i7 |
| RAM | 8 GB | 16 GB |
| Storage | 50 GB SSD | 100 GB SSD |
| Display | 1366x768 | 1920x1080 |

### 2.2 Software Requirements
| Software | Version |
|----------|---------|
| Node.js | 18.x or higher |
| npm | 9.x or higher |
| Playwright | 1.58.0+ |
| Python | 3.13+ |
| Browser | Chrome/Chromium |

### 2.3 Test Configuration
- **Base URL:** https://mamaworld.in
- **Test Timeout:** 30 seconds (page load), 10 seconds (element wait)
- **Retry Attempts:** 2 for CI, 0 for local
- **Parallel Workers:** 1

---

## 3. Functional Requirements

### 3.1 User Authentication

#### FR-001: User Login
- **Requirement:** System shall allow registered users to log in using email or phone number
- **Test Cases:** 30 tests covering valid/invalid credentials, session handling
- **Priority:** High

#### FR-002: User Registration
- **Requirement:** System shall allow new users to register with name, email/phone, and password
- **Test Cases:** 30 tests covering form validation, OTP, password strength
- **Priority:** High

### 3.2 Product Catalog

#### FR-003: Home Page
- **Requirement:** System shall display home page with navigation, products, and categories
- **Test Cases:** 30 tests covering all UI elements
- **Priority:** High

#### FR-004: Category Navigation
- **Requirement:** Users shall be able to browse products by category
- **Categories:** Maternity Night Wear, Co-ord Set, New Arrivals, Best Sellers
- **Priority:** High

#### FR-005: Product Search
- **Requirement:** Users shall be able to search products by keyword
- **Test Cases:** Search functionality, suggestions, results display
- **Priority:** Medium

### 3.3 Shopping Cart

#### FR-006: Add to Cart
- **Requirement:** Users shall be able to add products to cart with size/color selection
- **Test Cases:** 30 tests covering cart operations
- **Priority:** High

#### FR-007: Cart Management
- **Requirement:** Users shall be able to update quantity and remove items
- **Priority:** High

#### FR-008: Apply Coupons
- **Requirement:** Users shall be able to apply discount coupons
- **Priority:** Medium

### 3.4 Checkout & Payment

#### FR-009: Checkout Process
- **Requirement:** Users shall complete checkout with shipping address and payment method
- **Test Cases:** 30 tests covering checkout flow
- **Priority:** High

#### FR-010: Payment Methods
- **Requirement:** System shall support COD, Card, Net Banking, UPI
- **Priority:** High

#### FR-011: Order Confirmation
- **Requirement:** System shall generate order ID and confirmation
- **Priority:** High

### 3.5 User Account

#### FR-012: Order Tracking
- **Requirement:** Users shall be able to track order status
- **Priority:** Medium

#### FR-013: Profile Management
- **Requirement:** Users shall be able to view/edit profile
- **Priority:** Medium

---

## 4. Non-Functional Requirements

### 4.1 Performance Requirements

#### NFR-001: Page Load Time
- **Requirement:** Home page shall load in < 3 seconds
- **Test Cases:** 30 tests covering load times, FCP, TTI

#### NFR-002: First Contentful Paint
- **Requirement:** FCP shall be < 1.5 seconds

#### NFR-003: Time to Interactive
- **Requirement:** TTI shall be < 5 seconds

#### NFR-004: Page Weight
- **Requirement:** Page size shall be < 5MB

### 4.2 Security Requirements

#### NFR-005: SQL Injection Protection
- **Requirement:** System shall prevent SQL injection attacks
- **Test Cases:** 30 tests for SQL injection, XSS, CSRF

#### NFR-006: XSS Protection
- **Requirement:** System shall prevent cross-site scripting

#### NFR-007: CSRF Protection
- **Requirement:** System shall have CSRF tokens

#### NFR-008: Secure Headers
- **Requirement:** System shall include security headers (CSP, X-Frame-Options)

#### NFR-009: Session Security
- **Requirement:** Sessions shall expire appropriately

#### NFR-010: Rate Limiting
- **Requirement:** System shall limit repeated login attempts

### 4.3 Usability Requirements

#### NFR-011: Responsive Design
- **Requirement:** System shall work on mobile (375px), tablet (768px), desktop (1920px)
- **Priority:** High

#### NFR-012: Accessibility
- **Requirement:** System shall support keyboard navigation
- **Priority:** Medium

#### NFR-013: Error Messages
- **Requirement:** Error messages shall be clear and helpful
- **Priority:** Medium

---

## 5. Test Requirements

### 5.1 Test Coverage Matrix

| Module | Test Cases | Priority |
|--------|-----------|----------|
| Regression | 30 | High |
| User Login | 30 | High |
| User Registration | 30 | High |
| Security | 30 | High |
| Performance | 30 | High |
| Load Testing | 30 | High |
| Edge Cases | 30 | Medium |
| User Experience | 30 | Medium |
| Payment Flow | 30 | High |
| End-to-End | 30 | High |
| **TOTAL** | **300** | |

### 5.2 Test Execution Strategy

#### Smoke Tests (30 tests)
- Critical path validation
- Run on every commit

#### Sanity Tests (60 tests)
- Core functionality
- Run on every build

#### Full Regression (300 tests)
- Complete coverage
- Run on every release

### 5.3 Browser Compatibility

| Browser | Version | Platform |
|---------|---------|----------|
| Chrome | Latest | Windows |
| Firefox | Latest | Windows |
| Safari | Latest | macOS |
| Edge | Latest | Windows |

---

## 6. Risk Analysis

### 6.1 Identified Risks

| Risk ID | Description | Probability | Impact | Mitigation |
|---------|------------|-------------|-----------|------------|
| R001 | Login modal-based (no /login URL) | High | Medium | Test navigation flows |
| R002 | Registration modal-based | High | Medium | Explore modal triggers |
| R003 | Third-party payment API | Medium | High | Mock payment tests |
| R004 | Dynamic content loading | Medium | Low | Explicit waits |
| R005 | Session timeout | Low | Medium | Test re-authentication |

### 6.2 Dependencies

- Nushop.store platform API
- Payment gateway (Razorpay, PayU)
- CDN for images
- Analytics scripts

---

## 7. Acceptance Criteria

### 7.1 Success Metrics

| Metric | Target |
|--------|--------|
| Test Coverage | 100% of requirements |
| Pass Rate | >95% |
| Execution Time | <30 minutes |
| Flakiness | <1% |

### 7.2 Deliverables

- [x] 300 automated test cases (10 suites)
- [x] POM (Page Object Model) structure
- [x] Test execution framework
- [x] HTML/JSON reports
- [x] SRS documentation
- [ ] BRS documentation
- [ ] Test completion report
- [ ] Manual test cases

---

## 8. Appendix

### A. Test Data

```
Base URL: https://mamaworld.in
Test Email: testuser@mamaworld.in
Test Phone: 9820584377
Test PIN: 400083 (Mumbai)
```

### B. Product Categories

- Maternity Night Wear: /collection/Aahm3Wot
- Maternity Co-ord Set: /collection/keR5QsOH
- New Arrivals: /collection/cF1wR54K
- Best Sellers: /collection/kRr89Z5K

### C. Contact Information

- Phone: +91 - 9820584377
- WhatsApp: +91 - 9820584377
- Email: sdnenwani@gmail.com
- Address: 191/2878, Tagore Nagar, Vikhroli (E), Mumbai, 400083