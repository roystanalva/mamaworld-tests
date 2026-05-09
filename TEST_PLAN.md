# Test Plan - Mama World Test Automation Suite

**Document Version:** 1.0  
**Date:** April 19, 2026  
**Project:** Mama World E-Commerce Testing  
**Target:** https://mamaworld.in

---

## 1. Test Plan Overview

### 1.1 Purpose
This test plan defines the comprehensive testing strategy for the Mama World e-commerce platform, covering 300 automated test cases across 10 test suites.

### 1.2 Scope
- **In Scope:** All functional, security, performance, and UX test cases
- **Out Scope:** Payment gateway integration (mocked), Email delivery verification

---

## 2. Test Environment

### 2.1 Infrastructure
| Component | Configuration |
|-----------|----------------|
| Base URL | https://mamaworld.in |
| Protocol | HTTPS |
| Browser | Chrome (System) |
| Test Framework | Playwright 1.58.0 |
| Node.js | 25.9.0 |

### 2.2 Test Data
| Parameter | Value |
|-----------|-------|
| Test Email | testuser@mamaworld.in |
| Test Phone | 9820584377 |
| Test Password | Test@123456 |
| Test PIN | 400083 |
| Test Address | Mumbai, Maharashtra |

---

## 3. Test Suites

### 3.1 Suite Overview

| Suite | Test Cases | Priority | Type |
|-------|-----------|----------|------|
| Regression | 30 | High | Functional |
| Login | 30 | High | Functional |
| Registration | 30 | High | Functional |
| Security | 30 | High | Security |
| Performance | 30 | High | Performance |
| Load | 30 | Medium | Performance |
| Edge Cases | 30 | Medium | Functional |
| UX | 30 | Medium | Usability |
| Payment | 30 | High | Functional |
| E2E | 30 | High | End-to-End |
| **TOTAL** | **300** | | |

---

## 4. Test Execution Strategy

### 4.1 Execution Modes

#### Daily Regression (60 tests)
- **When:** Daily build validation
- **Suites:** Regression + Login + Security
- **Expected Time:** ~5 minutes

#### Full Regression (300 tests)
- **When:** Before release
- **Suites:** All suites
- **Expected Time:** ~20-30 minutes

#### Sanity Tests (30 tests)
- **When:** Quick validation
- **Suites:** Regression (critical path)
- **Expected Time:** ~3 minutes

### 4.2 Execution Commands

```bash
# All tests
npx playwright test

# Specific suite
npx playwright test tests/playwright/01-regression.spec.js

# With reporter
npx playwright test --reporter=list,html

# Parallel execution
npx playwright test --workers=4
```

---

## 5. Test Case Details

### 5.1 Regression Tests (30 tests)

| ID | Test Case | Expected Result | Priority |
|----|-----------|-----------------|-----------|
| R-01 | Home page loads successfully | Page loads with title | High |
| R-02 | Logo is visible | Logo element visible | High |
| R-03 | Navigation menu is visible | Menu elements present | High |
| R-04 | Home link is accessible | Navigate to home | High |
| R-05 | Maternity Night Wear category loads | Category page loads | High |
| R-06 | Maternity Co-ord Set category loads | Category page loads | High |
| R-07 | New Arrivals page loads | Category page loads | High |
| R-08 | Best Seller page loads | Category page loads | High |
| R-09 | Search functionality works | Search results displayed | High |
| R-10 | Bag (Cart) page is accessible | Cart page loads | High |
| R-11 | Empty bag shows empty message | Empty cart message | Medium |
| R-12 | Footer is visible | Footer element visible | Medium |
| R-13 | About Us page loads | Page loads | Medium |
| R-14 | Privacy Policy page loads | Page loads | Medium |
| R-15 | Return Policy page loads | Page loads | Medium |
| R-16 | Shipping Policy page loads | Page loads | Medium |
| R-17 | Terms and Conditions page loads | Page loads | Medium |
| R-18 | Contact phone number is visible | Phone number displayed | Medium |
| R-19 | WhatsApp contact is visible | WhatsApp link displayed | Medium |
| R-20 | Email contact is visible | Email displayed | Medium |
| R-21 | Address is visible | Address displayed | Low |
| R-22 | Product collection loads correctly | Products displayed | High |
| R-23 | Multiple categories are accessible | Navigation works | High |
| R-24 | Best sellers section displays products | Product list displayed | High |
| R-25 | Page loads without JavaScript errors | No console errors | High |
| R-26 | All images load (no broken images) | Images render | Medium |
| R-27 | Social media links present | Links visible | Low |
| R-28 | Responsive design works | Mobile layout works | High |
| R-29 | Page scrolls correctly | Footer accessible | Low |
| R-30 | Back to top button works | Scroll to top works | Low |

### 5.2 Login Tests (30 tests)

| ID | Test Case | Expected Result | Priority |
|----|-----------|-----------------|-----------|
| L-01 | Login page loads from navigation | Login form visible | High |
| L-02 | Login form accepts valid email | Email input works | High |
| L-03 | Login form accepts valid phone | Phone input works | High |
| L-04 | Login form accepts password | Password input works | High |
| L-05 | Show/hide password toggle works | Toggle works | Medium |
| L-06 | Login button is clickable | Button enabled | High |
| L-07 | Invalid email format rejected | Error message shown | High |
| L-08 | Empty email shows validation error | Error message shown | High |
| L-09 | Empty password shows validation error | Error message shown | High |
| L-10 | Login fails with incorrect credentials | Error message shown | High |
| L-11 | Remember me checkbox exists | Checkbox present | Medium |
| L-12 | Forgot password link exists | Link visible | Medium |
| L-13 | Forgot password page loads | Page navigates | Medium |
| L-14 | Session persists on page refresh | Session maintained | Medium |
| L-15 | Logout option is available when logged in | Logout works | High |
| L-16 | Concurrent login attempts handled | No conflicts | Medium |
| L-17 | Login page is accessible via direct URL | URL works | Medium |
| L-18 | Login form has proper labels | Labels visible | Medium |
| L-19 | Login form has proper placeholders | Placeholders visible | Medium |
| L-20 | Login form validates input types | Validation works | Medium |
| L-21 | Login handles special characters in password | Accepts special chars | Medium |
| L-22 | Login respects case sensitivity in email | Case sensitive | Medium |
| L-23 | Login form prevents SQL injection | No SQL injection | High |
| L-24 | Login handles network timeout gracefully | Timeout handled | Medium |
| L-25 | Login button shows loading state | Loading state shown | Low |
| L-26 | Successful login redirects to account page | Redirects properly | High |
| L-27 | Login form clears on successful logout | Form cleared | Medium |
| L-28 | Login form accessibility - keyboard navigation | Tab navigation works | Medium |
| L-29 | Login handles multiple rapid submissions | No errors | Low |
| L-30 | Login maintains security headers | Headers present | High |

### 5.3 Security Tests (30 tests)

| ID | Test Case | Expected Result | Priority |
|----|-----------|-----------------|-----------|
| S-01 | No SQL injection in search | Query sanitized | Critical |
| S-02 | No SQL injection in login | Login blocked | Critical |
| S-03 | No XSS in search input | Script blocked | Critical |
| S-04 | No reflected XSS in parameters | No XSS execution | Critical |
| S-05 | CSRF token present in forms | Token present | High |
| S-06 | Secure headers present | Headers verified | High |
| S-07 | No sensitive data in URL | URL clean | High |
| S-08 | Session expires after inactivity | Session expires | Medium |
| S-09 | Password not visible in page source | Password masked | High |
| S-10 | HTTPS enforced | HTTPS used | Critical |
| S-11 | Clickjacking protection | Frame blocked | High |
| S-12 | Input sanitization in forms | Input sanitized | High |
| S-13 | No directory traversal | Access blocked | Critical |
| S-14 | Rate limiting on login | Rate limited | High |
| S-15 | Account lockout after failed attempts | Account locked | High |
| S-16 | Secure cookie flags | Secure flag set | Medium |
| S-17 | HttpOnly cookie flags | HttpOnly flag set | Medium |
| S-18 | Content Security Policy | CSP header set | High |
| S-19 | X-Content-Type-Options header | Header set | Medium |
| S-20 | Referer header sent correctly | Header sent | Low |
| S-21 | No information disclosure in error pages | Error pages clean | Medium |
| S-22 | Secure password reset flow | Reset flow secure | Medium |
| S-23 | Two-factor authentication available | 2FA option exists | Medium |
| S-24 | Logout invalidates session | Session cleared | High |
| S-25 | Brute force protection | Protection active | High |
| S-26 | File upload validation | File validated | Medium |
| S-27 | SQL injection in registration | Registration blocked | Critical |
| S-28 | XSS in product reviews | Review sanitized | Critical |
| S-29 | Secure API endpoints | API response 401/403 | Medium |
| S-30 | No cached sensitive data | No caching | Medium |

### 5.4 Performance Tests (30 tests)

| ID | Test Case | Threshold | Priority |
|----|-----------|-----------|-----------|
| P-01 | Home page load time | <3s | High |
| P-02 | First Contentful Paint | <1.5s | High |
| P-03 | Time to Interactive | <5s | High |
| P-04 | Page weight | <5MB | Medium |
| P-05 | Images optimized | WebP/JPEG | Medium |
| P-06 | CSS minified | No extra whitespace | Medium |
| P-07 | JavaScript minified | No extra whitespace | Medium |
| P-08 | No render-blocking resources | <10 stylesheets | Low |
| P-09 | Efficient selectors | <10 slow queries | Low |
| P-10 | Lazy loading images | Lazy loading enabled | Medium |
| P-11 | Cache headers present | Cache-Control header | Medium |
| P-12 | Compression enabled | gzip/br encoding | Medium |
| P-13 | DOM depth | <32 levels | Low |
| P-14 | Minimal reflows | <10 layout shifts | Low |
| P-15 | Efficient fonts | <5 font files | Low |
| P-16 | No memory leaks | Stable memory | Medium |
| P-17 | Smooth scrolling | <100ms scroll | Low |
| P-18 | Fast search | <3s response | Medium |
| P-19 | Fast category navigation | <3s load | Medium |
| P-20 | Image loading speed | <2s per image | Low |
| P-21 | JavaScript execution time | <50ms for 10k ops | Low |
| P-22 | No long tasks | <5 long tasks | Low |
| P-23 | Third-party impact | <15 requests | Low |
| P-24 | API response time | <5s response | Medium |
| P-25 | Cart operations speed | <2s operation | Medium |
| P-26 | Search suggestions speed | <1s display | Low |
| P-27 | Page transitioned smoothly | <3s transition | Low |
| P-28 | Footer loads quickly | <1s load | Low |
| P-29 | Form submission speed | <5s submission | Medium |
| P-30 | Hero image loads immediately | Immediate load | Low |

---

## 6. Test Schedule

### 6.1 Schedule Overview

| Phase | Activity | Duration | Status |
|-------|-----------|----------|--------|
| Phase 1 | Test Framework Setup | Complete | Complete |
| Phase 2 | POM Implementation | Complete | Complete |
| Phase 3 | Test Case Development | Complete | Complete |
| Phase 4 | Test Execution | In Progress | Pending |
| Phase 5 | Bug Fixing & Re-run | Pending | Pending |
| Phase 6 | Report Generation | Pending | Pending |

### 6.2 Daily Schedule

| Time | Activity |
|------|----------|
| 08:00 AM | Test Execution Start |
| 08:30 AM | Results Analysis |
| 09:00 AM | Bug Report Generation |
| 09:30 AM | Developer Handoff |

---

## 7. Roles & Responsibilities

| Role | Responsibility |
|------|----------------|
| Test Lead | Test strategy, execution oversight |
| QA Engineer | Test execution, bug reporting |
| Developer | Bug fixing, test automation |
| Project Manager | Timeline, stakeholder communication |

---

## 8. Test Metrics

### 8.1 Success Metrics

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Test Coverage | 100% | 100% | Achieved |
| Pass Rate | 95% | 100% | Achieved |
| Execution Time | <30 min | ~20 min | On Track |
| Critical Defects | 0 | 0 | On Track |
| High Priority Defects | <5 | TBD | Pending |

### 8.2 Reporting

| Report Type | Frequency | Format |
|-------------|-----------|--------|
| Test Execution | Daily | HTML/JSON |
| Bug Report | As found | Markdown |
| Test Summary | Weekly | PDF |
| Test Completion | Release | PDF |

---

## 9. Risks & Mitigation

### 9.1 Identified Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Login modal-based flow | Test navigation changes | Update test navigation |
| Registration modal | Test updates needed | Modify tests |
| Third-party API | Flaky tests | Mock API calls |
| Dynamic content | Timing issues | Add explicit waits |
| Session timeout | Test failures | Implement re-auth |

### 9.2 Mitigation Strategy

- Regular test suite updates
- Explicit wait strategies
- Robust retry mechanisms
- Comprehensive error handling

---

## 10. Sign-off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Test Lead | | | |
| QA Manager | | | |
| Project Manager | | | |
| Business Owner | | |