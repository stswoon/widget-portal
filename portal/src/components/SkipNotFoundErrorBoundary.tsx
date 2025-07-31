"use client";

import React, { Component } from "react";

interface Props {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export default class SkipNotFoundErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // console.error("getDerivedStateFromError::error=", error);
    if (error?.message === "NEXT_HTTP_ERROR_FALLBACK;404") {
      return { hasError: false };
    }
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    // console.log("componentDidCatch::Error caught by Error Boundary:", error, errorInfo);
    console.error("componentDidCatch::Error caught by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
