import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from '../pages/NotFound';
import Index from '../pages/Index';
import Profile from '../pages/Profile';
import RouteGuard from './RouteGuard';

const CustomRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Index />} />
                    <Route 
                        path="/profile"
                        element={
                            <RouteGuard>
                                <Profile />
                            </RouteGuard>
                        }
                    />
                    <Route element={NotFound} />
                </Routes>
            </Router>
        </>
    );
};

export default CustomRouter;