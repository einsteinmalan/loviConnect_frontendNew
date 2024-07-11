// utils/securityMiddleware.ts
import { Middleware } from '@reduxjs/toolkit';

export const securityMiddleware: Middleware = store => next => action => {
  // Add security checks
  return next(action);
};
