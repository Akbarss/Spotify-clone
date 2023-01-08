import Button from '@mui/material/Button';
import './App.css'
import React, { lazy, Suspense } from 'react';

const renderLoader = () => <p>Loading</p>;

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    render() {
        if (this.state.hasError) {
            return <p>Loading failed! Please reload.</p>;
        }

        return this.props.children;
    }
}


function App() {
  return (
    <>
          <Button variant="contained">Contained</Button>
    </>
  )
}

export default App
