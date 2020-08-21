import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import SimpleReactValidator from 'simple-react-validator';
import { listAllCategories } from '../../../utils/api-helpers/category';
import { 
  Error,
  Root, 
  Container, 
  Title,
  Row,
  RowChild,
  CategorySelection,
  SelectContainter,
  Label,
  FormInput,
  SubmitButton,
  FileInput,
  Option,
} from './style';
import Input from '../../Input';
import TextEditor from '../../TextEditor';
import CameraIcon from '../../icons/Camera.icon';
import Loader from '../../Loader';

export default function CreateForm() {
  const simpleValidator = useRef(new SimpleReactValidator({
    messages: {
      required: 'این فیلد نمی تواند خالی بماند.',
    },
    element: (message) => <Error>{message}</Error>,
  }));

  const initialState = {
    name: '',
    price: 0,
    tank: 0,
    categories: [],
    category: '',
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

  const fetchCategories = async () => {
    setValues({ ...values, loading: true });
    const apiResult = await listAllCategories();
    if (apiResult.ok && apiResult.status == 200)
      setValues({ ...values, categories: apiResult.data.data.docs, loading: false });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleInputChange = (name) => e => {
    switch (name) {
      case 'uploadFile':
        setValues({ ...values, "photo": e.target.files[0] });
        break;
      
      default:
        setValues({ ...values, [name]: e.target.value });
    };
  };

  const handleTextEditorChange = (event, editor) => {
    const data = editor.getData();
    setValues({ ...values, description: data });
  };

  const handleSubmit = async () => {
    let productData = new FormData();

    productData.append('name', values.name);
    productData.append('description', values.description);
    productData.append('photo', values.photo);
    productData.append('price', values.price);
    productData.append('tank', values.tank);
    productData.append('category', values.category);

    // loading
    setValues({ ...values, loading: true, suceed: false, error: '', });

    const { _id: userId , admin } = userState.data;
    
    // api-fetch category create:
    const config = {
      method: 'POST',
      body: productData,
    }
    const url = `/api/products/${userId}`;

    
    // just admin can fetch this data:
    if (userId && admin && values.category.length > 0) {
      let resp = await fetch(url, { ...config });
      let response = await resp.json();
      
      if (resp.ok && resp.status == 200) {
        setValues({ ...values, loading: false, succeed: true, error: '' });
      } else if (response.error) {
        setValues({ ...values, loading: false, succeed: false, error: response.error });
      } else {
        setValues({ ...values, loading: false, succeed: false, error: 'مشکلی در دریافت اطلاعات' });
      };
    } else {
      setValues({ ...values, loading: false, succeed: false, error: 'شما اجازه دسترسی به این درخواست را ندارید'});
    };
    if(values.category == "") {
      setValues({ ...values, loading: false, succeed: false, error: "لطفا یک کتگوری انتخاب کنید" });
    };
  };

  return (
    <Container>
    <Root>
      <Title>محصول جدید</Title>
      <Row>
        <RowChild>
          <Input 
            id="product_name"
            type="text" required
            value={values.name}
            onChange={handleInputChange('name')}
            holder="نام"
          />
        </RowChild>
        <RowChild>
          <Input 
            id="price"
            type="number" required
            value={values.price}
            onChange={handleInputChange('price')}
            holder="قیمت (تومان)"
          />
        </RowChild>
      </Row>
      <Row>
        <RowChild>
          <SelectContainter>
            <CategorySelection 
              name="category"
              id="category-select"
              onChange={handleInputChange('category')}
              value={values.category}
            >
              <Option value="">انتخاب کتگوری</Option>
            {
              values.categories.map(
                category => <Option key={category._id} value={category._id}>{category.name}</Option>
              )
            }
            </CategorySelection>
          </SelectContainter>
        </RowChild>
        <RowChild>
          <Input
            type="number"
            holder="موجودی"
            value={values.tank}
            onChange={handleInputChange('tank')}
          />
        </RowChild>
      </Row>
      <Row>
        <FormInput>
          <Label htmlFor="product-description">توضیحات محصول</Label>
          <TextEditor 
            id='product-description'
            data={values.description}
            onChange={handleTextEditorChange}
          />
        </FormInput>
      </Row>
      {
        values.error.length > 0 &&
        <Row>
          <Error>{values.error}</Error>
        </Row>
      }
      <Row>
        <RowChild className="lastRow">
          <input type="file"onChange={handleInputChange('uploadFile')} id="file_upload" style={{display: 'none'}} />
          <FileInput htmlFor="file_upload" style={{marginLeft: 10}}>
            <span style={{marginLeft: 10}}>
              {values.photo.name || "بارگذاری تصویر"}
            </span>
            <CameraIcon/>
          </FileInput>
          <SubmitButton onClick={handleSubmit}>دخیره</SubmitButton>
        </RowChild>
      </Row>
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
          succeedMessage = { 'محصول جدید با موفقیت اضافه شد' }
          failureMessage = { values.error }
          afterSucceedTrigger = {() => history.push('/dashbord/products')}
        />
      }
    </Root>
    </Container>
  );
}
