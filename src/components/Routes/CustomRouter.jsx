import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from '../../pages/NotFound';
import Index from '../../pages/Index';
import Profile from '../../pages/Profile';
import EditProfileForm from '../Profile/EditProfileForm';
import RouteGuard from './RouteGuard';
import Upload from '../../pages/Upload';
import Post from '../../pages/Post';

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
                    <Route 
                        path="/profile/edit"
                        element={
                            <RouteGuard>
                                <EditProfileForm />
                            </RouteGuard>
                        }
                    />
                    <Route 
                        path="/upload"
                        element={
                            <RouteGuard>
                                <Upload />
                            </RouteGuard>
                        }
                    />
                    <Route 
                        path="/post"
                        element={
                            <RouteGuard>
                                <Post />
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