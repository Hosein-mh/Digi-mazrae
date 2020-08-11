import React, { useState, useEffect, useRef } from 'react'
import { Root, Title, Form, Error, FormInput, FileInput, SubmitButton, Container, PhotoView } from './style';
import Input from '../../Input';
import SimpleReactValidator from 'simple-react-validator';
import CameraIcon from '../../icons/Camera.icon';
import { useSelector } from 'react-redux';
import Loader from '../../Loader';
import { useHistory } from 'react-router';
import { getCategory } from '../../../utils/api-helpers/category';
import TextEditor from '../../TextEditor';

export default function index({ match }) {
  const simpleValidator = useRef(new SimpleReactValidator({
    messages: {
      required: 'این فیلد نمی تواند خالی بماند.',
    },
    element: (message) => <Error>{message}</Error>,
  }));

  const initialState = {
    _id: '',
    name: '',
    description: '',
    photo: {
      name: 'بارگذاری تصویر'
    },
    loading: false,
    succeed: false,
    error: '',
  }
  const history = useHistory();

  const [values, setValues] = useState(initialState);

  const userState = useSelector(state => state.user);

  useEffect(() => {
    const fetchData = async () => {
      let resp = await getCategory(userState.data._id, match.params.categoryId);
      if (resp && resp.ok && resp.status == 200) {
        const { category } = resp.data;
        const { _id, name, description, photo } = category;
        setValues({ ...values, _id, name, description, photo });
      }
    };
    fetchData();
  }, [])

  const handleInputChange = (name) => e => {
    switch (name) {
      case 'uploadFile':
        setValues({ ...values, "photo": e.target.files[0] });
        break;
      
      default:
        setValues({ ...values, [name]: e.target.value });
    }
  };
  const handleTextEditorChange = (event, editor) => {
    const data = editor.getData();
    setValues({ ...values, description: data });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let categoryData = new FormData();

    categoryData.append('name', values.name);
    categoryData.append('description', values.description);
    categoryData.append('photo', values.photo);

    // loading
    setValues({ ...values, loading: true, suceed: false, error: '', });

    const { _id: userId , admin } = userState.data;
    
    // api-fetch category create:
    const config = {
      method: 'PUT',
      body: categoryData,
    }
    const url = `/api/categories/${userId}/${values._id}`;

    // just admin can fetch this data:
    if (userId && admin) {
      let resp = await fetch(url, { ...config });
      let response = await resp.json();

      if (resp.ok && resp.status == 200) {
        setValues({ ...values, loading: false, succeed: true, error: '' });
      } else if (response.error) {
        setValues({ ...values, loading: false, succeed: false, error: response.error });
      } else {
        setValues({ ...values, loading: false, succeed: false, error: 'مشکلی در دریافت اطلاعات' });
      }
    } else {
      setValues({ ...values, loading: false, succeed: false, error: 'شما اجازه دسترسی به این درخواست را ندارید'});
    }
  }

  return (
    <Container id="container">
    <Root id="root">
      <Title>ویرایش دسته بندی</Title>
      <PhotoView src={"/" + values.photo} alt="categor photo" />
      <Form onSubmit={handleSubmit}>
        <FormInput>
          <FileInput htmlFor="file_upload">
            <span style={{marginLeft: 10}}>
              {values.photo.name || "تغییر تصویر"}
            </span>
            <CameraIcon/>
          </FileInput>
        </FormInput>
        <FormInput>
          <Input
            id="category_name"
            type="text" required
            value={values.name}
            onChange={handleInputChange('name')}
            onBlur={simpleValidator.current.showMessageFor('category_name')}
            holder="نام دسته بندی"
            validation={simpleValidator.current.message('category_name', values.name, 'required')}
          />
        </FormInput>
        <TextEditor 
          data={values.description}
          onBlur={handleTextEditorChange}
        />
        <input
          id="file_upload"
          type="file"
          style={{display: "none"}}
          onChange={handleInputChange('uploadFile')}
        />
        {
          values.error.length > 0 &&
          <Error>{values.error}</Error>
        }
        <SubmitButton type="submit">ویرایش</SubmitButton>
      </Form>
      {
         values.loading &&
         <Loader loading={true} completed={values.succeed} error={values.error.length > 0}
          succeedMessage = { 'لطفا منتظر بمانید ...' }
          failureMessage = { values.error }
        />
      }
      {
         values.succeed &&
         <Loader loading={false} completed={true} error={values.error.length > 0}
          succeedMessage = { 'دسته بندی با موفقیت ویرایش شد' }
          failureMessage = { values.error }
          afterSucceedTrigger = {() => history.push('/dashbord/categories')}
        />
      }
    </Root>
    </Container>
  )
}
