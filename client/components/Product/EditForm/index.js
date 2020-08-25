import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import SimpleReactValidator from 'simple-react-validator';
import { getProduct, updateProduct, updateProductPhoto } from '../../../utils/api-helpers/product';
import { 
  Error,
  Root, 
  Container, 
  Title,
  Row,
  RowChild,
  Label,
  FormInput,
  SubmitButton,
  Photo,
} from './style';
import Input from '../../Input';
import TextEditor from '../../TextEditor';
import PHotoUploader from '../../PhotoUploader';
import PhotoGalleryEdit from './PhotoGalleryEdit';
import Loader from '../../Loader';
import CategorySelect from './CategorySelect';

export default function EditForm({ match }) {
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
    category: '',
    description: '',
    photo: {
      name: 'بارگذاری تصویر'
    },
    loading: false,
    succeed: false,
    error: '',
    fetchLoaded: false,
  }
  const history = useHistory();

  const [values, setValues] = useState(initialState);
  const [photoLoading, setPhotoLoading] = useState(false);

  const userState = useSelector(state => state.user);

  const { productId } = match.params;

  const fetchProduct = async () => {
    const apiResult = await getProduct(productId);
    if (apiResult.ok && apiResult.status == 200) {
      const { name, price, category, photo, tank, description } = apiResult.data.product;
      setValues({
        ...values,
        name,
        price,
        category,
        photo,
        tank,
        description,
        fetchLoaded: true,
      });
    };
    return apiResult;
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

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

  const photoUplodeTrigger = async (e) => {
    setPhotoLoading(true);

    const { _id: userId } = userState.data;

    let photoData = new FormData();
    photoData.append('photo', e.target.files[0]);

    const photoFetchResp = await updateProductPhoto(userId, productId, photoData);

    if (photoFetchResp.ok && photoFetchResp.status == 200) {
      setValues({ ...values, photo: photoFetchResp.data.data });
      setPhotoLoading(false);
    }
  }

  const handleSubmit = async () => {
    let productData = {
      name: values.name,
      price: values.price,
      category: values.category,
      tank: values.tank,
      description: values.description,
    };

    // loading
    setValues({ ...values, loading: true, suceed: false, error: '', });

    const { _id: userId , admin } = userState.data;
    
    // just admin can fetch this data:
    if (userId && admin && values.category.length > 0) {
      let resp = await updateProduct(userId, productId, productData);
      
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
    (values.fetchLoaded) ? 
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
          <CategorySelect
            productCategory={values.category}
            inputChangeTrigger={handleInputChange}
          />
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
        <RowChild>
          <FormInput>
            <Label htmlFor="product-description">توضیحات محصول</Label>
            <TextEditor 
              id='product-description'
              data={values.description}
              onChange={handleTextEditorChange}
            />
          </FormInput>
        </RowChild>
      </Row>
      {
        values.error.length > 0 &&
        <Row>
          <Error>{values.error}</Error>
        </Row>
      }
      <Row>
        <RowChild>
          <FormInput className="photoRow">
            <Label>تصویر اصلی</Label>
            <Photo>
              {
                photoLoading ? 
                <Loader loading={photoLoading} /> :
                <PHotoUploader
                  hidePlus
                  photoSrc={values.photo}
                  changeTrigger={photoUplodeTrigger}
                /> 
              }
            </Photo>
          </FormInput>
          <FormInput>
            <Label>گالری تصاویر</Label>
            <PhotoGalleryEdit productId={productId} />
          </FormInput>
        </RowChild>
      </Row>
      <Row>
        <SubmitButton onClick={handleSubmit}>دخیره</SubmitButton>
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
          succeedMessage = { 'محصول با موفقیت ویرایش شد' }
          failureMessage = { values.error }
          afterSucceedTrigger = {() => history.push('/dashbord/products')}
        />
      }
    </Root>
    </Container> : 
    <Loader loading={!values.fetchLoaded} />
  );
}
