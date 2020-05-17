import React from 'react';
import PageContent from '../components/foundation/PageContent';
import ExpandableContainer from '../components/foundation/expandableContainer';
import Button from '../components/foundation/button/Button';

const StoryBook = () => (
  <PageContent>
    <p>Welcome to Story Book </p>
    <ExpandableContainer title="Buttons" isCollapsed={false}>
      <Button type="primary" size="lg">
        Primary
      </Button>
    </ExpandableContainer>
  </PageContent>
);

export default StoryBook;
