import React from 'react';
import CenteredFlexContainer from './foundation/CenteredFlexContainer';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <CenteredFlexContainer marginTop="200px">
          <h1 className="error-message">Something went wrong.</h1>
        </CenteredFlexContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
