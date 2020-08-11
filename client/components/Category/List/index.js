import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { 
  Root,
  Title,
  Table,
  Thead,
  Tbody,
  TableRow,
  TableHead,
  TableDoc,
  PlusIcon,
  ActionGroup,
} from './style';
import { listCategoriesByPage, removeCategory } from '../../../utils/api-helpers/category';
import TrashModal from '../../Modal/TrashModal';
import TableNavigator from '../../Table/TableNavigator';
import { useHistory } from 'react-router';
import EditIcon from '../../icons/EditIcon';
import { Link } from 'react-router-dom';

export default function index() {
  const [values, setValues] = useState({
    page: 1,
    pages: 1,
    categories: [],
    reload: false,
    loading: false,
    succeed: false,
    error: '',
  });
  const history = useHistory();
  const user = useSelector(state => state.user.data);

  const fetchData = async (signal, page) => {
  
    const apiResult = await listCategoriesByPage(signal, page);
    if (apiResult.ok && apiResult.status == 200)
      setValues({ ...values,
        loaing: false, succeed: true,
        pages: apiResult.data.data.pages,
        categories: apiResult.data.data.docs,
        error: '',
        reload: true,
      });
    else 
      setValues({
        ...values,
        loading: false,
        succeed: false,
        error: 'مشکل در دریافت اطلاعات این صفحه',
      });
  }

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    setValues({ ...values, loading: true, succeed: false, error: '' })
    fetchData(signal, values.page);
    return function cleanUp() {
      abortController.abort();
    }
  }, [values.page, values.reload]);

  // PageNavigator triggers
  const nextPage = () => {
    if (values.page == values.pages) {
      return;
    } else 
      setValues({...values, loading: false, error: '', page: values.page + 1 })
  };
  const prevPage = () => {
    if (values.page==1) {
      return;
    } else
      setValues({...values, loading: false, error: '', page: values.page - 1 })
  };
  const switchToPage = (page) => () => {
    setValues({...values, page});
  }

  // Delete handler trigger for TrashModal
  const handleCategoryRemove = (catId) => async () => {
    const signal = new AbortController().signal;
    await removeCategory(user._id, catId);
    await fetchData(signal, values.page);
  }

  return (
    <Root>
      <Title>لیست دسته بندی</Title>
      <Table>
        <Thead>
          <TableRow className="table_head">
            <TableHead>نام دسته بندی</TableHead>
            <TableHead>تاریخ ایجاد</TableHead>
            <TableHead>تاریخ آپدیت</TableHead>
            <TableHead>حذف | ویرایش</TableHead>
          </TableRow>
        </Thead>
        <Tbody>
          {
            values.error.length > 0 &&
            <div>{values.error}</div>
          }
          {values.categories.map((category) => {
            return (
              <TableRow key={category._id}>
                <TableDoc>{category.name}</TableDoc>
                <TableDoc>{category.created.slice(0,11)}</TableDoc>
                <TableDoc>{category.updated && category.updated.slice(0,11) || '-'}</TableDoc>
                <TableDoc>
                  <ActionGroup>
                    <TrashModal 
                      removeTrigger={handleCategoryRemove(category._id)}
                    />
                    <Link to={`/dashbord/categories/edit/${category._id}`} >
                      <EditIcon />
                    </Link>
                  </ActionGroup>
                </TableDoc>
              </TableRow>
            )
          })}
        </Tbody>
      </Table>
      <TableNavigator
        nextPageTrigger={nextPage}
        prevPageTrigger={prevPage}
        page={values.page}
        pages={values.pages}
        switchToPageTrigger={switchToPage}
      />
      <PlusIcon onClick={() => history.push('/dashbord/categories/create')}>
        +
      </PlusIcon>
    </Root>
  )
}
