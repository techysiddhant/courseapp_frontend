import { configureStore } from '@reduxjs/toolkit';
import { profileReducer, subscriptionReducer, userReducer } from './reducers/userReducer';
import { courseReducer } from './reducers/courseReducer';
import { adminReducer } from './reducers/adminReducer';
import { otherReducer } from './reducers/otherReducer';
const store = configureStore({
    reducer: {
        // Add your reducers here
        user: userReducer,
        profile: profileReducer,
        course: courseReducer,
        subscription: subscriptionReducer,
        admin: adminReducer,
        other: otherReducer,
    }
});

export default store;
//test server URL
// export const server = "https://courseappbackend-production.up.railway.app";
export const server = "https://wandering-scarf-ray.cyclic.app/api/v1";
// export const server = "http://localhost:4000/api/v1";