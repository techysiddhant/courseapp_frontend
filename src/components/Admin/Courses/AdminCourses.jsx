import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCourses,
  getCourseLectures,
} from '../../../redux/actions/course';
import {
  addLecture,
  deleteCourse,
  deleteLecture,
} from '../../../redux/actions/admin';
import { toast } from 'react-hot-toast';
const AdminCourses = () => {
  const [courseId, setCourseId] = useState('');
  const [courseTitle, setCourseTitle] = useState('');
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useDispatch();

  const { courses, lectures } = useSelector(state => state.course);
  const { loading, error, message } = useSelector(state => state.admin);
  const courseDetailsHandler = (courseId, title) => {
    dispatch(getCourseLectures(courseId));

    onOpen();
    setCourseId(courseId);
    setCourseTitle(title);
  };
  const deleteButtonHandler = courseId => {
    dispatch(deleteCourse(courseId));
    // console.log(courseId)
  };
  const deleteLectureButtonHandler = async (courseId, lectureId) => {
    await dispatch(deleteLecture(courseId, lectureId));
    dispatch(getCourseLectures(courseId));
    // console.log(courseId,lectureId);
  };
  const addLectureHandler = async (e, courseId, title, description, video) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', video);
    await dispatch(addLecture(courseId, formData));
    dispatch(getCourseLectures(courseId));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    dispatch(getAllCourses());
  }, [dispatch, error, message]);
  return (
    <Grid
      css={{ cursor: `url(${cursor}), default` }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '8']} overflowX={'auto'}>
        <Heading
          textTransform={'uppercase'}
          my="16"
          textAlign={['center', 'left']}
        >
          All Courses
        </Heading>
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'}>
            <TableCaption>All available courses in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creater</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map(item => (
                <Row
                  item={item}
                  key={item._id}
                  loading={loading}
                  deleteButtonHandler={deleteButtonHandler}
                  courseDetailsHandler={courseDetailsHandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModal
          loading={loading}
          isOpen={isOpen}
          onClose={onClose}
          lectures={lectures}
          deleteLectureButtonHandler={deleteLectureButtonHandler}
          addLectureHandler={addLectureHandler}
          id={courseId}
          courseTitle={courseTitle}
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default AdminCourses;
function Row({ item, courseDetailsHandler, deleteButtonHandler, loading }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            isLoading={loading}
            onClick={() => courseDetailsHandler(item._id, item.title)}
            variant={'outline'}
            color={'purple.500'}
          >
            View Lectures
          </Button>
          <Button
            color={'purple.600'}
            isLoading={loading}
            onClick={() => deleteButtonHandler(item._id)}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
