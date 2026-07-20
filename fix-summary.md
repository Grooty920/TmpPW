# Xiaoyang Prince Blog - Fix Summary

## Core Issue: Subpages ERR_FAILED

### Symptom
- Homepage / works, but /blog, /tools, /about, /search return ERR_FAILED
- Build succeeds, all files exist in dist/
- Pages load briefly then break

### Root Cause
Service Worker v4 pre-caching with cache.addAll() failed on Cloudflare Pages. SW activated via skipWaiting() with empty cache, causing page load failures.

### Fix
SW v5: Network-first strategy, no pre-caching.

## Other Fixes
- Layout.astro: Fixed duplicate theme-toggle ID
- index.astro: Removed extra closing div tags
- about.astro: Use profile.json instead of hardcoded data
- Deleted twikoo-vercel/ and cf-comment-worker/ directories
- admin/config.yml: branch master -> main
- package.json: Removed unused shuimo-ui dependency
- Added public/_headers for Cloudflare Pages cache config

## Files Modified
- public/sw.js, public/_headers, src/layouts/Layout.astro, src/pages/index.astro, src/pages/about.astro, public/admin/config.yml, package.json