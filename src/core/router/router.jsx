import {createBrowserRouter, Navigate} from "react-router-dom";
import {lazy} from "react";
import Root from "../../layout/Root.jsx";

const BasicLayout = lazy(() => import('../../layout/BasicLayout.jsx'))
const HomeContainer = lazy(() => import('../../pages/home/containers/HomeContainer.jsx'))

const UnregisteredJobOfferContainer = lazy(() => import('../../pages/job_offers/containers/JobOfferDetailsContainer.jsx'));
const CreateJobOffer = lazy(() => import('../../pages/job_offers/pages/CreateJobOffer.jsx'));
const JobListContainer = lazy(() => import('../../pages/job_offers/containers/JobOfferListContainer.jsx'));

const ProfileContainer = lazy(() => import('../../pages/profile/containers/ProfileContainer.jsx'))
const ProfileDetails = lazy(() => import('../../pages/profile/pages/ProfileDetails.jsx'))
const CreateProfile = lazy(() => import('../../pages/profile/pages/CreateProfile.jsx'))

const SecurityContainer = lazy(() => import('../../pages/security/containers/SecurityContainer.jsx'))
const LoginContainer = lazy(() => import('../../pages/security/containers/LoginContainer.jsx'))
const SignUpContainer = lazy(() => import('../../pages/security/containers/SignUpContainer.jsx'))

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="elrincondelvago"/>,
    },
    {
        path: 'elrincondelvago',
        element: <Root/>,
        children: [
            {
                path: '',
                element: <BasicLayout/>,
                children: [
                    {
                        path: '',
                        index: true,
                        element: <HomeContainer/>
                    },
                    {
                        path: 'ofertas',
                        children: [
                            {
                                path: ':id',
                                element: <UnregisteredJobOfferContainer/>,
                            },
                            {
                                path: 'crear',
                                element: <CreateJobOffer/>
                            }
                        ]
                    },
                    {
                        path: 'perfiles',
                        element: <ProfileContainer/>,
                        children: [
                            {
                                path: ':id',
                                children: [
                                    {
                                        path: '',
                                        element: <ProfileDetails/>
                                    }, {
                                        path: 'job_list',
                                        element: <JobListContainer/>
                                    }
                                ]
                            },
                            {
                                path: 'crear',
                                element: <CreateProfile/>
                            }
                        ]
                    }
                ]
            },
            {
                path: 'seguridad',
                element: <SecurityContainer/>,
                children: [
                    {
                        path: '',
                        element: <LoginContainer/>
                    },
                    {
                        path: 'acceso',
                        element: <LoginContainer/>
                    },
                    {
                        path: 'registro',
                        element: <SignUpContainer/>
                    }
                ]
            }
        ]
    }

], {basename: 'https://twistedmetaly.github.io/'})