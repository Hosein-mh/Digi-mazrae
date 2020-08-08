import React, { useState, useEffect, useRef } from 'react'
import { Root, Title, Form, Error, FileInput, SubmitButton, Container } from './style';
import Input from '../../Input';
import SimpleReactValidator from 'simple-react-validator';
import CameraIcon from '../../icons/Camera.icon';
import { useSelector } from 'react-redux';
import Loader from '../../Loader';
import { useHistory } from 'react-router';

export default function index() {
  const simpleValidator = useRef(new SimpleReactValidator({
    messages: {
      required: 'این فیلد نمی تواند خالی بماند.',
    },
    element: (message) => <Error>{message}</Error>,
  }));

  const initialState = {
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
  }, [values])

  const handleInputChange = (name) => e => {
    switch (name) {
      case 'uploadFile':
        setValues({ ...values, "photo": e.target.files[0] });
        break;
      
      default:
        setValues({ ...values, [name]: e.target.value });
    }
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
      method: 'POST',
      body: categoryData,
    }
    const url = `/api/categories/${userId}`;

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
    <Container>
    <Root>
      <Title>ایجاد دسته بندی جدید</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          id="category_name"
          type="text" required
          value={values.name}
          onChange={handleInputChange('name')}
          onBlur={simpleValidator.current.showMessageFor('category_name')}
          holder="نام دسته بندی جدید"
          validation={simpleValidator.current.message('category_name', values.name, 'required')}
        />
        <Input
          id="description"
          type="text" required
          value={values.description}
          onChange={handleInputChange('description')}
          onBlur={simpleValidator.current.showMessageFor('description')}
          holder="توضیحات دسته بندی جدید"
          validation={simpleValidator.current.message('description', values.description, 'required')}
        />
        <input
          id="file_upload"
          type="file"
          style={{display: "none"}}
          onChange={handleInputChange('uploadFile')}
        />
        <FileInput htmlFor="file_upload">
          <span style={{marginLeft: 10}}>
            {values.photo.name || "بارگذاری تصویر"}
          </span>
          <CameraIcon/>
        </FileInput>
        {
          values.error.length > 0 &&
          <Error>{values.error}</Error>
        }
        <SubmitButton type="submit">افزودن دسته بندی</SubmitButton>
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
          succeedMessage = { 'دسته بندی جدید با موفقیت ایجاد شد' }
          failureMessage = { values.error }
          afterSucceedTrigger = {() => history.push('/dashbord/categories')}
        />
      }
    </Root>
    </Container>
  )
}
