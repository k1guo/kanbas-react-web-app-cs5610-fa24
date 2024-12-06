import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const axiosWithCredentials = axios.create({ withCredentials: true });
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const createCourse = async (course: any) => {
 const { data } = await axiosWithCredentials.post(COURSES_API, course);
 return data;
};


export const createModuleForCourse = async (courseId: string, module: any) => {
    const response = await axiosWithCredentials.post(
        `${COURSES_API}/${courseId}/modules`,
        module
    );
    return response.data;
};

export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    const response = await axios.post(
        `${COURSES_API}/${courseId}/assignments`,
        assignment
    );
    return response.data;
};

export const fetchAllEnrollments = async () => {
    const { data } = await axios.get(`${REMOTE_SERVER}/api/enrollments`);
    return data;
  };

export const fetchAllCourses = async () => {
    const { data } = await axiosWithCredentials.get(COURSES_API);
    return data;
};

// export const findUsersForCourse = async (courseId: any) => {
//     const response = await axios.get(`${COURSES_API}/${courseId}/users`);
//     return response.data;
//    };
   export const findUsersForCourse = async (courseId: any) => {
    try {
      const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/users`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching users for course ${courseId}:`, error);
      throw error;
    }
  };
   
export const deleteCourse = async (id: string) => {
    const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
    return data;
};
export const updateCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
    return data;
};

export const findModulesForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials
        .get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};

export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axios
        .get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};

