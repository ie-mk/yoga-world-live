import React, { useEffect, useState } from 'react';
import { ContainerBase } from '../../../../foundation';
import Button from '../../../../foundation/button/Button';
import Styled from './LearningPathData.styles';
import Table from '../../table/Table';
import AddLearningPath from './addNew/NewLearningPath';
import { connect } from 'react-redux';
import { resourceActions } from '../../../../../store/actions';
import SpinnerLarge from '../../../../foundation/spinner/SpinnerLarge';

const LearningPathData = ({ dispatch, loading, learningPaths }) => {
  const columnHeaders = ['S.No', 'Learning Path', 'Image', 'Actions'];

  useEffect(() => {
    dispatch(resourceActions.fetchLearningPaths.request());
  }, []);

  const handleDelete = id => {
    if (confirm('Are you sure you want to delete?')) {
      dispatch(resourceActions.deleteLearningPath.request(id));
    }
  };

  const [newAdd, setNewAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [ediTableLearningPathId, setEdiTableLearningPathId] = useState(null);

  return (
    <ContainerBase>
      {loading ? <SpinnerLarge /> : null}
      <Table columnHeaders={columnHeaders}>
        {Object.keys(learningPaths).map((id, idx) => {
          const rowData = learningPaths[id];
          if (!rowData) return null;

          return (
            <Table.Tr key={id}>
              <Table.Td>{idx + 1}</Table.Td>
              <Table.Td>{rowData.title}</Table.Td>
              <Table.Td>
                <img src="/svg/noun_link.svg" />
              </Table.Td>
              <Table.Td>
                <Button
                  margin="22px"
                  width="100px"
                  height="48px"
                  type="action"
                  fontSize="20px"
                  borderRadius="sm"
                  onClick={() => {
                    setEdit(true);
                    setEdiTableLearningPathId(id);
                  }}
                >
                  Edit
                </Button>
                <Button
                  width="100px"
                  height="48px"
                  type="action"
                  fontSize="20px"
                  borderRadius="sm"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </Button>
              </Table.Td>
            </Table.Tr>
          );
        })}
      </Table>
      <Styled.ButtonWrapper>
        <Button
          type="primary"
          width="200px"
          borderRadius="sm"
          height="45px"
          size="sm"
          onClick={() => setNewAdd(true)}
        >
          <i className="fa fa-plus" aria-hidden="true" />
          ADD NEW
        </Button>
      </Styled.ButtonWrapper>

      {(newAdd || edit) && (
        <AddLearningPath
          editTask={edit}
          setEdit={setEdit}
          setNewAdd={setNewAdd}
          ediTableLearningPathId={ediTableLearningPathId}
        />
      )}
    </ContainerBase>
  );
};

const mapStateToProps = state => ({
  learningPaths: state.learningPaths.data,
  loading: state.learningPaths.loading,
});

export default connect(mapStateToProps)(LearningPathData);
